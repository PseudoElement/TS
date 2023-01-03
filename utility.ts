///readonly
interface Us {
  name: string;
}
const pupil: Readonly<Us> = {
  name: "w3er", //cant change
};
//required
interface Props {
  a?: number;
  b?: string;
}
const objk: Required<Props> = {
  a: 1234,
  b: "asxcz", //need to add all props from interface
};
//Record
interface PageInfo {
  title: string;
}
type PageName = "home" | "about" | "contact";
const newEl: Record<PageName, PageInfo> = {
  //Record<Keys, type>
  home: {
    title: "1st",
  },
  about: { title: "ABout me" },
  contact: { title: "bebri" },
};
//Pick, Omit
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}
type Title = {title: string}
type TodoWithoutDescr = Pick<Todo, "title" | "completed">;
type TodoWithoutDescr2 = Omit<Todo, "description">;
//Exclude, Extract, NonNullable
type OnlyA = Exclude<"a" | "b" | "c", "b" | "c">;
type OnlyB = Extract<"a" | "b" | "c", "b">;
type T0 = NonNullable<Array<string> | null | undefined>;
type Custom = Extract<Todo, Title>
//ReturnType - возвращаемое значение ф-ции: function Func(args): T1
type T1 = ReturnType<(<T extends K, K extends Array<number>>()=>T)>//number[]
