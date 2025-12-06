async function wait() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return 10;
  }
  
  function f() {
    // shows 10 after 1 second
    wait().then(result => console.log(result)).catch(e=>{console.log(e)});
  }
  
  //f();

//   (async ()=>{
//     await new Promise(resolve => setTimeout(resolve,1000))
//     console.log('10');
//   })();

// function doubleAfter2Seconds(x) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(x * 2);
//       }, 2000);
//     });
//   }
  
//   async function addAsync(x) {
//     const a = await doubleAfter2Seconds(10);
//     const b = await doubleAfter2Seconds(20);
//     const c = await doubleAfter2Seconds(30);
//     console.log(x + a + b + c);
//   }

//   addAsync(10)

// utility function to cause delay
// and get random value
const delayAndGetRandom = (ms) => {
    return new Promise(resolve => setTimeout(
      () => {
        const val = Math.trunc(Math.random() * 100);
        resolve(val);
      }, ms
    ));
  };

  (async () => {
    const a = await 9;
    const b = await delayAndGetRandom(1000);
    const c = await 5;
    await delayAndGetRandom(1000);
    
    console.log(a + b * c);
  })()
