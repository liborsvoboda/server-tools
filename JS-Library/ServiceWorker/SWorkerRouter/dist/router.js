/*!
 * service-worker-router v1.7.5 by berstend
 * https://github.com/berstend/service-worker-router#readme
 * @license MIT
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var UrlPattern = _interopDefault(require('url-pattern'));

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var patternOpts = {
    segmentNameCharset: 'a-zA-Z0-9_-',
    segmentValueCharset: 'a-zA-Z0-9@.+-_'
};
var Router = /** @class */ (function () {
    function Router() {
        this.routes = [];
    }
    Router.prototype.all = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: '' }));
    };
    Router.prototype.get = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'GET' }));
    };
    Router.prototype.post = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'POST' }));
    };
    Router.prototype.put = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'PUT' }));
    };
    Router.prototype.patch = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'PATCH' }));
    };
    Router.prototype["delete"] = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'DELETE' }));
    };
    Router.prototype.head = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'HEAD' }));
    };
    Router.prototype.options = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        return this.addRoute(pattern, handler, __assign(__assign({}, options), { method: 'OPTIONS' }));
    };
    Router.prototype.addRoute = function (pattern, handler, options) {
        if (options === void 0) { options = {}; }
        if (!(pattern instanceof UrlPattern)) {
            pattern = new UrlPattern(pattern, patternOpts);
        }
        this.routes.push({ pattern: pattern, handler: handler, options: options });
        return this;
    };
    Router.prototype.match = function (url, method) {
        if (!(url instanceof URL)) {
            url = url.startsWith('/') ? new URL("http://domain" + url) : new URL(url);
        }
        for (var _i = 0, _a = this.routes; _i < _a.length; _i++) {
            var route = _a[_i];
            var pattern = route.pattern, options = route.options, handler = route.handler;
            if (options.method && options.method !== method)
                continue;
            var params = pattern.match(options.matchUrl ? url.href : url.pathname);
            if (params)
                return { params: params, handler: handler, url: url, method: method, route: route, ctx: this.ctx };
        }
        return null;
    };
    Router.prototype.matchRequest = function (request) {
        return this.match(request.url, request.method);
    };
    Router.prototype.matchEvent = function (event) {
        return this.matchRequest(event.request);
    };
    Router.prototype.handle = function (url, method) {
        var match = this.match(url, method);
        if (!match)
            return null;
        var context = __assign({}, match);
        var handlerPromise = match.handler(context);
        return { handlerPromise: handlerPromise, match: context };
    };
    Router.prototype.handleRequest = function (request) {
        var match = this.matchRequest(request);
        if (!match)
            return null;
        var context = __assign(__assign({}, match), { request: request });
        var handlerPromise = match.handler(context);
        return { handlerPromise: handlerPromise, match: context };
    };
    Router.prototype.handleEvent = function (event) {
        var request = event.request;
        var match = this.matchRequest(request);
        if (!match)
            return null;
        var context = __assign(__assign({}, match), { request: request, event: event });
        var handlerPromise = match.handler(context);
        event.respondWith(handlerPromise);
        return { handlerPromise: handlerPromise, match: context };
    };
    Router.prototype.clear = function () {
        this.routes.length = 0;
    };
    return Router;
}());

exports.UrlPattern = UrlPattern;
exports.Router = Router;
//# sourceMappingURL=router.js.map
