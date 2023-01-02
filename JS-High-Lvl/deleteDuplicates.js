const array = ["alex", "misha", "misha", "Misha", "kuzya", "kuzya"];
const uniqueArray = [...new Set(array)]; //получить массив из сета
const uniqueArray2 = Array.from(new Set(array));
const unique3 = array.filter((el, index) => {
  el = el.toLowerCase();
  return index === array.indexOf(el);
});
///indexOf возвращает индекс первого совпадения
console.log(unique3);
const unique4 = array.reduce((result, el) => {
  // if(!result.includes(el)) return [...result, el];
  if (!result.includes(el)) result.push(el);
  return result;
}, []);
console.log(unique4);
