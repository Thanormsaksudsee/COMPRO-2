function countCharacters(st){
    let arr = [];
    for(i of st){
        if(i == ' ')
        continue;
        arr.push(i)
    }
    return arr.length
}




console.log(countCharacters("Hello, world!")); // ควรคืนค่า 12
console.log(countCharacters("JavaScript is fun")); // ควรคืนค่า 15
