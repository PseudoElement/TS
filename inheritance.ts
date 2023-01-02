type User3constructor = {
  name?: string;
  age: number;
  phone: string;
};
class User3 {
  private nickName: string = "vodolaz";
  static secret: number = 12345; // can't call in object-instance of class
  name: string;
  age: number;
  phone: string;
  constructor({ name, age, phone }: User3constructor) {
    this.name = name;
    this.age = age;
    this.phone = phone;
  }
}
class Sintol extends User3 {
  name: string = "Sintol";
  constructor(obj: User3constructor) {
    super(obj);
  }
  getPassword() {
    return `${this.age}${this.name}${User3.secret}`;
  }
}

abstract class templateUser {//СОздавать экземпляры можно только от наследуемых классов от абстрактного класса
  constructor(public name: string, public age: number) {}
  sayName(): void {//поле определено
    console.log(this.name);
  }
  abstract sayAge():number;//метод необходимо определить в инстэнсе
}
class Userok extends templateUser{
    constructor(name: string, age: number){
        super(name, age);
    }
    sayAge(): number {
        return this.age;
    }
}
const userok = new Userok('ALEX', 22);
console.log(userok);