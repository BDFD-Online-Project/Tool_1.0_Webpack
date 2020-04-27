const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConf = require("./webpack.base.conf");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const devServerPort = 10000;
const FirendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

module.exports = merge(baseWebpackConfig, {
  mode: "development",

  devtool: "cheap-module-eval-source-map",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(sc|sa)ss&/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
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
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: devServerPort,
    overlay: {
      warnings: false,
      error: true,
    },
    host: "localhost",
    open: true,
    noInfo: true,
    compress: true,
    progress: true,
    quiet: true,
    useLocalIp: false,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
        pathRewrite: { "^api": "/api" },
      },
    },
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "src/public/index.html",
      inject: "body",
      minify: {
        html5: true,
        collapseWhitespace: true,
      },
      title: "Webpack_Config_Template",
      hash: true,
      favicon: "src/assets/favicon-shield.icon",
      showErrors: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FirendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `You application is running here http://localhost:${devServerPort}`,
        ],
        notes: [
          `Some addtional notes to be displayed upon successful compilation`,
        ],
      },
      onError: function (serverity, errors) {},
      clearConsole: true,
      additionalFormatters: [],
      additionalTransformers: [],
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        // postcss: [
        //   require("postcss-plugin-px2rem")({
        //     rootvalue: 75,
        //     selectorBlackList: ["html"],
        //     mediaQuery: true,
        //     propBlackList: ["75px"],
        //   }),
        // ],
      },
    }),
  ],
});
