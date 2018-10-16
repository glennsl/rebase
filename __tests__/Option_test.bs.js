'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Block = require("bs-platform/lib/js/block.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");
var Js_primitive = require("bs-platform/lib/js/js_primitive.js");

describe("Mappable.S", (function () {
        var M = [Rebase.Option[0]];
        return TestHelpers.testFn("map", Curry._1(M[/* map */0], (function (x) {
                          return x + 1 | 0;
                        })), /* :: */[
                    /* tuple */[
                      undefined,
                      undefined
                    ],
                    /* :: */[
                      /* tuple */[
                        42,
                        43
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
                  undefined,
                  undefined
                ],
                undefined
              ],
              /* :: */[
                /* tuple */[
                  /* tuple */[
                    (function (x) {
                        return x + 1 | 0;
                      }),
                    undefined
                  ],
                  undefined
                ],
                /* :: */[
                  /* tuple */[
                    /* tuple */[
                      undefined,
                      1
                    ],
                    undefined
                  ],
                  /* :: */[
                    /* tuple */[
                      /* tuple */[
                        (function (x) {
                            return x + 1 | 0;
                          }),
                        1
                      ],
                      2
                    ],
                    /* [] */0
                  ]
                ]
              ]
            ]);
        return Jest.test("from", (function () {
                      return Jest.Expect[/* toEqual */12](42, Jest.Expect[/* expect */0](Curry._1(M_002, 42)));
                    }));
      }));

describe("Reduceable.S", (function () {
        var M_000 = Rebase.Option[3];
        var M_001 = Rebase.Option[4];
        TestHelpers.testFn("reduce", Curry._2(M_000, (function (acc, x) {
                    return x - acc | 0;
                  }), 10), /* :: */[
              /* tuple */[
                undefined,
                10
              ],
              /* :: */[
                /* tuple */[
                  42,
                  32
                ],
                /* [] */0
              ]
            ]);
        return TestHelpers.testFn("reduceRight", Curry._2(M_001, (function (acc, x) {
                          return x - acc | 0;
                        }), 10), /* :: */[
                    /* tuple */[
                      undefined,
                      10
                    ],
                    /* :: */[
                      /* tuple */[
                        42,
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
                          return x + 1 | 0;
                        })), /* :: */[
                    /* tuple */[
                      undefined,
                      undefined
                    ],
                    /* :: */[
                      /* tuple */[
                        42,
                        43
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
                undefined,
                false
              ],
              /* :: */[
                /* tuple */[
                  1,
                  false
                ],
                /* :: */[
                  /* tuple */[
                    2,
                    true
                  ],
                  /* [] */0
                ]
              ]
            ]);
        Jest.testAll("forEach", /* :: */[
              /* tuple */[
                undefined,
                0
              ],
              /* :: */[
                /* tuple */[
                  1,
                  1
                ],
                /* [] */0
              ]
            ], (function (param) {
                var checked = /* record */[/* contents */0];
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
                undefined,
                undefined
              ],
              /* :: */[
                /* tuple */[
                  1,
                  undefined
                ],
                /* :: */[
                  /* tuple */[
                    2,
                    2
                  ],
                  /* [] */0
                ]
              ]
            ]);
        TestHelpers.testFn("forAll", Curry._1(M_000, (function (x) {
                    return x % 2 === 0;
                  })), /* :: */[
              /* tuple */[
                undefined,
                true
              ],
              /* :: */[
                /* tuple */[
                  1,
                  false
                ],
                /* :: */[
                  /* tuple */[
                    2,
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
                      undefined,
                      undefined
                    ],
                    /* :: */[
                      /* tuple */[
                        1,
                        undefined
                      ],
                      /* :: */[
                        /* tuple */[
                          2,
                          2
                        ],
                        /* [] */0
                      ]
                    ]
                  ]);
      }));

Jest.test("some", (function () {
        return Jest.Expect[/* toEqual */12](42, Jest.Expect[/* expect */0](Rebase.Option[/* some */11](42)));
      }));

TestHelpers.testFn("fromResult", Rebase.Option[/* fromResult */12], /* :: */[
      /* tuple */[
        /* Error */Block.__(1, [""]),
        undefined
      ],
      /* :: */[
        /* tuple */[
          /* Ok */Block.__(0, [42]),
          42
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("isSome", Rebase.Option[/* isSome */13], /* :: */[
      /* tuple */[
        undefined,
        false
      ],
      /* :: */[
        /* tuple */[
          42,
          true
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("isNone", Rebase.Option[/* isNone */14], /* :: */[
      /* tuple */[
        undefined,
        true
      ],
      /* :: */[
        /* tuple */[
          42,
          false
        ],
        /* [] */0
      ]
    ]);

var partial_arg = 10;

var partial_arg$1 = Rebase.Option[/* or_ */15];

TestHelpers.testFn("or_", (function (param) {
        return partial_arg$1(partial_arg, param);
      }), /* :: */[
      /* tuple */[
        undefined,
        10
      ],
      /* :: */[
        /* tuple */[
          42,
          42
        ],
        /* [] */0
      ]
    ]);

var partial_arg$2 = Rebase.Option[/* getOr */16];

TestHelpers.testFn("getOr", (function (param) {
        return partial_arg$2(10, param);
      }), /* :: */[
      /* tuple */[
        undefined,
        10
      ],
      /* :: */[
        /* tuple */[
          42,
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
                          return Rebase.Option[/* getOrRaise */17](undefined);
                        })));
      }));

Jest.test("getOrRaise - Some", (function () {
        return Jest.Expect[/* toEqual */12](42, Jest.Expect[/* expect */0](Rebase.Option[/* getOrRaise */17](42)));
      }));

var partial_arg$3 = Rebase.Option[/* mapOr */18];

TestHelpers.testFn("mapOr", (function (param) {
        return partial_arg$3((function (x) {
                      return x + 1 | 0;
                    }), 10, param);
      }), /* :: */[
      /* tuple */[
        undefined,
        10
      ],
      /* :: */[
        /* tuple */[
          42,
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
        undefined,
        10
      ],
      /* :: */[
        /* tuple */[
          42,
          43
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("flatten", Rebase.Option[/* flatten */20], /* :: */[
      /* tuple */[
        undefined,
        undefined
      ],
      /* :: */[
        /* tuple */[
          Js_primitive.some(undefined),
          undefined
        ],
        /* :: */[
          /* tuple */[
            42,
            42
          ],
          /* [] */0
        ]
      ]
    ]);

/*  Not a pure module */
