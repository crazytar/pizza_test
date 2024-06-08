
const productsArr = [
    {
        "id": 0,
        "imageUrl": "/img/pizzas/1.jpg",
        "title": "Пепперони Фреш с перцем",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 803,
        "category": 0,
        "rating": 4
    },
    {
        "id": 1,
        "imageUrl": "/img/pizzas/1.jpg",
        "title": "Сырная",
        "types": [
            0
        ],
        "sizes": [
            26,
            40
        ],
        "price": 245,
        "category": 0,
        "rating": 6
    },
    {
        "id": 2,
        "imageUrl": "/img/pizzas/1.jpg",
        "title": "Цыпленок барбекю",
        "types": [
            0
        ],
        "sizes": [
            26,
            40
        ],
        "price": 295,
        "category": 1,
        "rating": 4
    },
    {
        "id": 3,
        "imageUrl": "/img/pizzas/1.jpg",
        "title": "Кисло-сладкий цыпленок",
        "types": [
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 275,
        "category": 2,
        "rating": 2
    },
    {
        "id": 4,
        "imageUrl": "/img/pizzas/1.jpg",
        "title": "Чизбургер-пицца",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 415,
        "category": 3,
        "rating": 8
    },
    {
        "id": 5,
        "imageUrl": "/img/pizzas/1.jpg",
        "title": "Крэйзи пепперони",
        "types": [
            0
        ],
        "sizes": [
            30,
            40
        ],
        "price": 580,
        "category": 2,
        "rating": 2
    },
    {
        "id": 6,
        "imageUrl": "/img/pizzas/1.jpg",
        "title": "Пепперони",
        "types": [
            0,
            1
        ],
        "sizes": [
            26,
            30,
            40
        ],
        "price": 675,
        "category": 1,
        "rating": 9
    }

]

//var setSortType = Math.floor(Math.random() * 2);
// var sortOrder = Math.floor(Math.random());
// var setSortType = 2;
// var sortOrder = 1;
// console.log('setSortType ', setSortType, 'sortOrder ', sortOrder);

// productsArr
//     .filter(
//         (obj) => obj.id === 6 ? false : true
//     )
//     .sort((a, b) => {
//         let res = 0;
//         if (setSortType === 0) {
//             sortOrder > 0 ? res = (a.rating - b.rating) : res = (b.rating - a.rating);
//         } else if (setSortType === 1) {
//             sortOrder > 0 ? res = (a.price - b.price) : res = (b.price - a.price);
//         } else if (setSortType === 2) {
//             sortOrder > 0 ? (a.title > b.title ? res = 1 : res = -1) : (a.title > b.title ? res = -1 : res = 1);

//         }
//         return res;
//     })
//     .map(
//         (obj) => console.log(obj)
//     )

// console.log(productsArr);
/////////////////Hoisting///////////////////
// console.log(typeof f1);
// console.log(typeof f2);
// console.log(typeof f3);

// function f1() { };
// var f2 = function () { };
// let f3 = function () { };
//так же думаю и с const
//////////////////////////////////////
// var myname = "John";
// function fn() {
//     console.log(myname);
//     var myname = "Tom";
//     console.log(myname);
// }
// fn();
/////////////////////////////////////////
//var имеет область действия функции;
//объявления var поднимаются, но не инициализируются.
// console.log(name); // undefined
// var name = "Alex";
// console.log(a); // undefined
// var a = 1;
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 2;
// console.log(c); // ReferenceError: Cannot access 'c' before initialization
// const c = 5;
//////////////////////////////////////////////
// var res = []

// for (var item of ["alpha", "sigma", "omega"])
//     res.push(() => console.log(item))

// res[0]()  // omega
// res[1]()  // omega
// res[2]()  // omega
// задача 1 college.arthur-nesterenko.dev/javascript/hoisting
// Напишите функцию, чтобы найти наиболее частый элемент в заданном массиве.
/*mostFrequent([3, 'c', 'c', 'c', 2, 'd', 'c', 3, 'c', 2, 4, 9, 3]); // c встречается 5 раз
function mostFrequent(arr) {
    const freqItemsObj = {}; //create Obj with arr[i]: count
    var count = 0;
    var maxvalue = 0, maxkey = 0;
    for (let i of arr) {
        if (!freqItemsObj[i]) freqItemsObj[i] = 0; //if key arr[i] not exist
        freqItemsObj[i]++; //create pair i : count
        if (freqItemsObj[i] > maxvalue) {
            maxvalue = freqItemsObj[i];
            maxkey = i;
        }

    }
    //maxkey = freqItemsObj.keys(object).find(key => object[key] === maxvalue);//keys returns arr of keys of Obj
    // for (const key in freqItemsObj) { //runs on Obj iteracts keys

    // }
    console.log(`самый частый символ ${maxkey} встречается ${maxvalue} раз`);
}*/
// задача 2 college.arthur-nesterenko.dev/javascript/hoisting
//Напишите функцию для поиска и удаления повторяющихся значений в массиве. Функция должна возвращать массив повторяющихся значений.
// console.log(removeDuplicates([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3])) // [3, 'a', 2, 4, 9]
// function removeDuplicates(arr) {
//     const elements = {};
//     for (let i of arr) {
//         if (!elements[i]) elements[i] = i;
//     }
//     return Object.keys(elements);

// }
////////////////Из собеса с Ютуба, на область видимости //////////////
// var o = {};var i = 0;
// function f1() {
//     o.a = 'a';
//     i++; //здесь ищет в глобальном лексическом окружении
// };
// f1();console.log(o, i);
// f2(o, i)
// function f2(o, i) {
//     o.b = 'b';
//     i++; //здесь ищет в своём лексическом окружении (там же параметры и тп)
// };console.log(o, i);
////////////////////////////////Вложенные функции, область видимости////////////////////////
/*Когда код хочет получить доступ к переменной – сначала происходит поиск во внутреннем лексическом окружении,
 затем во внешнем, затем в следующем и так далее, до глобального.
Если переменная не была найдена, это будет ошибкой в строгом режиме (use strict).
!!!Без строгого режима, для обратной совместимости, присваивание несуществующей переменной создаёт новую глобальную переменную с таким же именем. */



// const makeCounter = () => {
//     let count = 0;
//     //внутр функция созданная внутри makeCounter запомиает своё внешнее окружение
//     // return () => (count + 1);// так не работает потому что count не изменяем
//     //return count++ //TypeError: counter is not a function
//     return () => count++;// так работает

// }
// let counter = makeCounter();//создаём функцию, в переменной counter внутрення ф-я с окружением внешней makeCounter
// console.log(counter());
// let counter2 = counter;
// console.log(counter2()); console.log(counter2());
/*counter.[[Environment]] имеет ссылку на {count: 0} лексического окружения.
Так функция запоминает, где она была создана, независимо от того, где она вызывается.
Ссылка на [[Environment]] устанавливается один раз и навсегда при создании функции.*/

///////////////////Видна ли переменная?///////////////////
// var x = 1; //или let
// function func() { //фунция обьявлена раньше (хайсинг) чем let
//     console.log(x); // ReferenceError: Cannot access 'x' before initialization
//     let x = 2;
// }
// func();
////////////////преобразовать массив в обьект с reduce///////////////////
///// что интересно, без квадратных скобок он просто ключ как строку берёт а не из цикла
// const arr = ['zero', 'one', 'two'];

// const obj = arr.reduce((accumulator, value, index) => {
//     return { ...accumulator, [value]: value };
// }, {});
// console.log(obj);
////////////////////////////////Cannot access 'x' before initialization, why?//////////////
// let x = 1;
// function func() {
//     console.log(x); // ?

//     let x = 2;
// }
// func();
//////////////сделать чтобы работала
// function makeArmy() {
//     let shooters = [];

//     let i = 0;
//     while (i < 10) {
//         let shooter = function () { // функция shooter
//             console.log(i); // должна выводить порядковый номер
//         };
//         shooters.push(shooter); // и добавлять стрелка в массив
//         i++;
//     }

//     // ...а в конце вернуть массив из всех стрелков
//     return shooters;
// }

// let army = makeArmy();
// console.log(army);
// army[5]();
/////////////////сумма всех работников, рекурсия//////////////
let company = { // тот же самый объект, сжатый для краткости
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }, { name: 'Rom', salary: 3300 }]
    }
};

// Функция для подсчёта суммы зарплат
function sumSalaries(department) {

    if (Array.isArray(department)) {
        return department.reduce((sum, current) => sum + current.salary, 0)
    } else {
        let total = 0;
        for (obj in department) {
            total += sumSalaries(department[obj]);
        }
        return total;
    }


}
console.log(sumSalaries(company));
