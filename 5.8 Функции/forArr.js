// просто тренировка написания пузырьковой сортировки

let arrRandom = [];

for (let i = 0; i < 50 + 1; i++) {
    arrRandom.push(Math.floor(Math.random() * 100))
}

function BuubSort(testCaseArr) {
    for (let i = 0; i < testCaseArr.length - 1; i++) {
        for (let j = i + 1; j < testCaseArr.length; j++) {
            if (testCaseArr[i] > testCaseArr[j]) {
                const buff = testCaseArr[i];
                testCaseArr[i] = testCaseArr[j];
                testCaseArr[j] = buff;
            }
        }
    } return testCaseArr;

}

console.log(BuubSort(arrRandom));