'use strict';

var Jest  = require("bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");

function testFn(name, f, cases) {
  return Jest.testAll(name, cases, (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(f, param[0])), param[1]);
              }));
}

exports.testFn = testFn;
/* Jest Not a pure module */
