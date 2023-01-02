type User = {
  name: string;
  age: number;
};
const user: User = {
  name: "asd",
  age: 123,
};
const object: MyOpt = {
  name: "Ivan",
  nickname: "Kindza",
  list: ["Some", 'asdas'],
  newProp: 'sdfsd'
};
interface MyOpt {
  name: string;
  readonly nickname: string; //нельзя изменять после создания объекта
  list: Array<string>;
  createSmth?(): number;
  [propName: string]: any;//для безконтрольного расширения объекта
}
interface additionalOpt{
  oneMoreProp: boolean;
}
class Test implements MyOpt, additionalOpt{//присвоение интерфейса классу
  oneMoreProp: boolean;                   //+можно наследоваться от нескольких интерфейсов
  name = 'MyName';
  nickname = 'ZUzu';
  list = ['asdas'];
  newProperty = 100;//в класс можно добавлять дополнительные свойства/методы,
  createSmth(){     //которых нет в интерфейсе
    return Number(Math.random().toFixed());
  }
 static addNewMethod():void{
    console.log('SALAM')
  }
}
Test.addNewMethod();