'use strict';


function isEmpty(s) {
  return +(s.trim().length === 0);
}

exports.isEmpty = isEmpty;
/* No side effect */
