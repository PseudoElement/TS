let sum= function (...args1) {
    let acc1 =args1.reduce((acc,num) => acc + num,0)
    return function(...args2) {
      if(args2.length!== 0) {
        let acc2 = args2.reduce((acc,num)=>acc + num,0);
        return sum(acc1,acc2);
    }
    return acc1;
  };
 };
 console.log(sum(2,3,4)(2,3)(1)(22)())

// function sum(num1) {
//     return (num2) => {
//         if(!num2) {
//             return num1;///// для одного аргумента в каждой вызове
//         }
//         return sum(num1 + num2);
//     }
// }
// console.log('Sum :', sum(1)(2)(3)(4)(20)(6)(7)(8)())