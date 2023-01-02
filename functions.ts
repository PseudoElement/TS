type AgeType = number | string;
const createPassword = (name: string, age?: AgeType): string => {
  // ? means optional argument
  console.log(`${name}${age}`);
  return `${name}${age}`;
};
createPassword("Ilyas", 19);
function createSkills(name: string, ...skills: Array<string | number>): string {
  //... - rest operator - принимает множество аргументов
  return `${name} has such skills: ${skills.join("/")}`;
}
console.log(createSkills("Jack", "wash", "cook", "swim"));
const voidFunc = (arg: string): void => console.log(arg); //Void используется, когда функция ничего не возвращает

