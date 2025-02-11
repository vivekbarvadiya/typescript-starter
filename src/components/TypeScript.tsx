export default function TypeScript() {
  function hello(name: string): string {
    return `hello ${name}`;
  }

  console.log(hello("vivek"));

  let a: number = 4;
  let b: number = 5;

  //   function
  function add(a: number, b: number): number {
    return a + b;
  }

  console.log(add(2, 3));

  //   array
  let numberArr: number[] = [1, 2, 3, 4];
  console.log(numberArr);

  //   objects
  //   let product: { id: number; title: string } = {
  //     id: 1,
  //     title: "abc",
  //   };

  //with type alias
  type product = {
    id: number;
    name: string;
  };
  let user: product = { id: 1, name: "xyz" };
  console.log(user);

  //   interfae => define object structure
  interface User {
    name: string;
    age?: number; //for optional data
  }

  let u1: User = { name: "vivek" };
  console.log(u1);

  let u2: User[] = [
    {
      name: "manan",
    },
    {
      name: "meet",
    },
  ];
  console.log(JSON.stringify(u2));

  //   function
  //default params
  function defaultP(name: string = "guest"): string {
    return `Hi, ${name}`;
  }

  console.log(defaultP());

  //   a variable can hodl multiple data types
  //   union types
  let x: string | number;
  x = 5;
  x = "vivek";
  console.log(x);

  //   intersection of types
  interface Employee {
    name: string;
    salary: number;
  }

  interface Manager {
    dept: string;
  }

  type TeamLead = Employee & Manager;

  let leader: TeamLead = {
    name: "vivek",
    salary: 500,
    dept: "it",
  };

  console.log(leader);

  //   generics
  function identity<T>(value: T): T {
    return value;
  }

  console.log(identity<string>("Hello"));
  console.log(identity<boolean>(true));

  //   generic arrays
  function firstElem<T>(arr: T[]): T {
    return arr[0];
  }

  console.log(firstElem<number>([1, 2, 3]));

  return <p>TypeScript Starter</p>;
}
