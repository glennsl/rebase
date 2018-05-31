'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function from(x) {
  return /* array */[x];
}

function unsafeGetUnchecked(index, self) {
  return self[index];
}

function unsafeSetUnchecked(index, value, self) {
  self[index] = value;
  return /* () */0;
}

function make(length, value) {
  var array = new Array(length);
  array.fill(value);
  return array;
}

function fromList(list) {
  if (list) {
    var array = make(List.length(list), list[0]);
    var _i = 1;
    var _param = list[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        array[i] = param[0];
        _param = param[1];
        _i = i + 1 | 0;
        continue ;
      } else {
        return array;
      }
    };
  } else {
    return /* array */[];
  }
}

function fromSeq(seq) {
  var array = /* array */[];
  var _seq = seq;
  while(true) {
    var seq$1 = _seq;
    var match = Curry._1(seq$1, /* () */0);
    if (match) {
      array.push(match[0]);
      _seq = match[1];
      continue ;
    } else {
      return array;
    }
  };
}

function range($staropt$star, start, finish) {
  var step = $staropt$star ? $staropt$star[0] : 1;
  if (step === 0) {
    throw [
          Rebase__Types.InvalidArgument,
          "Array.range: ~step=0 would cause infinite loop"
        ];
  } else if (step < 0 && start < finish) {
    return /* array */[];
  } else if (step > 0 && start > finish) {
    return /* array */[];
  } else {
    var array = /* array */[];
    var last = Caml_int32.imul(Caml_int32.div(finish - start | 0, step), step) + start | 0;
    var loop = function (_n) {
      while(true) {
        var n = _n;
        array.push(n);
        if (n !== last) {
          _n = n + step | 0;
          continue ;
        } else {
          return 0;
        }
      };
    };
    loop(start);
    return array;
  }
}

function get(self, i) {
  if (i >= 0 && i < self.length) {
    return /* Some */[self[i]];
  } else {
    return /* None */0;
  }
}

function set(self, i, value) {
  if (i >= 0 && i < self.length) {
    self[i] = value;
    return /* () */0;
  } else {
    return /* () */0;
  }
}

function getOrRaise(i, self) {
  if (i >= 0 && i < self.length) {
    return self[i];
  } else {
    throw Rebase__Types.IndexOutOfBounds;
  }
}

function setOrRaise(i, value, self) {
  if (i >= 0 && i < self.length) {
    self[i] = value;
    return /* () */0;
  } else {
    throw Rebase__Types.IndexOutOfBounds;
  }
}

function findIndex(f, self) {
  var i = self.findIndex(Curry.__1(f));
  if (i !== -1) {
    return /* Some */[/* tuple */[
              i,
              self[i]
            ]];
  } else {
    return /* None */0;
  }
}

function flatMap(f, self) {
  var result = /* array */[];
  for(var i = 0 ,i_finish = self.length - 1 | 0; i <= i_finish; ++i){
    var nested = Curry._1(f, self[i]);
    for(var j = 0 ,j_finish = nested.length - 1 | 0; j <= j_finish; ++j){
      result.push(nested[j]);
    }
  }
  return result;
}

function filterMap(f, self) {
  var result = /* array */[];
  for(var i = 0 ,i_finish = self.length - 1 | 0; i <= i_finish; ++i){
    var match = Curry._1(f, self[i]);
    if (match) {
      result.push(match[0]);
    }
    
  }
  return result;
}

function product(f, xs, ys) {
  return flatMap((function (x) {
                return ys.map((function (y) {
                              return Curry._2(f, x, y);
                            }));
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
