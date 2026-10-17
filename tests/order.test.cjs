const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
require('./load-source.cjs');
const { updateOptionSelection, selectedOptions } = require('../src/lib/order.ts');

test('selecting the same multi option twice charges only once and does not mutate the old order', () => {
  const option = { id: 'paint-0', code: '', title: 'Paint protection', price: 250 };
  const group = { key: 'paint', title: 'Paint', selectType: 'multi', options: [option], selected: {} };
  const before = { factoryInstalled: { paint: group }, price: { subTotal: 1000, taxPercentage: 6.625, tax: 66.25, total: 1066.25 } };
  const once = updateOptionSelection(before, 'factoryInstalled', group, option, true);
  const twice = updateOptionSelection(once, 'factoryInstalled', group, option, true);
  assert.equal(once.price.subTotal, 1250);
  assert.equal(twice.price.subTotal, 1250);
  assert.equal(twice.price.tax, 82.81);
  assert.equal(before.price.subTotal, 1000);
  assert.deepEqual(before.factoryInstalled.paint.selected, {});
  const removed = updateOptionSelection(twice, 'factoryInstalled', group, option, false);
  assert.equal(removed.price.subTotal, 1000);
  assert.equal(twice.factoryInstalled.paint.selected['paint-0'], option);
});

test('replacing trim options with the same manufacturer code charges the selected row only', () => {
  const options = [
    { id: 'model-0', code: '1YH07', title: '1LZ', price: 100000 },
    { id: 'model-1', code: '1YH07', title: '2LZ', price: 108900 },
  ];
  const group = { key: 'model', title: 'Model', selectType: 'single', options, selected: {} };
  const first = updateOptionSelection({ factoryInstalled: { model: group }, price: { subTotal: 0, taxPercentage: 6.625 } }, 'factoryInstalled', group, options[0], true);
  const next = updateOptionSelection(first, 'factoryInstalled', group, options[1], true);
  assert.equal(next.price.subTotal, 108900);
  assert.equal(next.factoryInstalled.model.selected.title, '2LZ');
  assert.equal(selectedOptions(next.factoryInstalled.model).length, 1);
});

test('catalog options without manufacturer codes remain selectable using their row identifiers', () => {
  const options = [{ id: 'interior-0', code: '', title: 'Jet black', price: 0 }, { id: 'interior-1', code: '', title: 'Natural', price: 495 }];
  const group = { key: 'interior', title: 'Interior', selectType: 'multi', options, selected: {} };
  const first = updateOptionSelection({ dealerInstalled: { interior: group }, price: { subTotal: 0 } }, 'dealerInstalled', group, options[0], true);
  const next = updateOptionSelection(first, 'dealerInstalled', group, options[1], true);
  assert.equal(selectedOptions(next.dealerInstalled.interior).length, 2);
  assert.equal(next.price.subTotal, 495);
});

const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const { ApiClient } = require('../src/lib/api.ts');
const FactoryInstalled = require('../src/components/FactoryInstalled.tsx').default;
const DealerInstalled = require('../src/components/DealerInstalled.tsx').default;

for (const model of ['stingray', 'z06', 'eray']) {
  test(`${model} renders every normalized catalog option before and after selection`, async (t) => {
    const catalog = JSON.parse(fs.readFileSync(require('node:path').resolve(__dirname, `fixtures/${model}.json`), 'utf8'));
    t.mock.method(global, 'fetch', async () => Response.json(catalog));
    const normalized = await new ApiClient().getPriceList(model);
    let order = normalized;
    for (const [parentKey, Component] of [['factoryInstalled', FactoryInstalled], ['dealerInstalled', DealerInstalled]]) {
      const expected = Object.values(catalog[parentKey]).reduce((sum, group) => sum + group.options.length, 0);
      let markup = renderToStaticMarkup(React.createElement(Component, { options: order[parentKey], onChange: () => {} }));
      assert.equal((markup.match(/<input /g) || []).length, expected);
      assert.doesNotMatch(markup, /NaN/);
      for (const group of Object.values(order[parentKey])) {
        order = updateOptionSelection(order, parentKey, group, group.options[0], true);
      }
      markup = renderToStaticMarkup(React.createElement(Component, { options: order[parentKey], onChange: () => {} }));
      assert.equal((markup.match(/checked=""/g) || []).length, Object.keys(order[parentKey]).length);
      assert.ok(Number.isFinite(order.price.total));
      const ids = Array.from(markup.matchAll(/id="([^"]+)"/g), match => match[1]);
      assert.equal(ids.length, new Set(ids).size);
    }
  });
}

test('option labels preserve catalog cents in displayed prices', () => {
  const OrderOption = require('../src/components/OrderOption.tsx').default;
  const group = { key: 'option', title: 'Option', selectType: 'single', options: [{ id: 'option-0', code: 'ABC', title: 'Catalog option', price: 797.45 }], selected: {} };
  const markup = renderToStaticMarkup(React.createElement(OrderOption, { orderOption: group, parentKey: 'factoryInstalled', onChange: () => {} }));
  assert.match(markup, /\$797\.45/);
});
