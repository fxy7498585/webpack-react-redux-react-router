const webpack = require('webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
  },

  devtool: 'source-map',

  resolve:{
    extensions:[".ts",'.tsx','.js','.json']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
      },
      {
        enforce:"pre",
        test:/\.js$/,
        loader:"source-map-loader"
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  plugins:[
    new HtmlWebpackPlugin({
      template:"./src/index.html",
      filename:"index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],

  devServer:{
    hot:true,
    contentBase:path.resolve(__dirname,'dist'),

    // 无论访问什么路径都会重定向到index.html
    historyApiFallback: {
      index: './index.html'
    }
  }

}