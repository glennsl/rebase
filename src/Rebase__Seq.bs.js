'use strict';

var Curry         = require("bs-platform/lib/js/curry.js");
var Caml_int32    = require("bs-platform/lib/js/caml_int32.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function empty() {
  return /* Nil */0;
}

function cons(x, seq, _) {
  return /* Cons */[
          x,
          seq
        ];
}

function fromArray(arr) {
  var get = function (i) {
    var x = arr[i];
    if (x === undefined) {
      return /* Nil */0;
    } else {
      return /* Cons */[
              x,
              (function () {
                  return get(i + 1 | 0);
                })
            ];
    }
  };
  return (function () {
      return get(0);
    });
}

function from(x) {
  return (function () {
      return /* Cons */[
              x,
              empty
            ];
    });
}

function fromList(param) {
  if (param) {
    var x = param[0];
    var partial_arg = fromList(param[1]);
    return (function () {
        return /* Cons */[
                x,
                partial_arg
              ];
      });
  } else {
    return empty;
  }
}

function range($staropt$star, start, finish) {
  var step = $staropt$star ? $staropt$star[0] : 1;
  if (step) {
    if (step < 0 && start < finish) {
      return empty;
    } else if (step > 0 && start > finish) {
      return empty;
    } else {
      var last = Caml_int32.imul(Caml_int32.div(finish - start | 0, step), step) + start | 0;
      var next = function (n) {
        if (n === last) {
          return (function () {
              return /* Cons */[
                      n,
                      empty
                    ];
            });
        } else {
          return (function () {
              return /* Cons */[
                      n,
                      next(n + step | 0)
                    ];
            });
        }
      };
      return next(start);
    }
  } else {
    throw [
          Rebase__Types.InvalidArgument,
          "Seq.range: ~step=0 would cause infinite loop"
        ];
  }
}

function isEmpty(seq) {
  var match = Curry._1(seq, /* () */0);
  if (match) {
    return /* false */0;
  } else {
    return /* true */1;
  }
}

function head(seq) {
  var match = Curry._1(seq, /* () */0);
  if (match) {
    return /* Some */[match[0]];
  } else {
    return /* None */0;
  }
}

function filter(predicate, seq, _) {
  var _seq = seq;
  while(true) {
    var seq$1 = _seq;
    var match = Curry._1(seq$1, /* () */0);
    if (match) {
      var next = match[1];
      var x = match[0];
      if (Curry._1(predicate, x)) {
        return /* Cons */[
                x,
                (function(next){
                return function (param) {
                  return filter(predicate, next, param);
                }
                }(next))
              ];
      } else {
        _seq = next;
        continue ;
        
      }
    } else {
      return /* Nil */0;
    }
  };
}

function filterMap(f, seq, _) {
  var _seq = seq;
  while(true) {
    var seq$1 = _seq;
    var match = Curry._1(seq$1, /* () */0);
    if (match) {
      var next = match[1];
      var match$1 = Curry._1(f, match[0]);
      if (match$1) {
        return /* Cons */[
                match$1[0],
                (function(next){
                return function (param) {
                  return filterMap(f, next, param);
                }
                }(next))
              ];
      } else {
        _seq = next;
        continue ;
        
      }
    } else {
      return /* Nil */0;
    }
  };
}

function exists(predicate, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, /* () */0);
    if (match) {
      if (Curry._1(predicate, match[0])) {
        return /* true */1;
      } else {
        _seq = match[1];
        continue ;
        
      }
    } else {
      return /* false */0;
    }
  };
}

function forEach(f, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, /* () */0);
    if (match) {
      Curry._1(f, match[0]);
      _seq = match[1];
      continue ;
      
    } else {
      return /* () */0;
    }
  };
}

function find(predicate, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, /* () */0);
    if (match) {
      var x = match[0];
      if (Curry._1(predicate, x)) {
        return /* Some */[x];
      } else {
        _seq = match[1];
        continue ;
        
      }
    } else {
      return /* None */0;
    }
  };
}

function forAll(predicate, _seq) {
  while(true) {
    var seq = _seq;
    var match = Curry._1(seq, /* () */0);
    if (match) {
      if (Curry._1(predicate, match[0])) {
        _seq = match[1];
        continue ;
        
      } else {
        return /* false */0;
      }
    } else {
      return /* true */1;
    }
  };
}

function map(f, seq, _) {
  var match = Curry._1(seq, /* () */0);
  if (match) {
    var next = match[1];
    return /* Cons */[
            Curry._1(f, match[0]),
            (function (param) {
                return map(f, next, param);
              })
          ];
  } else {
    return /* Nil */0;
  }
}

function flatMap(f, seq) {
  var aux = function (_inner, _outer) {
    while(true) {
      var outer = _outer;
      var inner = _inner;
      var match = Curry._1(inner, /* () */0);
      if (match) {
        var next = match[1];
        return /* Cons */[
                match[0],
                (function(outer,next){
                return function () {
                  return aux(next, outer);
                }
                }(outer,next))
              ];
      } else {
        var match$1 = Curry._1(outer, /* () */0);
        if (match$1) {
          _outer = match$1[1];
          _inner = Curry._1(f, match$1[0]);
          continue ;
          
        } else {
          return /* Nil */0;
        }
      }
    };
  };
  return (function () {
      return aux(empty, seq);
    });
}

function reduce(f, _acc, _seq) {
  while(true) {
    var seq = _seq;
    var acc = _acc;
    var match = Curry._1(seq, /* () */0);
    if (match) {
      _seq = match[1];
      _acc = Curry._2(f, acc, match[0]);
      continue ;
      
    } else {
      return acc;
    }
  };
}

function reduceRight(f, acc, seq) {
  var match = Curry._1(seq, /* () */0);
  if (match) {
    return Curry._2(f, reduceRight(f, acc, match[1]), match[0]);
  } else {
    return acc;
  }
}

function product(f, xs, ys) {
  return flatMap((function (x) {
                return (function (param) {
                    return map((function (y) {
                                  return Curry._2(f, x, y);
                                }), ys, param);
                  });
              }), xs);
}

function apply(fs, xs) {
  return product((function (f, x) {
                return Curry._1(f, x);
              }), fs, xs);
}

function count(seq) {
  var n = [0];
  forEach((function () {
          n[0] = n[0] + 1 | 0;
          return /* () */0;
        }), seq);
  return n[0];
}

function zip(ys, xs, _) {
  var match = Curry._1(xs, /* () */0);
  var match$1 = Curry._1(ys, /* () */0);
  if (match) {
    if (match$1) {
      var nextY = match$1[1];
      var nextX = match[1];
      return /* Cons */[
              /* tuple */[
                match[0],
                match$1[0]
              ],
              (function (param) {
                  return zip(nextY, nextX, param);
                })
            ];
    } else {
      return /* Nil */0;
    }
  } else {
    return /* Nil */0;
  }
}

exports.empty       = empty;
exports.cons        = cons;
exports.fromArray   = fromArray;
exports.from        = from;
exports.fromList    = fromList;
exports.range       = range;
exports.isEmpty     = isEmpty;
exports.head        = head;
exports.filter      = filter;
exports.filterMap   = filterMap;
exports.exists      = exists;
exports.forEach     = forEach;
exports.find        = find;
exports.forAll      = forAll;
exports.map         = map;
exports.flatMap     = flatMap;
exports.reduce      = reduce;
exports.reduceRight = reduceRight;
exports.product     = product;
exports.apply       = apply;
exports.count       = count;
exports.zip         = zip;
/* No side effect */
