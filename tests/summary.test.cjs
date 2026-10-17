require('./load-source.cjs');
const {test} = require('node:test');
const assert = require('node:assert/strict');
const React = require('react');
const {renderToStaticMarkup} = require('react-dom/server');
const Summary = require('../src/components/OrderSummary.tsx').default;
test('summary asks for trim selection before presenting a complete order total', () => {
  const html = renderToStaticMarkup(React.createElement(Summary, {order:{},onReview:()=>{}}));
  assert.match(html,/Choose a model trim/);
  assert.doesNotMatch(html,/\$0\.00/);
});
test('summary displays actual subtotal, tax, total and selection count', () => {
  const group={key:'model',title:'Model',selectType:'single',options:[],selected:{id:'model-0',code:'1LT',title:'Stingray Coupe',price:68300}};
  const html=renderToStaticMarkup(React.createElement(Summary,{order:{factoryInstalled:{model:group},price:{subTotal:68300,tax:4524.88,total:72824.88,taxPercentage:6.625}},onReview:()=>{}}));
  for(const value of ['68,300.00','4,524.88','72,824.88','1 selection']) assert.ok(html.includes(value),value);
});
