function totalVolume(...args) {
    let total = 1;
    let total2 = 0;
    let arr1 = [];
    let arr2 = [];

    for( i = 0; i < args.length; i++){
        for(j = 0; j < args[i].length; j++){
            // console.log(args[i]);
            // console.log(j);
            total *= args[i][j]
            if(j == 2){
            arr1.push(total)
            total = 1
        } 
        }
        }   
        for( k = 0; k < arr1.length; k++){
            total2 += arr1[k]
            arr2.push(total2)
        }
        let result = arr2.length -1 
    return arr2[result] ;
}
  
console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
console.log(totalVolume([2, 2, 2], [2, 1, 1]));
console.log(totalVolume([1, 1, 1]));
  


// //   function sum(...args) {
// //     let sum = 0;
// //     for (let arg of args) sum += arg;
// //     console.log(sum);
// //     return sum;
// //   }
  
// //   let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
// //   console.log(x);


// function sum(x, y, z) {
//     return x + y + z;
// }
// let numbers = [2, 2, 2];
// console.log(...numbers); // 6


