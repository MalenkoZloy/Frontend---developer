/*
Что нужно сделать
Создайте в файле task_1.js функцию с названием getOlderUser(), которая будет определять,
кто из двух пользователей старше. Аргументами функции являются два пользователя в виде двух объектов.
Функция должна вернуть с помощью команды return имя старшего пользователя.

Созданную функцию нужно вызвать, передав ей два объекта: user1 и user2.
Результат, который вернёт функция, необходимо вывести в консоль.
*/

const oneUser = {
    name: 'Ivan',
    age: 30,
}

const twoUser = {
    name: 'Tany',
    age: 29,
}

function getOlderUser(oneUser, twoUser) {
    if (oneUser.age > twoUser.age) {
        return oneUser.name;
    } else {
        return twoUser.name;
    }
}

let result = getOlderUser(oneUser, twoUser);

console.log(result);