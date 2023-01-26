function solve(arr) {
    let newArr = [];
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < arr.length; i++) {
        let num = Number(arr[i]);
        sum1 += num;
        if (num % 2 === 0) {
            newArr.push(num + i);
        } else {
            newArr.push(num - i);
        } 
    }
    for (let i = 0; i < newArr.length; i++) {
        sum2 += Number(newArr[i]);
        
    }

    console.log(newArr);
    console.log(sum1);
    console.log(sum2);
}
solve([5, 15, 23, 56, 35]);