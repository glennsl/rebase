'use strict';

var Jest                    = require("bs-jest/src/jest.js");
var Block                   = require("bs-platform/lib/js/block.js");
var Curry                   = require("bs-platform/lib/js/curry.js");
var Rebase                  = require("../src/rebase.bs.js");
var Pervasives              = require("bs-platform/lib/js/pervasives.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

describe("Mappable.S1_5", (function () {
        var M = [Rebase.Result[3]];
        return Jest.testAll("map", /* :: */[
                    /* tuple */[
                      /* Error */Block.__(1, ["err"]),
                      /* Error */Block.__(1, ["err"])
                    ],
                    /* :: */[
                      /* tuple */[
                        /* Ok */Block.__(0, [42]),
                        /* Ok */Block.__(0, [43])
                      ],
                      /* [] */0
                    ]
                  ], (function (param) {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M[/* map */0], (function (x) {
                                            return x + 1 | 0;
                                          }), param[0])), param[1]);
                    }));
      }));

describe("Mappable.S2", (function () {
        var M = [Rebase.Result[0]];
        return Jest.testAll("map2", /* :: */[
                    /* tuple */[
                      /* Error */Block.__(1, ["err"]),
                      /* Error */Block.__(1, ["error"])
                    ],
                    /* :: */[
                      /* tuple */[
                        /* Ok */Block.__(0, [42]),
                        /* Ok */Block.__(0, [43])
                      ],
                      /* [] */0
                    ]
                  ], (function (param) {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M[/* map2 */0], (function (x) {
                                            return x + 1 | 0;
                                          }), (function (e) {
                                            return e + "or";
                                          }), param[0])), param[1]);
                    }));
      }));

describe("Applicative.S1_5", (function () {
        var M_000 = Rebase.Result[3];
        var M_001 = Rebase.Result[4];
        var M_002 = Rebase.Result[5];
        Jest.testAll("apply", /* :: */[
              /* tuple */[
                /* Error */Block.__(1, ["err"]),
                /* Error */Block.__(1, ["err"]),
                /* Error */Block.__(1, ["err"])
              ],
              /* :: */[
                /* tuple */[
                  /* Ok */Block.__(0, [(function (x) {
                          return x + 1 | 0;
                        })]),
                  /* Error */Block.__(1, ["err"]),
                  /* Error */Block.__(1, ["err"])
                ],
                /* :: */[
                  /* tuple */[
                    /* Error */Block.__(1, ["err"]),
                    /* Ok */Block.__(0, [1]),
                    /* Error */Block.__(1, ["err"])
                  ],
                  /* :: */[
                    /* tuple */[
                      /* Ok */Block.__(0, [(function (x) {
                              return x + 1 | 0;
                            })]),
                      /* Ok */Block.__(0, [1]),
                      /* Ok */Block.__(0, [2])
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, param[0], param[1])), param[2]);
              }));
        return Jest.test("from", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(M_002, 42)), /* Ok */Block.__(0, [42]));
                    }));
      }));

describe("Reduceable.S1_5", (function () {
        var M_000 = Rebase.Result[1];
        var M_001 = Rebase.Result[2];
        Jest.testAll("reduce", /* :: */[
              /* tuple */[
                /* Error */Block.__(1, ["err"]),
                10
              ],
              /* :: */[
                /* tuple */[
                  /* Ok */Block.__(0, [42]),
                  32
                ],
                /* [] */0
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M_000, (function (acc, x) {
                                      return x - acc | 0;
                                    }), 10, param[0])), param[1]);
              }));
        return Jest.testAll("reduceRight", /* :: */[
                    /* tuple */[
                      /* Error */Block.__(1, ["err"]),
                      10
                    ],
                    /* :: */[
                      /* tuple */[
                        /* Ok */Block.__(0, [42]),
                        32
                      ],
                      /* [] */0
                    ]
                  ], (function (param) {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M_001, (function (acc, x) {
                                            return x - acc | 0;
                                          }), 10, param[0])), param[1]);
                    }));
      }));

describe("Monad.S1_5", (function () {
        var M_000 = Rebase.Result[3];
        var M_001 = Rebase.Result[4];
        var M_002 = Rebase.Result[5];
        var M_003 = Rebase.Result[6];
        return Jest.testAll("flatMap", /* :: */[
                    /* tuple */[
                      /* Error */Block.__(1, ["err"]),
                      /* Error */Block.__(1, ["err"])
                    ],
                    /* :: */[
                      /* tuple */[
                        /* Ok */Block.__(0, [42]),
                        /* Ok */Block.__(0, [43])
                      ],
                      /* [] */0
                    ]
                  ], (function (param) {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
                                            return /* Ok */Block.__(0, [x + 1 | 0]);
                                          }), param[0])), param[1]);
                    }));
      }));

describe("Iterable.S1_5", (function () {
        var M_000 = Rebase.Result[7];
        var M_001 = Rebase.Result[8];
        var M_002 = Rebase.Result[9];
        var M_003 = Rebase.Result[10];
        Jest.testAll("exists", /* :: */[
              /* tuple */[
                /* Error */Block.__(1, ["err"]),
                /* false */0
              ],
              /* :: */[
                /* tuple */[
                  /* Ok */Block.__(0, [1]),
                  /* false */0
                ],
                /* :: */[
                  /* tuple */[
                    /* Ok */Block.__(0, [2]),
                    /* true */1
                  ],
                  /* [] */0
                ]
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
                                      return +(x % 2 === 0);
                                    }), param[0])), param[1]);
              }));
        Jest.testAll("forEach", /* :: */[
              /* tuple */[
                /* Error */Block.__(1, ["err"]),
                0
              ],
              /* :: */[
                /* tuple */[
                  /* Ok */Block.__(0, [1]),
                  1
                ],
                /* [] */0
              ]
            ], (function (param) {
                var checked = [0];
                Curry._2(M_002, (function (x) {
                        checked[0] = x;
                        return /* () */0;
                      }), param[0]);
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](checked[0]), param[1]);
              }));
        Jest.testAll("find", /* :: */[
              /* tuple */[
                /* Error */Block.__(1, ["err"]),
                /* None */0
              ],
              /* :: */[
                /* tuple */[
                  /* Ok */Block.__(0, [1]),
                  /* None */0
                ],
                /* :: */[
                  /* tuple */[
                    /* Ok */Block.__(0, [2]),
                    /* Some */[2]
                  ],
                  /* [] */0
                ]
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, (function (x) {
                                      return +(x % 2 === 0);
                                    }), param[0])), param[1]);
              }));
        return Jest.testAll("forAll", /* :: */[
                    /* tuple */[
                      /* Error */Block.__(1, ["err"]),
                      /* true */1
                    ],
                    /* :: */[
                      /* tuple */[
                        /* Ok */Block.__(0, [1]),
                        /* false */0
                      ],
                      /* :: */[
                        /* tuple */[
                          /* Ok */Block.__(0, [2]),
                          /* true */1
                        ],
                        /* [] */0
                      ]
                    ]
                  ], (function (param) {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_000, (function (x) {
                                            return +(x % 2 === 0);
                                          }), param[0])), param[1]);
                    }));
      }));

Jest.testAll("isOk", /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        /* false */0
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          /* true */1
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* isOk */11](param[0])), param[1]);
      }));

Jest.testAll("isError", /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        /* true */1
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          /* false */0
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* isError */12](param[0])), param[1]);
      }));

Jest.test("wrap - Ok", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* wrap */13]((function () {
                              return 42;
                            }))), /* Ok */Block.__(0, [42]));
      }));

Jest.test("wrap - Error", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* wrap */13]((function () {
                              return Pervasives.failwith("err");
                            }))), /* Error */Block.__(1, [[
                        Caml_builtin_exceptions.failure,
                        "err"
                      ]]));
      }));

Jest.test("wrap1 - Ok", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* wrap1 */14]((function (n) {
                              return n;
                            }), 42)), /* Ok */Block.__(0, [42]));
      }));

Jest.test("wrap1 - Error", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* wrap1 */14]((function () {
                              return Pervasives.failwith("err");
                            }), 42)), /* Error */Block.__(1, [[
                        Caml_builtin_exceptions.failure,
                        "err"
                      ]]));
      }));

Jest.test("wrap2 - Ok", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* wrap2 */15]((function (n, m) {
                              return n + m | 0;
                            }), 40, 2)), /* Ok */Block.__(0, [42]));
      }));

Jest.test("wrap2 - Error", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* wrap2 */15]((function (_, _$1) {
                              return Pervasives.failwith("err");
                            }), 40, 2)), /* Error */Block.__(1, [[
                        Caml_builtin_exceptions.failure,
                        "err"
                      ]]));
      }));

Jest.testAll("or_", /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        /* Ok */Block.__(0, [10])
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          /* Ok */Block.__(0, [42])
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* or_ */16](/* Ok */Block.__(0, [10]), param[0])), param[1]);
      }));

Jest.testAll("getOr", /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        10
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          42
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* getOr */17](10, param[0])), param[1]);
      }));

Jest.test("getOrRaise - Error", (function () {
        return Jest.Expect[/* toThrowException */20]([
                    Rebase.InvalidArgument,
                    "getOrRaise called on Error"
                  ], Jest.Expect[/* expect */0]((function () {
                          return Rebase.Result[/* getOrRaise */18](/* Error */Block.__(1, ["err"]));
                        })));
      }));

Jest.test("getOrRaise - Ok", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* getOrRaise */18](/* Ok */Block.__(0, [42]))), 42);
      }));

Jest.testAll("mapOr", /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        10
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          43
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* mapOr */19]((function (x) {
                              return x + 1 | 0;
                            }), 10, param[0])), param[1]);
      }));

Jest.testAll("mapOrElse", /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        10
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          43
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* mapOrElse */20]((function (x) {
                              return x + 1 | 0;
                            }), (function () {
                              return 10;
                            }), param[0])), param[1]);
      }));

Jest.testAll("flatten", /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        /* Error */Block.__(1, ["err"])
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [/* Error */Block.__(1, ["err"])]),
          /* Error */Block.__(1, ["err"])
        ],
        /* :: */[
          /* tuple */[
            /* Ok */Block.__(0, [/* Ok */Block.__(0, [42])]),
            /* Ok */Block.__(0, [42])
          ],
          /* [] */0
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Result[/* flatten */21](param[0])), param[1]);
      }));

/*  Not a pure module */
