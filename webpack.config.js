const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/pages/main/js/index'),
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'pages/[name]/js/index.js',
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  module: {
    rules: [
      // {
      //   test: /\.js|ts$/,
      //   exclude: /node_modules/,
      //   use: 'ts-loader',
      // },
      {
        test: /\.js|ts$/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.css$/i,
        use: ['css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/pages/main/index.html'),
      filename: './pages/main/index.html',
      inject: false,
    }),
    new CopyPlugin({
      patterns: [
        { from: './src/assets/', to: './assets/' },
        { from: './src/pages/main/css/styles.min.css', to: './pages/main/css/' },
      ],
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
      },
    }),
    new EslingPlugin({ extensions: 'ts' }),
  ],
};
