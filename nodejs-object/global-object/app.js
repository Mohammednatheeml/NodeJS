// console.log(global)

//!accesing the global variable
global.myglobal = "hello everyone";
// console.log(global.myglobal);

//? to check our  variable is truly global
// console.log("myglobal" in global);
// console.log("myglobalss" in global);

// console.log(__dirname);
// console.log(__filename);

//* using setinterval and getinterval
let count = 0;
const interval = setInterval(() => {
//   console.log("hello world");
  count++;
  if(count==5){
    clearInterval(interval)
  }

}, 1000);

setTimeout(()=>{
    // console.log("the message is displayed after 5sec")
},5000)
