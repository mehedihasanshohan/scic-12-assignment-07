// Problem 3: Check for Palindrome
// Write a function that checks if a string is a palindrome (reads the same forward and backward).

// Example:
// Input: "madam"
// Output: true
// Input: "hello"
// Output: false

function isPalindrome(string) {
  let reversed = "";

  for (let i = string.length - 1; i >= 0; i--) {
    reversed = reversed + string[i];
  }

  if (string === reversed) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("hello"));
