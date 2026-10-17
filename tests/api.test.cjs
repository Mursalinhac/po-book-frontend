require('./load-source.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
delete process.env.NEXT_PUBLIC_API_URL;
const { ApiClient } = require('../src/lib/api.ts');
const catalog = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'fixtures/stingray.json'), 'utf8'));

test('browser requests use the same-origin API proxy', async (t) => {
  let requested;
  t.mock.method(global, 'fetch', async (url) => { requested = url; return Response.json(catalog); });
  await new ApiClient().getPriceList('stingray');
  assert.equal(requested, '/api/pricelist/stingray');
});
test('catalog normalization preserves every option, code and unique identity', async (t) => {
  t.mock.method(global, 'fetch', async () => Response.json(catalog));
  const data = await new ApiClient().getPriceList('stingray');
  for (const parent of ['factoryInstalled', 'dealerInstalled']) {
    for (const [key, group] of Object.entries(data[parent])) {
      assert.equal(group.key, key);
      assert.equal(group.options.length, catalog[parent][key].options.length);
      assert.equal(new Set(group.options.map(option => option.id)).size, group.options.length);
      group.options.forEach((option, index) => {
        assert.ok(option.id);
        assert.equal(option.code, String(catalog[parent][key].options[index].code ?? ''));
      });
    }
  }
});
test('failed requests return the API error message', async (t) => {
  t.mock.method(global, 'fetch', async () => Response.json({ error: 'Price list unavailable' }, { status: 404 }));
  await assert.rejects(new ApiClient().getPriceList('zr1'), /Price list unavailable/);
});
test('malformed success payload does not become a zero-dollar order', async (t) => {
  t.mock.method(global, 'fetch', async () => Response.json({ message: 'wrong payload' }));
  await assert.rejects(new ApiClient().getPriceList('stingray'), /Invalid price list/);
});
