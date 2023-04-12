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
class Post {
}
const newPost = new Post();
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    print() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(this.brand);
        });
    }
}
// Модификаторы доступа --- позволяют скрыть состояние объекта от внешнего доступа и управлять доступом к этому состоянию
// public, private, protected
// public - никак не ограничивает считывание и перезапись свойст и методов (будет доступен отовсюду)
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPost() { }
}
const newPerson = new Person('Sasha', 20);
newPerson.getPost();
// private - нельзя обратиться извне
class Person2 {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }
    getPost() { }
    getterGetPost() {
        console.log(this._name, this._age);
        this.getPost();
    }
}
const newPerson2 = new Person2('Sasha', 20);
// newPerson2._name // доступно только внутри самого класса Person2
// newPerson2.getPost(); // доступно только внутри самого класса Person2
newPerson2.getterGetPost(); // выведет в консоль 'Sasha', 20
// protected - определяет свойства и методы, которые доступны из вне только в классах наследниках
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getPost() { }
    getterGetPost() {
        console.log(this.name, this.age);
        this.getPost();
    }
}
class Person4 extends Person3 {
    constructor(name, age) {
        super(name, age);
    }
    getPerson(id) {
        console.log(id);
        console.log(this.getPost());
        console.log(this.name);
    }
}
const newPerson3 = new Person3('Sasha', 20);
// newPerson3.name // error - доступно только внутри класса и внутри класса наследника
const newPerson4 = new Person4('Sasha', 20);
// newPerson4.name // error - доступно только внутри класса и внутри класса наследника
newPerson4.getPerson(4);
class Person5 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getUser() {
        console.log(this.age, this.name);
    }
}
// Равносильно
// private name: string;
// private age: number;
// constructor(name: string, age: number) {
//   this.name = name;
//   this.age = age;
// }
// Readonly - доступно только чтения
class Person6 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    setAge() {
        // this.age = 200 // error - свойство только для чтения даже внутри самого класса
    }
}
const newPerson6 = new Person6('Sasha', 20);
// newPerson6.name = 'Misha' // error - свойство только для чтения
// Статические поля и методы
// Ключевое слово static
// static - относится к самому классу, не к полям и методам и для обращения к статическим полям и методам применяется имя класса
class Person7 {
    static getAge() {
        return this.age;
    }
    constructor(name) {
        this.name = name;
    }
}
Person7.age;
Person7.getAge();
// Person7.name2 // error
class UserService {
    constructor() { }
    static postUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield fetch('');
            return user;
        });
    }
}
UserService.postUser({ name: 'Sasha', age: 20 });
class PostService extends UserService {
    constructor() {
        super();
    }
    static postUser(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield fetch('');
            return user;
        });
    }
}
PostService.postUser({ name: 'Sasha', age: 20 });
