function add(a,b){
  return a + b;
}

// module.exports对应的值，当使用require引入的时候暴露出去的值
module.exports.add = add

