/*
使用dll技术，对某些库（第三方）单独进行打包
比如jQuery, react, Vue
通常运行webpack时候会 默认执行 webpack.config.js文件
我们需要添加以下修改默认配置
webpack --config webpack.dll.js
*/

const { resolve } = require("path");
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require("webpack");

module.exports = {
  entry: {
    //最终打包生成的[name] --> jquery
    jquery: ["jQuery"],
  },
  output: {
    filename: "[name].js",
    path: resolve(__dirname, "dll"),
    library: "[name]_[hash]", //打包的库向外暴漏出去的内容叫什么名字
  },
  plugins: [
    new webpack.DllPlugin({
      name: "[name]_[hash]", //映射库的暴露内容名称
      path: resolve(__dirname, "dll/mainfest.json"), //输出文件路径
    }),
  ],
  mode: "production",
};
