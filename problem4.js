// Problem 4: Find the Maximum Number
// Write a function that takes an array of numbers and returns the largest number.

// Example:
// Input: [5, 1, 9, 3]
// Output: 9

function findMax(array) {
  let max = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
  }

  return max;
}

console.log(findMax([5, 1, 9, 3]));
