'use strict';


function toInt(v) {
  return v;
}

var n = [1];

function make() {
  n[0] = (n[0] << 1);
  return n[0];
}

function many(param) {
  if (param) {
    return param[0] | many(param[1]);
  } else {
    return 0;
  }
}

exports.toInt = toInt;
exports.make  = make;
exports.many  = many;
/* No side effect */
