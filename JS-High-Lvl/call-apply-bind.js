this.name = "Saskha";
function THIS() {
  console.log(this);
}
const user = {
  name: "Sintol",
  age: 100,
  func: function (job, phone, rex) {///В скобках происходит деструктуризация массива на 
    console.log(this);/////////////////отдельные аргументы
    console.log(job);
    console.log(phone);
    console.log(rex);
  },
  func1: () => {
    console.log(this);
  },
  myFunc: (context) => {
    console.log(context);
  },
  getTHIS: THIS.bind(this),
  getThisWithoutBind: THIS,
};
// user.func.bind(window, "Microsoft", "Sintol")(); //Создает новую функцию,передает аргументом необходимый контекст,
/////////////////////////////////////////////////последующими аргументами аргументы или массив с аргументами в вызываемую функцию
// user.func.call(user, 'Microsoft', 'Sintol')//Вызывает функцию с переданными контекстом и аргументами
user.func.apply(user, ['Microsoft', 'Sintol', 'REX'])//Передается контекст и массив с аргументами, а не отдельные аргументы