global.React = require('react');
global.RS = require('RS');

var ReactDom = require('react-dom');
/*var Router = require('components/Router');*/
var App = require('components/App');

ReactDom.render( <App />, document.getElementById('app') );