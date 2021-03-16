'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function from(x) {
  return [x];
}

function unsafeGetUnchecked(index, self) {
  return self[index];
}

function unsafeSetUnchecked(index, value, self) {
  self[index] = value;
  
}

function make(length, value) {
  var array = new Array(length);
  array.fill(value);
  return array;
}

function fromList(x) {
  if (!x) {
    return [];
  }
  var array = make(List.length(x), x.hd);
  var _i = 1;
  var _x = x.tl;
  while(true) {
    var x$1 = _x;
    var i = _i;
    if (!x$1) {
      return array;
    }
    array[i] = x$1.hd;
    _x = x$1.tl;
    _i = i + 1 | 0;
    continue ;
  };
}

function fromSeq(seq) {
  var array = [];
  var _seq = seq;
  while(true) {
    var seq$1 = _seq;
    var match = Curry._1(seq$1, undefined);
    if (!match) {
      return array;
    }
    array.push(match._0);
    _seq = match._1;
    continue ;
  };
}

function range(stepOpt, start, finish) {
  var step = stepOpt !== undefined ? stepOpt : 1;
  if (step === 0) {
    throw {
          RE_EXN_ID: Rebase__Types.InvalidArgument,
          _1: "Array.range: ~step=0 would cause infinite loop",
          Error: new Error()
        };
  }
  if (step < 0 && start < finish) {
    return [];
  }
  if (step > 0 && start > finish) {
    return [];
  }
  var array = [];
  var last = Math.imul(Caml_int32.div(finish - start | 0, step), step) + start | 0;
  var loop = function (_n) {
    while(true) {
      var n = _n;
      array.push(n);
      if (n === last) {
        return ;
      }
      _n = n + step | 0;
      continue ;
    };
  };
  loop(start);
  return array;
}

function get(self, i) {
  if (i >= 0 && i < self.length) {
    return Caml_option.some(self[i]);
  }
  
}

function set(self, i, value) {
  if (i >= 0 && i < self.length) {
    self[i] = value;
    return ;
  }
  
}

function getOrRaise(i, self) {
  if (i >= 0 && i < self.length) {
    return self[i];
  }
  throw {
        RE_EXN_ID: Rebase__Types.IndexOutOfBounds,
        Error: new Error()
      };
}

function setOrRaise(i, value, self) {
  if (i >= 0 && i < self.length) {
    self[i] = value;
    return ;
  }
  throw {
        RE_EXN_ID: Rebase__Types.IndexOutOfBounds,
        Error: new Error()
      };
}

function findIndex(f, self) {
  var i = self.findIndex(Curry.__1(f));
  if (i !== -1) {
    return [
            i,
            self[i]
          ];
  }
  
}

function flatMap(f, self) {
  var result = [];
  for(var i = 0 ,i_finish = self.length; i < i_finish; ++i){
    var nested = Curry._1(f, self[i]);
    for(var j = 0 ,j_finish = nested.length; j < j_finish; ++j){
      result.push(nested[j]);
    }
  }
  return result;
}

function filterMap(f, self) {
  var result = [];
  for(var i = 0 ,i_finish = self.length; i < i_finish; ++i){
    var x = Curry._1(f, self[i]);
    if (x !== undefined) {
      result.push(Caml_option.valFromOption(x));
    }
    
  }
  return result;
}

function product(f, xs, ys) {
  return flatMap((function (x) {
                return ys.map(function (y) {
                            return Curry._2(f, x, y);
                          });
              }), xs);
}

function apply(fs, xs) {
  return product((function (f, x) {
                return Curry._1(f, x);
              }), fs, xs);
}

exports.from = from;
exports.unsafeGetUnchecked = unsafeGetUnchecked;
exports.unsafeSetUnchecked = unsafeSetUnchecked;
exports.make = make;
exports.fromList = fromList;
exports.fromSeq = fromSeq;
exports.range = range;
exports.get = get;
exports.set = set;
exports.getOrRaise = getOrRaise;
exports.setOrRaise = setOrRaise;
exports.findIndex = findIndex;
exports.flatMap = flatMap;
exports.filterMap = filterMap;
exports.product = product;
exports.apply = apply;
/* No side effect */
