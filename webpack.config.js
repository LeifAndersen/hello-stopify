const path = require('path');
  module.exports = {
    entry: './src/index.js',
    target: 'web',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
  node: {
    // Needed for stopify
    'fs': 'empty',
    'child_process': 'empty',
    'net': 'empty',
    'module': 'empty'
  },
   module: {
     rules: [
       {
         test: /\.css$/,
         use: [
           'style-loader',
           'css-loader',
         ],
       },
     ],
   },
  };
