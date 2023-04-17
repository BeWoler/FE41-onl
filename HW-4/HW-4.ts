// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//  1. Создать строку из имен пользователей через запятую
//  2. Посчитать общее количнство машин у пользователей
//  3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования
//  4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных
//  5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с названиями марок автомобилей через запятую


interface IUser {
    name:string;
    phone:string;
    email:string;
    animals?:string[];
    cars?:string[];
    hasChildren:boolean;
    hasEducation:boolean;
  }
  
  const users = [
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
  
  
    // 1
  
    const stringNames = (arr:IUser[]):string => {
      return arr.map(arr => arr.name ).join(",");
   }
  
   console.log(stringNames(users));
   
  
   // 2 
  
   const totalCars = (arr:IUser[]):number => {
    const sum = arr.reduce((sum, currValue) => {
        return sum + (currValue.cars ? currValue.cars.length : 0)
    }, 0);
    return sum
  }
  
  console.log(totalCars(users));
  
  
  // 3
  
  const userIsEducated = (arr:IUser[]):IUser[] => {
    return arr.filter(arr => arr.hasEducation);
  }
  
  console.log(userIsEducated(users));
  
  
  // 4
  
  const userHasAnimals = (arr:IUser[]):IUser[] => {
    return arr.filter(arr => arr.animals);
  }
  
  console.log(userHasAnimals(users));
  
  
  // 5
  
  const car = (arr:IUser[]):string => {
    const sort = arr.filter(arr => arr.cars);
    return sort.map(sort => sort.cars).join(",");
  }
  
  console.log(car(users));