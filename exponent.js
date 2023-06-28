function calculatePower(base, exponent) {
    var result = 1;
  
    for (var i = 0; i < exponent; i++) {
      result *= base;
    }
  
    console.log(base + " raised to the power of " + exponent + " is " + result);
  }
  
  calculatePower(4, 5);
  