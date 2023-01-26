function solve(arr1, arr2) {
    let element1 = '';
    let element2 = '';
    for (let i = 0; i < arr1.length; i++) {
        element1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            element2 = arr2[j];
            if (element1 === element2) {
                console.log(element2);
            }
            
        }
        
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],

['Petar', 10, 'hey', 4, 'hello', '2']);