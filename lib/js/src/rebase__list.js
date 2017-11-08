'use strict';

var Curry         = require("bs-platform/lib/js/curry.js");
var Rebase__array = require("./rebase__array.js");

function head(param) {
  if (param) {
    return /* Some */[param[0]];
  } else {
    return /* None */0;
  }
}

function tail(param) {
  if (param) {
    return /* Some */[param[1]];
  } else {
    return /* None */0;
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

function exists(predicate, _param) {
  while(true) {
    var param = _param;
    if (param) {
      if (Curry._1(predicate, param[0])) {
        return /* true */1;
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* false */0;
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
        return /* Some */[x];
      } else {
        _param = param[1];
        continue ;
        
      }
    } else {
      return /* None */0;
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
        return /* false */0;
      }
    } else {
      return /* true */1;
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

function from(x) {
  return /* :: */[
          x,
          /* [] */0
        ];
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
      _acc = 1;
      continue ;
      
    } else {
      return acc;
    }
  };
}

function toArray(list) {
  if (list) {
    var array = Rebase__array.make(length(list), list[0]);
    var _i = 1;
    var _param = list[1];
    while(true) {
      var param = _param;
      var i = _i;
      if (param) {
        Rebase__array.unsafeSetUnchecked(i, param[0], array);
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

exports.head             = head;
exports.tail             = tail;
exports.reverseAndAppend = reverseAndAppend;
exports.reverse          = reverse;
exports.filter           = filter;
exports.exists           = exists;
exports.forEach          = forEach;
exports.find             = find;
exports.forAll           = forAll;
exports.flatMap          = flatMap;
exports.from             = from;
exports.map              = map;
exports.product          = product;
exports.apply            = apply;
exports.reduce           = reduce;
exports.reduceRight      = reduceRight;
exports.length           = length;
exports.toArray          = toArray;
/* No side effect */
