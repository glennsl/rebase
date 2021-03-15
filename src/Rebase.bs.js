'use strict';

var Rebase__Fn = require("./Rebase__Fn.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Rebase__Seq = require("./Rebase__Seq.bs.js");
var Rebase__List = require("./Rebase__List.bs.js");
var Rebase__Array = require("./Rebase__Array.bs.js");
var Rebase__Types = require("./Rebase__Types.bs.js");
var Rebase__Option = require("./Rebase__Option.bs.js");
var Rebase__Result = require("./Rebase__Result.bs.js");
var Rebase__String = require("./Rebase__String.bs.js");

var InvalidArgument = Rebase__Types.InvalidArgument;

var IndexOutOfBounds = Rebase__Types.IndexOutOfBounds;

function Array_map(prim, prim$1) {
  return prim$1.map(prim);
}

function Array_reduce(prim, prim$1, prim$2) {
  return prim$2.reduce(prim, prim$1);
}

function Array_reduceRight(prim, prim$1, prim$2) {
  return prim$2.reduceRight(prim, prim$1);
}

function Array_forAll(prim, prim$1) {
  return prim$1.every(prim);
}

function Array_find(prim, prim$1) {
  return Caml_option.undefined_to_opt(prim$1.find(prim));
}

function Array_forEach(prim, prim$1) {
  prim$1.forEach(prim);
  
}

function Array_exists(prim, prim$1) {
  return prim$1.some(prim);
}

function Array_filter(prim, prim$1) {
  return prim$1.filter(prim);
}

function Array_concat(prim, prim$1) {
  return prim$1.concat(prim);
}

function Array_length(prim) {
  return prim.length;
}

function Array_fill(prim, prim$1) {
  prim$1.fill(prim);
  
}

function Array_slice(prim, prim$1, prim$2) {
  return prim$2.slice(prim, prim$1);
}

function Array_copy(prim) {
  return prim.slice();
}

function Array_mapi(prim, prim$1) {
  return prim$1.map(prim);
}

function Array_forEachi(prim, prim$1) {
  prim$1.forEach(prim);
  
}

var $$Array = {
  map: Array_map,
  apply: Rebase__Array.apply,
  from: Rebase__Array.from,
  reduce: Array_reduce,
  reduceRight: Array_reduceRight,
  flatMap: Rebase__Array.flatMap,
  forAll: Array_forAll,
  find: Array_find,
  forEach: Array_forEach,
  exists: Array_exists,
  filter: Array_filter,
  concat: Array_concat,
  make: Rebase__Array.make,
  fromList: Rebase__Array.fromList,
  fromSeq: Rebase__Array.fromSeq,
  range: Rebase__Array.range,
  length: Array_length,
  get: Rebase__Array.get,
  set: Rebase__Array.set,
  getOrRaise: Rebase__Array.getOrRaise,
  setOrRaise: Rebase__Array.setOrRaise,
  unsafeGetUnchecked: Rebase__Array.unsafeGetUnchecked,
  unsafeSetUnchecked: Rebase__Array.unsafeSetUnchecked,
  filterMap: Rebase__Array.filterMap,
  fill: Array_fill,
  slice: Array_slice,
  copy: Array_copy,
  mapi: Array_mapi,
  forEachi: Array_forEachi,
  findIndex: Rebase__Array.findIndex
};

var Fn = Rebase__Fn;

var List = {
  map: Rebase__List.map,
  apply: Rebase__List.apply,
  from: Rebase__List.from,
  reduce: Rebase__List.reduce,
  reduceRight: Rebase__List.reduceRight,
  flatMap: Rebase__List.flatMap,
  forAll: Rebase__List.forAll,
  find: Rebase__List.find,
  forEach: Rebase__List.forEach,
  exists: Rebase__List.exists,
  filter: Rebase__List.filter,
  concat: Rebase__List.concat,
  fromArray: Rebase__List.fromArray,
  fromSeq: Rebase__List.fromSeq,
  range: Rebase__List.range,
  isEmpty: Rebase__List.isEmpty,
  head: Rebase__List.head,
  tail: Rebase__List.tail,
  filterMap: Rebase__List.filterMap,
  length: Rebase__List.length,
  reverse: Rebase__List.reverse,
  zip: Rebase__List.zip
};

var $$Option = {
  map: Rebase__Option.map,
  apply: Rebase__Option.apply,
  from: Rebase__Option.from,
  reduce: Rebase__Option.reduce,
  reduceRight: Rebase__Option.reduceRight,
  flatMap: Rebase__Option.flatMap,
  forAll: Rebase__Option.forAll,
  find: Rebase__Option.find,
  forEach: Rebase__Option.forEach,
  exists: Rebase__Option.exists,
  filter: Rebase__Option.filter,
  some: Rebase__Option.some,
  fromResult: Rebase__Option.fromResult,
  isSome: Rebase__Option.isSome,
  isNone: Rebase__Option.isNone,
  or_: Rebase__Option.or_,
  getOr: Rebase__Option.getOr,
  getOrRaise: Rebase__Option.getOrRaise,
  mapOr: Rebase__Option.mapOr,
  mapOrElse: Rebase__Option.mapOrElse,
  flatten: Rebase__Option.flatten
};

var Result = {
  map: Rebase__Result.map,
  map2: Rebase__Result.map2,
  apply: Rebase__Result.apply,
  from: Rebase__Result.from,
  reduce: Rebase__Result.reduce,
  reduceRight: Rebase__Result.reduceRight,
  flatMap: Rebase__Result.flatMap,
  forAll: Rebase__Result.forAll,
  find: Rebase__Result.find,
  forEach: Rebase__Result.forEach,
  exists: Rebase__Result.exists,
  isOk: Rebase__Result.isOk,
  isError: Rebase__Result.isError,
  wrap: Rebase__Result.wrap,
  wrap1: Rebase__Result.wrap1,
  wrap2: Rebase__Result.wrap2,
  or_: Rebase__Result.or_,
  getOr: Rebase__Result.getOr,
  getOrRaise: Rebase__Result.getOrRaise,
  mapOr: Rebase__Result.mapOr,
  mapOrElse: Rebase__Result.mapOrElse,
  flatten: Rebase__Result.flatten
};

var Seq = {
  map: Rebase__Seq.map,
  apply: Rebase__Seq.apply,
  from: Rebase__Seq.from,
  reduce: Rebase__Seq.reduce,
  reduceRight: Rebase__Seq.reduceRight,
  flatMap: Rebase__Seq.flatMap,
  forAll: Rebase__Seq.forAll,
  find: Rebase__Seq.find,
  forEach: Rebase__Seq.forEach,
  exists: Rebase__Seq.exists,
  filter: Rebase__Seq.filter,
  empty: Rebase__Seq.empty,
  cons: Rebase__Seq.cons,
  fromArray: Rebase__Seq.fromArray,
  fromList: Rebase__Seq.fromList,
  range: Rebase__Seq.range,
  count: Rebase__Seq.count,
  isEmpty: Rebase__Seq.isEmpty,
  head: Rebase__Seq.head,
  filterMap: Rebase__Seq.filterMap,
  zip: Rebase__Seq.zip
};

function String_concat(prim, prim$1) {
  return prim$1.concat(prim);
}

function String_length(prim) {
  return prim.length;
}

function String_includes(prim, prim$1) {
  return prim$1.includes(prim);
}

function String_startsWith(prim, prim$1) {
  return prim$1.startsWith(prim);
}

function String_endsWith(prim, prim$1) {
  return prim$1.endsWith(prim);
}

function String_padStart(prim, prim$1, prim$2) {
  return prim$2.padStart(prim, prim$1);
}

function String_padEnd(prim, prim$1, prim$2) {
  return prim$2.padEnd(prim, prim$1);
}

function String_trim(prim) {
  return prim.trim();
}

function String_sub(prim, prim$1, prim$2) {
  return prim$2.substr(prim, prim$1);
}

var $$String = {
  concat: String_concat,
  length: String_length,
  includes: String_includes,
  startsWith: String_startsWith,
  endsWith: String_endsWith,
  isEmpty: Rebase__String.isEmpty,
  padStart: String_padStart,
  padEnd: String_padEnd,
  trim: String_trim,
  sub: String_sub,
  join: Rebase__String.join,
  joinWith: Rebase__String.joinWith
};

exports.InvalidArgument = InvalidArgument;
exports.IndexOutOfBounds = IndexOutOfBounds;
exports.$$Array = $$Array;
exports.Fn = Fn;
exports.List = List;
exports.$$Option = $$Option;
exports.Result = Result;
exports.Seq = Seq;
exports.$$String = $$String;
/* No side effect */
