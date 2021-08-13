//  write a function that takes a string and returns a new string with all the vowels removed and then console the result

function removeVowels(str) {
  var vowels = "aeiouAEIOU";
  var newStr = "";
  for (var i = 0; i < str.length; i++) {
    if (vowels.indexOf(str[i]) == -1) {
      newStr += str[i];
    }
  }
  return newStr;
}

console.log(removeVowels("hello"));

// write a function to print a a number of asterisks equal to the length of the string and then console the result

function printAsterisks(str) {
  var asterisks = "";
  for (var i = 0; i < str.length; i++) {
    asterisks += "*";
  }
  return asterisks;
}

console.log(printAsterisks("hello"));
