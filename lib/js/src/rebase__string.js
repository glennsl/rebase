'use strict';

var $$String = require("bs-platform/lib/js/string.js");

function isEmpty(s) {
  return +($$String.trim(s).length === 0);
}

exports.isEmpty = isEmpty;
/* No side effect */