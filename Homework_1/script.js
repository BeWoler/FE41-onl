"use strict"

// TASK 1

// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количество студентов и учителей на всех предметах
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

const array = Object.keys(subjects) // создали массив

const stringWithSubjects = array.join(', ') // объеденили элементы массива в строку через запятую 

console.log(stringWithSubjects)

// 2 

let totalNumberOfTeachers = 0;
let totalNumberOfStudents = 0;

for (let key in subjects) {
   totalNumberOfTeachers += subjects[key].teachers;
   totalNumberOfStudents += subjects[key].students;
}
const total = totalNumberOfTeachers + totalNumberOfStudents;

console.log(total);

// 3

let totalNumberOfStudents = 0;
let allSubjects = 0;

for (let key in subjects) {
   totalNumberOfStudents += subjects[key].students; 
   allSubjects++;
}
const averageNumberOfStudents = totalNumberOfStudents / allSubjects;

console.log(averageNumberOfStudents);

// 4

const array = arrayWithSubjects.map((key) => {
   return {
      name: key, teachers: subjects[key].teachers,
      students: subjects[key].students
   };
})

console.log(array)

// 5 

const arrayWithSubjects = Object.keys(subjects);

const array = arrayWithSubjects.map((key) => {
   return {
      name: key,
      teachers: subjects[key].teachers, students: subjects[key].students
   };
})

function byIncrease(value) {
   return (a, b) => a[value] > b[value] ? 1 : +1;
}

const sortArray = array.sort(byIncrease('teachers'));

console.log(sortArray)

// TASK 2

// Что выведет в консоль?

// Просьба подумать и сразу не запускать для проверки :)
// Ответ просто запишите комментарием под вызовом функции

const log = () => {
   console.log(1)

   setTimeout(() => { console.log(2) }, 0)

   console.log(3)

   new Promise(() => { console.log(4) })

   setTimeout(() => { console.log(5) }, 1000)

   console.log(6)
}

log()

// Будет выводиться так: 1 3 4 6 2 5  

// 1 Выполняется функция там,где ее вызвали и в то время как вызвали (синхронный код). Все команды будут выполнены по очереди - в порядке их расположения в коде.
// 3 также синхронный код
// 4 с промисами трудно, но как я понимаю: функция, которая предается в конструкцию new Promise, запускается автоматически. (мб неверно)
// 6 все тоже самое как 1 и 3
// 2 setTimeout дает нам возможность вызвать функцию один раз через определнное время. Но у нас стоит ноль. Я где-то читала, что в таком случае функция буде вызвана настолько быстро, насколько это возможно. Однако только после того, как закончит выполняться текущий код.
// 5 также setTimeout - через 1 секунду будет вызвана функция.

// TASK 3

// Написать функцию, которая принимает на вход строку в виде чисел и возвращает минимальное и максимальное значение.

const findMinAndMax = (numbers) => {
   const array = numbers.split(" ") // метод сплит разбиват строку в массив строк
   return `минимальное значение: ${Math.min(...array)}, максимальное значение: ${Math.max(...array)}` // возвращаем минимальное и максимальное значение массива с помощью методов Math.max() и Math.min()
}

findMinAndMax('5 6 3 0 1 -100')

console.log(findMinAndMax('5 6 3 0 1 -100'))