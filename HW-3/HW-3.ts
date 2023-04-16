// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//  1. Создать строку из имен пользователей через запятую
//  2. Посчитать общее количнство машин у пользователей
//  3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//  4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//  5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую

import { IUser } from "./interfaces/interfaces";

const users: IUser[] = [
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

//  1. Создать строку из имен пользователей через запятую
console.log("Task 1");

const userNames = users.map((user) => user.name);

const stringOfNames = userNames.join(",");

console.log(stringOfNames);

// 2. Посчитать общее количнство машин у пользователей
console.log("Task 2");

const totalCars = users.reduce(
  (acc, user) => acc + (user.cars ? user.cars.length : 0),
  0
);

console.log(totalCars);

//  3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
console.log("Task 3");

const isEducation = (users: IUser[]) => {
  const filterEducatedUsers = users.filter((user) => user.hasEducation);
  return filterEducatedUsers;
};

const educatedUsers = isEducation(users);

console.log(educatedUsers);

console.log("Task 4");

//  4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

const haveAnimals = (users: IUser[]) => {
  const filterUsersWitchAnimal = [];
  for (const user of users) {
    if (user.animals && user.animals.length > 0) {
      filterUsersWitchAnimal.push(user);
    }
    return filterUsersWitchAnimal;
  }
};

const usersWitchAnimal = haveAnimals(users);

console.log(usersWitchAnimal);

//  5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую
console.log("Task 5");

const getCars = (users: IUser[]) => {
  const cars: string[] = [];
  users.forEach((user) => {
    if (user.cars && user.cars.length > 0) {
      user.cars.forEach((car) => {
        cars.push(car);
      });
    }
  });
  return cars.join(",");
};

const carsBrand = getCars(users);
console.log(carsBrand);
