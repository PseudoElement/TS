// let sum= function (...args1) {
//     let total =args1.reduce((total,num) => total + num,0)
//     return function(...args2) {
//       if(args2.length!== 0) {
//         let total2 = args2.reduce((total,num)=>total + num,0);
//         return sum(total,total2);
//     }
//     return total;
//   };
//  };
//  console.log(sum(2,3,4)(2,3)(1)())

function sum(num1) {
    return (num2) => {
        if(!num2) {
            return num1;///// для одного аргумента в каждой вызове
        }
        return sum(num1 + num2);
    }
}
console.log('Sum :', sum(1)(2)(3)(4)(20)(6)(7)(8)())