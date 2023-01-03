const logClass = (constructor: Function) => {
  console.log(constructor);//for classes
};
const logProp = (target: Object, propertyKey: string | symbol) => {
  console.log(propertyKey);//for props
};
const logMethod = (//decorator for methods/accessors
  target: Object,
  propertyKey: string | symbol,
  descriptor: PropertyDescriptor
) => {
  return descriptor;
};
@logClass
class Junior {
  @logProp
  someProp: string = "newProperty";
  constructor(public name: string, public age: number) {}
  @logMethod
  public getPass(): string {
    return `${this.name}${this.age}`;
  }
}
const junior = new Junior("Pavel", 222);
// logClass(Junior);
// logProp(junior, 'someProp')
