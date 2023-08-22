function frequencySort (sting){
    let result = ''
    let list = []
    let list2 = []
    for(let i = 0 ; i < sting.length; i++){
        for(let j = 0 ; j < i; j++){
            if(sting[i] === sting[j]){
                list.push(sting[i])
            }else{
                list2.push(sting[i])
            }
         }
    }return list+list2

}
console.log(frequencySort("tree"));
console.log(frequencySort("cccaaa"));
console.log(frequencySort("Aabb"));


// let = string = "tree"
// for(let i of string){
//     console.log(i);
// }


// function frequencySort(s) {
//     const charCount = new Map();

//     for (const char of s) {
//         charCount.set(char, (charCount.get(char) || 0) + 1);
//     }

//     const sortedChars = Array.from(charCount.keys()).sort((a, b) => charCount.get(b) - charCount.get(a));

//     let sortedString = "";
//     for (const char of sortedChars) {
//         sortedString += char.repeat(charCount.get(char));
//     }

//     return sortedString;
// }

// console.log(frequencySort("tree"));  
// console.log(frequencySort("cccaaa")); 
// console.log(frequencySort("Aabb")); 
