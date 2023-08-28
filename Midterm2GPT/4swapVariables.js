function swapValues(a, b) {
    var temp = a;
    a = b;
    b = temp;
    return [a, b];
  }
  
  var x = 5;
  var y = 10;
  
  console.log("Before swapping: x =", x, "y =", y);
  
  var swappedValues = swapValues(x, y);
  x = swappedValues[0];
  y = swappedValues[1];
  
  console.log("After swapping: x =", x, "y =", y);
  