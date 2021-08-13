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
