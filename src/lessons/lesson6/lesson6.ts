console.log('Lesson 6');

// Class
// https://learn.javascript.ru/classes
// https://medium.com/front-stories/%D0%BA%D0%B0%D0%BA-%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D1%8E%D1%82-%D0%BA%D0%BB%D0%B0%D1%81%D1%81%D1%8B-%D0%B2-javascript-7978c0003f1d
// https://www.typescriptlang.org/docs/handbook/classes.html
// https://www.youtube.com/watch?v=BASquaxab_w
// https://www.youtube.com/watch?v=uLY9GXGMXaA

// Task 01
// Создайте структуру с именем student, содержащую поля: имя и фамилия, номер группы, успеваемость (массив из пяти элементов).
// Создать массив из десяти элементов такого типа, упорядочить записи по возрастанию среднего балла.
// Добавить возможность вывода фамилий и номеров групп студентов, имеющих оценки, равные только 4 или 5.
interface IStudent {
  firstName: string
  lastName: string
  group: number
  rating: number[]
  avgRating: number
}

class Student implements IStudent {
  firstName: string
  lastName: string
  group: number
  rating: number[]
  avgRating: number

  constructor(
    firstName: string,
    lastName: string,
    group: number,
    rating: number[]
  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.group = group
    this.rating = rating
    this.avgRating = +this.rating
      .reduce((sum, mark) => (sum + mark) / this.rating.length)
      .toFixed(2)
  }
  private static sortStudents(s1: IStudent, s2: IStudent) {
    if (s1.avgRating > s2.avgRating) {
      return 1
    } else if (s1.avgRating < s2.avgRating) {
      return -1
    } else {
      return 0
    }
  }
  static sort(arr: IStudent[]) {
    return [...arr].sort(this.sortStudents)
  }
  private static bestStudents(arr: number[]) {
    return arr.every(m => m === 9 || m === 10)
  }
  private static filterStudents(arr: IStudent[]) {
    let res: IStudent[] = []
    arr.forEach(st => {
      if (this.bestStudents(st.rating)) {
        res.push(st)
      }
    })
    return res
  }
  static showBest(arr: IStudent[]) {

    this.filterStudents(arr).forEach(st => {
      console.log(`Student - ${st.firstName}, Group - ${st.group}`)
    })
  }
}

let students: IStudent[] = []
students.push(
  new Student('UtkaLesh', 'UtkaLesh', 1, [5, -1, 5, 5, 5]),
  new Student('Lesh', 'Lesh', 2, [4, 4, 4, 4, 4]),
  new Student('krab', 'krab', 3, [3, 3, 3, 3, 3]),
  new Student('ega', 'ega', 3, [2, 2, 2, 2, 2]),
  new Student('vatnik', 'vatnik', 2, [4, 5, 2, 5, 5]),
  new Student('los', 'los', 2, [3, 3, 4, 4, 5]),
  new Student('lucky', 'lucky', 3, [3, 4, 5, 5, 2]),
  new Student('ebt', 'ebt', 1, [2, 1, 3, 3, 2]),
  new Student('chmo', 'chudo', 2, [1, 5, 1, 2, 3]),
  new Student('kraini', 'eto', 1, [2, 3, 5, 3, -1]),
  new Student('kraini', 'kto', 1, [2, 3, 5, 3, -1]),
  new Student('kraini', 'kraini', 1, [2, 3, 5, 3, -1])
)

console.log(students)
console.log(Student.sort(students))
Student.showBest(students)

// Task 02
// Создать класс с двумя переменными. Добавить конструктор с входными параметрами и инициализирующий члены класса по умолчанию.
// Можно ли создать метод на экземпляре класса который будет удалять сам экземпляр класса?
// Можно ли создать метод класса который будет удалять экземпляр класса?
class chop {
  a: any
  b: any
  constructor(a = 1, b = 2) {
    this.a = a
    this.b = b
  }
}
class her {
  x = 10
  y = 5
}
console.log(new chop(3, 2))

// Task 03
// Составить описание класса для представления времени.
// Предусмотреть возможности установки времени и изменения его отдельных
// полей (час, минута, секунда) с проверкой допустимости вводимых значений.
// В случае недопустимых значений полей выбрасываются исключения.
// Создать методы изменения времени на заданное количество часов, минут и секунд.
// Создать метод выводящий время в строке формата HH:MM:SS
// Создать класс по вышеуказанному описанию


class Clock{
  hours:any
  minutes:any
  seconds:any
  time:any
  constructor() {
    this.hours=new Date().getHours()
    this.minutes=new Date().getMinutes()
    this.seconds=new Date().getSeconds()
  }
  get(){
    console.log(`${this.hours}:${this.minutes}:${this.seconds}`)
  }
  setHours(f:number){
    this.hours=f
  }
  setMinutes(f:number){
    this.minutes=f
  }
  setSeconds(f:number){
    this.seconds=f
  }

}
const elClock=new Clock()
elClock.get()

// Task 04
// Класс Покупатель: Фамилия, Имя, Адрес, Номер банковского счета;
// Методы: установка значений атрибутов, получение значений атрибутов, вывод информации.
// Создать массив объектов данного класса.
// Вывести список покупателей в алфавитном порядке и список покупателей,
// у которых номер кредитной карточки находится в заданном диапазоне.
class Buyer{
  firstName:string
  lastName:string
  address:string
  bill:string
  constructor() {
    this.firstName='Jack'
    this.lastName='Rodin'
    this.address='Antalya'
    this.bill='TU12345678910'
  }
  get(){
    console.log(`${this.firstName}:${this.lastName}:${this.address}:${this.bill}`)
  }
  setName(f:string){
    this.firstName=f
  }
}
const first=new Buyer()
// Task 05
// Создать класс машина - имеющий марку, число цилиндров, мощность. Определить конструктор и функцию печати.
// Создать производный класс – грузовик, имеющий грузоподъемность кузова.
// Определить функции переназначения марки и грузоподъемности.
class Truk{
  mark:string
  engine:string
  power:string
  constructor(mark:string,engine:string,power:string) {
    this.mark=mark ? mark:'HellRider'
    this.engine=engine ? engine :'FromAsgard'
    this.power=power?power:'unlimited'

  }
  get(){
    console.log(`${this.mark}:${this.engine}:${this.power}`)
  }
  setMark(f:string){
    this.mark=f
  }
}
const firstTruk=new Truk('1','2','3')
// just a plug
export default () => {
};