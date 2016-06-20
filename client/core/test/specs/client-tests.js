global.RS = require('RS');
global.RTU = require('react-addons-test-utils');

var req = require.context('./', true, /Spec\.js$/);
req.keys().forEach(req);
module.exports = req;
