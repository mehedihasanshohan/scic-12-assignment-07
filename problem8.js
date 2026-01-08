// Problem 8: Capitalize First Letter of Each Word
// Write a function that capitalizes the first letter of each word in a string.

// Example:
// Input: "hello world"
// Output: "Hello World"

function capitalizeWords(string) {
  let result = "";
  let makeCapital = true;

  for (let i = 0; i < string.length; i++) {
   if (makeCapital && string[i] !== " ") {
      result += string[i].toUpperCase();
      makeCapital = false;
    } else {
      result += string[i];
    }

    if (string[i] === " ") {
      makeCapital = true;
    }
  }

  return result;
}

console.log(capitalizeWords("hello i am mehedi hasan shohan"));
