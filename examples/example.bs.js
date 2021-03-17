'use strict';

var Rebase = require("../src/Rebase.bs.js");

var x = Rebase.$$Option.map((function (n) {
        return (n << 1);
      }), 42);

var y = Rebase.$$Array.map((function (n) {
        return (n << 1);
      }), [
      1,
      2,
      3
    ]);

exports.x = x;
exports.y = y;
/* x Not a pure module */
