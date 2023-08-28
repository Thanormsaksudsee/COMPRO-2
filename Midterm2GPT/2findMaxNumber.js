function findMaxNumber(n){
    let sort = n.sort(function(a,b){return a-b})
    let last = sort.length-1
    let result = sort[last]
    return result

}



console.log(findMaxNumber([3, 9, 1, 7, 2])); // ควรคืนค่า 9
console.log(findMaxNumber([-5, -2, -8, -1])); // ควรคืนค่า -1
