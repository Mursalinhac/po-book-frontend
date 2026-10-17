const test = require('node:test');
const assert = require('node:assert/strict');
require('./load-source.cjs');
const { summarizeCatalog } = require('../src/lib/models.ts');

test('summarizeCatalog derives trims, body styles and minimum price', () => {
  const stingray = summarizeCatalog(require('./fixtures/stingray.json'));
  assert.equal(stingray.trims, 6);
  assert.deepEqual(stingray.bodyStyles, ['Coupe', 'Convertible']);
  assert.equal(stingray.minPrice, 68300);
  assert.equal(summarizeCatalog(require('./fixtures/eray.json')).minPrice, 106900);
  assert.equal(summarizeCatalog(require('./fixtures/z06.json')).minPrice, 112100);
  assert.equal(summarizeCatalog({}), null);
});
