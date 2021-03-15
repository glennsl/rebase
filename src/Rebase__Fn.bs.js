'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

function id(x) {
  return x;
}

function $$const(x, param) {
  return x;
}

function flip(f, a, b) {
  return Curry._2(f, b, a);
}

function curry(f, a, b) {
  return Curry._1(f, [
              a,
              b
            ]);
}

function uncurry(f, param) {
  return Curry._2(f, param[0], param[1]);
}

function $less$less(f, g, x) {
  return Curry._1(f, Curry._1(g, x));
}

function $great$great(f, g, x) {
  return Curry._1(g, Curry._1(f, x));
}

function tap(f, x) {
  Curry._1(f, x);
  return x;
}

exports.id = id;
exports.$$const = $$const;
exports.flip = flip;
exports.curry = curry;
exports.uncurry = uncurry;
exports.$less$less = $less$less;
exports.$great$great = $great$great;
exports.tap = tap;
/* No side effect */
