// import { IEmployee } from "./interfaces/employee.interface";

// --------------------------------------------------------------------


// npm install -g typescript tsc ----> установка глобально typescript
// tsc --init ----> проинициализироовать typescript конфиг
// create filename.ts ----> файлы создаются с расширением .ts
// tsc filename.ts ----> компиляция конкретного файла
// tsc ----> компиляция всех файлов в директории, которая указана в конфиге
// node filename.js ---> запустить исполнение вашего скомпилированного js файла


// --------------------------------------------------------------------

// number
// string
// boolean
// null
// undefined
// Symbol
// Object
// Array || []

// Tuple (Кортеж)
// Enum
// Interface

// Типизация переменных

const x: number = 2;
const str: string = "Hello";
const bool: boolean = true;

// Union тип указывается через знак |  ----> string | number
// Intersection тип указывается через знак &  ---> number & string

let a: number | string | boolean | null;
let b: number & string;

// Типизация массивов и объеков

interface IUser {
  id: number;
  name: string;
  isEmployee?: boolean;
}

const user: IUser = {
  id: 1,
  name: "Sasha",
  isEmployee: true,
};

const user2: IUser = {
  id: 2,
  name: "Roma",
};

const basicArr: number[] = [1, 2, 3, 4, 5];
const arr: (string | number)[] = [1, 2, "2", "67"];

// Tuple
const numArr: [number, number] = [1, 1];
const strAndBoolArr: [string, boolean, number?] = ["hello", true, 2];

// Enum
enum Names {
  Misha = "Misha",
  Sasha = 1,
  Roma = "Roma",
  Dima = 3,
}

// Типизация функций

const numSum = (a: number, b: number, c: string): number | string => {
  return c + b;
};

const numOrStr = (numOrStr: number | string): number | string => {
  if (typeof numOrStr === "string") {
    return `${numOrStr} hello`;
  } else {
    return 0;
  }
};

const sumNum = function (a: number, b: number): number {
  return a + b;
};

const createObj = function (obj: { name: string; years: number } | IUser) {};

const createNewObj = function ({
  name,
  years,
  num,
}: {
  name: string;
  years: number;
  num: number;
}) {};

const divide = function (a: number, b: number, c?: number): number {
  if (c) {
    return c + a;
  } else {
    return b;
  }
};

// void
// never

interface IDiv {
  handleFunction: () => void;
}

// Типизация хэндлеров
const handler = function (event: HTMLInputElement): void {
  let p = event;
};

const loop = function (a: number, b: number): never {
  return loop(2, 5);
};

// Literal (литеральные) типы
// Any тип

let greet: "hello" = "hello";
// greet = 'ff'; // error

const anyFunc = function (a: any, b: any): any {
  return a + b + "fdsf" + true;
};

// Generic типы

// const newGenerArr: Array<string> = ['2', 'hello', '335', 2]; // error

interface IArr {
  nameArr: Array<string>;
  nameObj: IUser[] | Array<IUser>;
}

const getUser = async function (url: string): Promise<IUser> {
  const data = await fetch(url)
    .then((data) => data.json())
    .then((data) => data);
  return data;
};

// Продвинутые интерфейс (Наследование и расширение)

// Расширение

interface IAdmin {
  id: number;
  nickname: string;
}

interface IAdmin {
  years: number;
}

const obj: IAdmin = {
  id: 2,
  nickname: "AnyNick",
  years: 1000,
};

// Наследование

interface ICar {
  brand: string;
  wheels: number;
}

interface ITruckCar extends ICar {
  color: string;
}

const truckCarObj: ITruckCar = {
  brand: "Audi",
  wheels: 4,
  color: "red",
};

const car: ICar = {
  brand: "",
  wheels: 4,
};

// Поля только для чтение

interface IAnyInterface {
  readonly name: string;
  readonly num: {
    name: string;
    num: number;
    work: {
      firedDate: number;
      employee: IUser;
    };
  }; // { brand: string, wheels: number }
  years?: number;
}

const anyObj: IAnyInterface = {
  name: "Sasha",
  num: 1000, // error readonly
};

anyObj.name = "Misha"; // error readonly
anyObj.years = 1200;



// Practice

interface IEmployee {
  name: string;
  id: number;
}

const employeeObj: IEmployee = {
  name: "Sasha",
  id: 0,
};

const employeeObj2: IEmployee = {
  name: "Misha",
  id: 0,
};

let employeeName: string;

const checkEmployeeObj = function (obj: IEmployee): string | Error {
  if (obj.name === "Sasha") {
    employeeName = obj.name;
    return employeeName;
  } else {
    return new Error("Error");
  }
};
checkEmployeeObj(employeeObj);

interface IFetch {
  userId: number;
  id: number;
  title: string;
}

const getPost = async (url: string, method?: string): Promise<IFetch[]> => {
  const data: IFetch[] = await fetch(url, { method: method || "GET" })
    .then((res) => res.json())
    .then((data) => data);
  data.map((item: IFetch) => {
    item.title;
  });
  return data;
};

getPost("https://jsonplaceholder.typicode.com/users/1/albums", "GET");
