let time = (t, value) => {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(Math.random())
    }, t)
  })
}
/*
* async
* await
* */

// async await 结合 promise威力是最大的

// 异步函数，返回值是个promise对象

async function fn (){
  console.log(1)
  // 在await中直接拿结果
  var data1 = await time(1000)
  console.log(2, '结果为', data1)
  var data2 = await time(3000)
  console.log(3, '结果为', data2)
  var data3 = await time(5000)
  console.log(4, '结果为', data3)
}

console.log(fn())

/*time(1000)
time(2000)
time(500)*/
/*
function a(){
  console.log(1)
}

function b(){
  console.log(2)
  setTimeout(()=>{
    for(var i=0; i<1000;i++){
      console.log(1234)
    }
  }, 1000)
}

function c(){
  console.log(3)
}

a()
b()
c()*/
