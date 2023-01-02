namespace Utils{//для инкапсуляции переменных
    export const secret: string = '1231234';
    export const PI:number = 3.14;
    export function getPass(name:string, age:number):void{
        console.log(name + age);
    }
    export const bool = <T>(data: T): boolean => !data;
}
Utils.getPass('Paul', 214);
const PI:number = 10;
console.log(PI);
console.log(Utils.PI)