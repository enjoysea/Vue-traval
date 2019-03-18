const {add} = require('./tools.js'); // 引入模块，模块会暴露一个对象
// package.json文件中的main就是整个文件的入口文件
const Vue = require('vue'); // 查找到node_modules下的模块
const http = require('http');// 内置模块
const fs = require('fs');// 内置模块
const path = require('path');// 内置模块
//console.log(t);
console.log(http);
console.log(add(1, 2));