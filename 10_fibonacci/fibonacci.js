const fibonacci = function(num) {
  if(num == 1 || num == 2) return 1;
  if(num < 0) return "OOPS"
  let left = 1;
  let right = 1;
  let sum = 0;
  for (let i = 2; i < num; i++) {
    sum = left + right;
    left = right;
    right = sum;
  }
  return sum;
};

// Do not edit below this line
module.exports = fibonacci;
