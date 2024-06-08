
const products = [
    {
        id: 0,
        title: 'obj0',
        parent: null
    },
    {
        id: 1,
        title: 'obj1',
        parent: 0
    },
    {
        id: 2,
        title: 'obj2',
        parent: 0
    },
    {
        id: 3,
        title: 'obj3',
        parent: null
    },
    {
        id: 4,
        title: 'obj4',
        parent: 3
    },
    {
        id: 5,
        title: 'obj5',
        parent: 3
    },
    {
        id: 6,
        title: 'obj6',
        parent: 5
    },
    {
        id: 7,
        title: 'obj7',
        parent: 0
    },
    {
        id: 8,
        title: 'obj8',
        parent: 3
    },
    {
        id: 9,
        title: 'obj9',
        parent: 0
    },
    {
        id: 10,
        title: 'obj10',
        parent: 3
    },
    {
        id: 11,
        title: 'obj11',
        parent: 1
    },
    {
        id: 12,
        title: 'obj12',
        parent: 0
    },

]



// console.log('hello');            // obj.map((obj) => {
//вывести иерархию ul - li родительских и дочерних
//export const Test2 = () => {
// const tree = new Map();
// const gogo = (array) => {
//     array.map((obj, index) => {
//         if (obj.parent) {
//             tree.set(array.find(item => item.id == obj.parent), obj)
//             return gogo(obj.parent);
//         }

//     });
// }

// console.log(gogo(products));

//     return (
//         <>
//             <h1>Test</h1>
//             <ul>{products.map((o) => { gogo(o)/* return (<li>o.title</li>) */ })}</ul>
//         </>
//     )
// }

/////////////////сумма всех работников, рекурсия//////////////
// let company = { // тот же самый объект, сжатый для краткости
//     sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
//     development: {
//         sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
//         internals: [{ name: 'Jack', salary: 1300 }, { name: 'Rom', salary: 3300 },
//         ]
//     }
// };

// const sum = (data) => {
//     if (Array.isArray(data)) {
//         console.log(data.reduce((sum, obj) => sum += obj.salary, 0));
//         return data.reduce((sum, obj) => sum += obj.salary, 0);
//     }
//     else {
//         let total = 0;
//         for (current in data) {
//             total += sum(data[current]);
//         }
//         return total;
//     }

// }
// console.log(sum(company));