console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
let pending = new Promise(() => {
    console.log('Promise is created')
});

// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
let resolve = new Promise((resolve) => {
    resolve('Promise Data')
});
resolve.then(data => console.log('F', data))
// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
let reject = new Promise((resolve,reject) => {
    reject('Promise Error')
});
reject.then(data => console.log('Normale', data))

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
let threeSeconds = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Promise Data')
    }, 3000)
});
threeSeconds.then(data=>console.log('F',data))

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
type HandlePromiseType = {
    promise: null | Promise<any>,
    resolve: null | Function,
    reject: null | Function,
    onSuccess: (s: string) => void
    onError: (e: string) => void
}
const handlePromise: HandlePromiseType = {
    promise: null,
    resolve: null,
    reject: null,
    onSuccess: (paramName: string) => {
        console.log(`Promise is resolved with data: ${paramName}`)
    },
    onError: (paramName: string) => {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
}
export const createPromise = () => {
    handlePromise.promise = new Promise((resolve, reject) => {
        handlePromise.resolve = resolve;
        handlePromise.reject = reject;
    });
    handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)
}

export const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('resolve');
}

export const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('reject')
}

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
const sayMyName = new Promise((resolve)=>{
    return setTimeout(()=>{
        resolve('My name is')
    })
})
const onSuccess = (p:string)=>{
    return p + ' Jack'
}
const print=(p:string)=>{
    console.log(p)
}
sayMyName.then((resolve)=>{
    return onSuccess(resolve as string)
}).then(a => print(a))

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
let first = new Promise((resolve) => {
    return setTimeout(() => {
        resolve({name: 'Anna'})
    }, 2000)
})

let second = new Promise((resolve) => {
    return setTimeout(() => {
        resolve({age: 16})
    }, 3000)
})

let third = new Promise((resolve) => {
    return setTimeout(() => {
        resolve({city: ''})
    }, 4000)
})

Promise.all([first, second, third])
    .then(val => {
        console.log('normal Anna without home))', ...val)
    })


// just a plug
export default ()=>{};