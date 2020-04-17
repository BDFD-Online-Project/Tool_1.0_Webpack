const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //入口文件
  entry: './src/index.js',
  //输出
  output: {
    //输出文件名
    filename: 'build.js',
    //输出路径
    //__dirname，表示当前文件的目录的绝对路径
    path: resolve(__dirname, 'build'),
  },
  //loader 的配置
  module: {
    //详细loader配置
    //不同文件必须配置不同loader处理
    rules: [
      //匹配css file
      {
        //匹配哪些文件
        test: /\.css$/,
        //use中执行顺序从右到左或者从下到上依次执行
        use: [
          //创建style标签，将js种的样式资源插入进行，添加到head中生效
          'style-loader',
          //将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader',
        ],
      },
      //匹配less file
      {
        //匹配哪些文件
        test: /\.less$/,
        //use中执行顺序从右到左或者从下到上依次执行
        use: [
          //创建style标签，将js种的样式资源插入进行，添加到head中生效
          'style-loader',
          //将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader',
          //将less 文件编译成css文件需要less and less-loader
          'less-loader',
        ],
      },
    ],
  },
  //plugins 的配置
  plugins: [
    //详细的plugin的配置
    //html-webpack-plugin
    //功能:默认创建一个新的HTML，自动引入打包输出的所有资源(JS/CSS),否则会变成多次引入s
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
  // 模式
  mode: 'development', //开发模式
  // mode:'production'
};
