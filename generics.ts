const getter = (data: any): any => data;
const getter1 = <T>(data: T): T => data;
//= T is the same in data and returned value
function getter2<T>(data: T) {
  return data;
}
getter1('10').length;
class Person <T>{
    constructor(public name: T, public age: T){}
    public getPass(): string{
        return `Password111`
    }
}
const person = new Person('123', '1231')
const person1 = new Person(123, 1231)
class Man <T, K extends number>{//передаем разные типы аргументов, для К устанаваливаем строго number
    constructor(public height: T, public weight: K){}
    public get parameters(): string{
        return `${this.height}, ${this.weight}`;
    }
}
const me = new Man('179', 89)