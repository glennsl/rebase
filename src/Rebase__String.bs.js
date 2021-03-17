'use strict';


function isEmpty(s) {
  return s.trim().length === 0;
}

function join(x) {
  if (x) {
    return x.hd + join(x.tl);
  } else {
    return "";
  }
}

function joinWith(sep, x) {
  if (!x) {
    return "";
  }
  var ss = x.tl;
  var s = x.hd;
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
