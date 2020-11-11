const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  stats: 'errors-only',
  infrastructureLogging: {
    level: 'error',
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    compress: true,
  },
  devtool: '#source-map',
  entry: {
    bundle: [
      'webpack-hot-middleware/client?__webpack_hmr&reload=true',
      './backend/index.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.yaml$/,
        use: [
          { loader: 'json-loader' },
          { loader: 'yaml-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './backend/index.html',
      filename: './index.html',
    }),
    // new webpack.NoEmitOnErrorsPlugin(),
  ],
  optimization: {
    noEmitOnErrors: true,
  },
  performance: {
    hints: false,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.css',
    ],
  },
}
