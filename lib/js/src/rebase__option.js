'use strict';

var Curry                   = require("bs-platform/lib/js/curry.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function from(x) {
  return /* Some */[x];
}

function isSome(param) {
  if (param) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function isNone(param) {
  if (param) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function may(f, param) {
  if (param) {
    return Curry._1(f, param[0]);
  } else {
    return /* () */0;
  }
}

function or_(other, self) {
  if (self) {
    return self;
  } else {
    return other;
  }
}

function getOr(other, param) {
  if (param) {
    return param[0];
  } else {
    return other;
  }
}

function getOrRaise(param) {
  if (param) {
    return param[0];
  } else {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "unwrapUnsafely called on None"
        ];
  }
}

function map(f, param) {
  if (param) {
    return /* Some */[Curry._1(f, param[0])];
  } else {
    return /* None */0;
  }
}

function mapOr(f, other, param) {
  if (param) {
    return Curry._1(f, param[0]);
  } else {
    return other;
  }
}

function mapOrElse(f, g, param) {
  if (param) {
    return Curry._1(f, param[0]);
  } else {
    return Curry._1(g, /* () */0);
  }
}

function andThen(f, param) {
  if (param) {
    return Curry._1(f, param[0]);
  } else {
    return /* None */0;
  }
}

function exists(predicate, param) {
  if (param) {
    return Curry._1(predicate, param[0]);
  } else {
    return /* false */0;
  }
}

function forAll(predicate, param) {
  if (param) {
    return Curry._1(predicate, param[0]);
  } else {
    return /* true */1;
  }
}

function filter(predicate, self) {
  if (self && Curry._1(predicate, self[0])) {
    return self;
  } else {
    return /* None */0;
  }
}

function fromResult(param) {
  if (param.tag) {
    return /* None */0;
  } else {
    return /* Some */[param[0]];
  }
}

function forEach(f, param) {
  if (param) {
    return Curry._1(f, param[0]);
  } else {
    return /* () */0;
  }
}

function find(p, param) {
  if (param) {
    var x = param[0];
    if (Curry._1(p, x)) {
      return /* Some */[x];
    } else {
      return /* None */0;
    }
  } else {
    return /* None */0;
  }
}

function findOrRaise(p, param) {
  if (param) {
    var x = param[0];
    if (Curry._1(p, x)) {
      return x;
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  } else {
    throw Caml_builtin_exceptions.not_found;
  }
}

function flatMap(f, param) {
  if (param) {
    return Curry._1(f, param[0]);
  } else {
    return /* None */0;
  }
}

function flatten(param) {
  if (param) {
    return param[0];
  } else {
    return /* None */0;
  }
}

function apply(f, a) {
  if (f) {
    return map(f[0], a);
  } else {
    return /* None */0;
  }
}

function reduce(f, acc, param) {
  if (param) {
    return Curry._2(f, acc, param[0]);
  } else {
    return acc;
  }
}

function reduceRight(f, acc, param) {
  if (param) {
    return Curry._2(f, acc, param[0]);
  } else {
    return acc;
  }
}

exports.from        = from;
exports.isSome      = isSome;
exports.isNone      = isNone;
exports.may         = may;
exports.or_         = or_;
exports.getOr       = getOr;
exports.getOrRaise  = getOrRaise;
exports.map         = map;
exports.mapOr       = mapOr;
exports.mapOrElse   = mapOrElse;
exports.andThen     = andThen;
exports.exists      = exists;
exports.forAll      = forAll;
exports.filter      = filter;
exports.fromResult  = fromResult;
exports.forEach     = forEach;
exports.find        = find;
exports.findOrRaise = findOrRaise;
exports.flatMap     = flatMap;
exports.flatten     = flatten;
exports.apply       = apply;
exports.reduce      = reduce;
exports.reduceRight = reduceRight;
/* No side effect */
