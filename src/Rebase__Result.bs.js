'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Rebase__Types = require("./Rebase__Types.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

function from(x) {
  return {
          TAG: /* Ok */0,
          _0: x
        };
}

function isOk(param) {
  if (param.TAG) {
    return false;
  } else {
    return true;
  }
}

function isError(param) {
  if (param.TAG) {
    return true;
  } else {
    return false;
  }
}

function wrap(f) {
  try {
    return {
            TAG: /* Ok */0,
            _0: Curry._1(f, undefined)
          };
  }
  catch (raw_e){
    var e = Caml_js_exceptions.internalToOCamlException(raw_e);
    return {
            TAG: /* Error */1,
            _0: e
          };
  }
}

function wrap1(f, a) {
  try {
    return {
            TAG: /* Ok */0,
            _0: Curry._1(f, a)
          };
  }
  catch (raw_e){
    var e = Caml_js_exceptions.internalToOCamlException(raw_e);
    return {
            TAG: /* Error */1,
            _0: e
          };
  }
}

function wrap2(f, a, b) {
  try {
    return {
            TAG: /* Ok */0,
            _0: Curry._2(f, a, b)
          };
  }
  catch (raw_e){
    var e = Caml_js_exceptions.internalToOCamlException(raw_e);
    return {
            TAG: /* Error */1,
            _0: e
          };
  }
}

function or_(other, self) {
  if (self.TAG) {
    return other;
  } else {
    return self;
  }
}

function getOr(other, v) {
  if (v.TAG) {
    return other;
  } else {
    return v._0;
  }
}

function getOrRaise(v) {
  if (!v.TAG) {
    return v._0;
  }
  throw {
        RE_EXN_ID: Rebase__Types.InvalidArgument,
        _1: "getOrRaise called on Error",
        Error: new Error()
      };
}

function map(f, v) {
  if (v.TAG) {
    return {
            TAG: /* Error */1,
            _0: v._0
          };
  } else {
    return {
            TAG: /* Ok */0,
            _0: Curry._1(f, v._0)
          };
  }
}

function map2(f, g, v) {
  if (v.TAG) {
    return {
            TAG: /* Error */1,
            _0: Curry._1(g, v._0)
          };
  } else {
    return {
            TAG: /* Ok */0,
            _0: Curry._1(f, v._0)
          };
  }
}

function mapOr(f, other, v) {
  if (v.TAG) {
    return other;
  } else {
    return Curry._1(f, v._0);
  }
}

function mapOrElse(f, g, v) {
  if (v.TAG) {
    return Curry._1(g, undefined);
  } else {
    return Curry._1(f, v._0);
  }
}

function exists(predicate, v) {
  if (v.TAG) {
    return false;
  } else {
    return Curry._1(predicate, v._0);
  }
}

function forAll(predicate, v) {
  if (v.TAG) {
    return true;
  } else {
    return Curry._1(predicate, v._0);
  }
}

function forEach(f, x) {
  if (x.TAG) {
    return ;
  } else {
    return Curry._1(f, x._0);
  }
}

function find(predicate, x) {
  if (x.TAG) {
    return ;
  }
  var x$1 = x._0;
  if (Curry._1(predicate, x$1)) {
    return Caml_option.some(x$1);
  }
  
}

function andThen(f, v) {
  if (v.TAG) {
    return {
            TAG: /* Error */1,
            _0: v._0
          };
  } else {
    return Curry._1(f, v._0);
  }
}

function flatten(a) {
  if (a.TAG) {
    return a;
  } else {
    return a._0;
  }
}

function apply(f, a) {
  if (f.TAG) {
    return f;
  } else {
    return map(f._0, a);
  }
}

function reduce(f, acc, x) {
  if (x.TAG) {
    return acc;
  } else {
    return Curry._2(f, acc, x._0);
  }
}

function reduceRight(f, acc, x) {
  if (x.TAG) {
    return acc;
  } else {
    return Curry._2(f, acc, x._0);
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
