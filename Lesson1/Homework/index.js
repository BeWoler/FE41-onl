// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количнство студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех пердметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
  }
// 1
    console.log(Object.keys(subjects).join(","));
//2
  //первый вариант
    let studs = 0;
    let teach = 0;
       for(let stud in subjects){
          studs += subjects[stud].students;
          teach += subjects[stud].teachers;
        }
    
    console.log("students:" + studs);
    console.log("teachers:" + teach);
  //второй вариант
    const getPeopleSum = (subjects) => {
        return Object.values(subjects).reduce((currValue, {students, teachers}) => {
            return currValue + students + teachers}, 0)
        }
        console.log(getPeopleSum(subjects));
    
//3
  //первый вариант
   console.log("Teachers:" + teach / 2);
  //второй вариант
   const getTeacheSum = (subjects) => {
    return Object.values(subjects).reduce((currValue, {teachers}) => {
        return currValue + teachers}, 0)
    }
    console.log(getTeacheSum(subjects) / 2);
     
//4
const getSubjectArr = (subjects) => {
    console.log(Object.keys(subjects));
    return Object.keys(subjects).map((subject) => {
        return { subject, ...subjects[subject] };
    });
};
console.log(getSubjectArr(subjects));
 
//5
const sortTeachObj = getSubjectArr(subjects).sort((a, b) => b.teachers - a.teachers)
  console.log(sortTeachObj);   

  

// // Что выведет в консоль?

// // Просьба подумать и сразу не запускать для проверки :)
// // Ответ просто запишите комментарием под вызовом функции

// const log = () => {
//     console.log(1)
  
//     setTimeout(() => { console.log(2) }, 0)
  
//     console.log(3)
    
//     new Promise(() => { console.log(4) })
    
//     setTimeout(() => { console.log(5) }, 1000)
  
//     console.log(6)
//   }
  
//   log()
  
//   // 1 3 4 6 2 5


// Написать функцию, которая принимает на вход строку в виде чисел и возвращает минимальное и максимальное значение.

//первый вариант

const findMinAndMax = (numbers) => {
const numArr = numbers.split(" ");
let min = Math.min(...numArr);
let max = Math.max(...numArr);
return `min: ${min}, max: ${max}`
}

findMinAndMax('5 6 3 0 1 -100')

console.log(findMinAndMax('5 6 3 0 1 -100')) // должен вывести -100 и 6

//второй вариант

// const findMinAndMax = (numbers) => {
//     return numbers
//     .split(' ')
//     .reduce((total, num) => (
//       total.min = Math.min(total.min, num),
//       total.max = Math.max(total.max, num),
//       total
//       ), {min: Infinity, max: -Infinity}
//     ); 
// }

// findMinAndMax('5 6 3 0 1 -100')

// console.log(findMinAndMax('5 6 3 0 1 -100')) // должен вывести -100 и 6