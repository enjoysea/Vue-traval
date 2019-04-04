// 暴露出一个对象
module.exports = {
  // 入口有三种写法
  // 写法一
  entry: './src/app.js',
  output: {
    // path必须是绝对路径
    // __dirname是当前文件所处的绝对路径
    path: __dirname + '/build',
    filename: 'build.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // 从后向前执行
        // 先将css读取出来，然后交给style处理
        use: ['style-loader','css-loader']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'img/[name].[hash:7].[ext]'
        }
      }
    ]
  }
}
