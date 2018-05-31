'use strict';

var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Js_exn = require("bs-platform/lib/js/js_exn.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function from(x) {
  return /* Ok */Block.__(0, [x]);
}

function isOk(param) {
  if (param.tag) {
    return false;
  } else {
    return true;
  }
}

function isError(param) {
  if (param.tag) {
    return true;
  } else {
    return false;
  }
}

function wrap(f) {
  try {
    return /* Ok */Block.__(0, [Curry._1(f, /* () */0)]);
  }
  catch (raw_e){
    var e = Js_exn.internalToOCamlException(raw_e);
    return /* Error */Block.__(1, [e]);
  }
}

function wrap1(f, a) {
  try {
    return /* Ok */Block.__(0, [Curry._1(f, a)]);
  }
  catch (raw_e){
    var e = Js_exn.internalToOCamlException(raw_e);
    return /* Error */Block.__(1, [e]);
  }
}

function wrap2(f, a, b) {
  try {
    return /* Ok */Block.__(0, [Curry._2(f, a, b)]);
  }
  catch (raw_e){
    var e = Js_exn.internalToOCamlException(raw_e);
    return /* Error */Block.__(1, [e]);
  }
}

function or_(other, self) {
  if (self.tag) {
    return other;
  } else {
    return self;
  }
}

function getOr(other, param) {
  if (param.tag) {
    return other;
  } else {
    return param[0];
  }
}

function getOrRaise(param) {
  if (param.tag) {
    throw [
          Rebase__Types.InvalidArgument,
          "getOrRaise called on Error"
        ];
  } else {
    return param[0];
  }
}

function map(f, param) {
  if (param.tag) {
    return /* Error */Block.__(1, [param[0]]);
  } else {
    return /* Ok */Block.__(0, [Curry._1(f, param[0])]);
  }
}

function map2(f, g, param) {
  if (param.tag) {
    return /* Error */Block.__(1, [Curry._1(g, param[0])]);
  } else {
    return /* Ok */Block.__(0, [Curry._1(f, param[0])]);
  }
}

function mapOr(f, other, param) {
  if (param.tag) {
    return other;
  } else {
    return Curry._1(f, param[0]);
  }
}

function mapOrElse(f, g, param) {
  if (param.tag) {
    return Curry._1(g, /* () */0);
  } else {
    return Curry._1(f, param[0]);
  }
}

function exists(predicate, param) {
  if (param.tag) {
    return false;
  } else {
    return Curry._1(predicate, param[0]);
  }
}

function forAll(predicate, param) {
  if (param.tag) {
    return true;
  } else {
    return Curry._1(predicate, param[0]);
  }
}

function forEach(f, param) {
  if (param.tag) {
    return /* () */0;
  } else {
    return Curry._1(f, param[0]);
  }
}

function find(predicate, param) {
  if (param.tag) {
    return /* None */0;
  } else {
    var x = param[0];
    if (Curry._1(predicate, x)) {
      return /* Some */[x];
    } else {
      return /* None */0;
    }
  }
}

function andThen(f, param) {
  if (param.tag) {
    return /* Error */Block.__(1, [param[0]]);
  } else {
    return Curry._1(f, param[0]);
  }
}

function flatten(self) {
  if (self.tag) {
    return self;
  } else {
    return self[0];
  }
}

function apply(f, a) {
  if (f.tag) {
    return f;
  } else {
    return map(f[0], a);
  }
}

function reduce(f, acc, param) {
  if (param.tag) {
    return acc;
  } else {
    return Curry._2(f, acc, param[0]);
  }
}

function reduceRight(f, acc, param) {
  if (param.tag) {
    return acc;
  } else {
    return Curry._2(f, acc, param[0]);
  }
}

var flatMap = andThen;

exports.from = from;
exports.isOk = isOk;
exports.isError = isError;
exports.wrap = wrap;
exports.wrap1 = wrap1;
exports.wrap2 = wrap2;
exports.or_ = or_;
exports.getOr = getOr;
exports.getOrRaise = getOrRaise;
exports.map = map;
exports.map2 = map2;
exports.mapOr = mapOr;
exports.mapOrElse = mapOrElse;
exports.exists = exists;
exports.forAll = forAll;
exports.forEach = forEach;
exports.find = find;
exports.andThen = andThen;
exports.flatMap = flatMap;
exports.flatten = flatten;
exports.apply = apply;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
/* No side effect */
