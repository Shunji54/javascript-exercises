const fibonacci = function(number) {
    if (Number(number) < 0) {
        return "OOPS";
    } else if (Number(number) <= 2) {
        return 1;
    }
    let first = 1;
    let second = 1;
    let sum = 0;
    for (i = 2; i<Number(number) ;i++) {
        sum = first+second;
        first = second
        second = sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
