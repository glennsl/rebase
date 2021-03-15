'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var Js_undefined = require("bs-platform/lib/js/js_undefined.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function empty(param) {
  return /* Nil */0;
}

function cons(x, seq, param) {
  return /* Cons */{
          _0: x,
          _1: seq
        };
}

function fromArray(arr) {
  var get = function (i) {
    var x = arr[i];
    if (Js_undefined.testAny(x)) {
      return /* Nil */0;
    } else {
      return /* Cons */{
              _0: x,
              _1: (function (param) {
                  return get(i + 1 | 0);
                })
            };
    }
  };
  return function (param) {
    return get(0);
  };
}

function from(x) {
  return function (param) {
    return /* Cons */{
            _0: x,
            _1: empty
          };
  };
}

function fromList(param) {
  if (!param) {
    return empty;
  }
  var x = param.hd;
  var partial_arg = fromList(param.tl);
  return function (param) {
    return /* Cons */{
            _0: x,
            _1: partial_arg
          };
  };
}

function range(stepOpt, start, finish) {
  var step = stepOpt !== undefined ? stepOpt : 1;
  if (step === 0) {
    throw {
          RE_EXN_ID: Rebase__Types.InvalidArgument,
          _1: "Seq.range: ~step=0 would cause infinite loop",
          Error: new Error()
        };
  }
  if (step < 0 && start < finish) {
    return empty;
  }
  if (step > 0 && start > finish) {
    return empty;
  }
  var last = Math.imul(Caml_int32.div(finish - start | 0, step), step) + start | 0;
  var next = function (n) {
    if (n === last) {
      return function (param) {
        return /* Cons */{
                _0: n,
                _1: empty
              };
      };
    } else {
      return function (param) {
        return /* Cons */{
                _0: n,
                _1: next(n + step | 0)
              };
      };
    }
  };
  return next(start);
}

function isEmpty(seq) {
  var match = Curry._1(seq, undefined);
  if (match) {
    return false;
  } else {
    return true;
  }
}

function head(seq) {
  var match = Curry._1(seq, undefined);
  if (match) {
    return Caml_option.some(match._0);
  }
  
}

function filter(predicate, seq, param) {
  var _seq = seq;
  while(true) {
    var seq$1 = _seq;
    var match = Curry._1(seq$1, undefined);
    if (!match) {
      return /* Nil */0;
    }
    var next = match._1;
    var x = match._0;
    if (Curry._1(predicate, x)) {
      return /* Cons */{
              _0: x,
              _1: (function(next){
              return function (param) {
                return filter(predicate, next, param);
              }
              }(next))
            };
    }
    _seq = next;
    continue ;
  };
}

function filterMap(f, seq, param) {
  var _seq = seq;
  while(true) {
    var seq$1 = _seq;
    var match = Curry._1(seq$1, undefined);
    if (!match) {
      return /* Nil */0;
    }
    var next = match._1;
    var x = Curry._1(f, match._0);
    if (x !== undefined) {
      return /* Cons */{
              _0: Caml_option.valFromOption(x),
              _1: (function(next){
              return function (param) {
                return filterMap(f, next, param);
              }
              }(next))
            };
    }
    _seq = next;
    continue ;
  };
}

function exists(predicate, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return false;
    }
    if (Curry._1(predicate, match._0)) {
      return true;
    }
    _seq = match._1;
    continue ;
  };
}

function forEach(f, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return ;
    }
    Curry._1(f, match._0);
    _seq = match._1;
    continue ;
  };
}

function find(predicate, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return ;
    }
    var x = match._0;
    if (Curry._1(predicate, x)) {
      return Caml_option.some(x);
    }
    _seq = match._1;
    continue ;
  };
}

function forAll(predicate, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return true;
    }
    if (!Curry._1(predicate, match._0)) {
      return false;
    }
    _seq = match._1;
    continue ;
  };
}

function map(f, seq, param) {
  var match = Curry._1(seq, undefined);
  if (!match) {
    return /* Nil */0;
  }
  var next = match._1;
  return /* Cons */{
          _0: Curry._1(f, match._0),
          _1: (function (param) {
              return map(f, next, param);
            })
        };
}

function flatMap(f, seq) {
  var aux = function (_inner, _outer) {
    while(true) {
      var outer = _outer;
      var inner = _inner;
      var match = Curry._1(inner, undefined);
      if (match) {
        var next = match._1;
        return /* Cons */{
                _0: match._0,
                _1: (function(outer,next){
                return function (param) {
                  return aux(next, outer);
                }
                }(outer,next))
              };
      }
      var match$1 = Curry._1(outer, undefined);
      if (!match$1) {
        return /* Nil */0;
      }
      _outer = match$1._1;
      _inner = Curry._1(f, match$1._0);
      continue ;
    };
  };
  return function (param) {
    return aux(empty, seq);
  };
}

function reduce(f, _acc, _seq) {
  while(true) {
    var seq = _seq;
    var acc = _acc;
    var match = Curry._1(seq, undefined);
    if (!match) {
      return acc;
    }
    _seq = match._1;
    _acc = Curry._2(f, acc, match._0);
    continue ;
  };
}

function reduceRight(f, acc, seq) {
  var match = Curry._1(seq, undefined);
  if (match) {
    return Curry._2(f, reduceRight(f, acc, match._1), match._0);
  } else {
    return acc;
  }
}

function product(f, xs, ys) {
  return flatMap((function (x) {
                return function (param) {
                  return map((function (y) {
                                return Curry._2(f, x, y);
                              }), ys, param);
                };
              }), xs);
}

function apply(fs, xs) {
  return product((function (f, x) {
                return Curry._1(f, x);
              }), fs, xs);
}

function count(seq) {
  var n = {
    contents: 0
  };
  forEach((function (_x) {
          n.contents = n.contents + 1 | 0;
          
        }), seq);
  return n.contents;
}

function zip(ys, xs, param) {
  var match = Curry._1(xs, undefined);
  var match$1 = Curry._1(ys, undefined);
  if (!match) {
    return /* Nil */0;
  }
  if (!match$1) {
    return /* Nil */0;
  }
  var nextY = match$1._1;
  var nextX = match._1;
  return /* Cons */{
          _0: [
            match._0,
            match$1._0
          ],
          _1: (function (param) {
              return zip(nextY, nextX, param);
            })
        };
}

exports.empty = empty;
exports.cons = cons;
exports.fromArray = fromArray;
exports.from = from;
exports.fromList = fromList;
exports.range = range;
exports.isEmpty = isEmpty;
exports.head = head;
exports.filter = filter;
exports.filterMap = filterMap;
exports.exists = exists;
exports.forEach = forEach;
exports.find = find;
exports.forAll = forAll;
exports.map = map;
exports.flatMap = flatMap;
exports.reduce = reduce;
exports.reduceRight = reduceRight;
exports.product = product;
exports.apply = apply;
exports.count = count;
exports.zip = zip;
/* No side effect */
