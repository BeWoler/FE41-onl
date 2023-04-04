"use strict"

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
  
// 1. Создать строку из названий предметов написаных через запятую
console.log('' + Object.keys(subjects));

// 2. Посчитать общее количнство студентов и учителей на всех предметах

let allStudents = 0;
let allTeachers = 0;

for (let key in subjects) {
    allStudents += subjects[key].students;
    allTeachers += subjects[key].teachers;
}

let total = allStudents + allTeachers;
console.log(total);

// 3. Получить среднее количество студентов на всех пердметах
let totalStudents = 0;
let subject = 0;


for (let key in subjects) {
    totalStudents += subjects[key].students;
    subject++
}

const averageStudents = totalStudents / subject;

console.log(averageStudents);

// 4. Создать массив из объектов предметов

// let { mathematics, chemistry, biology, geography } = subjects;

// const subjectsNames = Object.keys(subjects);


// console.log(mathematics);

const subjectsArr = Object.keys(subjects);

const subjectNewArray = subjectsArr.map((key) => {
    return {
      name: subject,
      students: subjects[key].students,
      teachers: subjects[key].teachers
    };
  });

  console.log(subjectNewArray);

// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

const subjectsArrSort = Object.keys(subjects);

const subjectNewArraySort = subjectsArr.map((key) => {
    return {
      name: subject,
      teachers: subjects[key].teachers
    };
});
  

const teachersSort = subjectNewArraySort.sort((a, b) => b.teachers - a.teachers);

console.log(teachersSort);
