const ftoc = function(far) {
    let temp = Math.round(((far-32) * (5/9)) * 10) / 10;
    return temp
};

const ctof = function(cel) {
  let temp = Math.round(((cel*(9/5)) + 32)*10) / 10;
  return temp
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
