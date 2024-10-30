console.log(1);

setTimeout(() => {
   console.log('set time out'); 
}, 2000);

Promise.resolve().then(() => console.log('promise'))
console.log(2);