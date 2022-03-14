const add = function(x,y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(array) {
  let total = 0
  for (i=0;i<array.length;i++) {
    total += array[i];
  }
  return Number(total);
};

const multiply = function(array) {
  let total = 1
  for (i=0;i<array.length;i++) {
    total *= array[i];
  }
  return total;
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
  let total = 1;
	if (x==0 || x==1) {
    return 1;
  }
  else {
    for (i=1; i<x+1; i++) {
      total *= i;
    }
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
