"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const user = {
    name: 'Sasha',
    age: 10
};
let personPick; // personPick = work
// interface ICar {
//   brand: string;
//   engine: number;
//   color: string;
// }
let personOmit; // personOmit = age и experience
// Awaited --- Специальный тип, который будет возвращён из какой-либо асинхронной операции
// ReturnType --- извлекает тип возвращаемого значения функции
function getData() {
    return __awaiter(this, void 0, void 0, function* () {
        return 'hello';
    });
}
let personAwaited; // personAwaited = string
let personAwaited2; // идентично с типизацией выше
const url = 'https://google.com/';
function getUser(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const data = yield fetch(url, { method: 'GET' }).then((res) => res.json()).then((data) => data);
        return data;
    });
}
let personRequired; // personRequired = name и age (обязательные свойства)
let personPartial; // personPartial = name и age (необязательные свойства)
let personReadonly; // personReadonly = name и age (доступно только для чтения, при записи будет ошибка)
let record; // record = a: number | b: number | c: number
let exclude; // exclude = "c" | "d"
// NonNullable --- извлекать типы из Type, исключая null и undefined
let value;
let nonNullValue; // nonNullValue = string
// Parameters --- извлекает типы аргументов функции Type
function getPost(title, author) { }
