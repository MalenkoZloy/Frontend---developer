/*
Задача 3
Цель задания
Закрепить полученные знания и опыт в работе с функциями и научиться сортировать массив.

Что нужно сделать
Создайте функцию arrSort(), аргументом (параметром) которой будет массив. Задача функции — сделать сортировку элементов переданного массива по возрастанию.
Функция должна вернуть отсортированный массив, а результат выполнения функции должен быть выведен в консоль с помощью console.log.

Проверка результата
При вызове функции arrSort() с переданным массивом функция должна вернуть отсортированный массив по возрастанию.

Например:

arrSort([2,5,1,3,4]) — функция вернёт массив [1,2,3,4,5];
arrSort([12,33,3,44,100]) — функция вернёт массив [3,12,33,44,100];
arrSort([0,1]) — функция вернёт массив [0,1].
Рекомендации к выполнению
Есть несколько методов сортировки массивов. Один из простых — метод «пузырька». Узнать о нём можно в видео:
*/

let testCase = [12, 33, 23, 44, 100]; // массив;

// сравниваем индекс с длиной массива i это индекс а length длина массива;
function buffArr(bubble) {
    for (let i = 0; i < bubble.length - 1; i++) { // 3 < 4 (условие входа в цикл);
        for (let j = i + 1; j < bubble.length; j++) { // j присваеваем значение i и + 1 чтобы j была на шаг в переди (дабы было, что с чем сравнивать);
            if (bubble[i] > bubble[j]) { //сравниваем значения
                const buff = bubble[i];
                bubble[i] = bubble[j];
                bubble[j] = buff;
            }
        }
    } return bubble
}

console.log(buffArr(testCase))


// Вариант решения 2;


// function arrSort(a, b){
//     return a -b;
// }

// console.log(testCase.sort(arrSort));

// // Вариант решения 3 (стрелочная функция);


// console.log(testCase.sort((a, b) => { a - b}));