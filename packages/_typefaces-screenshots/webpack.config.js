const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader:'style-loader!css-loader'
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin(),
  ],

  devServer: {
    compress: true,
    port: 6789,
    historyApiFallback: true,
  },
  
}