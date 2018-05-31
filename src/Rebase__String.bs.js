'use strict';


function isEmpty(s) {
  return s.trim().length === 0;
}

function join(param) {
  if (param) {
    return param[0] + join(param[1]);
  } else {
    return "";
  }
}

function joinWith(sep, param) {
  if (param) {
    var ss = param[1];
    var s = param[0];
    if (ss) {
      return s + (sep + joinWith(sep, ss));
    } else {
      return s;
    }
  } else {
    return "";
  }
}

exports.isEmpty = isEmpty;
exports.join = join;
exports.joinWith = joinWith;
/* No side effect */
