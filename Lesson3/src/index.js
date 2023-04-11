"use strict";
// import { IEmployee } from "./interfaces/employee.interface";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// --------------------------------------------------------------------
// npm install -g typescript ----> установка глобально typescript
// tsc --init ----> проинициализироовать typescript конфиг
// create filename.ts ----> файлы создаются с расширением .ts
// tsc filename.ts ----> компиляция конкретного файла
// tsc ----> компиляция всех файлов в директории, которая указана в конфиге
// node filename.js ---> запустить исполнение вашего скомпилированного js файла
// --------------------------------------------------------------------
// number
// string
// boolean
// null
// undefined
// Symbol
// Object
// Array || []
// Tuple (Кортеж)
// Enum
// Interface
// Типизация переменных
const x = 2;
const str = "Hello";
const bool = true;
// Union тип указывается через знак |  ----> string | number
// Intersection тип указывается через знак &  ---> number & string
let a;
let b;
const user = {
    id: 1,
    name: "Sasha",
    isEmployee: true,
};
const user2 = {
    id: 2,
    name: "Roma",
};
const basicArr = [1, 2, 3, 4, 5];
const arr = [1, 2, "2", "67"];
// Tuple
const numArr = [1, 1];
const strAndBoolArr = ["hello", true, 2];
// Enum
var Names;
(function (Names) {
    Names["Misha"] = "Misha";
    Names[Names["Sasha"] = 1] = "Sasha";
    Names["Roma"] = "Roma";
    Names[Names["Dima"] = 3] = "Dima";
})(Names || (Names = {}));
// Типизация функций
const numSum = (a, b, c) => {
    return c + b;
};
const numOrStr = (numOrStr) => {
    if (typeof numOrStr === "string") {
        return `${numOrStr} hello`;
    }
    else {
        return 0;
    }
};
const sumNum = function (a, b) {
    return a + b;
};
const createObj = function (obj) { };
const createNewObj = function ({ name, years, num, }) { };
const divide = function (a, b, c) {
    if (c) {
        return c + a;
    }
    else {
        return b;
    }
};
// Типизация хэндлеров
const handler = function (event) {
    let p = event;
};
const loop = function (a, b) {
    return loop(2, 5);
};
// Literal (литеральные) типы
// Any тип
let greet = "hello";
// greet = 'ff'; // error
const anyFunc = function (a, b) {
    return a + b + "fdsf" + true;
};
const getUser = function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(url)
            .then((data) => data.json())
            .then((data) => data);
        return data;
    });
};
const obj = {
    id: 2,
    nickname: "AnyNick",
    years: 1000,
};
const truckCarObj = {
    brand: "Audi",
    wheels: 4,
    color: "red",
};
const car = {
    brand: "",
    wheels: 4,
};
const anyObj = {
    name: "Sasha",
    num: 1000, // error readonly
};
anyObj.name = "Misha"; // error readonly
anyObj.years = 1200;
const employeeObj = {
    name: "Sasha",
    id: 0,
};
const employeeObj2 = {
    name: "Misha",
    id: 0,
};
let employeeName;
const checkEmployeeObj = function (obj) {
    if (obj.name === "Sasha") {
        employeeName = obj.name;
        return employeeName;
    }
    else {
        return new Error("Error");
    }
};
checkEmployeeObj(employeeObj);
const getPost = (url, method) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch(url, { method: method || "GET" })
        .then((res) => res.json())
        .then((data) => data);
    data.map((item) => {
        item.title;
    });
    return data;
});
getPost("https://jsonplaceholder.typicode.com/users/1/albums", "GET");
