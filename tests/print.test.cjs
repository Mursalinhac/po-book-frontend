require('./load-source.cjs');
const { test } = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const { renderToStaticMarkup } = require('react-dom/server');
const PrintPreview = require('../src/components/PrintPreview.tsx').default;
const PricePreview = require('../src/components/PricePreview.tsx').default;
const OptionPreview = require('../src/components/OptionPreview.js').default;
const order = {
  model: 'z06',
  customerInfo: { firstName: 'Mira Patel', address1: '24 Ocean Road', zipcode: '08401', number: '6095550118' },
  factoryInstalled: { model: { key: 'model', title: 'Select Model', selectType: 'single', options: [], selected: { id: 'model-0', code: '1LZ', title: 'Z06 Coupe 1LZ', price: 110000 } } },
  price: { subTotal: 110000, taxPercentage: 6.625, tax: 7287.5, total: 117287.5, amountOnDelivery: 117287.5 },
};
test('print includes entered customer fields and single-select vehicle', () => {
  const html = renderToStaticMarkup(React.createElement(PrintPreview, { order }));
  for (const value of ['Mira Patel', '24 Ocean Road', '08401', '6095550118', 'Z06 Coupe 1LZ']) assert.ok(html.includes(value), `Missing ${value}`);
});
test('print uses actual catalog subtotal, tax and delivery fields', () => {
  const html = renderToStaticMarkup(React.createElement(PrintPreview, { order }));
  assert.match(html, /\$110000\.00/);
  assert.match(html, /\$7287\.50/);
  assert.match(html, /\$117287\.50/);
});
test('on-screen summary shows subtotal, tax and total', () => {
  const html = renderToStaticMarkup(React.createElement('table', null, React.createElement('tbody', null, React.createElement(PricePreview, { price: order.price }))));
  for (const value of ['110,000.00', '7,287.50', '117,287.50']) assert.ok(html.includes(value), `Missing ${value}`);
});
test('option preview tolerates groups with no selection', () => {
  assert.doesNotThrow(() => renderToStaticMarkup(React.createElement(OptionPreview, { option: { title: 'Options', options: [] } })));
});
test('print includes recorded trade-in details without applying new pricing rules', () => {
  const html = renderToStaticMarkup(React.createElement(PrintPreview, { order: { ...order, tradeInfo: { year: 2020, make: 'Toyota', model: 'Supra', vin: 'TRADE123', tradeValue: 38000, balanceOwed: 10000 } } }));
  for (const value of ['Toyota', 'Supra', 'TRADE123', '38000.00', '10000.00']) assert.ok(html.includes(value), `Missing ${value}`);
});
test('print includes selected options even without a manufacturer code', () => {
  const html = renderToStaticMarkup(React.createElement(PrintPreview, { order: { ...order, dealerInstalled: { protection: { key: 'protection', title: 'Protection', selectType: 'multi', options: [], selected: { 'protection-0': { id: 'protection-0', code: '', title: 'Paint protection film', price: 900 } } } } } }));
  assert.ok(html.includes('Paint protection film'));
});
test('print derives dealer equipment total from actual selections', () => {
  const html = renderToStaticMarkup(React.createElement(PrintPreview, { order: { ...order, dealerInstalled: { guard: { key: 'guard', title: 'Guard', selectType: 'multi', options: [], selected: { guard: { code: '', title: 'Guard', price: 797.45 } } } } } }));
  assert.match(html, /Dealer Added Options:<\/td><td class="price-column">\$797\.45/);
  assert.ok(!html.includes('Destination Freight Charge'));
});
