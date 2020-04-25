const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

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
    //单入口：使用与SPA
    main: "./src/js/index.js",
    //多入口：有一个入口最终输出就有一个bundle
    // main: "./src/js/index.js",
    // test: "./src/js/test.js",
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
  ],
  //可以自动将node_modules中代码单独打包一个chunk作为最终输出
  //自动分析多入口chunk中公用文件，如果有会打包单独的chunk.有最小文件限制
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },

  mode: "development",

  output: {
    //[name]: 取文件名
    filename: "js/[name].[contenthash:10].js",
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
