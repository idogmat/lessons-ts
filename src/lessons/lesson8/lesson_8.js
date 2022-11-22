// Task 1
// Есть некоторая строка (const str = 'fgfggg';), что будет, если мы возьмем str[0]
'f'
// Task 2
// Реализуйте необходимый код, что бы выражение (2).plus(3).minus(1) сработало и вернуло 4
Number.prototype.plus = function (b) {
    return this + b;
}

Number.prototype.minus = function (b) {
    return this - b;
}
console.log((2).plus(3))
// Task 3
// Реализуйте функцию, которая принимает следующие аргументы (строки) '*', '1', 'b', '1c', и возвращает строку '1*b*1c'
function ebtStack() {
    let opers = [];
    let nums = []
    let ok = []
    let res = [...arguments].forEach(el => el === '*' ? opers.push(el) : nums.push(el))
    opers.push(opers[0])
    let i = 0;
    while (i <= arguments.length) {
        if (i === 0 || i % 2 === 0) {
            ok.push(nums.shift())
            i++
        } else {
            if ((i + 1) % 2 == 0) {
                ok.push(opers.shift())
                i++
            }
        }
    }
    return ok.join('')
}

console.log(ebtStack('*', '1', 'b', '1c'))
// Task 4
// Напишите функцию которая найдет сумму всех вершин в структуре данны типа tree
// Рекурсивно
// В цикле

const tree = {
    valueNode: 3,
    next: [{
        valueNode: 1,
        next: null
    },
        {
            valueNode: 3,
            next: null
        },
        {
            valueNode: 2,
            next: null
        },
        {
            valueNode: 2,
            next: [
                {
                    valueNode: 1,
                    next: null
                },
                {
                    valueNode: 5,
                    next: null
                }
            ]
        }]
};

function getSum(obj) {
    var arr = [obj],
        sum = 0,
        current;
    while (arr.length) {
        current = arr.shift();
        sum += current.valueNode;
        if (current.next != null) {
            for (var i = 0; i < current.next.length; i++) {
                arr.push(current.next[i]);
            }
        }
    }
    return sum;
}

console.log(getSum(tree))

// Task 5
// исправить код, что бы работал правильно

for (let i = 0; i < 10; i++) {
    setTimeout(() => {
        console.log(i);
    }, i * 100);
}

// Task 6
// Реализуйте функцию Foo, что бы все корректно работало

function Book(name, author) {
    this.name = name;
    this.author = author;
    return this;
}

const Foo = (callback, name, author) => {
    return new callback(name, author)
}
console.log(Foo(Book, 'Учебник javascript', 'Петр Сергеев'))

const book = Foo(Book, 'js', 'petr');
console.log(book.name);

// Task 7
// Реализовать функцию f: f(2, 3) -> 5, при вызове f(2)(3), тоже вернет 5
const f = (x, y) => {
    return y ? x + y : function (y) {
        return x + y
    }
}
console.log(f(2, 3))
console.log(f(2)(3))

// Task 8
// Реализовать функцию f: f(1)(2)(3)() -> 6, f(0)(3)(1)(5)() -> 8
const infiniteCurry = (fn, seed) => {
    const reduceValue = (args, seedValue) =>
        args.reduce((acc, a) => {
            return fn.call(fn, acc, a);
        }, seedValue);
    const next = (...args) => {
        return (...x) => {
            if (!x.length) {
                return reduceValue(args, seed);
            }
            return next(...args, reduceValue(x, seed));
        };
    };
    return next();
};
const f3 = infiniteCurry((x, y) => x + y, 0);
console.log(f(0)(3)(1)(5)())
// Task 9
// Реализовать функции seven, plus, one, five, minus, two так, что бы следующие вызовы работали seven(plus(one())) -> 8. five(minus(two())) -> 3
function plus(x) {
    return function (y) {
        return y + x;
    };
}

function minus(x) {
    return function (y) {
        return y - x;
    };
}

function one(fn) {
    return fn ? fn(1) : 1;
}

function two(fn) {
    return fn ? fn(2) : 2;
}

function seven(fn) {
    return fn ? fn(7) : 7;
}

function five(fn) {
    return fn ? fn(5) : 5;
}

console.log(seven(plus(one())))
console.log(five(minus(two())))
// Task 10
// Реализовать функцию сортировки массива пузырьком
const arr01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].reverse()
const sortBubble = (arr) => {
    for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
            if (arr[i] > arr[i + 1]) {
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
            }
        }
    }
}
sortBubble(arr01)
console.log(arr01)
// Task 11
// Есть строка, состоящая из разных скобок - str = "())({}}{()][][", написать функцию проверки закрыты ли все.
const regConv = str => {
    let prev = '';
    let replaced = str;
    const reg = /\(\)|\[\]|\{\}/gm;

    while (replaced !== prev) {
        prev = replaced,
            replaced = replaced.replace(reg, '');
    }

    return prev == '';
}
console.log(regConv("()[()][]"))
console.log(regConv("))({}}{()][]["))
// Task 12
// Необходимо написать функцию, принимающую в аргументах массив целых чисел и возвращающую новый массив, состоящий только из уникальных значений первого массива.
function unique(arr) {
    const res = [];

    arr.forEach((item) => {
        if (res.indexOf(item) === -1) {
            res.push(item);
        }
    });

    return res;
}

console.log(unique([1, 1, 2, 2, 4, 2, 3, 7, 3]))
// Task 13
// Написать функцию, принимающую аргументом массив чисел и возвращающую новый массив, состоящий из удвоенных значений первого.
// f([1, 2, null, 7, 8, null, 3]); // => [2, 4, 14, 16, 6]
function multiArr(arr) {
    return arr.map(el => el === null ? el : el * 2).filter(el => el !== null)
}

console.log(multiArr([1, 2, null, 7, 8, null, 3]))

// Task 14
// Необходимо написать функцию, возвращающую значения всех вершин дерева
// getTreeValues(tree); // => [1, 2, 3, 4, 5, 6, 7]

const tree2 = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                {value: 4},
                {value: 5},
            ]
        },
        {
            value: 3,
            children: [
                {value: 6},
                {value: 7},
            ]
        }
    ]
};

function getTreeValues(tree) {
    const tmpTree = [tree];
    const res = [];
    let current;

    while (tmpTree.length > 0) {
        current = tmpTree.shift();
        res.push(current.value);

        if (current.children) {
            current.children.forEach(item => tmpTree.push(item));
        }
    }

    return res
}

console.log(getTreeValues(tree2))

// Task 15
// Необходимо написать функцию, возвращающую сумму всех вершин дерева из Task 14
console.log(getTreeValues(tree2).reduce((acc, b) => acc + b))
// Task 16
// Надо реализовать «бомбу» (в виде функции-конструктора), которая получает на входе время, через которое взорвется и
// некоторый «звук взрыва» (строку, которую вернет через заданное время).
function Bomb(message, delay) {
    this.message = message;

    setTimeout(this.blowUp.bind(this), delay * 1000);
}

Bomb.prototype.blowUp = function () {
    console.log(this.message);
};

new Bomb("Explosion!", .5);
// Task 17
// Необходимо реализовать функцию, принимающую в аргументах строку, состоящую из букв и вернуть новую строку,
// в которой повторяющиеся буквы заменены количеством повторений.
// rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'); // => 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'
function rle(str) {
    const result = [str[0]];
    let count = 1;
    for (let i = 1; i < str.length; i++) {
        if (str[i] === str[i - 1]) {
            count++;
            if (i === str.length - 1) {
                result.push(str[i]);
                if (count > 1) result.push(count);
            }
        } else {
            if (i > 1) result.push(str[i - 1]);
            if (i === str.length - 1) result.push(str[i]);
            if (count > 1) result.push(count);
            count = 1;
        }
    }
    return result.join('');
}

console.log(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'))
// Task 18
// Реализуйте функцию isSorted(), которая возвращает true или false в зависимости о того, отсортирован ли переданный ей числовой массив.
function isSorted(array) {
	for (var i = 0; i < array.length; i++) {
		for (var j = 0; j < i; j++) {
			if (array[i] < array[j]) {
				return false;
			}
		}
	}
	return true
}

console.log(isSorted([1, 2, 3, 4]))
console.log(isSorted([1, 2, 3, 4].reverse()))
// Task 19
// Реализуйте функцию missing(), которая принимает неотсортированный массив уникальных чисел (то есть, числа в нём не повторяются)
// от 1 до некоего числа n, и возвращает число, отсутствующее в последовательности. Там может быть либо одно отсутствующее число,
// либо их может не быть вовсе.
function missing(arr){
	let l = arr.length;
	if (l === 0) return null;
	function sum(n){
		return (n*n + n)/2
	}
	let res = sum(l);
	let curSum = 0;

	for (let i = 0; i < l; i++) {
		curSum += arr[i];
	}
	if (res === curSum){
		return null;
	} else {
		return sum(l+1) - curSum;
	}
}

console.log(missing([]))                         // undefined
console.log(missing([1, 4, 3]))                  // 2
console.log(missing([2, 3, 4]))                  // 1
console.log(missing([5, 1, 4, 2]) )              // 3
console.log(missing([1, 2, 3, 4]))               // undefined

// Task 20
// Реализуйте класс LinkedList, не используя встроенные массивы JavaScript ( [] ). Ваш LinkedList должен поддерживать лишь 2 метода: add() и has().
class LinkedList {
    constructor() {
        this.obj={...arguments}
    }
    add(f){
        let lastEl =Object.keys(this.obj)
        this.obj[lastEl.length]=f
    }
    has(f){
        let lastEl =Object.keys(this.obj)
        for(let i = 0; i<lastEl.length;i++){
            if(this.obj[i]===f){
                return true
            }
        }
        return false
    }

}
let list = new LinkedList(1, 2, 3)
console.log(list.add(4))                           // undefined
console.log(list.add(5))                           // undefined
console.log(list.has(1))                           // true
console.log(list.has(4))                           // true
console.log(list.has(6))
console.log(list)

// Task 21
// Что выведет консоль?

Promise
    .resolve()
    .then(() => console.log(1))
    .then(() => console.log(2))
    .then(() => console.log(3));

Promise
    .resolve()
    .then(() => console.log(4))
    .then(() => console.log(5))
    .then(() => console.log(6));
//1.4.2.5.3.6