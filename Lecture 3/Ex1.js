let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

function compareArrays(arr1, arr2) {
    let result = true;
    if (arr1.length != arr2.length) {
        result = false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                result = false;
            }
        }
    }
    return result;
}


console.log(common(values1, values2));
console.log(common(values1, values3));
console.log(common(values2, values3));


