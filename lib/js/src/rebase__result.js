'use strict';

var Block                   = require("bs-platform/lib/js/block.js");
var Curry                   = require("bs-platform/lib/js/curry.js");
var Js_exn                  = require("bs-platform/lib/js/js_exn.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function unwrapUnsafely(param) {
  if (param.tag) {
    throw [
          Caml_builtin_exceptions.invalid_argument,
          "unwrapUnsafely called on Error"
        ];
  } else {
    return param[0];
  }
}

function isOk(param) {
  if (param.tag) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function isError(param) {
  if (param.tag) {
    return /* true */1;
  } else {
    return /* false */0;
  }
}

function $$catch(f) {
  var tmp;
  try {
    tmp = f;
  }
  catch (raw_e){
    var e = Js_exn.internalToOCamlException(raw_e);
    tmp = /* Error */Block.__(1, [e]);
  }
  return /* Ok */Block.__(0, [tmp]);
}

function may(f, param) {
  if (param.tag) {
    return /* () */0;
  } else {
    return Curry._1(f, param[0]);
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

function map(f, e) {
  if (e.tag) {
    return e;
  } else {
    return /* Ok */Block.__(0, [Curry._1(f, e[0])]);
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

function andThen(f, e) {
  if (e.tag) {
    return e;
  } else {
    return Curry._1(f, e[0]);
  }
}

function fromOption(param) {
  if (param) {
    return /* Ok */Block.__(0, [param[0]]);
  } else {
    return /* Error */Block.__(1, [/* () */0]);
  }
}

exports.unwrapUnsafely = unwrapUnsafely;
exports.isOk           = isOk;
exports.isError        = isError;
exports.$$catch        = $$catch;
exports.may            = may;
exports.or_            = or_;
exports.getOr          = getOr;
exports.map            = map;
exports.mapOr          = mapOr;
exports.mapOrElse      = mapOrElse;
exports.andThen        = andThen;
exports.fromOption     = fromOption;
/* No side effect */
