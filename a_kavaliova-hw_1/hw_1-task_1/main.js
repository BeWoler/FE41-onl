"use strict"
// Task 1:
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

// Solutions:

// 1. Создать строку из названий предметов написаных через запятую:
// для этого я сразу создаю массив, в котором будут только названия предметов, это я делаю перебирая ключи объекта:
const subjectNames = Object.keys(subjects);
console.log(subjectNames); // array(4): 0: "mathematics", 1: "biology", 2: "geography", 3: "chemistry"
// объединяю полученный массив в строку с запятыми:
const subjectsString = subjectNames.join(", ");
console.log(subjectsString); // mathematics, biology, geography, chemistry


// 2. Посчитать общее количнство студентов и учителей на всех предметах
// решаю циклом for in: 
//т.е. прохожу по всем ключам (предметам (subject)) в объекте subjects с помощью цикла for-in, для доступа к значениям ключей: (students, teachers), 
//и накапливаю общее количество студентов и учителей, используя оператор +=.

let totalStudents = 0;
let totalTeachers = 0;

for (let subject in subjects) {
  totalStudents += subjects[subject].students;
  totalTeachers += subjects[subject].teachers;
}

console.log((`Студенты: ${totalStudents}`) + " " + (`Учителя: ${totalTeachers}`)); // Студенты: 480 Учителя: 17

const total = totalStudents + totalTeachers;

console.log(`Количество студентов и учителей: ${total}`); // 497

// 3. Получить среднее количество студентов на всех пердметах





