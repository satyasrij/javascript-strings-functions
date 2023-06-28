function findLargestNumber(numbers) {
  var largestNumber = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largestNumber) {
      largestNumber = numbers[i];
    }
  }

  return largestNumber;
}
const numbers = [5, 10, 3, 8, 15];
const largestNumber = findLargestNumber(numbers);
console.log("Largest number:", largestNumber);
