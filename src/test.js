
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
var setSortType = 2;
var sortOrder = 1;
console.log('setSortType ', setSortType, 'sortOrder ', sortOrder);

productsArr
    .filter(
        (obj) => obj.id === 6 ? false : true
    )
    .sort((a, b) => {
        let res = 0;
        if (setSortType === 0) {
            sortOrder > 0 ? res = (a.rating - b.rating) : res = (b.rating - a.rating);
        } else if (setSortType === 1) {
            sortOrder > 0 ? res = (a.price - b.price) : res = (b.price - a.price);
        } else if (setSortType === 2) {
            sortOrder > 0 ? (a.title > b.title ? res = 1 : res = -1) : (a.title > b.title ? res = -1 : res = 1);

        }
        return res;
    })
    .map(
        (obj) => console.log(obj)
    )
    ;
// console.log(productsArr);