const express = require('express');
const app = express();

app.use(function(req,res,next){
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080'); // * 所有的
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Credentials','true'); // 解决掉跨域的cookie 问题
  next()
})

app.get('/hello',(req, res)=>{
  console.log('有人来请求了')
  res.json({
    data: 'hello'
  })
})

app.listen(4000,()=>{
  console.log('服务启动成功');
})
