function solve(arr1, arr2) {
    let newArr = [];
    let numbArr1 = 0;
    let numbArr2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        numbArr1 = arr1[i];
        numbArr2 = arr2[i];

        if ( i % 2 == 0) {
            newArr.push(Number(numbArr1) + Number(numbArr2));
        } else {
            newArr.push(numbArr1.toString() + numbArr2.toString());
        }
    }
    console.log(newArr.join(' - '));
}

solve(['5', '15', '23', '56', '35'],

['17', '22', '87', '36', '11'])