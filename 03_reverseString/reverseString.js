const reverseString = function(word) {
  stringArray = word.split("");
  let stringLength = stringArray.length;
  result = [];
  for(let i = 0; i < stringLength; i++) {
    result.push(stringArray.pop());
  }
  result = result.join("");
  return result;
};

// Do not edit below this line
module.exports = reverseString;
