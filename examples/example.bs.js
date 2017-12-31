'use strict';

var Rebase = require("../src/Rebase.bs.js");

var x = Rebase.Option[/* map */0]((function (n) {
        return (n << 1);
      }), /* Some */[42]);

var y = Rebase.$$Array[/* map */0]((function (n) {
        return (n << 1);
      }), /* int array */[
      1,
      2,
      3
    ]);

exports.x = x;
exports.y = y;
/* x Not a pure module */
