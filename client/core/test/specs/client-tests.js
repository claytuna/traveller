global.RS = require('RS');
global.RTU = require('react-addons-test-utils');
global.React = require('react');
global.ReactDOM = require('react-dom');

RTU.render = (component) => {
  var $div = document.createElement("div");
  ReactDOM.render(component, $div);
  return $j($div);
};

RTU.click = (node)=>{
  RTU.Simulate.click(node[0]);
};

var req = require.context('./', true, /Spec\.js$/);
req.keys().forEach(req);
module.exports = req;

beforeEach(function() {
    RS.wipe();
});
