const palindromes = function (string) {
  stringArray = string
    .replaceAll(" ", "")
    .toLowerCase()
    .split("")
    .filter((char) => char.toLowerCase() != char.toUpperCase());
  return stringArray.join("") == stringArray.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
