
console.log('Lesson 7');

// __Proto__
// https://learn.javascript.ru/prototype-inheritance
// https://habr.com/ru/post/518360/
// https://learn.javascript.ru/native-prototypes

// Prototype
// https://learn.javascript.ru/function-prototype
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype


// https://www.youtube.com/watch?v=aQkgUUmUJy4&t=21s
// https://www.youtube.com/watch?v=b55hiUlhAzI


//Task 01
// Реализовать класс Animal который принимает name(по умолчанию 'Animal') в качестве параметра, у которого будет 3
// метода walk, eat, sleep - каждый метод должен выводить в консоль строку имя + действие. Пример:
// walk => `${this.name} walking`
// проверить, что методы работают

class Animal{
    name:string
    constructor(name:string) {
        this.name=name
    }
    walk(){
        console.log(`${this.name} walking`)
    }
    eat(){
        console.log(`${this.name} eating`)
    }
    sleep(){
        console.log(`${this.name} sleeping`)
    }

}
//Task 02
// Реализовать класс Monkey на базе класса Animal,  конструктор принимает name(по умолчанию 'Monkey') в качестве
// параметра, реализовать методы roar и climb аналогично классу Animal
// проверить, что все методы работают
class Monkey extends Animal{
    constructor(name='Monkey') {
        super(name);
        this.name=name
    }
    roar(){
        console.log(`${this.name} roaring`)
    }
    climb(){
        console.log(`${this.name} climbing`)
    }
}

//Task 03
// Реализовать класс Human на базе класса Monkey, конструктор принимает name(по умолчанию 'Human') в качестве
// параметра, реализовать методы speak и think аналогично классу Animal
// проверить, что все методы работают
class Human extends Monkey{
    constructor(name='Human') {
        super(name);
        this.name=name
    }
    speak(){
        console.log(`${this.name} speaking`)
    }
    think(){
        console.log(`${this.name} thinking`)
    }
}

// Task 04
// Реализовать таски 01-03 через функции конструкторы в отдельном JS файле, реализовать наследование
//1
//ts-ignore

const Animal1:(this:any,name: any)=>any = function (name:string){
    this.name=name?name:'Test'
    this.walk=function (){
        console.log(`${this.name} walking`)
    }
    this.eat=function (){
        console.log(`${this.name} eating`)
    }
    this.sleep=function (){
        console.log(`${this.name} sleeping`)
    }

}
const Monkey1 =function(this:any){

    Animal1.apply(this,arguments as any)
    this.roar=function (){
        console.log(`${this.name} roaring`)
    }
    this.climb=function (){
        console.log(`${this.name} climbing`)
    }
}

// const ani = Monkey1
// console.log(Monkey1)
//omg remember this
const test1=new (Monkey1 as any)('Omgehka')

console.log(test1)
test1.roar()
const Human1 =function(this:any,name:string){
    this.name=name
    Monkey1.bind(this,this.name)
    this.speak=function (){
        console.log(`${this.name} speaking`)
    }
    this.think=function (){
        console.log(`${this.name} thinking`)
    }
    this.cry=function (){
        console.log(`${this.name} crying`)
    }
}
const test2=new (Human1 as any)('Sam')
test2.cry()
// Task 05
// Используя метод Apply реализовать свой собственный метод bind
function bindHandler(fn:any, context:any, ...rest:any):any {
    return function(...args:any) {
        const uuid = Date.now().toString();
        context[uuid] = fn;
        const res = context[uuid](...rest, ...args);
        delete context[uuid];
        return res;
    }
}
const user = {
    firstName: '',
    lastName: '',
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

function getFullName(this:any,firstName:string, lastName:string) {
    this.firstName = firstName;
    this.lastName = lastName;
    return this.fullName();
}

console.log(bindHandler(getFullName, user, 'Sam', 'Borober')())
console.log(bindHandler(getFullName, user, 'Sam2')('Borober'))
console.log(bindHandler(getFullName, user)('Sam3', 'Borober'))

// just a plug
export default () => {};