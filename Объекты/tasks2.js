/*
Задача 2* (необязательное задание)
Для получения большей практики вы можете попробовать определить старшего пользователя из массива пользователей.

Напишите в файле task_1.js функцию getOlderUserArray(), в которую будете передавать массив объектов с пользователями.
Функция должна вернуть имя старшего пользователя.

Пример массива объектов пользователя:
*/

let allUsers = [
    { name: 'Валя', age: 11 },
    { name: 'Таня', age: 24 },
    { name: 'Рома', age: 21 },
    { name: 'Надя', age: 34 },
    { name: 'Антон', age: 7 }
]

function getOlderUserArray(elemetUser) {
    let oldestUser = elemetUser[0];

    for (let i = 0; i < elemetUser.length; i++) {
        if (elemetUser[i].age > oldestUser.age) {
            oldestUser = elemetUser[i];

        }
    } return oldestUser.name
}

let resultFun = getOlderUserArray(allUsers);

console.log(resultFun);

