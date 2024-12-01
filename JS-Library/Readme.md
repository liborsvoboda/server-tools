# StyleToJs   

convert style naming for use in javasript   

````    

<script src="https://unpkg.com/style-to-js@latest/umd/style-to-js.min.js"></script>

<script>  
  window.StyleToJS(/* string */);
</script>  

````   

-------     

requirejs-playground
====================
### Notes
- `require.js` or AMD do not solve `window` pollution (although they support), they just provide a way to
    - load js files asynchronously (to prevent UI blocking at DOM initialization)
    - clear relationship between dependencies

### Advanced Concepts
- [shim](https://requirejs.org/docs/api.html#config-shim)
    - [requirejs/example-multipage-shim: Example RequireJS-based project that has multiple pages that share a common set of modules with shim config](https://github.com/requirejs/example-multipage-shim)
- [config-map](https://requirejs.org/docs/api.html#config-map)
- [CommonJS Conversion](https://requirejs.org/docs/commonjs.html#autoconversion)
    - [requirejs/r.js: Runs RequireJS in Node and Rhino, and used to run the RequireJS optimizer](https://github.com/requirejs/r.js)
    
### Reference projects
- [volojs/create-template: The sample single page app project template, uses RequireJS](https://github.com/volojs/create-template)
- [requirejs/example-jquery-cdn: Example project that uses jQuery and jQuery plugins wrapped as modules](https://github.com/requirejs/example-jquery-cdn)

-------

