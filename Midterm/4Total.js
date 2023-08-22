// function totalVolume(...shapes) {
//     let total = 0;
  
//     for (let shape of shapes) {
//       if (shape.length === 3) {
//         const [length, width, height] = shape;
//         const volume = length * width * height;
//         total += volume;
//       }
//     }
  
//     return total;
//   }
  
// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
// console.log(totalVolume([2, 2, 2], [2, 1, 1]));
// console.log(totalVolume([1, 1, 1]));
  


//   function sum(...args) {
//     let sum = 0;
//     for (let arg of args) sum += arg;
//     console.log(sum);
//     return sum;
//   }
  
//   let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
//   console.log(x);


// function totalVolume(...args) {
//     let count = []
//     cal = 1;
//     plus = 0
//     for ( let index = 0 ; index< args.length; index ++ ) {
//         for ( let j of args[index]){
//             cal *= j ;
//             //console.log(cal);
//         }
//         plus += cal;
//         cal = 1;
//     }
//     console.log(plus);
// }
// totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])
// totalVolume([2, 2, 2], [2, 1, 1])
// totalVolume([1, 1, 1])