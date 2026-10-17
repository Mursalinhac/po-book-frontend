const test = require('node:test');
const assert = require('node:assert/strict');
require('./load-source.cjs');
const { orderSteps, selectedTotal } = require('../src/lib/order.ts');

test('orderSteps tracks trim, customer gaps and review readiness', () => {
  const trim = { code: '1YC07', title: 'Corvette Stingray Coupe 1LT', price: 68300 };
  const paint = { code: 'GBA', title: 'Black', price: 500 };
  const empty = orderSteps({});
  assert.equal(empty.find((s) => s.id === 'trim').state, 'todo');
  assert.equal(empty.find((s) => s.id === 'review').state, 'todo');
  const order = {
    factoryInstalled: {
      model: { key: 'model', title: 'Select Model', selectType: 'single', options: [trim], selected: trim },
      paint: { key: 'paint', title: 'Paint', selectType: 'multi', options: [paint], selected: { 'paint-0': paint } },
    },
    customerInfo: { firstName: 'Mira Patel', stock: 'S1', salesperson: 'Dan', address1: '24 Ocean Road', city: 'Atlantic City', state: 'NJ', zipcode: '08401', number: '6095550118', email: 'm@example.com' },
  };
  const steps = orderSteps(order);
  assert.equal(steps.find((s) => s.id === 'trim').summary, trim.title);
  assert.equal(steps.find((s) => s.id === 'factory').summary, '1 option');
  assert.equal(steps.find((s) => s.id === 'trade').state, 'optional');
  assert.equal(steps.find((s) => s.id === 'review').state, 'done');
  assert.equal(selectedTotal(order.factoryInstalled, 'model'), 500);
  delete order.customerInfo.email;
  assert.deepEqual(orderSteps(order).find((s) => s.id === 'review').missing, ['Email']);
});
