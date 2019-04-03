const express = require('express');
const app = express();
const proxy = require('http-proxy-middleware');//引入代理中间件
// const axios = require('axios')

// 参考：config/index.js
// 之后访问：http://localhost:4000/api/rank/list?json=true
const apiProxy = proxy('/api',
  {
    "target": 'http://m.kugou.com',
    "changeOrigin": true,
    "secure": false, // http协议，true是https协议
    "pathRewrite": {
      "^/api": ""
    },
    "Referer": "http://m.kugou.com/",
    "headers": { // 头部伪造成手机端的
      "User-Agent": "Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Mobile Safari/537.36"
    }
    
  }
);
// 以api开头的，都交给apiProxy这个函数来处理
app.use('/api/*' ,apiProxy)

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // * 所有的
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true'); // 解决掉跨域的cookie 问题
  next()
})

app.get('/',(req, res)=>{
  console.log('有人来请求了')
  res.sendfile(__dirname + '/index.html')
})

app.get('/hello',(req, res)=>{
  console.log('有人来请求了')
  res.json({
    data: 'hello'
  })
})

// http://localhost:4000/data
// https://www.cnblogs.com/MonaSong/p/6555342.html
app.get('/data',(req, res)=>{
  /*console.log('有人来请求了')
  axios('http://m.kugou.com/singer/info/192923?json=true').then(function(data){
    res.send({
      data: data
    })
  })*/
})

app.listen(4000,()=>{
  console.log('服务启动成功');
})
