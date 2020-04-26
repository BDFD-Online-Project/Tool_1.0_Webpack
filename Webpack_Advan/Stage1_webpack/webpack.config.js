const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
        options: {},
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        oneOf: [],
      },
    ],
  },

  mode: "development",

  plugins: [new HtmlWebpackPlugin({})],

  resolve: {},

  output: {
    filename: "js/[name].js",
    path: resolve(__dirname, "build"),
    // publicPath: resolve(__dirname, "build/"),//通常在production的时候用
    chunkFilename: "js/[name]_chunk.js",
  },
  //library: 整个库向外暴露的变量名，可以通过libraryTarget指定
  //libraryTarget: 变量名添加到那个 比如 broswer就是'window',node.js就是'global',js的话就是'commonjs'
};
