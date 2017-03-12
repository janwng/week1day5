function isPalindrome(s) {
  var noSpace = s.split(" ").join("");
  var stringReverse = noSpace.split("").reverse().join("");

  // console.log("original:", s);
  // console.log("after palindrome: ", stringReverse);
  // console.log("after noSpace: ", noSpace);

  return noSpace === stringReverse;
}

module.exports = isPalindrome;

console.log(isPalindrome('a man a plan a canal panama'));
// console.log(isPalindrome('i am funny'));
