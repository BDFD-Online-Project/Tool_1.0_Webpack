const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "development";

module.exports = {
  entry: "./src/js/index.js",
  output: {
    filename: "js/build.js",
    path: resolve(__dirname, "build"),
  },
  module: {
    rules: [
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
        use: [
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
        ],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: "../",
            },
          },
          "css-loader",
          "less-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [require("postcss-preset-env")()],
            },
          },
        ],
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

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/build.css",
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
  ],
  mode: "development",
};
