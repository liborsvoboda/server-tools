/**
 * @fileoverview Extern definitions for https://www.npmjs.com/package/ws
 */

/**
 * @typedef {{server: !http.Server}}
 */
var ServerOptions;

/** @const */
var ws = {};

/**
 * @param {ServerOptions} options .
 * @constructor
 * @extends events.EventEmitter
 */
ws.Server = function(options) {};

/**
 * @constructor
 * @extends events.EventEmitter
 */
ws.WebSocket = function() {};

/**
 * @param {string} data
 * @param {function(Error)} callback
 */
ws.WebSocket.prototype.send = function(data, callback) {};

module.exports = ws;
