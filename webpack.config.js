const path = require('path');

module.exports = {
  entry: './scritps/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'my-first-webpack.bundle.js',
  },
};