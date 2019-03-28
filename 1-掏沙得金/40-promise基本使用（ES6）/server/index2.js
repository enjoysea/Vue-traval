/*setTimeout(()=>{
  console.log(1)
  setTimeout(()=>{
    console.log(2)
    setTimeout(()=>{
      console.log(3)
    }, 1000)
  }, 1000)
}, 1000)*/

let time = (t, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(Math.random())
    }, t)
  })
}

// then执行之后会返回一个promise对象，可以做链式调用
// then的成功函数中没有使用return，内部会返回一个新的promise对象
// 使用了return，就是return后面的promise对象

time(1000).then((data)=>{
  console.log('我拿到数据了', data)
  return time(2000)
}).then((data) => {
  console.log('我执行了', data)
  return time(3000)
}).then((data) => {
  console.log('我执行了', data)
}).then(() => {
  console.log('我执行了')
})
