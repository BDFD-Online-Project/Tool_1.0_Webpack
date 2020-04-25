const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

/*
  缓存：
  babel 缓存
    cacheDirectory: true
  文件缓存
    hash: 每次构建会生成唯一hash值
    问题： 因为js和css同时使用一个hash值，如果重新打包会导致缓存失效
    chunkhash: 根据chunk生成hash，如果来源于同一个chunk，hash不变
    问题：js和css hash值还是一样，因为css在js中构建的，所以同属于一个chunk
    contenthash: 根据文件内容生成hash值，不同文件hash值一定不一样
*/

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
  entry: "./src/js/index.js",

  module: {
    rules: [
      {
        //一下loaader 只能匹配一个
        //不能有两个配置处理同一类型文件
        oneOf: [
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: [
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
                  //开启babel缓存
                  //第二次构建时，会读取之前的缓存
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
      filename: "./css/build.[contenthash:10].css",
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
  ],
  // mode: "development",
  output: {
    filename: "js/build.[contenthash:10].js",
    path: resolve(__dirname, "build"),
  },

  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true,
  },
  devtool: "eval-source-map",
};
