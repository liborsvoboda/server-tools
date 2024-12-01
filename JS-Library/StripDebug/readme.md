# strip-debug-arbitrary

> Strip `console`, `alert`, and `debugger` statements from JavaScript code with whitelist

Useful for making sure you didn't leave any logging in production code.

Also available as [gulp](https://github.com/sindresorhus/gulp-strip-debug)/[grunt](https://github.com/sindresorhus/grunt-strip-debug)/[broccoli](https://github.com/sindresorhus/broccoli-strip-debug) plugins.


## Usage

```sh
$ npm install --save berstend/strip-debug-arbitrary

```

```js
var stripDebug = require('strip-debug-arbitrary');

stripDebug('function foo(){console.log("foo");alert("foo");debugger;}').toString();
//=> function foo(){void 0;void 0;}
```


### API

## stripDebug(input, id, whitelist)

Returns the modified [Esprima AST](http://esprima.org) which can be used to make additional modifications.

Call `.toString()` to get the stringified output.

To prevent any side-effects, `console.*`/`alert*` is replaced with `void 0` instead of being stripped.

### input

Type: `string`, `object`

Pass in a string of JavaScript code or a [Esprima compatible AST](http://esprima.org).


### id

Type: `string`

Optional: Pass the name of the statement to remove (e.g. "log"), if none is given "console" is being used.


### whitelist

Type: `array`

Optional: Pass an array of properties to exclude (e.g. ["warn", "error"])



## License

MIT © [Sindre Sorhus](http://sindresorhus.com) & berstend
