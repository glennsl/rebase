'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

describe("Mappable.S", (function () {
        var M = [Rebase.Option[0]];
        return TestHelpers.testFn("map", Curry._1(M[/* map */0], (function (x) {
                          return x + 1 | 0;
                        })), /* :: */[
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
                  ]);
      }));

describe("Applicative.S", (function () {
        var M_000 = Rebase.Option[0];
        var M_001 = Rebase.Option[1];
        var M_002 = Rebase.Option[2];
        TestHelpers.testFn("apply", Curry._1(Rebase.Fn[/* uncurry */4], M_001), /* :: */[
              /* tuple */[
                /* tuple */[
                  /* None */0,
                  /* None */0
                ],
                /* None */0
              ],
              /* :: */[
                /* tuple */[
                  /* tuple */[
                    /* Some */[(function (x) {
                          return x + 1 | 0;
                        })],
                    /* None */0
                  ],
                  /* None */0
                ],
                /* :: */[
                  /* tuple */[
                    /* tuple */[
                      /* None */0,
                      /* Some */[1]
                    ],
                    /* None */0
                  ],
                  /* :: */[
                    /* tuple */[
                      /* tuple */[
                        /* Some */[(function (x) {
                              return x + 1 | 0;
                            })],
                        /* Some */[1]
                      ],
                      /* Some */[2]
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
        return Jest.test("from", (function () {
                      return Jest.Expect[/* toEqual */12](/* Some */[42], Jest.Expect[/* expect */0](Curry._1(M_002, 42)));
                    }));
      }));

describe("Reduceable.S", (function () {
        var M_000 = Rebase.Option[3];
        var M_001 = Rebase.Option[4];
        TestHelpers.testFn("reduce", Curry._2(M_000, (function (acc, x) {
                    return x - acc | 0;
                  }), 10), /* :: */[
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
            ]);
        return TestHelpers.testFn("reduceRight", Curry._2(M_001, (function (acc, x) {
                          return x - acc | 0;
                        }), 10), /* :: */[
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
                  ]);
      }));

describe("Monad.S", (function () {
        var M_000 = Rebase.Option[0];
        var M_001 = Rebase.Option[1];
        var M_002 = Rebase.Option[2];
        var M_003 = Rebase.Option[5];
        return TestHelpers.testFn("flatMap", Curry._1(M_003, (function (x) {
                          return /* Some */[x + 1 | 0];
                        })), /* :: */[
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
                  ]);
      }));

describe("Iterable.S", (function () {
        var M_000 = Rebase.Option[6];
        var M_001 = Rebase.Option[7];
        var M_002 = Rebase.Option[8];
        var M_003 = Rebase.Option[9];
        var M_004 = Rebase.Option[10];
        TestHelpers.testFn("exists", Curry._1(M_003, (function (x) {
                    return x % 2 === 0;
                  })), /* :: */[
              /* tuple */[
                /* None */0,
                false
              ],
              /* :: */[
                /* tuple */[
                  /* Some */[1],
                  false
                ],
                /* :: */[
                  /* tuple */[
                    /* Some */[2],
                    true
                  ],
                  /* [] */0
                ]
              ]
            ]);
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
            ]);
        TestHelpers.testFn("forAll", Curry._1(M_000, (function (x) {
                    return x % 2 === 0;
                  })), /* :: */[
              /* tuple */[
                /* None */0,
                true
              ],
              /* :: */[
                /* tuple */[
                  /* Some */[1],
                  false
                ],
                /* :: */[
                  /* tuple */[
                    /* Some */[2],
                    true
                  ],
                  /* [] */0
                ]
              ]
            ]);
        return TestHelpers.testFn("filter", Curry._1(M_004, (function (x) {
                          return x % 2 === 0;
                        })), /* :: */[
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
                  ]);
      }));

Jest.test("some", (function () {
        return Jest.Expect[/* toEqual */12](/* Some */[42], Jest.Expect[/* expect */0](Rebase.Option[/* some */11](42)));
      }));

TestHelpers.testFn("fromResult", Rebase.Option[/* fromResult */12], /* :: */[
      /* tuple */[
        /* Error */Block.__(1, [""]),
        /* None */0
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          /* Some */[42]
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("isSome", Rebase.Option[/* isSome */13], /* :: */[
      /* tuple */[
        /* None */0,
        false
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          true
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("isNone", Rebase.Option[/* isNone */14], /* :: */[
      /* tuple */[
        /* None */0,
        true
      ],
      /* :: */[
        /* tuple */[
          /* Some */[42],
          false
        ],
        /* [] */0
      ]
    ]);

var partial_arg = /* Some */[10];

var partial_arg$1 = Rebase.Option[/* or_ */15];

TestHelpers.testFn("or_", (function (param) {
        return partial_arg$1(partial_arg, param);
      }), /* :: */[
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
    ]);

var partial_arg$2 = Rebase.Option[/* getOr */16];

TestHelpers.testFn("getOr", (function (param) {
        return partial_arg$2(10, param);
      }), /* :: */[
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
    ]);

Jest.test("getOrRaise - None", (function () {
        return Jest.Expect[/* toThrowException */20]([
                    Rebase.InvalidArgument,
                    "getOrRaise called on None"
                  ], Jest.Expect[/* expect */0]((function () {
                          return Rebase.Option[/* getOrRaise */17](/* None */0);
                        })));
      }));

Jest.test("getOrRaise - Some", (function () {
        return Jest.Expect[/* toEqual */12](42, Jest.Expect[/* expect */0](Rebase.Option[/* getOrRaise */17](/* Some */[42])));
      }));

var partial_arg$3 = Rebase.Option[/* mapOr */18];

TestHelpers.testFn("mapOr", (function (param) {
        return partial_arg$3((function (x) {
                      return x + 1 | 0;
                    }), 10, param);
      }), /* :: */[
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
    ]);

var partial_arg$4 = Rebase.Option[/* mapOrElse */19];

TestHelpers.testFn("mapOrElse", (function (param) {
        return partial_arg$4((function (x) {
                      return x + 1 | 0;
                    }), (function () {
                      return 10;
                    }), param);
      }), /* :: */[
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
    ]);

TestHelpers.testFn("flatten", Rebase.Option[/* flatten */20], /* :: */[
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
    ]);

/*  Not a pure module */
