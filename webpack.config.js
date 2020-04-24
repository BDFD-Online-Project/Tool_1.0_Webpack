const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");

process.env.NODE_ENV = "development";

//复用loader
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

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/build.css",
    }),
    new OptimizeCssAssetsWebpackPlugin({}),
  ],
  // mode: "production",
  devServer: {
    contentBase: resolve(__dirname, "build"),
    compress: true,
    port: 3000,
    open: true,
  },
  /*
  [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
  source-map:
  显示错误代码准确信息和源代码的错误位置
  inline-source-map:只生成一个内联，出现在build.js中
  显示错误代码准确信息和源代码的错误位置
  eval-source-map:每个文件有一个单独内联，都在eval中
  显示错误代码准确信息和源代码的错误位置
  hidden-source-map:外部
  显示错误代码准确信息但不显示源代码位置
  nosource-source-map:外部
  显示错误代码准确信息但没有任何源代码信息
  cheap-source-map:外部
  显示错误代码准确信息和源代码的错误位置
  但是只精确到列
  cheap-module-source-map:外部
  显示错误代码准确信息和源代码的错误位置
  但是只精确到列，同时增加loader的source map加入其中
  */
  //开发环境：
  //速度快： eval>inline>cheap
  //调试友好： source-map<cheap-module<cheap
  //生产环境：
  //稳定：nosource-source-map 全部隐藏 /hidden-source-map 只隐藏原代码

  devtool: "eval-source-map",
};
