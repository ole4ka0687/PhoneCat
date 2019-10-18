const path = require('path');

module.exports = {
  entry: './frontend/app.js',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      { 
      	test: /\.html/,
        loader: 'raw-loader'
      }
    ]
  },
  mode: 'development',

  watch: true,
  devtool: 'source-map',
};