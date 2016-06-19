global.RS = require('RS');
var req = require.context('./', true, /Spec\.js$/);
req.keys().forEach(req);
