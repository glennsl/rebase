'use strict';

var Rebase__Fn = require("./Rebase__Fn.bs.js");
var Rebase__Seq = require("./Rebase__Seq.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Rebase__List = require("./Rebase__List.bs.js");
var Rebase__Array = require("./Rebase__Array.bs.js");
var Rebase__Types = require("./Rebase__Types.bs.js");
var Rebase__Option = require("./Rebase__Option.bs.js");
var Rebase__Result = require("./Rebase__Result.bs.js");
var Rebase__String = require("./Rebase__String.bs.js");

var InvalidArgument = Rebase__Types.InvalidArgument;

var IndexOutOfBounds = Rebase__Types.IndexOutOfBounds;

function Array_000(prim, prim$1) {
  return prim$1.map(prim);
}

function Array_003(prim, prim$1, prim$2) {
  return prim$2.reduce(prim, prim$1);
}

function Array_004(prim, prim$1, prim$2) {
  return prim$2.reduceRight(prim, prim$1);
}

function Array_006(prim, prim$1) {
  return prim$1.every(prim);
}

function Array_007(prim, prim$1) {
  return Js_primitive.undefined_to_opt(prim$1.find(prim));
}

function Array_008(prim, prim$1) {
  prim$1.forEach(prim);
  return /* () */0;
}

function Array_009(prim, prim$1) {
  return prim$1.some(prim);
}

function Array_010(prim, prim$1) {
  return prim$1.filter(prim);
}

function Array_011(prim, prim$1) {
  return prim$1.concat(prim);
}

function Array_016(prim) {
  return prim.length;
}

function Array_024(prim, prim$1) {
  prim$1.fill(prim);
  return /* () */0;
}

function Array_025(prim, prim$1, prim$2) {
  return prim$2.slice(prim, prim$1);
}

function Array_026(prim) {
  return prim.slice();
}

function Array_027(prim, prim$1) {
  return prim$1.map(prim);
}

function Array_028(prim, prim$1) {
  prim$1.forEach(prim);
  return /* () */0;
}

var $$Array = [
  Array_000,
  Rebase__Array.apply,
  Rebase__Array.from,
  Array_003,
  Array_004,
  Rebase__Array.flatMap,
  Array_006,
  Array_007,
  Array_008,
  Array_009,
  Array_010,
  Array_011,
  Rebase__Array.make,
  Rebase__Array.fromList,
  Rebase__Array.fromSeq,
  Rebase__Array.range,
  Array_016,
  Rebase__Array.get,
  Rebase__Array.set,
  Rebase__Array.getOrRaise,
  Rebase__Array.setOrRaise,
  Rebase__Array.unsafeGetUnchecked,
  Rebase__Array.unsafeSetUnchecked,
  Rebase__Array.filterMap,
  Array_024,
  Array_025,
  Array_026,
  Array_027,
  Array_028,
  Rebase__Array.findIndex
];

var Fn = /* Rebase__Fn */[
  Rebase__Fn.id,
  Rebase__Fn.$$const,
  Rebase__Fn.flip,
  Rebase__Fn.curry,
  Rebase__Fn.uncurry,
  Rebase__Fn.$less$less,
  Rebase__Fn.$great$great,
  Rebase__Fn.tap
];

var List = [
  Rebase__List.map,
  Rebase__List.apply,
  Rebase__List.from,
  Rebase__List.reduce,
  Rebase__List.reduceRight,
  Rebase__List.flatMap,
  Rebase__List.forAll,
  Rebase__List.find,
  Rebase__List.forEach,
  Rebase__List.exists,
  Rebase__List.filter,
  Rebase__List.concat,
  Rebase__List.fromArray,
  Rebase__List.fromSeq,
  Rebase__List.range,
  Rebase__List.isEmpty,
  Rebase__List.head,
  Rebase__List.tail,
  Rebase__List.filterMap,
  Rebase__List.length,
  Rebase__List.reverse,
  Rebase__List.zip
];

var Option = [
  Rebase__Option.map,
  Rebase__Option.apply,
  Rebase__Option.from,
  Rebase__Option.reduce,
  Rebase__Option.reduceRight,
  Rebase__Option.flatMap,
  Rebase__Option.forAll,
  Rebase__Option.find,
  Rebase__Option.forEach,
  Rebase__Option.exists,
  Rebase__Option.filter,
  Rebase__Option.some,
  Rebase__Option.fromResult,
  Rebase__Option.isSome,
  Rebase__Option.isNone,
  Rebase__Option.or_,
  Rebase__Option.getOr,
  Rebase__Option.getOrRaise,
  Rebase__Option.mapOr,
  Rebase__Option.mapOrElse,
  Rebase__Option.flatten
];

var Result = [
  Rebase__Result.map,
  Rebase__Result.map2,
  Rebase__Result.apply,
  Rebase__Result.from,
  Rebase__Result.reduce,
  Rebase__Result.reduceRight,
  Rebase__Result.flatMap,
  Rebase__Result.forAll,
  Rebase__Result.find,
  Rebase__Result.forEach,
  Rebase__Result.exists,
  Rebase__Result.isOk,
  Rebase__Result.isError,
  Rebase__Result.wrap,
  Rebase__Result.wrap1,
  Rebase__Result.wrap2,
  Rebase__Result.or_,
  Rebase__Result.getOr,
  Rebase__Result.getOrRaise,
  Rebase__Result.mapOr,
  Rebase__Result.mapOrElse,
  Rebase__Result.flatten
];

var Seq = [
  Rebase__Seq.map,
  Rebase__Seq.apply,
  Rebase__Seq.from,
  Rebase__Seq.reduce,
  Rebase__Seq.reduceRight,
  Rebase__Seq.flatMap,
  Rebase__Seq.forAll,
  Rebase__Seq.find,
  Rebase__Seq.forEach,
  Rebase__Seq.exists,
  Rebase__Seq.filter,
  Rebase__Seq.empty,
  Rebase__Seq.cons,
  Rebase__Seq.fromArray,
  Rebase__Seq.fromList,
  Rebase__Seq.range,
  Rebase__Seq.count,
  Rebase__Seq.isEmpty,
  Rebase__Seq.head,
  Rebase__Seq.filterMap,
  Rebase__Seq.zip
];

function String_000(prim, prim$1) {
  return prim$1.concat(prim);
}

function String_001(prim) {
  return prim.length;
}

function String_002(prim, prim$1) {
  return prim$1.includes(prim);
}

function String_003(prim, prim$1) {
  return prim$1.startsWith(prim);
}

function String_004(prim, prim$1) {
  return prim$1.endsWith(prim);
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
  Rebase__String.isEmpty,
  String_006,
  String_007,
  String_008,
  String_009,
  Rebase__String.join,
  Rebase__String.joinWith
];

exports.InvalidArgument = InvalidArgument;
exports.IndexOutOfBounds = IndexOutOfBounds;
exports.$$Array = $$Array;
exports.Fn = Fn;
exports.List = List;
exports.Option = Option;
exports.Result = Result;
exports.Seq = Seq;
exports.$$String = $$String;
/* No side effect */
