// С ниже приведенным массивом пользователей решить следующие задачи:

//     1. Получить средний возраст пользователей. +
//     2. Отсортировать массив по возрасту от большего к меньшему.
//     3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста. 
//     Например, есть ли пользователь, которому 22 года? Ответ должен быть: true

// const users = [
//     {
//         id: 1,
//         username: "Michael Lawson",
//         age: 22,
//     },
//     {
//         id: 2,
//         username: "Tom Spot",
//         age: 32,
//     },
//     {
//         id: 3,
//         username: "Kate Ford",
//         age: 18,
//     }
// ];

// const usersSumAge = users.reduce((sum, currValue) => {
//   return sum.age + currValue.age
// });

  // const numbers = [2, 5, 6, 8];

  // const objectNumSum = (arr) => {
  //   const sum = arr.reduce((sum, currValue) => {
  //     return sum + currValue
  //   });
  //   return sum;
  // } 

// const objectNumSum = (arr) => {
//   const sum = arr.reduce((sum, currValue) => ({
//     age: sum.age + currValue.age
//   }));
//   return sum;
// } 

// const objectNumSum = (arr) => {
//   const sum = arr.reduce((sum, currValue) => {
//     return sum + currValue.age;
//   }, 0);
//   return sum;
// }

// sum = { id: undefined, username: undefined, age: undefined }
// const averageSum = objectNumSum(users) / users.length
// console.log(averageSum);

// const sortingObjArr = (arr) => {
//   const sortedArr = arr.sort((a, b) => {
//     return b.age - a.age
//   });
//   return sortedArr;
// }

// const sortingObjArr2 = (arr) => {
//   const sortedArr = arr.sort((a, b) => {
//     return a.age > b.age ? -1 : 1
//   });
//   return sortedArr;
// }

// console.log('first', sortingObjArr(users))
// console.log('second', sortingObjArr2(users))



//     3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли хоть 1 пользователь соотвествуещего возраста. 
//     Например, есть ли пользователь, которому 22 года? Ответ должен быть: true

// пройтись по массиву
// проверить есть ли пользователь
// вернуть true елси да & false если нет

// вывести в консоль результат функции

const users = [
  {
      id: 1,
      username: "Michael Lawson",
      age: 22,
  },
  {
      id: 2,
      username: "Tom Spot",
      age: 32,
  },
  {
      id: 3,
      username: "Kate Ford",
      age: 18,
  }
];

const isUserExist = (usersArr, usersAge) => {
  let result;

  for (let key in usersArr) {
    if(usersArr[key].age === usersAge) {
      result = true
      break;
    }
    else {
      result = false
    }
  }

  return result;
}

const isUserExist2 = (usersArr, usersAge) => {
  return usersArr.some((item) => item.age === usersAge)
}

// const isUserExist3 = (usersArr, usersAge) => {
//   const result = usersArr.map((item) => {
//     if(item.age === usersAge) {
//       return true
//     }
//     else {
//       return false
//     }
//   })

//   return result;
// }

console.log(isUserExist(users, 18))
console.log(isUserExist2(users, 18))
console.log(isUserExist3(users, 8))










// Что выведет в консоль?

// const func = () => {
//   console.log(1)

//   setTimeout(() => { console.log(2) }, 0)
  
//   console.log(3)
  
//   new Promise(() => { console.log(4) })
  
//   setTimeout(() => { console.log(5) }, 1000)

//   console.log(6)
// }

// func()














// Найти наименьшее и наибольшее число в строке чисел

// const minAndMax = (numbers) => {

// }

// console.log(minAndMax('5 6 3 0 1 -100'))