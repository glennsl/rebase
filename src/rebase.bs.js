'use strict';

var Rebase__list       = require("./rebase__list.bs.js");
var Rebase__array      = require("./rebase__array.bs.js");
var Rebase__flags      = require("./rebase__flags.bs.js");
var Rebase__option     = require("./rebase__option.bs.js");
var Rebase__result     = require("./rebase__result.bs.js");
var Rebase__string     = require("./rebase__string.bs.js");
var Rebase__exceptions = require("./rebase__exceptions.bs.js");

var Flags = /* module */[
  /* toInt */Rebase__flags.toInt,
  /* make */Rebase__flags.make,
  /* many */Rebase__flags.many
];

function Array_000(prim, prim$1, prim$2) {
  return prim$2.reduce(prim, prim$1);
}

function Array_001(prim, prim$1, prim$2) {
  return prim$2.reduceRight(prim, prim$1);
}

function Array_002(prim, prim$1) {
  return prim$1.map(prim);
}

function Array_008(prim, prim$1) {
  prim$1.forEach(prim);
  return /* () */0;
}

function Array_012(prim) {
  return prim.length;
}

function Array_018(prim, prim$1) {
  prim$1.fill(prim);
  return /* () */0;
}

function Array_019(prim, prim$1) {
  return prim$1.concat(prim);
}

function Array_020(prim, prim$1, prim$2) {
  return prim$2.slice(prim, prim$1);
}

function Array_021(prim) {
  return prim.slice();
}

function Array_022(prim, prim$1) {
  return prim$1.mapWithIndex(prim);
}

var $$Array = [
  Array_000,
  Array_001,
  Array_002,
  Rebase__array.apply,
  Rebase__array.from,
  Rebase__array.flatMap,
  Rebase__array.forAll,
  Rebase__array.find,
  Array_008,
  Rebase__array.exists,
  Rebase__array.filter,
  Rebase__array.make,
  Array_012,
  Rebase__array.get,
  Rebase__array.getOrRaise,
  Rebase__array.setOrRaise,
  Rebase__array.unsafeGetUnchecked,
  Rebase__array.unsafeSetUnchecked,
  Array_018,
  Array_019,
  Array_020,
  Array_021,
  Array_022
];

var List = [
  Rebase__list.reduce,
  Rebase__list.reduceRight,
  Rebase__list.map,
  Rebase__list.apply,
  Rebase__list.from,
  Rebase__list.flatMap,
  Rebase__list.forAll,
  Rebase__list.find,
  Rebase__list.forEach,
  Rebase__list.exists,
  Rebase__list.filter,
  Rebase__list.head,
  Rebase__list.tail,
  Rebase__list.length,
  Rebase__list.reverse,
  Rebase__list.zip,
  Rebase__list.toArray
];

var Option = [
  Rebase__option.reduce,
  Rebase__option.reduceRight,
  Rebase__option.map,
  Rebase__option.apply,
  Rebase__option.from,
  Rebase__option.flatMap,
  Rebase__option.forAll,
  Rebase__option.find,
  Rebase__option.forEach,
  Rebase__option.exists,
  Rebase__option.filter,
  Rebase__option.isSome,
  Rebase__option.isNone,
  Rebase__option.or_,
  Rebase__option.getOr,
  Rebase__option.getOrRaise,
  Rebase__option.mapOr,
  Rebase__option.mapOrElse,
  Rebase__option.flatten
];

var Result = [
  Rebase__result.map2,
  Rebase__result.reduce,
  Rebase__result.reduceRight,
  Rebase__result.map,
  Rebase__result.apply,
  Rebase__result.from,
  Rebase__result.flatMap,
  Rebase__result.forAll,
  Rebase__result.find,
  Rebase__result.forEach,
  Rebase__result.exists,
  Rebase__result.isOk,
  Rebase__result.isError,
  Rebase__result.wrap,
  Rebase__result.wrap1,
  Rebase__result.wrap2,
  Rebase__result.or_,
  Rebase__result.getOr,
  Rebase__result.getOrRaise,
  Rebase__result.mapOr,
  Rebase__result.mapOrElse,
  Rebase__result.flatten
];

function String_000(prim) {
  return prim.length;
}

function String_001(prim, prim$1) {
  return prim$1.concat(prim);
}

function String_002(prim, prim$1) {
  return +prim$1.includes(prim);
}

function String_003(prim, prim$1) {
  return +prim$1.startsWith(prim);
}

function String_004(prim, prim$1) {
  return +prim$1.endsWith(prim);
}

function String_006(prim, prim$1, prim$2) {
  return prim$2.padStart(prim, prim$1);
}

function String_007(prim, prim$1, prim$2) {
  return prim$2.padEnd(prim, prim$1);
}

function String_008(prim) {
  return prim.trim();
}

function String_009(prim, prim$1, prim$2) {
  return prim$2.substr(prim, prim$1);
}

var $$String = [
  String_000,
  String_001,
  String_002,
  String_003,
  String_004,
  Rebase__string.isEmpty,
  String_006,
  String_007,
  String_008,
  String_009
];

var InvalidArgument = Rebase__exceptions.InvalidArgument;

var IndexOutOfBounds = Rebase__exceptions.IndexOutOfBounds;

exports.$$Array          = $$Array;
exports.List             = List;
exports.Option           = Option;
exports.Result           = Result;
exports.$$String         = $$String;
exports.Flags            = Flags;
exports.InvalidArgument  = InvalidArgument;
exports.IndexOutOfBounds = IndexOutOfBounds;
/* No side effect */
