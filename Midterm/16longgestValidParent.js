function longestValidParentheses(s) {
    const stack = [];
    let maxLength = 0;
    
    stack.push(-1);
  
    for (let i = 0; i < s.length; i++) {
      if (s[i] === "(") {
        stack.push(i);
      } else {
        stack.pop();
        if (stack.length === 0) {
          stack.push(i);
        } else {
          maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
        }
      }
    }
    
    return maxLength;
  }
  
  console.log(longestValidParentheses("(()")); // 2
  console.log(longestValidParentheses(")()())")); // 4
  console.log(longestValidParentheses("()))))(()())(")); // 6
  