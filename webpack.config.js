const path = require('path');

const webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'imgcollage.js'
  },
  resolve: {
    fallback: {
      fs: path.resolve(__dirname, 'fallback/fs.js')
    }
  },
  // plugins: [
  //   new webpack.DefinePlugin({
  //     'process.browser': 'true'
  //   })
  // ],
  node: {
    global: false,
    __filename: false,
    __dirname: false,
  }
};