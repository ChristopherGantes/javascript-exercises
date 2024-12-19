const sumAll = function (leftNum, rightNum) {
  if (leftNum < 0 || rightNum < 0) return "ERROR";
  if (typeof leftNum != "number" || typeof rightNum != "number") return "ERROR";
  if (leftNum % 1 > 0 || rightNum % 1 > 0) return "ERROR";

  if (leftNum > rightNum) {
    let temp = rightNum;
    rightNum = leftNum;
    leftNum = temp;
  }

  result = 0;
  for (let i = leftNum; i <= rightNum; i++) {
    result += i;
  }
  return result;
};

// Do not edit below this line
module.exports = sumAll;
