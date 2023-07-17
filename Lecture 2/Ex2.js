// function equation(n1) {
//    console.log(eval(n1))
// }

// equation("1+1");
// equation("7*4-2");
// equation("1+1+1+1+1");


   
function equation(expression) {
   const operators = {
     "+": (a, b) => a + b,
     "-": (a, b) => a - b,
     "*": (a, b) => a * b,
     "/": (a, b) => a / b,
   };
 
   const parts = expression.split(" ");
   let result = parseFloat(parts[0]);
 
   for (let i = 1; i < parts.length; i += 2) {
     const operator = parts[i];
     const operand = parseFloat(parts[i + 1]);
 
     if (operators.hasOwnProperty(operator)) {
       result = operators[operator](result, operand);
     }
   }
 
   return result;
 }
 
 console.log(equation("1+1")); // Output: 2
 console.log(equation("7*4-2")); // Output: 26
 console.log(equation("1+1+1+1+1")); // Output: 5