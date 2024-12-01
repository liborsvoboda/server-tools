'use strict';
var rocambole = require('rocambole');
var stripDebugger = require('rocambole-strip-debugger');
var stripConsole = require('rocambole-strip-arbitrary');
var stripAlert = require('rocambole-strip-alert');

module.exports = function (src, id, whitelist) {
  return rocambole.moonwalk(src, function (node) {
    stripDebugger(node);
    stripConsole(node, id, whitelist);
    stripAlert(node);
  });
};
