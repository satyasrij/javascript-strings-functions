
function reverseString(str) {
  var reversedStr = "";

  for (var i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }

  return reversedStr;
}

const reversed = reverseString("Hello World");
console.log("Reversed string:", reversed);


