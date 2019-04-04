import {type} from './utils'
import Vue from 'vue'

export function add(a,b){
  console.log(type(a))
  return a + b;
}

export function isFunction(a,b){
  return a + b;
}