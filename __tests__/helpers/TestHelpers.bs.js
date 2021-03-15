'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");

function testFn(name, f, cases) {
  return Jest.testAll(name, cases, (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._1(f, param[0])), param[1]);
              }));
}

function testProperty(name, property) {
  return Jest.test(name, (function (param) {
                return Jest.Expect.toBe(true, Jest.Expect.expect(property));
              }));
}

exports.testFn = testFn;
exports.testProperty = testProperty;
/* Jest Not a pure module */
