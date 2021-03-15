'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function from(x) {
  return Caml_option.some(x);
}

function some(x) {
  return Caml_option.some(x);
}

function fromResult(v) {
  if (v.TAG) {
    return ;
  } else {
    return Caml_option.some(v._0);
  }
}

function isSome(param) {
  return param !== undefined;
}

function isNone(param) {
  return param === undefined;
}

function or_(other, self) {
  if (self !== undefined) {
    return self;
  } else {
    return other;
  }
}

function getOr(other, v) {
  if (v !== undefined) {
    return Caml_option.valFromOption(v);
  } else {
    return other;
  }
}

function getOrRaise(v) {
  if (v !== undefined) {
    return Caml_option.valFromOption(v);
  }
  throw {
        RE_EXN_ID: Rebase__Types.InvalidArgument,
        _1: "getOrRaise called on None",
        Error: new Error()
      };
}

function map(f, v) {
  if (v !== undefined) {
    return Caml_option.some(Curry._1(f, Caml_option.valFromOption(v)));
  }
  
}

function mapOr(f, other, v) {
  if (v !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(v));
  } else {
    return other;
  }
}

function mapOrElse(f, g, v) {
  if (v !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(v));
  } else {
    return Curry._1(g, undefined);
  }
}

function exists(predicate, v) {
  if (v !== undefined) {
    return Curry._1(predicate, Caml_option.valFromOption(v));
  } else {
    return false;
  }
}

function forAll(predicate, v) {
  if (v !== undefined) {
    return Curry._1(predicate, Caml_option.valFromOption(v));
  } else {
    return true;
  }
}

function filter(predicate, self) {
  if (self !== undefined && Curry._1(predicate, Caml_option.valFromOption(self))) {
    return self;
  }
  
}

function forEach(f, x) {
  if (x !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(x));
  }
  
}

function find(predicate, x) {
  if (x === undefined) {
    return ;
  }
  var x$1 = Caml_option.valFromOption(x);
  if (Curry._1(predicate, x$1)) {
    return Caml_option.some(x$1);
  }
  
}

function andThen(f, x) {
  if (x !== undefined) {
    return Curry._1(f, Caml_option.valFromOption(x));
  }
  
}

function flatten(a) {
  if (a !== undefined) {
    return Caml_option.valFromOption(a);
  }
  
}

function apply(f, a) {
  if (f !== undefined) {
    return map(f, a);
  }
  
}

function reduce(f, acc, x) {
  if (x !== undefined) {
    return Curry._2(f, acc, Caml_option.valFromOption(x));
  } else {
    return acc;
  }
}

function reduceRight(f, acc, x) {
  if (x !== undefined) {
    return Curry._2(f, acc, Caml_option.valFromOption(x));
  } else {
    return acc;
  }
}

var flatMap = andThen;

exports.from = from;
exports.some = some;
exports.fromResult = fromResult;
exports.isSome = isSome;
exports.isNone = isNone;
exports.or_ = or_;
exports.getOr = getOr;
exports.getOrRaise = getOrRaise;
exports.map = map;
exports.mapOr = mapOr;
exports.mapOrElse = mapOrElse;
exports.exists = exists;
exports.forAll = forAll;
exports.filter = filter;
exports.forEach = forEach;
exports.find = find;
exports.andThen = andThen;
exports.flatMap = flatMap;
exports.flatten = flatten;
exports.apply = apply;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
/* No side effect */
