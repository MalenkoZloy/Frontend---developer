const arr = [123, 121, 231, 412, 1, 23, 5, 654, 234, 573, 234, 67, 44543, 34];


function bubble(BubbArr) {
    for (let i = 0; i < BubbArr.length - 1; i++) {
        for (let j = i + 1; j < BubbArr.length; j++) {
            if (BubbArr[i] > BubbArr[j]) {
                const buuf = BubbArr[i];
                BubbArr[i] = BubbArr[j];
                BubbArr[j] = buuf;
            }
        }
    } return BubbArr;
}


console.log(bubble(arr));