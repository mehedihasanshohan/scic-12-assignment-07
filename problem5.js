// Problem 5: Remove Duplicates from an Array
// Write a function that removes all duplicate numbers from an array.

// Example:
// Input: [1, 2, 2, 3, 4, 4]
// Output: [1, 2, 3, 4]

function removeDuplicates(array) {
  let unique = [];

  for (let i = 0; i < array.length; i++) {
    if (unique.indexOf(array[i]) === -1) {
      unique.push(array[i]);
    }
  }

  return unique;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));
