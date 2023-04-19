class Post {}

const newPost: Post = new Post();


class Car {
  brand: string;
  wheels: number;
  constructor(brand: string, wheels: number) {
    this.brand = brand;
    this.wheels = wheels;
  }

  async print(): Promise<void> {
    console.log(this.brand)
  }
}


// Модификаторы доступа --- позволяют скрыть состояние объекта от внешнего доступа и управлять доступом к этому состоянию
// public, private, protected

// public - никак не ограничивает считывание и перезапись свойст и методов (будет доступен отовсюду)
class Person {
  name: string; // под капотом он является public
  public age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public getPost() {}
}

const newPerson = new Person('Sasha', 20)
newPerson.getPost()






// private - нельзя обратиться извне
class Person2 {
  private _name: string;
  private _age: number;
  constructor(name: string, age: number) {
    this._name = name;
    this._age = age;
  }

  private getPost() {}

  public getterGetPost() {
    console.log(this._name, this._age)
    this.getPost()
  }
}

const newPerson2 = new Person2('Sasha', 20);
// newPerson2._name // доступно только внутри самого класса Person2
// newPerson2.getPost(); // доступно только внутри самого класса Person2
newPerson2.getterGetPost(); // выведет в консоль 'Sasha', 20






// protected - определяет свойства и методы, которые доступны из вне только в классах наследниках
class Person3 {
  protected name: string;
  protected age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  protected getPost() {}

  public getterGetPost() {
    console.log(this.name, this.age)
    this.getPost()
  }
}

class Person4 extends Person3 {
  constructor(name: string, age: number) {
    super(name, age)
  }

  public getPerson(id: number) {
    console.log(id)
    console.log(this.getPost())
    console.log(this.name);
  }
}

const newPerson3 = new Person3('Sasha', 20);
// newPerson3.name // error - доступно только внутри класса и внутри класса наследника

const newPerson4 = new Person4('Sasha', 20);
// newPerson4.name // error - доступно только внутри класса и внутри класса наследника
newPerson4.getPerson(4);




class Person5 {
  constructor(private name: string, private age: number) {}

  public getUser() {
    console.log(this.age, this.name)
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
  constructor(public readonly name: string, public readonly age: number) {}

  public setAge() {
    // this.age = 200 // error - свойство только для чтения даже внутри самого класса
  }
}


const newPerson6 = new Person6('Sasha', 20);
// newPerson6.name = 'Misha' // error - свойство только для чтения





// Статические поля и методы
// Ключевое слово static
// static - относится к самому классу, не к полям и методам и для обращения к статическим полям и методам применяется имя класса

class Person7 {
  name: string;
  // name2: string;

  static age: number;

  static getAge(): number {
    return this.age;
  }

  constructor(name: string) {
    this.name = name;
  }
}

Person7.age
Person7.getAge();
// Person7.name2 // error


class UserService {
  constructor() {}

  public static async postUser(body: { name: string, age: number}) {
    const user = await fetch('');
    return user
  }
}

UserService.postUser({ name: 'Sasha', age: 20})

class PostService extends UserService {
  constructor() {
    super()
  }

  public static async postUser(body: { name: string, age: number}) {
    const user = await fetch('');
    return user
  }
}
PostService.postUser({ name: 'Sasha', age: 20})