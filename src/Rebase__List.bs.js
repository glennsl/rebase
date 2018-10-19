'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");
var Rebase__Types = require("./Rebase__Types.bs.js");

function from(x) {
  return /* :: */[
          x,
          /* [] */0
        ];
}

function fromArray(arr) {
  var _acc = /* [] */0;
  var _i = arr.length - 1 | 0;
  while(true) {
    var i = _i;
    var acc = _acc;
    if (i !== -1) {
      _i = i - 1 | 0;
      _acc = /* :: */[
        arr[i],
        acc
      ];
      continue ;
    } else {
      return acc;
    }
  };
}

function fromSeq(seq) {
  var match = Curry._1(seq, /* () */0);
  if (match) {
    return /* :: */[
            match[0],
            fromSeq(match[1])
          ];
  } else {
    return /* [] */0;
  }
}

function range($staropt$star, start, finish) {
  var step = $staropt$star !== undefined ? $staropt$star : 1;
  if (step === 0) {
    throw [
          Rebase__Types.InvalidArgument,
          "List.range: ~step=0 would cause infinite loop"
        ];
  } else if (step < 0 && start < finish || step > 0 && start > finish) {
    return /* [] */0;
  } else {
    var last = Caml_int32.imul(Caml_int32.div(finish - start | 0, step), step) + start | 0;
    var _acc = /* [] */0;
    var _n = last;
    while(true) {
      var n = _n;
      var acc = _acc;
      if (n === start) {
        return /* :: */[
                n,
                acc
              ];
      } else {
        _n = n - step | 0;
        _acc = /* :: */[
          n,
          acc
        ];
        continue ;
      }
    };
  }
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
    return Js_primitive.some(param[0]);
  }
  
}

function tail(param) {
  if (param) {
    return param[1];
  }
  
}

function reverseAndAppend(_acc, _param) {
  while(true) {
    var param = _param;
    var acc = _acc;
    if (param) {
      _param = param[1];
      _acc = /* :: */[
        param[0],
        acc
      ];
      continue ;
    } else {
      return acc;
    }
  };
}

function reverse(self) {
  return reverseAndAppend(/* [] */0, self);
}

function filter(predicate, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var xs = param[1];
      var x = param[0];
      if (Curry._1(predicate, x)) {
        return /* :: */[
                x,
                filter(predicate, xs)
              ];
      } else {
        _param = xs;
        continue ;
      }
    } else {
      return /* [] */0;
    }
  };
}

function filterMap(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var xs = param[1];
      var match = Curry._1(f, param[0]);
      if (match !== undefined) {
        return /* :: */[
                Js_primitive.valFromOption(match),
                filterMap(f, xs)
              ];
      } else {
        _param = xs;
        continue ;
      }
    } else {
      return /* [] */0;
    }
  };
}

function exists(predicate, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(predicate, param[0])) {
        return true;
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return false;
    }
  };
}

function forEach(f, _param) {
  while(true) {
    var param = _param;
    if (param) {
      Curry._1(f, param[0]);
      _param = param[1];
      continue ;
    } else {
      return /* () */0;
    }
  };
}

function find(predicate, _param) {
  while(true) {
    var param = _param;
    if (param) {
      var x = param[0];
      if (Curry._1(predicate, x)) {
        return Js_primitive.some(x);
      } else {
        _param = param[1];
        continue ;
      }
    } else {
      return undefined;
    }
  };
}

function forAll(predicate, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(predicate, param[0])) {
        _param = param[1];
        continue ;
      } else {
        return false;
      }
    } else {
      return true;
    }
  };
}

function flatMap(f, self) {
  var aux = function (_inner, _outer) {
    while(true) {
      var outer = _outer;
      var inner = _inner;
      if (inner) {
        return /* :: */[
                inner[0],
                aux(inner[1], outer)
              ];
      } else if (outer) {
        _outer = outer[1];
        _inner = Curry._1(f, outer[0]);
        continue ;
      } else {
        return /* [] */0;
      }
    };
  };
  return aux(/* [] */0, self);
}

function map(f, param) {
  if (param) {
    return /* :: */[
            Curry._1(f, param[0]),
            map(f, param[1])
          ];
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
    if (param) {
      _param = param[1];
      _acc = Curry._2(f, acc, param[0]);
      continue ;
    } else {
      return acc;
    }
  };
}

function reduceRight(f, acc, param) {
  if (param) {
    return Curry._2(f, reduceRight(f, acc, param[1]), param[0]);
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
    if (param) {
      _param = param[1];
      _acc = acc + 1 | 0;
      continue ;
    } else {
      return acc;
    }
  };
}

function zip(ys, xs) {
  if (xs && ys) {
    return /* :: */[
            /* tuple */[
              xs[0],
              ys[0]
            ],
            zip(ys[1], xs[1])
          ];
  } else {
    return /* [] */0;
  }
}

function concat(ys, xs) {
  if (xs) {
    return /* :: */[
            xs[0],
            concat(ys, xs[1])
          ];
  } else if (ys) {
    return /* :: */[
            ys[0],
            concat(ys[1], /* [] */0)
          ];
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
