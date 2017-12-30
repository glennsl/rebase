'use strict';

var Curry              = require("bs-platform/lib/js/curry.js");
var Js_boolean         = require("bs-platform/lib/js/js_boolean.js");
var Js_primitive       = require("bs-platform/lib/js/js_primitive.js");
var Rebase__exceptions = require("./rebase__exceptions.bs.js");

function from(x) {
  return /* array */[x];
}

function unsafeGetUnchecked(index, self) {
  return self[index];
}

function unsafeSetUnchecked(index, value, self) {
  self[index] = value;
  return /* () */0;
}

function make(length, value) {
  var array = new Array(length);
  array.fill(value);
  return array;
}

function get(self, i) {
  if (i >= 0 && i < self.length) {
    return /* Some */[self[i]];
  } else {
    return /* None */0;
  }
}

function set(self, i, value) {
  if (i >= 0 && i < self.length) {
    self[i] = value;
    return /* () */0;
  } else {
    return /* () */0;
  }
}

function getOrRaise(i, self) {
  if (i >= 0 && i < self.length) {
    return self[i];
  } else {
    throw Rebase__exceptions.IndexOutOfBounds;
  }
}

function setOrRaise(i, value, self) {
  if (i >= 0 && i < self.length) {
    self[i] = value;
    return /* () */0;
  } else {
    throw Rebase__exceptions.IndexOutOfBounds;
  }
}

function exists(f, self) {
  return +self.some((function (x) {
                return Js_boolean.to_js_boolean(Curry._1(f, x));
              }));
}

function filter(f, self) {
  return self.filter((function (x) {
                return Js_boolean.to_js_boolean(Curry._1(f, x));
              }));
}

function find(f, self) {
  return Js_primitive.undefined_to_opt(self.find((function (x) {
                    return Js_boolean.to_js_boolean(Curry._1(f, x));
                  })));
}

function forAll(f, self) {
  return +self.every((function (x) {
                return Js_boolean.to_js_boolean(Curry._1(f, x));
              }));
}

function flatMap(f, self) {
  var result = /* array */[];
  for(var i = 0 ,i_finish = self.length - 1 | 0; i <= i_finish; ++i){
    var nested = Curry._1(f, self[i]);
    for(var j = 0 ,j_finish = nested.length - 1 | 0; j <= j_finish; ++j){
      result.push(nested[j]);
    }
  }
  return result;
}

function filterMap(f, self) {
  var result = /* array */[];
  for(var i = 0 ,i_finish = self.length - 1 | 0; i <= i_finish; ++i){
    var match = Curry._1(f, self[i]);
    if (match) {
      result.push(match[0]);
    }
    
  }
  return result;
}

function product(f, xs, ys) {
  return flatMap((function (x) {
                return ys.map((function (y) {
                              return Curry._2(f, x, y);
                            }));
              }), xs);
}

function apply(fs, xs) {
  return product((function (f, x) {
                return Curry._1(f, x);
              }), fs, xs);
}

exports.from               = from;
exports.unsafeGetUnchecked = unsafeGetUnchecked;
exports.unsafeSetUnchecked = unsafeSetUnchecked;
exports.make               = make;
exports.get                = get;
exports.set                = set;
exports.getOrRaise         = getOrRaise;
exports.setOrRaise         = setOrRaise;
exports.exists             = exists;
exports.filter             = filter;
exports.find               = find;
exports.forAll             = forAll;
exports.flatMap            = flatMap;
exports.filterMap          = filterMap;
exports.product            = product;
exports.apply              = apply;
/* No side effect */
