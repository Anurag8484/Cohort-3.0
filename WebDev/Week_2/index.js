// function doAsyncOp(resolve,reject) {
//   reject("Rejected by My");
// }


// const p = new Promise(doAsyncOp)

// function callback() {
//   console.log("done")
// }

// console.log(p)
// p.catch(callback)


// function setTimeoutPromisified(time1,time2) {

//   return new Promise((resolve,reject)=>{
    // setTimeout(resolve,time2)
//     setTimeout(reject,time1)
//   })
// }


// function callback() {
//   console.log("Time has passed " + p)
//   console.log(p);
// }

// function callback2() {
//   console.log("Time  Rejetced has passed");
//   console.log(p);

// }



// const p = setTimeoutPromisified(3000,3000.0000000000000000000000000000000000000000000000000000000000000000000000);
// console.log(p)
// p.then(callback).catch(callback2)
// console.log(p)



function setTimeoutPromisified(dur) {
  return new Promise( resolve => {
    setTimeout(resolve,dur)
  })
}


async function solve() {
  await setTimeoutPromisified(1000);
  console.log("HI")
  await setTimeoutPromisified(3000);
  console.log("Hello")
  await setTimeoutPromisified(5000);
  console.log("Hello There")
}

solve()
c = 0
for (i = 0; i<2100; i++) {
  c++
}
console.log("Calling from vim")
// setTimeoutPromisified(1000).then(function (){
//   console.log("Hi")
//   return setTimeoutPromisified(3000)
// }).then(function () {
//   console.log("hello")
//   return setTimeoutPromisified(5000);
// }).then(function () {
//   console.log("hello there")
// })

// p.then(callback)



