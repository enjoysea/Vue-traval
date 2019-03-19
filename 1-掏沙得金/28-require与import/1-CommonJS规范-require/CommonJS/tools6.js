// 这个模块是单独的作用域，定义的add方法不是全局的

function add(a,b){
	return a + b;
}
// module.exports对应的值，当使用require引入的时候暴露出去的值
//module.exports = 123

module.exports.add = add;
