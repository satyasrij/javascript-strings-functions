function checkPalindrome(str) {
    var reversedStr = str.split("").reverse().join("");
  
    if (str === reversedStr) {
      console.log(str + " is a palindrome.");
    } else {
      console.log(str + " is not a palindrome.");
    }
  }
  
  checkPalindrome("satyasri");
  checkPalindrome("madam");
  