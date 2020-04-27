const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConf = require("./webpack.base.conf");
const path = require("path");
const DIST_PATH = path.resolve(__dirname, "../dist");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("bundle-analyzer-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(baseWebpackConf, {
  mode: "production",

  devtool: "cheap-module-source-map",

  output: {
    filename: "js/[name].[hash].js",
    path: DIST_PATH,
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(sc|sa)ss&/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "sass-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          { loader: "css-loader" },
          { loader: "less-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(svg|png|gif|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 10000,
              name: "[hash:10].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(["dist"], {
      root: path.resolve(__dirname, "../"),
      verbose: true,
    }),
    new HtmlWebpackPlugin({
      template: "src/public/index.html",
      title: "Webpack_Config_Template",
      favicon: "src/assets/favicon-shield.ico",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
      },
    }),
    new BundleAnalyzerPlugin({
      analyzerPort: 10000,
      openAnalyzer: true,
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[chunkhash:8].css",
      chunkFilename: "css/[id].[hash].css",
    }),
  ],
});
