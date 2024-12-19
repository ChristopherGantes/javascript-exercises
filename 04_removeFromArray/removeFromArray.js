const removeFromArray = function(numbers, ...items ) {
  return numbers.filter((num) => !items.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;
