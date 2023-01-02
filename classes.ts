interface Options {
  name: string;
  age: number;
  nickName: string;
  pass: string;
}
class User {
  public name: string; //присваивается всем методам по умолчанию
  protected AGE: number; //можно обратиться только внутри класса и дочерних классов
  private nickName: string; // невозможно обратиться за пределами класса
  readonly password: string; //нельзя изменить, только для чтения
  constructor({ name, age, nickName, pass }: Options) {
    this.name = name;
    this.AGE = age;
    this.nickName = nickName;
    this.password = pass;
  }
  public getNickName(): string | number {
    return this.nickName;
  }
  public getAge(): number {
    return this.AGE;
  } //Чтение приватных полей
  //   public get userAge(){
  //     return this.AGE;
  //   }
  public changeAge(age: number) {
    ////Изменение приватных полей за пределами
    this.AGE = age; ///класса с помощью метода или сеттера
  }
  //   public set newAge(age:number){
  //     this.AGE = age;
  //   }
}
const sashka = new User({
  name: "Sahka",
  age: 100,
  nickName: "Borrow",
  pass: "12354325",
});
sashka.changeAge(20);
console.log(sashka);
////////////////СОКРАЩЕННЫЙ СИНТАКСИС
class User2 {
  constructor(public name: string, public age: number) {}
}
let userTest = new User2("Lebwa", 123);
console.log(userTest);
