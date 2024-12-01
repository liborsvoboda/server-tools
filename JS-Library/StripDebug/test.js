'use strict';
var assert = require('assert');
var stripDebug = require('./');

it('should strip debugger statement', function () {
  assert.equal(stripDebug('function test(){debugger;}').toString(), 'function test(){}');
  assert.equal(stripDebug('"use strict";debugger;foo()').toString(), '"use strict";foo()');
});

it('should strip console statement', function () {
  assert.equal(stripDebug('function test(){console.log("foo");}').toString(), 'function test(){void 0;}');
  assert.equal(stripDebug('function test(){window.console.log("foo");}').toString(), 'function test(){void 0;}');
  assert.equal(stripDebug('"use strict";console.log("foo");foo()').toString(), '"use strict";void 0;foo()');
  assert.equal(stripDebug('if(console){console.log("foo", "bar");}').toString(), 'if(console){void 0;}');
  assert.equal(stripDebug('foo && console.log("foo");').toString(), 'foo && void 0;');
  assert.equal(stripDebug('if (foo) console.log("foo")\nnextLine();').toString(), 'if (foo) void 0\nnextLine();');
})

it('should strip console statement but leave .warn and .error intact', function () {
  var id = 'console';
  var whitelist = ['warn', 'error'];
  assert.equal(stripDebug('function test(){console.error("foo");}', id, whitelist), 'function test(){console.error("foo");}');
  assert.equal(stripDebug('function test(){window.console.warn("foo");}', id, whitelist), 'function test(){window.console.warn("foo");}');
  assert.equal(stripDebug('"use strict";console.info("foo");foo()', id, whitelist), '"use strict";void 0;foo()');
  assert.equal(stripDebug('if(console){console.log("foo", "bar");}', id, whitelist), 'if(console){void 0;}');
  assert.equal(stripDebug('foo && console.debug("foo");', id, whitelist), 'foo && void 0;');
  assert.equal(stripDebug('if (foo) console.log("foo")\nnextLine();', id, whitelist), 'if (foo) void 0\nnextLine();');
});

it('should strip log statement', function () {
  var id = 'log';
  var whitelist = [];
  assert.equal(stripDebug('function test(){log("foo");}', id, whitelist), 'function test(){log("foo");}');
  assert.equal(stripDebug('function test(){window.log.warn("foo");}', id, whitelist), 'function test(){void 0;}');
  assert.equal(stripDebug('"use strict";log.info("foo");foo()', id, whitelist), '"use strict";void 0;foo()');
  assert.equal(stripDebug('if(console){log.debug("foo", "bar");}', id, whitelist), 'if(console){void 0;}');
  assert.equal(stripDebug('foo && log.debug("foo");', id, whitelist), 'foo && void 0;');
  assert.equal(stripDebug('if (foo) log.trace("foo")\nnextLine();', id, whitelist), 'if (foo) void 0\nnextLine();');
});

it('should strip alert statement', function () {
  assert.equal(stripDebug('function test(){alert("foo");}').toString(), 'function test(){void 0;}');
  assert.equal(stripDebug('function test(){window.alert("foo");}').toString(), 'function test(){void 0;}');
  assert.equal(stripDebug('"use strict";alert("foo");foo()').toString(), '"use strict";void 0;foo()');
  assert.equal(stripDebug('if(alert){alert("foo", "bar");}').toString(), 'if(alert){void 0;}');
  assert.equal(stripDebug('foo && alert("foo");').toString(), 'foo && void 0;');
  assert.equal(stripDebug('if (foo) alert("foo")\nnextLine();').toString(), 'if (foo) void 0\nnextLine();');
});

it('should never strip away non-debugging code', function () {
  var t = 'var test = {\n    getReadSections: function(){\n        var readSections = window.localStorage.getItem(\'storyReadSections\') || \'[]\';\n        return JSON.parse(readSections);\n    }\n};';
  assert.equal(stripDebug(t).toString(), t);
});
