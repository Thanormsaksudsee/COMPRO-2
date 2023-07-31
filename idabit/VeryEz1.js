function countTrue(arr) {
    let count = 0;
    for (let name = 0; name < arr.length; name++){
        if (arr[name] === true) {
            count++;
            
        }
    }
    return count;
}



console.log(countTrue([true, false, false, true, false]))

console.log(countTrue([false, false, false, false]))

console.log(countTrue([]))