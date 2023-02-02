// const arr = [];
// function getUniqueIndex() {
//   let value = Math.round(Math.random() * 10);
//   if (!arr.includes(value)) {
//     arr.push(value);
//     return value;
//   }
//   getUniqueIndex();
// }
// getUniqueIndex();
// for(let key in arr){
//     console.log('KEY',key)
//     console.log("Value", arr[key]);
// }
// const fib = (n) => {
//   let prev = 0,
//     next = 1;
//   for (let i = 0; i < n; i++) {
//     let temp = next;
//     next = prev + next;
//     prev = temp;
//   }
//   return prev;
// };
// fib(50);
// console.log(typeof Number('asdw'))

function getCities(arr) {
      return arr.join(", ") + ".";
}

function round(num) {
      let rest = num % 5;
      return rest < 2.5 ? num - rest : num + 5 - rest;
}

function getComputers(num) {
      const arr = num.toString().split("");
      const secondDecade = [11, 12, 13, 14, 15, 16, 17, 18, 19];
      const ovEnd = [0, 5, 6, 7, 8, 9];
      const aEnd = [2, 3, 4];
      const lastChar = +arr[arr.length - 1];

      if (secondDecade.includes(num) || ovEnd.includes(lastChar)) {
            return `${num} компьютеров`;
      }
      if (aEnd.includes(lastChar)) {
            return `${num} компьютера`;
      }
      if (lastChar === 1) {
            return `${num} компьютер`;
      }
}

function isSimple(num) {
      for (let i = 2; i < num; i++) {
            if (num % i === 0) return false;
      }
      return true;
}
isSimple(10);
function findSame(arr1, arr2) {
      const filter = (arr) =>
            arr.filter((el, index) => arr.indexOf(el) !== index);
      const repeatedArr1 = filter(arr1);
      const repeatedArr2 = filter(arr2);
      return [
            ...new Set(
                  repeatedArr1.reduce((acc, el) => {
                        repeatedArr2.includes(el) && acc.push(el);
                        return acc;
                  }, [])
            ),
      ];
}

const l_1_9 = Array.from({ length: 6 }, (_, i) => ++i),
      multX = (f) =>
            l_1_9.reduce((t, x) => {
                  t[x.toString(10)] = x * f;
                  return t;
            }, {});
console.table(
      l_1_9.reduce((e, n) => {
            e[n.toString(10)] = multX(n);
            return e;
      }, {})
);
