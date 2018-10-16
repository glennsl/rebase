'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function from(x) {
  return Js_primitive.some(x);
}

function some(x) {
  return Js_primitive.some(x);
}

function fromResult(param) {
  if (param.tag) {
    return undefined;
  } else {
    return Js_primitive.some(param[0]);
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

function getOr(other, param) {
  if (param !== undefined) {
    return Js_primitive.valFromOption(param);
  } else {
    return other;
  }
}

function getOrRaise(param) {
  if (param !== undefined) {
    return Js_primitive.valFromOption(param);
  } else {
    throw [
          Rebase__Types.InvalidArgument,
          "getOrRaise called on None"
        ];
  }
}

function map(f, param) {
  if (param !== undefined) {
    return Js_primitive.some(Curry._1(f, Js_primitive.valFromOption(param)));
  }
  
}

function mapOr(f, other, param) {
  if (param !== undefined) {
    return Curry._1(f, Js_primitive.valFromOption(param));
  } else {
    return other;
  }
}

function mapOrElse(f, g, param) {
  if (param !== undefined) {
    return Curry._1(f, Js_primitive.valFromOption(param));
  } else {
    return Curry._1(g, /* () */0);
  }
}

function exists(predicate, param) {
  if (param !== undefined) {
    return Curry._1(predicate, Js_primitive.valFromOption(param));
  } else {
    return false;
  }
}

function forAll(predicate, param) {
  if (param !== undefined) {
    return Curry._1(predicate, Js_primitive.valFromOption(param));
  } else {
    return true;
  }
}

function filter(predicate, self) {
  if (self !== undefined && Curry._1(predicate, Js_primitive.valFromOption(self))) {
    return self;
  }
  
}

function forEach(f, param) {
  if (param !== undefined) {
    return Curry._1(f, Js_primitive.valFromOption(param));
  } else {
    return /* () */0;
  }
}

function find(predicate, param) {
  if (param !== undefined) {
    var x = Js_primitive.valFromOption(param);
    if (Curry._1(predicate, x)) {
      return Js_primitive.some(x);
    } else {
      return undefined;
    }
  }
  
}

function andThen(f, param) {
  if (param !== undefined) {
    return Curry._1(f, Js_primitive.valFromOption(param));
  }
  
}

function flatten(param) {
  if (param !== undefined) {
    return Js_primitive.valFromOption(param);
  }
  
}

function apply(f, a) {
  if (f !== undefined) {
    return map(f, a);
  }
  
}

function reduce(f, acc, param) {
  if (param !== undefined) {
    return Curry._2(f, acc, Js_primitive.valFromOption(param));
  } else {
    return acc;
  }
}

function reduceRight(f, acc, param) {
  if (param !== undefined) {
    return Curry._2(f, acc, Js_primitive.valFromOption(param));
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
