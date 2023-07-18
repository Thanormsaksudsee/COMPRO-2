let values1 = ['Apple', 1, false];
let values2 = ['Fries', 9, true,'Mars'];
let values3 = ['Mars', 9, 'Apple'];


for (let i = 0;  i < values1.length; i++){
    for (let j = 0; j < values2.length; j++) {
        if (values1[i] === values2[j]){
            console.log(`The values1 เหมือนกับ values2,ที่คำว่า: ${values1[i]}`);
        }
    }
}

for (let i = 0;  i < values1.length; i++){
    for (let j = 0; j < values3.length; j++) {
        if (values1[i] === values3[j]){
            console.log(`The values1 เหมือนกับ values3,ที่คำว่า: ${values1[i]}`);
        }
    }
}

for (let i = 0;  i < values2.length; i++){
    for (let j = 0; j < values3.length; j++) {
        if (values2[i] === values3[j]){
            console.log(`The values2 เหมือนกับ values3,ที่คำว่า: ${values2[i]}`);
        }
    }
}





// for (let i = 0; i < values1.length; i++) { 
//   if (values2 == values1[i]) {
//     console.log(`The values1 เหมือนกับ values2, ที่คำว่า: ${values1[i]}`);
//   }
//   if (values3.includes(values1[i])) {
//     console.log(`The values1 เหมือนกับ values3, ที่คำว่า: ${values1[i]}`);
//   }
// }
// for (let i = 0; i < values2.length; i++) {
//   if (values3.includes(values2[i])) {
//     console.log(`The values2 เหมือนกับ values3,ที่คำว่า: ${values2[i]}`);
//   }
// }




