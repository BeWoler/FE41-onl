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

let totalStudentsAmount = 0;
let subjectCount = 0;

for (let subject in subjects) {
    totalStudentsAmount += subjects[subject].students;
    subjectCount++;
}
const averageStudents = totalStudentsAmount / subjectCount;
console.log(`Среднее количество студентов на всех пердметах: ${averageStudents}`);// 120


// 4. Создать массив из объектов предметов
const subjectsNames = Object.keys(subjects);
console.log(subjectsNames); // ['mathematics', 'biology', 'geography', 'chemistry']
const subjectArray = subjectsNames.map((subject) => {
    return {
      name: subject,
      students: subjects[subject].students,
      teachers: subjects[subject].teachers
    };
  });
  
  console.log(subjectArray); // [{…}, {…}, {…}, {…}], 
  // 0: {name: 'mathematics', students: 200, teachers: 6}
  // 1: {name: 'biology', students: 120, teachers: 6}
  // 2: {name: 'geography', students: 60, teachers: 2}
  // 3: {name: 'chemistry', students: 100, teachers: 3}


  //5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
  const subjectsArrayNames = Object.keys(subjects);
  console.log (subjectsArrayNames); // получаем массив названий предметов ['mathematics', 'biology', 'geography', 'chemistry']
  
  const sortedSubjectsArray = subjectsArrayNames.map((name) => ({
    name: name,
    teachers: subjects[name].teachers
  }));
  console.log(sortedSubjectsArray); // [{…}, {…}, {…}, {…}] 
  // 0: {name: 'mathematics', teachers: 6}
  // 1: {name: 'biology', teachers: 6}
  // 2: {name: 'geography', teachers: 2}
  // 3: {name: 'chemistry', teachers: 3}

  const sortedTeachers = sortedSubjectsArray.sort((a, b) => b.teachers - a.teachers);
  console.log(sortedTeachers); // [{…}, {…}, {…}, {…}]
  // 0: {name: 'mathematics', teachers: 6}
  // 1: {name: 'biology', teachers: 6}
  // 2: {name: 'chemistry', teachers: 3}
  // 3: {name: 'geography', teachers: 2}
  
  





