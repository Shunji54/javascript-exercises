const palindromes = function (str) {
    let re = /[\W_]/g;
    let lowRegStr = str.toLowerCase().replace(re, '');
    console.log(lowRegStr);
    let reverseStr = lowRegStr.split('').reverse().join('');
    console.log(reverseStr);
    return reverseStr === lowRegStr;
};

// Do not edit below this line
module.exports = palindromes;
