/*
Promise 函数
new Promise(function(resolve, reject){
 // 异步操作
})

三种状态
  pending 进行中
  resolved 成功了
  rejected 失败了

*/

let p = new Promise(function(resolve, reject){
  // 异步操作
  setTimeout(() => {
    console.log('我执行完了')
    // resolve(44444444)
    reject('失败了')
  }, 3000)
})

// 调用then方法，
/*
  p.then(resolvedFn, rejectFn)
  p这个promise对象的状态变成了resolved,触发resolvedFn,
  p这个promise对象的状态变成了rejected,rejectFn
*/

/*p.then((data) => {
 console.log('我执行了', data)
}, (e) => {
  console.log('我执行了', e)
})*/

p.then((data) => {
  console.log('我执行了', data)
})
.catch((e) => {
  console.log(e)
})

/*setInterval(()=>{
  console.log(p)
},1000)*/
