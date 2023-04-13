// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//  1. Создать строку из имен пользователей через запятую
//  2. Посчитать общее количнство машин у пользователей
//  3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//  4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//  5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую


// Solution: 
interface IUsers {
    name: string;
    phone: string;
    email: string;
    animals?: string[];
    cars?: string[];
    hasChildren: boolean;
    hasEducation: boolean;
}

const users: IUsers[] = [
    {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true,
    },
    {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true,
    },
    {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false,
    },
  ];

  // 1. Создать строку из имен пользователей через запятую
const usersNames: string[] = users.map((user) => user.name);
console.log(usersNames) // [ 'Harry Felton', 'May Sender', 'Henry Ford' ]
console.log(usersNames.join(", ")); // Harry Felton, May Sender, Henry Ford

//  2. Посчитать общее количнство машин у пользователей
// sum (аккумулятор) и user (текущий элемент массива)
// Если у юзера есть свойство cars, то мы добавляем количество его машин к аккумулятору. 
// Если свойства cars нету, то мы добавляем 0 к аккумулятору. Начальное значение аккумулятора равно 0.
const totalCars: number = users.reduce((sum, user) => sum + (user.cars ? user.cars.length : 0), 0);
console.log(totalCars); // 3

// или можно решить так:

const totalAmountOfCars = users.reduce((acc, user) => {
  if (user.cars !== undefined) {
    return acc + user.cars.length;
  } else {
    return acc;
  }
}, 0);
console.log (totalAmountOfCars) // 3

//  3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

function filterEducatedUsers(users: IUsers[]): IUsers[] {
  const filteredUsers = users.filter((user) => user.hasEducation);
  return filteredUsers;
}
const educatedUsers = filterEducatedUsers(users);
console.log(educatedUsers); // выыедется 2 объекта массива users [{Harry Felton у которого  hasEducation: true} и  {May Sender у которого тоже  hasEducation: true}]

//4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных:

function filterUsersWithAnimals(users: IUsers[]) : IUsers[] {
  const filteredUsersWithAnimals: IUsers[] = [];
  for (const user of users){
    if (user.animals !== undefined && user.animals.length > 0) {
      filteredUsersWithAnimals.push(user);
    }
  }
  return filteredUsersWithAnimals;
}

const usersWithAnimals: IUsers[] = filterUsersWithAnimals (users);
console.log(usersWithAnimals); // выведется массив с объектом в котором есть пользователь у которого есть кот [{name: Harry Felton}, animals: ['cat],]

//  5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую:

function getCars(users: IUsers[]): string {
  const cars: string[] = [];
  users.forEach(user => {
    // если у юзера есть авто, тогда
    if (user.cars && user.cars.length > 0) {
      // тогда нужно добавить его авто в пустой массив cars
      user.cars.forEach(car => {
        cars.push(car);
      });
    }
  });
  return cars.join(", ");
}
const carsString: string = getCars(users);
console.log(carsString); // bmw, bmw, audi



