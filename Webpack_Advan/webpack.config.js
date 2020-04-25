const { resolve } = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // entry:入口起点，有3种方法
  // 1.string -> './scr/index.js' 打包形成一个chunk，输出一个bundle文件(单入口)
  // 此时chunk名称默认为main
  entry: "./src/index.js", // 2.array -> (俗称多入口)
  //所有入口最终只会形成一个chunk,输出出去，默认打包到第一个资源当中去，默认为main
  //一般来讲只有在HMR功能种让html让热更新生效
  // entry: ["./src/index.js", "./src/add.js"],
  //3object 对象形式(正统多入口)
  //此方式特点：有几个入口就对外输出几个chunk并生成几个对应文件,chunk名称是key
  //通常来说第一种和第三种使用情况比较多，第二种针对特殊情况
  // entry: {
  //   index: "./src/index.js",
  //   add: "./src/add.js"
  // },
  //特殊用法 结合第二种和第三种，实现多入口打包，且其中多个文件打包成一个chunk
  // entry: {
  //   index: ["./src/index.js", "./src/count.js"],
  //   add: "./src/add.js"
  // },

  module: {
    rules: [
      //loader的配置
      {
        test: /\.js$/,
        //排除node_modules下的js文件
        exclude: /node_modules/,
        //只检查src下的js文件
        include: resolve(__dirname, "src"),
        //优先执行
        enforce: "pre",
        //延后执行
        // enforce:'post',
        //单个loader用loader
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        //多个loader用use
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  plugins: [new HtmlWebpackPlugin({})],

  output: {
    //filename: 文件名字(可以指定名称+目录）
    //path: 输出文件目录(将来所有资源输出的公共目录)
    //publicPath: 所有资源引入的公共路径前缀-->路径的前面，一般使用于生产环境
    //chunkFilename: 非入口chunk的名称
    //library: 整个库向外暴露的变量名，可以通过libraryTarget指定
    //libraryTarget: 变量名添加到那个 比如 broswer就是'window',node.js就是'global',js的话就是'commonjs'
    filename: "js/[name].js",
    path: resolve(__dirname, "build"),
    publicPath: "/",
    chunkFilename: "js/[name]_chunk.js", // library: "name", // libraryTarget: "window",
  },

  mode: "development",
};
