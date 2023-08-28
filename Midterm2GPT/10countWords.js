function countWords(st){
    let j = 1
    for(i of st){
        if(i == ' '){
            j++;

        }

    }
    return j
    }






console.log(countWords("Hello, how are you?")); // ควรคืนค่า 4
console.log(countWords("Programming is fun and challenging")); // ควรคืนค่า 5
