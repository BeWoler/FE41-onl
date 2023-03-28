// 1. Получить средний возраст пользователей. +
// 2. Отсортировать массив по возрасту от большего к меньшему.
// 3. Написать функцию, которая бы отвечала булевым значением на вопрос: есть ли пользователь соотвествуещего возраста. 
// Например, есть ли пользователь, которому 22 года? Ответ должен быть: true

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

// #1

const objectNumSum = (arr) => {
  const sum = arr.reduce((sum, currValue) => ({
    age: sum.age + currValue.age
  }));
  return sum;
} 

const objectNumSum2 = (arr) => {
  const sum = arr.reduce((sum, currValue) => {
    return sum + currValue.age;
  }, 0);
  return sum;
}

const averageSum = objectNumSum(users).age / users.length
const averageSum2 = objectNumSum2(users) / users.length

console.log(averageSum);
console.log(averageSum2);




// #2

const sortingObjArr = (arr) => {
  const sortedArr = arr.sort((a, b) => {
    return b.age - a.age
  });
  return sortedArr;
}

const sortingObjArr2 = (arr) => {
  const sortedArr = arr.sort((a, b) => {
    return a.age > b.age ? -1 : 1
  });
  return sortedArr;
}

console.log('first', sortingObjArr(users))
console.log('second', sortingObjArr2(users))




// #3

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

const isUserExist3 = (usersArr, usersAge) => {
  let exist = false;

  usersArr.forEach((user) => user.age === usersAge && (exist = true))

  return exist
}

console.log(isUserExist(users, 18))
console.log(isUserExist2(users, 18))
console.log(isUserExist3(users, 8))
