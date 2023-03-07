const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const EslingPlugin = require('eslint-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

let htmlPageNames = ['main', 'about'];
let multipleHtmlPlugins = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: path.resolve(__dirname, `./src/pages/${name}/index.html`),
    filename: `./pages/${name}/index.html`,
    inject: false,
  });
});
let multipleCopyPluginPatterns = htmlPageNames.map(name => {
  return { from: `./src/pages/${name}/css/styles.min.css`, to: `./pages/${name}/css/` };
});

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/pages/main/js/index.js'),
    about: path.resolve(__dirname, './src/pages/about/js/index.js'),
  },
  output: {
    path: path.join(__dirname, './dist/'),
    filename: 'pages/[name]/js/index.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  module: {
    rules: [
    ],
  },
  plugins: [
    ...multipleHtmlPlugins,
    new CopyPlugin({
      patterns: [
        { from: './src/assets/', to: './assets/' },
        ...multipleCopyPluginPatterns,
      ],
    }),
    new FileManagerPlugin({
      events: {
        onStart: {
          delete: ['dist'],
        },
      },
    }),
  ],
  watch: true,
};
