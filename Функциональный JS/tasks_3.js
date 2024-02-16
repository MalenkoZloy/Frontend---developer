/*
3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева 
DOM и название класса в качестве аргументов и возвращает первый найденный элемент 
с указанным классом в этом дереве.
Пример
const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'my-class');
console.log(targetElement);
*/

console.log("Ищем по id:", document.getElementById("root"))
console.log("Ищем по class:", document.getElementsByClassName("test1"))

// document стандартный браузерный объект в котором в том числе хранится наш html файл