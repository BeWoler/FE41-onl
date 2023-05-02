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

//1
const subjectsKeys = Object.keys(subjects);
console.log(subjectsKeys.toString());

//2
const objectValue = Object.values(subjects);
let studentsSum = 0;
let teachersSum = 0;
for(let item of objectValue){
    studentsSum += item.students;
    teachersSum += item.teachers;
}
let totalSum = studentsSum + teachersSum;
console.log(`studentsSum ${studentsSum}`);
console.log(`teachersSum ${teachersSum}`);
console.log(`totalSum ${totalSum}`);

//3
const numOfSubjects = objectValue.length;
const averageAmountofStudents = studentsSum / numOfSubjects;
console.log(`averageAmountofStudents ${averageAmountofStudents}`);

//4 заработало

let i = 0;
    
let subjectsFull =  subjectsKeys.map((item) => {
    let subjectInfo = objectValue[i];
    i++;
    return item = ({'name': item, 'students': subjectInfo.students, 'teachers': subjectInfo.teachers});
})
console.log(subjectsFull);

//5

const subjectsFullSorted = subjectsFull.sort((a,b) => {
    return(b.teachers - a.teachers);
});
console.log(subjectsFullSorted);

