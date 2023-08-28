function createIncrementFunction() {
    let counter = 0;
  
    return function() {
      counter++;
      return counter;
    };
  }
  
  const incrementByOne = createIncrementFunction();
  
  console.log(incrementByOne()); // คืนค่า 1
  console.log(incrementByOne()); // คืนค่า 2
  console.log(incrementByOne()); // คืนค่า 3
  