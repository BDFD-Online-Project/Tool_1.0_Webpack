const { resolve } = require('path');

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
    rules: [
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
    ],
  },
  //plugins 的配置
  plugins: [
    //详细的plugin的配置
  ],
  // 模式
  mode: 'development', //开发模式
  // mode:'production'
};
