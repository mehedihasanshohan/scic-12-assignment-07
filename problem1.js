// Problem 1: Reverse a String
// Write a function that takes a string and returns it reversed.

// Example:
// Input: "hello"
// Output: "olleh"

function reverseString(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }

  return reversed;
}

console.log(reverseString("hello"));
