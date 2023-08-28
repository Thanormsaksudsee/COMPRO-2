function isPalindrome(st){
    let arr = []
    for(i of st){
        arr.push(i)
    }
    if(arr.length % 2 == 0){
        return false
    }
    let noArr = Math.floor(arr.length /2)
    let first = []
    let last = []

    for(let i = 0; i < noArr; i++){
    first.push(arr[i])
}
    for(let i = noArr+1; i < arr.length; i++){
    last.push(arr[i])
}
    let k = 0;
    let l = last.length -1;
    let ox = [];
     
    while(l != k){
        console.log(k); 
        console.log(l); 
        if(first[k] === last[l]){
            ox.push(first[l]) }
        k++;
        l--;
        
        if(k == l){
            break
        }
    }
    return ox
}


console.log(isPalindrome("racecar")); // ควรคืนค่า true
// console.log(isPalindrome("hello")); // ควรคืนค่า false
// console.log(isPalindrome("helloo")); // ควรคืนค่า false