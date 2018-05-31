'use strict';

var Jest = require("bs-jest/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

describe("Mappable.S1_5", (function () {
        var M = [Rebase.Result[0]];
        return TestHelpers.testFn("map", Curry._1(M[/* map */0], (function (x) {
                          return x + 1 | 0;
                        })), /* :: */[
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
                  ]);
      }));

describe("Mappable.S2", (function () {
        var M = [Rebase.Result[1]];
        return TestHelpers.testFn("map2", Curry._2(M[/* map2 */0], (function (x) {
                          return x + 1 | 0;
                        }), (function (e) {
                          return e + "or";
                        })), /* :: */[
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
                  ]);
      }));

describe("Applicative.S1_5", (function () {
        var M_000 = Rebase.Result[0];
        var M_001 = Rebase.Result[2];
        var M_002 = Rebase.Result[3];
        TestHelpers.testFn("apply", Curry._1(Rebase.Fn[/* uncurry */4], M_001), /* :: */[
              /* tuple */[
                /* tuple */[
                  /* Error */Block.__(1, ["err"]),
                  /* Error */Block.__(1, ["err"])
                ],
                /* Error */Block.__(1, ["err"])
              ],
              /* :: */[
                /* tuple */[
                  /* tuple */[
                    /* Ok */Block.__(0, [(function (x) {
                            return x + 1 | 0;
                          })]),
                    /* Error */Block.__(1, ["err"])
                  ],
                  /* Error */Block.__(1, ["err"])
                ],
                /* :: */[
                  /* tuple */[
                    /* tuple */[
                      /* Error */Block.__(1, ["err"]),
                      /* Ok */Block.__(0, [1])
                    ],
                    /* Error */Block.__(1, ["err"])
                  ],
                  /* :: */[
                    /* tuple */[
                      /* tuple */[
                        /* Ok */Block.__(0, [(function (x) {
                                return x + 1 | 0;
                              })]),
                        /* Ok */Block.__(0, [1])
                      ],
                      /* Ok */Block.__(0, [2])
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
        return Jest.test("from", (function () {
                      return Jest.Expect[/* toEqual */12](/* Ok */Block.__(0, [42]), Jest.Expect[/* expect */0](Curry._1(M_002, 42)));
                    }));
      }));

describe("Reduceable.S1_5", (function () {
        var M_000 = Rebase.Result[4];
        var M_001 = Rebase.Result[5];
        TestHelpers.testFn("reduce", Curry._2(M_000, (function (acc, x) {
                    return x - acc | 0;
                  }), 10), /* :: */[
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
            ]);
        return TestHelpers.testFn("reduceRight", Curry._2(M_001, (function (acc, x) {
                          return x - acc | 0;
                        }), 10), /* :: */[
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
                  ]);
      }));

describe("Monad.S1_5", (function () {
        var M_000 = Rebase.Result[0];
        var M_001 = Rebase.Result[2];
        var M_002 = Rebase.Result[3];
        var M_003 = Rebase.Result[6];
        return TestHelpers.testFn("flatMap", Curry._1(M_003, (function (x) {
                          return /* Ok */Block.__(0, [x + 1 | 0]);
                        })), /* :: */[
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
                  ]);
      }));

describe("Iterable.S1_5", (function () {
        var M_000 = Rebase.Result[7];
        var M_001 = Rebase.Result[8];
        var M_002 = Rebase.Result[9];
        var M_003 = Rebase.Result[10];
        TestHelpers.testFn("exists", Curry._1(M_003, (function (x) {
                    return x % 2 === 0;
                  })), /* :: */[
              /* tuple */[
                /* Error */Block.__(1, ["err"]),
                false
              ],
              /* :: */[
                /* tuple */[
                  /* Ok */Block.__(0, [1]),
                  false
                ],
                /* :: */[
                  /* tuple */[
                    /* Ok */Block.__(0, [2]),
                    true
                  ],
                  /* [] */0
                ]
              ]
            ]);
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
                return Jest.Expect[/* toEqual */12](param[1], Jest.Expect[/* expect */0](checked[0]));
              }));
        TestHelpers.testFn("find", Curry._1(M_001, (function (x) {
                    return x % 2 === 0;
                  })), /* :: */[
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
            ]);
        return TestHelpers.testFn("forAll", Curry._1(M_000, (function (x) {
                          return x % 2 === 0;
                        })), /* :: */[
                    /* tuple */[
                      /* Error */Block.__(1, ["err"]),
                      true
                    ],
                    /* :: */[
                      /* tuple */[
                        /* Ok */Block.__(0, [1]),
                        false
                      ],
                      /* :: */[
                        /* tuple */[
                          /* Ok */Block.__(0, [2]),
                          true
                        ],
                        /* [] */0
                      ]
                    ]
                  ]);
      }));

TestHelpers.testFn("isOk", Rebase.Result[/* isOk */11], /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        false
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          true
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("isError", Rebase.Result[/* isError */12], /* :: */[
      /* tuple */[
        /* Error */Block.__(1, ["err"]),
        true
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          false
        ],
        /* [] */0
      ]
    ]);

Jest.test("wrap - Ok", (function () {
        return Jest.Expect[/* toEqual */12](/* Ok */Block.__(0, [42]), Jest.Expect[/* expect */0](Rebase.Result[/* wrap */13]((function () {
                              return 42;
                            }))));
      }));

Jest.test("wrap - Error", (function () {
        return Jest.Expect[/* toEqual */12](/* Error */Block.__(1, [[
                        Caml_builtin_exceptions.failure,
                        "err"
                      ]]), Jest.Expect[/* expect */0](Rebase.Result[/* wrap */13]((function () {
                              return Pervasives.failwith("err");
                            }))));
      }));

Jest.test("wrap1 - Ok", (function () {
        return Jest.Expect[/* toEqual */12](/* Ok */Block.__(0, [42]), Jest.Expect[/* expect */0](Rebase.Result[/* wrap1 */14]((function (n) {
                              return n;
                            }), 42)));
      }));

Jest.test("wrap1 - Error", (function () {
        return Jest.Expect[/* toEqual */12](/* Error */Block.__(1, [[
                        Caml_builtin_exceptions.failure,
                        "err"
                      ]]), Jest.Expect[/* expect */0](Rebase.Result[/* wrap1 */14]((function () {
                              return Pervasives.failwith("err");
                            }), 42)));
      }));

Jest.test("wrap2 - Ok", (function () {
        return Jest.Expect[/* toEqual */12](/* Ok */Block.__(0, [42]), Jest.Expect[/* expect */0](Rebase.Result[/* wrap2 */15]((function (n, m) {
                              return n + m | 0;
                            }), 40, 2)));
      }));

Jest.test("wrap2 - Error", (function () {
        return Jest.Expect[/* toEqual */12](/* Error */Block.__(1, [[
                        Caml_builtin_exceptions.failure,
                        "err"
                      ]]), Jest.Expect[/* expect */0](Rebase.Result[/* wrap2 */15]((function (_, _$1) {
                              return Pervasives.failwith("err");
                            }), 40, 2)));
      }));

var partial_arg = /* Ok */Block.__(0, [10]);

var partial_arg$1 = Rebase.Result[/* or_ */16];

TestHelpers.testFn("or_", (function (param) {
        return partial_arg$1(partial_arg, param);
      }), /* :: */[
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
    ]);

var partial_arg$2 = Rebase.Result[/* getOr */17];

TestHelpers.testFn("getOr", (function (param) {
        return partial_arg$2(10, param);
      }), /* :: */[
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
    ]);

Jest.test("getOrRaise - Error", (function () {
        return Jest.Expect[/* toThrowException */20]([
                    Rebase.InvalidArgument,
                    "getOrRaise called on Error"
                  ], Jest.Expect[/* expect */0]((function () {
                          return Rebase.Result[/* getOrRaise */18](/* Error */Block.__(1, ["err"]));
                        })));
      }));

Jest.test("getOrRaise - Ok", (function () {
        return Jest.Expect[/* toEqual */12](42, Jest.Expect[/* expect */0](Rebase.Result[/* getOrRaise */18](/* Ok */Block.__(0, [42]))));
      }));

var partial_arg$3 = Rebase.Result[/* mapOr */19];

TestHelpers.testFn("mapOr", (function (param) {
        return partial_arg$3((function (x) {
                      return x + 1 | 0;
                    }), 10, param);
      }), /* :: */[
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
    ]);

var partial_arg$4 = Rebase.Result[/* mapOrElse */20];

TestHelpers.testFn("mapOrElse", (function (param) {
        return partial_arg$4((function (x) {
                      return x + 1 | 0;
                    }), (function () {
                      return 10;
                    }), param);
      }), /* :: */[
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
    ]);

TestHelpers.testFn("flatten", Rebase.Result[/* flatten */21], /* :: */[
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
    ]);

/*  Not a pure module */
