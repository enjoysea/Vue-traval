import {add} from './tools'
import Vue from 'vue'

// 将index.css也当成一个模块，在入口文件引入
import './style/index.css'

console.log(add(1,2))

console.log('我是app')

// document.body.style.background = 'red'

new Vue({
  el: "#app"
})