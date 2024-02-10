/*
Задача 2
Цель задачи
Научиться перемешивать массив чисел.

Что нужно сделать
Создайте с помощью цикла for массив упорядоченных чисел с количеством чисел, равным count. Например:
count = 5; соответствует массив [1,2,3,4,5];
count = 7; соответствует массив [1,2,3,4,5,6,7];
count = 3; соответствует массив [1,2,3].
С помощью второго цикла перемешайте этот массив.
Выведите получившийся результат на экран с помощью console.log.
Проверка результата
Для любых значений count вы должны получать новый массив с заданной длиной. Например:

count = 5; пример результата вывода в консоль: [2,5,1,3,4];
count = 7; пример результата вывода в консоль: [5,1,3,2,7,6,4];
count = 3; пример результата вывода в консоль: [2,1,3].
Критерии оценки
Код выводит на экран массив с заданной длиной.

Рекомендации к выполнению
Надёжно перемешать массив вы сможете с помощью так называемого алгоритма Фишера — Йетса (Fisher — Yates).
С помощью цикла вы получаете индекс (порядковый номер) каждого элемента массива по очереди. После получения индекса i вам нужно сгенерировать индекс произвольного элемента j.
Генерировать произвольные числа от 0 до count вы уже умеете. Так вы получите два индекса элементов. Теперь остаётся поменять их местами.
Чтобы поменять местами два элемента массива, вы можете использовать следующий способ со вспомогательной переменной temp:

temp = myArray[i];
myArray[i] = myArray[j];
myArray[j] = temp;
Все действия с получением произвольного числа j и перестановка чисел выполняются внутри тела цикла.

Более подробную информацию об алгоритме перемешивания вы без труда сможете найти в любом поисковике.
*/

const count = 7;
const arr = [5,1,3,2,7,6,4];

// for(let i = 1; i < count +1; i++){
//     arr.push(i);
// }
// console.log('Упорядоченный массив: ' + arr);

for(let i = arr.length - 1; i > 0; i--){ // i = 6, потому что ! i это arr.length и идем мы с конца массива;
    const j = Math.floor(Math.random() * (i + 1));
    const temp = arr[i]; // в переменную temp записываем 6й элемент массива arr (ебанная 4); 
    arr[i] = arr[j]; // меняем 4 местом с рандомным числом из массива j
    arr[j] = temp;
}

console.log('Перемешанный массив: ' + arr);