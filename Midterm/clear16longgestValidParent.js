function longestValidParentheses(s) {
    let left = [];
    let right = []

    for(i of s){
      if(i == '('){
      left.push(i);
    }else{
      right.push(i);
    }
    
  }
  let resultMax = Math.max(left.length,right.length);
  let resultMin = Math.min(left.length,right.length);
  let resultSolution = resultMax - resultMin
  let mixRL = resultMax+resultMin;
  let result = mixRL-resultSolution

    
    return result
  }
  
  console.log(longestValidParentheses("(()")); // 2
  console.log(longestValidParentheses(")()())")); // 4
  console.log(longestValidParentheses("()))))(()())(")); // 6
  




// // ตัวอย่างการใช้ Math.max กับตัวเลข
// let maxNumber = Math.max(10, 5, 20, 8, 15);
// console.log(maxNumber); // 20

// // ตัวอย่างการใช้ Math.max กับตัวแปร
// let a = 30;
// let b = 15;
// let c = 25;
// let maxVariable = Math.max(a, b, c);
// console.log(maxVariable); // 30

