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
      },
      { 
      	test: /\.hbs$/, 
      	loader: "handlebars-loader" 
      },
      {
	    test: /\.m?js$/,
	    exclude: /node_modules/,
	    use: {
	      loader: 'babel-loader',
	      options: {
	        presets: ['@babel/preset-env'],
	        plugins: ['@babel/plugin-transform-runtime']
	      }
	    }
	  }
    ]
  },
  mode: 'development',

  watch: true,
  devtool: 'source-map',
};