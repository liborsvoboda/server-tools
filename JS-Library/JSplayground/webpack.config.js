const path = require('path');
const webpack = require('webpack');

module.exports = {
  target: 'node',
  entry: ["babel-polyfill", path.join(__dirname, 'app', 'index')] ,
  output: {
    filename: 'index.js',
    path: __dirname
  },
  externals: [
    {
      'isomorphic-fetch': {
        root: 'isomorphic-fetch',
        commonjs2: 'isomorphic-fetch',
        commonjs: 'isomorphic-fetch',
        amd: 'isomorphic-fetch'
      }
    }
  ],
  module: {
    rules: [{
      test: /.jsx?$/,
      include: [
        __dirname
      ],
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components'),
      ],
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new webpack.ProvidePlugin({
        'Promise': 'es6-promise', // Thanks Aaron (https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602)
        'fetch': 'isomorphic-fetch'
    }),
  ]
};