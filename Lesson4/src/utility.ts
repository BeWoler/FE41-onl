type Admin = {}

// Ключевые отличия интерфейса от тип: типы не могут расширяться при повторной инициализации и не могут наследоваться друг от друга
interface IRole extends Admin {} // Интерфейсы могут наследовать и расширять типы

type User = {
  name: string;
  age: number;
}

const user: User = {
  name: 'Sasha',
  age: 10
}

// Utility типы
// Pick, Omit, Awaited, Required, Readonly, Record, Exclude, NonNullable, Partial, Parameters
// Uppercase, Lowercase, Capitalize, Uncapitalize

// Pick --- выбирает свойство из объекта А, указанным в Б
interface IPersonPick {
  name: string;
  age: number;
  work: {
    experience: number;
  }
}

let personPick: Pick<IPersonPick, 'work'> // personPick = work


// Omit --- выбирает свойство из объекта А, исключая те, которые есть в B
interface IPersonOmit {
  name: string;
  age: number;
  experience: number;
}

// interface ICar {
//   brand: string;
//   engine: number;
//   color: string;
// }

let personOmit: Omit<IPersonOmit, 'name'> // personOmit = age и experience



// Awaited --- Специальный тип, который будет возвращён из какой-либо асинхронной операции
// ReturnType --- извлекает тип возвращаемого значения функции
async function getData(): Promise<string> {
  return 'hello';
}

let personAwaited: Awaited<ReturnType<typeof getData>>; // personAwaited = string
let personAwaited2: string; // идентично с типизацией выше


interface IUser {
  name: string;
  id: number;
  email: string;
}

const url = 'https://google.com/'

async function getUser(url: string): Promise<IUser> {
  const data: IUser = await fetch(url, { method: 'GET'}).then((res) => res.json()).then((data) => data);
  return data;
}
// const user: Awaited<ReturnType<typeof getUser>> = getUser(url);



// Required --- делает все свойства обязательными
interface IPersonRequired {
  name?: string;
  age?: number;
}

let personRequired: Required<IPersonRequired> // personRequired = name и age (обязательные свойства)


// Partial --- делает все свойства необязательными
interface IPersonPartial {
  name: string;
  age: number;
}

let personPartial: Partial<IPersonPartial> // personPartial = name и age (необязательные свойства)



// Readonly --- делает все свойста объекта доступными только для чтения
interface IPersonReadonly {
  name: string;
  age: number
}

let personReadonly: Readonly<IPersonReadonly> // personReadonly = name и age (доступно только для чтения, при записи будет ошибка)
// personReadonly.name = 'Sasha';



// Type

// Record --- создаёт тип, который является записью с ключами, определёнными в первом параметре и значениями типа, определённого во втором параметре
type Keys = 'a' | 'b' | 'c'
type RecordType = Record<Keys, number>

let record: RecordType // record = a: number | b: number | c: number


// Exclude --- исключает определённые типы из объединённого типа
type A = 'a' | 'b' | 'c' | 'd';
type B = Exclude<A, 'a' | 'b'> // type B = "c" | "d"

let exclude: B; // exclude = "c" | "d"



// NonNullable --- извлекать типы из Type, исключая null и undefined
let value: string | null | undefined;
let nonNullValue: NonNullable<typeof value> // nonNullValue = string



// Parameters --- извлекает типы аргументов функции Type
function getPost(title: string, author: string) {}
type GetPostParameters = Parameters<typeof getPost> // GetPostParameters = [title: string, author: string]




// Uppercase, Lowercase, Capitalize, Uncapitalize --- приводят строку к определённому регистру
type Uppercased = Uppercase<'hello'>
type Lowercased = Lowercase<'HELLO'>
type Capitalized = Capitalize<'hello'>
type Uncapitalized = Uncapitalize<'Hello'>