function solve(arr) {
    let resultArr = [];


    for (let i = 0; i < arr.length; i++) {
        let currentNumb = arr[i];
        let isBigger = true;
        for (let j = i + 1; j < arr.length; j++) {
            if (currentNumb <= arr[j]) {
                isBigger = false;
            }
        }
        if (isBigger) {
            resultArr.push(arr[i]);
        }
    }
    console.log(resultArr.join(' '));
}
solve([14, 24, 3, 19, 15, 17])