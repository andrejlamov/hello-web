const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js', path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/, use: ['style-loader', 'css-loader']
      },
      {
        test: /\.js$/, exclude: ['/dist', '/node_modules'], use: ["babel-loader"]
      }
    ],
  },
  devServer: {
    contentBase: './dist'
  }
}
