function countVowels(str) {
  var vowelCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (var char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      vowelCount++;
    }
  }

  console.log("Number of vowels:", vowelCount);
}

countVowels("Hello World");

function countWordsStartingWithVowel(sentence) {
  var wordCount = 0;
  var words = sentence.split(" ");

  for (let word of words) {
    var firstChar = word[0].toLowerCase();
    if (["a", "e", "i", "o", "u"].includes(firstChar)) {
      wordCount++;
    }
  }

  console.log("Number of words starting with a vowel:", wordCount);
}

countWordsStartingWithVowel("Apples are awesome and oranges are orange.");


function removeVowels(sentence) {
  var vowels = ["a", "e", "i", "o", "u"];
  var result = "";

  for (var char of sentence) {
    if (!vowels.includes(char.toLowerCase())) {
      result += char;
    }
  }

  console.log("Remove Vowels:", result);
}

removeVowels("This is a sample sentence.");
