'use strict';

var Jest = require("bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");

function testFn(name, f, cases) {
  return Jest.testAll(name, cases, (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(f, param[0])), param[1]);
              }));
}

function testProperty(name, property) {
  return Jest.test(name, (function () {
                return Jest.Expect[/* toBe */2](true, Jest.Expect[/* expect */0](property));
              }));
}

exports.testFn = testFn;
exports.testProperty = testProperty;
/* Jest Not a pure module */
