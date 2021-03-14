'use strict';


function isEmpty(s) {
  return s.trim().length === 0;
}

function join(param) {
  if (param) {
    return param.hd + join(param.tl);
  } else {
    return "";
  }
}

function joinWith(sep, param) {
  if (!param) {
    return "";
  }
  var ss = param.tl;
  var s = param.hd;
  if (ss) {
    return s + (sep + joinWith(sep, ss));
  } else {
    return s;
  }
}

exports.isEmpty = isEmpty;
exports.join = join;
exports.joinWith = joinWith;
/* No side effect */
