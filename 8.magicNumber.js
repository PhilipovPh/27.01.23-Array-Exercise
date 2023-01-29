function solve(arr, sum) {
    let totalSum = Number(sum);

    for (let i = 0; i < arr.length; i++) {
        let firstNumb = Number(arr[i]);
        let secondNumb = 0;
        for (let j = i + 1; j < arr.length; j++) {
            secondNumb = Number(arr[j]);
            let magicNumb = firstNumb + secondNumb;
            if (magicNumb === totalSum) {
                console.log(`${firstNumb} ${secondNumb}`);

            }
        }
    }
}
solve([1, 7, 6, 2, 19, 23], 8);