const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

// 暴露出一个对象
module.exports = {
  // 入口有三种写法
  // 写法一
  // entry: './src/app.js',
  
  // 写法二：多入口文件
  entry: {
    app: './src/app.js',
    tools: './src/tools.js'
    // app1: './src/app.js'
    // app2: './src/app.js'
    // app3: './src/app.js'
  },
  output: {
    // path必须是绝对路径
    // __dirname是当前文件所处的绝对路径
    path: __dirname + '/build',
    // name就是app
    filename: '[name].[chunkhash:5].min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        
        // 如果是开发环境，交给style-loader，生产style标签，是不需要抽离的
        // 如果是生产环境，就不需要style-loader来处理了，抽离处理，打包即可
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
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
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'miaov.html',
      template: 'abc.html',
      inject: true,
      //minify: {
        //removeComments: true, //是否去除注释
        //collapseWhitespace: true,
        //removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
     // },
      // necessary to consistently work with multiple chunks via CommonsChunkPlugin
      chunksSortMode: 'dependency', // 按照依赖关系注入到模板中
      // chunks:['app']
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks(module) {
        // any required modules inside node_modules are extracted to vendor
        return (
          module.resource &&
          /\.js$/.test(module.resource) &&
          module.resource.indexOf(
            path.join(__dirname, '../node_modules')
          ) === 0
        )
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      minChunks: Infinity
    }),
    /*new HtmlWebpackPlugin({
      filename: 'ketang.html',
      template: 'abc.html',
      inject: true,
      chunksSortMode: 'dependency',
      chunks:['tools']
    }),*/
    // 压缩js
    /*new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          warnings: false
        }
      },
      sourceMap: false,
      parallel: true // 开启多线程去压，速度会比较快
    }),*/
    // 压缩css
    new OptimizeCSSPlugin(/*{
      cssProcessorOptions: false
        ? { safe: true, map: { inline: false } }
        : { safe: true }
    }*/),
    // new ExtractTextPlugin("/style/styles.css")
    new ExtractTextPlugin({
      filename: "/style/styles.css"
    })
  ]
}
