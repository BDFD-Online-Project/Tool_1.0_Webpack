const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');

process.env.NODE_ENV = 'production';

module.exports = {
  entry: './src/js/index.js',
  output: {
    filename: 'js/build.js',
    path: resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      /*
        js兼容性处理：babel-loader @babel-core @babel/preset-env
        1.基本js兼容性处理 => @babel/preset-env
        问题：只能转换基本语法，如promise不能转换
        2.全部js兼容性处理 => @bable/polyfill
        问题：我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了
        3.需要做兼容性处理就做：按需下载 => core-js
      */
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  //按需下载
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 3,
                  },
                  //兼容版本问题
                  targets: {
                    chrome: '60',
                    firefox: '50',
                    ie: '8',
                    safari: '10',
                    edge: '17',
                  },
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              ident: 'postcss',
              plugins: () => [require('postcss-preset-env')()],
            },
          },
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(jpg|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 3 * 1024,
          esModule: false,
          name: '[hash:10].[ext]',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        exclude: /\.(css|js|html|less|jpg|png|gif)$/,
        loader: 'file-loader',
        options: {
          name: '[hash:10].[ext]',
        },
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'css/build.css',
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
  ],
  mode: 'development',
};
