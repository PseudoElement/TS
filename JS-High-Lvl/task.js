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
function findSame(arr1, arr2) {
      const filter = (arr) =>
            arr.filter((el, index) => arr.indexOf(el) !== index);
      const repeatedArr1 = filter(arr1);
      const repeatedArr2 = filter(arr2);
      return [
            ...new Set(
                  repeatedArr2.reduce((acc, el) => {
                        repeatedArr1.includes(el) && acc.push(el);
                        return acc;
                  }, [])
            ),
      ].sort((a, b) => a - b);
}
function multilpy(num) {
      let res = "     ";
      for (let k = 1; k <= num; k++) {
            k < 9 ? (res += k + "   ") : (res += k + "  ");
      }
      for (let i = 1; i <= num; i++) {
            res += `\n${i < 10 ? " " + i : i}`;
            for (let j = 1; j <= num; j++) {
                  res += `${
                        i * j >= 10
                              ? i * j >= 100
                                    ? " " + i * j
                                    : "  " + i * j
                              : "   " + i * j
                  }`;
            }
      }
      console.log(res);
}
