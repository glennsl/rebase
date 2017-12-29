'use strict';

var Jest   = require("bs-jest/src/jest.js");
var Curry  = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/rebase.bs.js");

Jest.test("from", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* from */4](42)), /* Some */[42]);
      }));

Jest.test("some", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* some */11](42)), /* Some */[42]);
      }));

Jest.testAll("filter", /* :: */[
      /* tuple */[
        /* None */0,
        /* None */0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[1],
          /* None */0
        ],
        /* :: */[
          /* tuple */[
            /* Some */[2],
            /* Some */[2]
          ],
          /* [] */0
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* filter */10]((function (x) {
                              return +(x % 2 === 0);
                            }), param[0])), param[1]);
      }));

Jest.testAll("exists", /* :: */[
      /* tuple */[
        /* None */0,
        /* false */0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[1],
          /* false */0
        ],
        /* :: */[
          /* tuple */[
            /* Some */[2],
            /* true */1
          ],
          /* [] */0
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* exists */9]((function (x) {
                              return +(x % 2 === 0);
                            }), param[0])), param[1]);
      }));

Jest.testAll("forEach", /* :: */[
      /* tuple */[
        /* None */0,
        0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[1],
          1
        ],
        /* [] */0
      ]
    ], (function (param) {
        var checked = [0];
        Rebase.Option[/* forEach */8]((function (x) {
                checked[0] = x;
                return /* () */0;
              }), param[0]);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](checked[0]), param[1]);
      }));

Jest.testAll("find", /* :: */[
      /* tuple */[
        /* None */0,
        /* None */0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[1],
          /* None */0
        ],
        /* :: */[
          /* tuple */[
            /* Some */[2],
            /* Some */[2]
          ],
          /* [] */0
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* find */7]((function (x) {
                              return +(x % 2 === 0);
                            }), param[0])), param[1]);
      }));

Jest.testAll("forAll", /* :: */[
      /* tuple */[
        /* None */0,
        /* true */1
      ],
      /* :: */[
        /* tuple */[
          /* Some */[1],
          /* false */0
        ],
        /* :: */[
          /* tuple */[
            /* Some */[2],
            /* true */1
          ],
          /* [] */0
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* forAll */6]((function (x) {
                              return +(x % 2 === 0);
                            }), param[0])), param[1]);
      }));

Jest.testAll("flatMap", /* :: */[
      /* tuple */[
        /* None */0,
        /* None */0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          /* Some */[43]
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* flatMap */5]((function (x) {
                              return /* Some */[x + 1 | 0];
                            }), param[0])), param[1]);
      }));

Jest.testAll("map", /* :: */[
      /* tuple */[
        /* None */0,
        /* None */0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          /* Some */[43]
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* map */2]((function (x) {
                              return x + 1 | 0;
                            }), param[0])), param[1]);
      }));

Jest.testAll("apply", /* :: */[
      /* tuple */[
        /* None */0,
        /* None */0,
        /* None */0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[(function (x) {
                return x + 1 | 0;
              })],
          /* None */0,
          /* None */0
        ],
        /* :: */[
          /* tuple */[
            /* None */0,
            /* Some */[1],
            /* None */0
          ],
          /* :: */[
            /* tuple */[
              /* Some */[(function (x) {
                    return x + 1 | 0;
                  })],
              /* Some */[1],
              /* Some */[2]
            ],
            /* [] */0
          ]
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* apply */3](param[0], param[1])), param[2]);
      }));

Jest.testAll("reduce", /* :: */[
      /* tuple */[
        /* None */0,
        10
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          32
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* reduce */0]((function (acc, x) {
                              return x - acc | 0;
                            }), 10, param[0])), param[1]);
      }));

Jest.testAll("reduceRight", /* :: */[
      /* tuple */[
        /* None */0,
        10
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          32
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* reduceRight */1]((function (acc, x) {
                              return x - acc | 0;
                            }), 10, param[0])), param[1]);
      }));

Jest.testAll("isSome", /* :: */[
      /* tuple */[
        /* None */0,
        /* false */0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          /* true */1
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* isSome */12](param[0])), param[1]);
      }));

Jest.testAll("isNone", /* :: */[
      /* tuple */[
        /* None */0,
        /* true */1
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          /* false */0
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* isNone */13](param[0])), param[1]);
      }));

Jest.testAll("or_", /* :: */[
      /* tuple */[
        /* None */0,
        /* Some */[10]
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          /* Some */[42]
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* or_ */14](/* Some */[10], param[0])), param[1]);
      }));

Jest.testAll("getOr", /* :: */[
      /* tuple */[
        /* None */0,
        10
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          42
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* getOr */15](10, param[0])), param[1]);
      }));

Jest.test("getOrRaise - None", (function () {
        return Jest.Expect[/* toThrowException */20]([
                    Rebase.InvalidArgument,
                    "getOrRaise called on None"
                  ], Jest.Expect[/* expect */0]((function () {
                          return Rebase.Option[/* getOrRaise */16](/* None */0);
                        })));
      }));

Jest.test("getOrRaise - Some", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* getOrRaise */16](/* Some */[42])), 42);
      }));

Jest.testAll("mapOr", /* :: */[
      /* tuple */[
        /* None */0,
        10
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          43
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* mapOr */17]((function (x) {
                              return x + 1 | 0;
                            }), 10, param[0])), param[1]);
      }));

Jest.testAll("mapOrElse", /* :: */[
      /* tuple */[
        /* None */0,
        10
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          43
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* mapOrElse */18]((function (x) {
                              return x + 1 | 0;
                            }), (function () {
                              return 10;
                            }), param[0])), param[1]);
      }));

Jest.testAll("flatten", /* :: */[
      /* tuple */[
        /* None */0,
        /* None */0
      ],
      /* :: */[
        /* tuple */[
          /* Some */[/* None */0],
          /* None */0
        ],
        /* :: */[
          /* tuple */[
            /* Some */[/* Some */[42]],
            /* Some */[42]
          ],
          /* [] */0
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* flatten */19](param[0])), param[1]);
      }));

/*  Not a pure module */
