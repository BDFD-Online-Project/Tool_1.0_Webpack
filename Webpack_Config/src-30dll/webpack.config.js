const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const webpack = require("webpack");
const AddAssetHtmlWebpackPlugin = require("add-asset-html-webpack-plugin");

process.env.NODE_ENV = "development";

const commonCSSloader = [
  {
    loader: MiniCssExtractPlugin.loader,
    options: {
      publicPath: "../",
    },
  },
  "css-loader",
  {
    loader: "postcss-loader",
    options: {
      ident: "postcss",
      plugins: () => [require("postcss-preset-env")()],
    },
  },
  "less-loader",
];

module.exports = {
  entry: {
    main: "./src/js/index.js",
  },

  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
              {
                loader: "thread-loader",
                options: {
                  worker: 2,
                },
              },
              {
                loader: "babel-loader",
                options: {
                  presets: [
                    [
                      "@babel/preset-env",
                      {
                        useBuiltIns: "usage",
                        corejs: {
                          version: 3,
                        },
                        targets: {
                          chrome: "60",
                          firefox: "50",
                          ie: "8",
                          safari: "10",
                          edge: "17",
                        },
                      },
                    ],
                  ],
                  cacheDirectory: true,
                },
              },
              {
                loader: "eslint-loader",
                options: {
                  fix: true,
                },
              },
            ],
          },
          {
            test: /\.css$/,
            use: [...commonCSSloader],
          },
          {
            test: /\.less$/,
            use: [...commonCSSloader, "less-loader"],
          },
          {
            test: /\.(jpg|png|gif)$/,
            loader: "url-loader",
            options: {
              limit: 3 * 1024,
              esModule: false,
              name: "[hash:10].[ext]",
              outputPath: "images",
            },
          },
          {
            test: /\.html$/,
            loader: "html-loader",
          },
          {
            exclude: /\.(css|js|html|less|jpg|png|gif)$/,
            loader: "file-loader",
            options: {
              name: "[hash:10].[ext]",
              outputPath: "media",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].[contenthash:10].css",
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
    new WorkboxWebpackPlugin.GenerateSW({
      clientsClaim: true,
      skipWaiting: true,
    }),
    //告诉webpack那些库不参与打包,同时使用是的名称也得变
    new webpack.DllReferencePlugin({
      manifest: resolve(__dirname, "dll/mainfest.json"),
    }),
    //将某个文件打包输出出去，并在html中自动引入
    new AddAssetHtmlWebpackPlugin({
      filepath: resolve(__dirname, "dll/jquery.js"),
    }),
  ],

  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  mode: "production",

  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build"),
  },

  externals: {
    //忽略库名 --npm包名
    jquery: "jquery",
  },

  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true,
  },

  devtool: "eval-source-map",
};
