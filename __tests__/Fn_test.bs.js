'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Caml_format = require("bs-platform/lib/js/caml_format.js");

Jest.test("id", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(Rebase.Fn[/* id */0], 42)), 42);
      }));

Jest.test("const", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(Rebase.Fn[/* const */1], 42, /* () */0)), 42);
      }));

Jest.test("flip", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(Rebase.Fn[/* flip */2], (function (prim, prim$1) {
                              return prim - prim$1 | 0;
                            }), 5, 10)), 5);
      }));

Jest.test("curry", (function () {
        var f = Curry._1(Rebase.Fn[/* curry */3], (function (param) {
                return param[0] - param[1] | 0;
              }));
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(f, 5, 10)), -5);
      }));

Jest.test("uncurry", (function () {
        var f = Curry._1(Rebase.Fn[/* uncurry */4], (function (a, b) {
                return a - b | 0;
              }));
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(f, /* tuple */[
                            5,
                            10
                          ])), -5);
      }));

Jest.test("<<", (function () {
        var f = Curry._2(Rebase.Fn[/* << */5], (function (prim) {
                return String(prim);
              }), Caml_format.caml_int_of_string);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(f, "42")), "42");
      }));

Jest.test(">>", (function () {
        var f = Curry._2(Rebase.Fn[/* >> */6], (function (prim) {
                return String(prim);
              }), Caml_format.caml_int_of_string);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(f, 42)), 42);
      }));

Jest.test(">>", (function () {
        var tapped = /* record */[/* contents */undefined];
        var tapper = Curry._1(Rebase.Fn[/* tap */7], (function (n) {
                tapped[0] = n;
                return /* () */0;
              }));
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](/* tuple */[
                        Curry._1(tapper, 42),
                        tapped[0]
                      ]), /* tuple */[
                    42,
                    42
                  ]);
      }));

/*  Not a pure module */
