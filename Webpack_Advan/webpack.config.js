const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserWebpackPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: "./src/js/index.js",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: resolve(__dirname, "src"),
        enforce: "pre",
        loader: "babel-loader",
        options: {}
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        oneOf: []
      }
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html"
    })
  ],

  optimization: {
    splitChunks: {
      chunks: "all"
    },
    //将当前模块的记录其他模块的hash单独打包为一个文件 runtime
    //解决：修改a文件导致b文件的contenthash变化
    runtimeChunk: {
      name: (entrypoint) => `runtime-${entrypoint.name}`
    },
    //配置生产环境的压缩方案: js和css
    minimizer: [
      new TerserWebpackPlugin({
        //开启缓存
        cache: true,
        //开启多进程打包
        parallel: true,
        //启动sourceMap
        sourceMap: true
      })
    ]
  },

  devtool: "eval-source-map",

  output: {
    filename: "js/[name].[contenthash:10].js",
    path: resolve(__dirname, "build"),
    // publicPath: resolve(__dirname, "build/"),//通常在production的时候用
    chunkFilename: "js/[name].[contenthash:10].js"
  },

  mode: "production"
};
