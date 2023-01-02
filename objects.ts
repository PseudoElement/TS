let user: {name: string, age?: number} = {
    name: 'Igor',
}
type Child = Array<string | number>;
interface User {
  name: string | undefined;
  age: number;
  height?: number;
  isMarried?: boolean;
  children?: Array<Child>;
}
let user1 = {
  name: "Piotr",
  age: 22,
};
let user2 = {
  name: "Nick",
  age: 29,
  height: 170,
};
let user3 = {
  name: undefined,
  age: 30, 
  isMarried: true,
  children: [['Fedor', 8], ['Masha', 11]]
};
const users: Array<User> = [user1, user2, user3]
