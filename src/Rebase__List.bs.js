'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function from(x) {
  return {
          hd: x,
          tl: /* [] */0
        };
}

function fromArray(arr) {
  var _acc = /* [] */0;
  var _i = arr.length - 1 | 0;
  while(true) {
    var i = _i;
    var acc = _acc;
    if (i === -1) {
      return acc;
    }
    _i = i - 1 | 0;
    _acc = {
      hd: arr[i],
      tl: acc
    };
    continue ;
  };
}

function fromSeq(seq) {
  var match = Curry._1(seq, undefined);
  if (match) {
    return {
            hd: match._0,
            tl: fromSeq(match._1)
          };
  } else {
    return /* [] */0;
  }
}

function range(stepOpt, start, finish) {
  var step = stepOpt !== undefined ? stepOpt : 1;
  if (step === 0) {
    throw {
          RE_EXN_ID: Rebase__Types.InvalidArgument,
          _1: "List.range: ~step=0 would cause infinite loop",
          Error: new Error()
        };
  }
  if (step < 0 && start < finish) {
    return /* [] */0;
  }
  if (step > 0 && start > finish) {
    return /* [] */0;
  }
  var last = Math.imul(Caml_int32.div(finish - start | 0, step), step) + start | 0;
  var _acc = /* [] */0;
  var _n = last;
  while(true) {
    var n = _n;
    var acc = _acc;
    if (n === start) {
      return {
              hd: n,
              tl: acc
            };
    }
    _n = n - step | 0;
    _acc = {
      hd: n,
      tl: acc
    };
    continue ;
  };
}

function isEmpty(param) {
  if (param) {
    return false;
  } else {
    return true;
  }
}

function head(param) {
  if (param) {
    return Caml_option.some(param.hd);
  }
  
}

function tail(param) {
  if (param) {
    return param.tl;
  }
  
}

function reverseAndAppend(_acc, _param) {
  while(true) {
    var param = _param;
    var acc = _acc;
    if (!param) {
      return acc;
    }
    _param = param.tl;
    _acc = {
      hd: param.hd,
      tl: acc
    };
    continue ;
  };
}

function reverse(self) {
  return reverseAndAppend(/* [] */0, self);
}

function filter(predicate, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return /* [] */0;
    }
    var xs = param.tl;
    var x = param.hd;
    if (Curry._1(predicate, x)) {
      return {
              hd: x,
              tl: filter(predicate, xs)
            };
    }
    _param = xs;
    continue ;
  };
}

function filterMap(f, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return /* [] */0;
    }
    var xs = param.tl;
    var x = Curry._1(f, param.hd);
    if (x !== undefined) {
      return {
              hd: Caml_option.valFromOption(x),
              tl: filterMap(f, xs)
            };
    }
    _param = xs;
    continue ;
  };
}

function exists(predicate, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return false;
    }
    if (Curry._1(predicate, param.hd)) {
      return true;
    }
    _param = param.tl;
    continue ;
  };
}

function forEach(f, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return ;
    }
    Curry._1(f, param.hd);
    _param = param.tl;
    continue ;
  };
}

function find(predicate, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return ;
    }
    var x = param.hd;
    if (Curry._1(predicate, x)) {
      return Caml_option.some(x);
    }
    _param = param.tl;
    continue ;
  };
}

function forAll(predicate, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return true;
    }
    if (!Curry._1(predicate, param.hd)) {
      return false;
    }
    _param = param.tl;
    continue ;
  };
}

function flatMap(f, self) {
  var aux = function (_inner, _outer) {
    while(true) {
      var outer = _outer;
      var inner = _inner;
      if (inner) {
        return {
                hd: inner.hd,
                tl: aux(inner.tl, outer)
              };
      }
      if (!outer) {
        return /* [] */0;
      }
      _outer = outer.tl;
      _inner = Curry._1(f, outer.hd);
      continue ;
    };
  };
  return aux(/* [] */0, self);
}

function map(f, param) {
  if (param) {
    return {
            hd: Curry._1(f, param.hd),
            tl: map(f, param.tl)
          };
  } else {
    return /* [] */0;
  }
}

function product(f, xs, ys) {
  return flatMap((function (x) {
                return map((function (y) {
                              return Curry._2(f, x, y);
                            }), ys);
              }), xs);
}

function apply(fs, xs) {
  return product((function (f, x) {
                return Curry._1(f, x);
              }), fs, xs);
}

function reduce(f, _acc, _param) {
  while(true) {
    var param = _param;
    var acc = _acc;
    if (!param) {
      return acc;
    }
    _param = param.tl;
    _acc = Curry._2(f, acc, param.hd);
    continue ;
  };
}

function reduceRight(f, acc, param) {
  if (param) {
    return Curry._2(f, reduceRight(f, acc, param.tl), param.hd);
  } else {
    return acc;
  }
}

function length(self) {
  var _acc = 0;
  var _param = self;
  while(true) {
    var param = _param;
    var acc = _acc;
    if (!param) {
      return acc;
    }
    _param = param.tl;
    _acc = acc + 1 | 0;
    continue ;
  };
}

function zip(ys, xs) {
  if (xs && ys) {
    return {
            hd: [
              xs.hd,
              ys.hd
            ],
            tl: zip(ys.tl, xs.tl)
          };
  } else {
    return /* [] */0;
  }
}

function concat(ys, xs) {
  if (xs) {
    return {
            hd: xs.hd,
            tl: concat(ys, xs.tl)
          };
  } else if (ys) {
    return {
            hd: ys.hd,
            tl: concat(ys.tl, /* [] */0)
          };
  } else {
    return /* [] */0;
  }
}

exports.from = from;
exports.fromArray = fromArray;
exports.fromSeq = fromSeq;
exports.range = range;
exports.isEmpty = isEmpty;
exports.head = head;
exports.tail = tail;
exports.reverseAndAppend = reverseAndAppend;
exports.reverse = reverse;
exports.filter = filter;
exports.filterMap = filterMap;
exports.exists = exists;
exports.forEach = forEach;
exports.find = find;
exports.forAll = forAll;
exports.flatMap = flatMap;
exports.map = map;
exports.product = product;
exports.apply = apply;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.length = length;
exports.zip = zip;
exports.concat = concat;
/* No side effect */
