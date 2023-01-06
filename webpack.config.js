const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {

  return {
    entry: path.resolve(__dirname, './src/index.js'),
    output: {
      path: path.join(__dirname, '/build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.ts','.tsx','.js', '.jsx'],
    },
    mode: 'development',
    plugins: [
      new HtmlWebpackPlugin(({
        template: path.resolve(__dirname, 'index.html'),
      })),
      new Dotenv({
        path: `./.env.${env.stage}`,
      })
    ],
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules)/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.ts(x)?$/,
          loader: 'ts-loader',
          exclude: /(node_modules)/,
        },
        {
          test: /\.s?[ac]ss/i,
          exclude: /(node_modules)/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    devServer: {
      port:8080,
      historyApiFallback: true,
      hot: true,
    },
  }
};