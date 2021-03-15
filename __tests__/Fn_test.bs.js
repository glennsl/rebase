'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

Jest.test("id", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._1(Rebase.Fn.id, 42)), 42);
      }));

Jest.test("const", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.Fn.$$const, 42, undefined)), 42);
      }));

Jest.test("flip", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._3(Rebase.Fn.flip, (function (prim, prim$1) {
                              return prim - prim$1 | 0;
                            }), 5, 10)), 5);
      }));

Jest.test("curry", (function (param) {
        var f = Curry._1(Rebase.Fn.curry, (function (param) {
                return param[0] - param[1] | 0;
              }));
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(f, 5, 10)), -5);
      }));

Jest.test("uncurry", (function (param) {
        var f = Curry._1(Rebase.Fn.uncurry, (function (a, b) {
                return a - b | 0;
              }));
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._1(f, [
                            5,
                            10
                          ])), -5);
      }));

Jest.test("<<", (function (param) {
        var f = Curry._2(Rebase.Fn.$less$less, (function (prim) {
                return String(prim);
              }), Caml_format.caml_int_of_string);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._1(f, "42")), "42");
      }));

Jest.test(">>", (function (param) {
        var f = Curry._2(Rebase.Fn.$great$great, (function (prim) {
                return String(prim);
              }), Caml_format.caml_int_of_string);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._1(f, 42)), 42);
      }));

Jest.test(">>", (function (param) {
        var tapped = {
          contents: undefined
        };
        var tapper = Curry._1(Rebase.Fn.tap, (function (n) {
                tapped.contents = n;
                
              }));
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect([
                        Curry._1(tapper, 42),
                        tapped.contents
                      ]), [
                    42,
                    42
                  ]);
      }));

/*  Not a pure module */
