'use strict';

var Jest   = require("bs-jest/src/jest.js");
var Block  = require("bs-platform/lib/js/block.js");
var Curry  = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/rebase.bs.js");

describe("Mappable.S", (function () {
        var M = [Rebase.Option[0]];
        return Jest.testAll("map", /* :: */[
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
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M[/* map */0], (function (x) {
                                            return x + 1 | 0;
                                          }), param[0])), param[1]);
                    }));
      }));

describe("Applicative.S", (function () {
        var M_000 = Rebase.Option[0];
        var M_001 = Rebase.Option[1];
        var M_002 = Rebase.Option[2];
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
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, param[0], param[1])), param[2]);
              }));
        return Jest.test("from", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(M_002, 42)), /* Some */[42]);
                    }));
      }));

describe("Reduceable.S", (function () {
        var M_000 = Rebase.Option[3];
        var M_001 = Rebase.Option[4];
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
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M_000, (function (acc, x) {
                                      return x - acc | 0;
                                    }), 10, param[0])), param[1]);
              }));
        return Jest.testAll("reduceRight", /* :: */[
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
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M_001, (function (acc, x) {
                                            return x - acc | 0;
                                          }), 10, param[0])), param[1]);
                    }));
      }));

describe("Monad.S", (function () {
        var M_000 = Rebase.Option[0];
        var M_001 = Rebase.Option[1];
        var M_002 = Rebase.Option[2];
        var M_003 = Rebase.Option[5];
        return Jest.testAll("flatMap", /* :: */[
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
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
                                            return /* Some */[x + 1 | 0];
                                          }), param[0])), param[1]);
                    }));
      }));

describe("Iterable.S", (function () {
        var M_000 = Rebase.Option[6];
        var M_001 = Rebase.Option[7];
        var M_002 = Rebase.Option[8];
        var M_003 = Rebase.Option[9];
        var M_004 = Rebase.Option[10];
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
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
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
                Curry._2(M_002, (function (x) {
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
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, (function (x) {
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
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_000, (function (x) {
                                      return +(x % 2 === 0);
                                    }), param[0])), param[1]);
              }));
        return Jest.testAll("filter", /* :: */[
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
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_004, (function (x) {
                                            return +(x % 2 === 0);
                                          }), param[0])), param[1]);
                    }));
      }));

Jest.test("some", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* some */11](42)), /* Some */[42]);
      }));

Jest.testAll("fromResult", /* :: */[
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
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* fromResult */12](param[0])), param[1]);
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
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* isSome */13](param[0])), param[1]);
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
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* isNone */14](param[0])), param[1]);
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
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* or_ */15](/* Some */[10], param[0])), param[1]);
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
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* getOr */16](10, param[0])), param[1]);
      }));

Jest.test("getOrRaise - None", (function () {
        return Jest.Expect[/* toThrowException */20]([
                    Rebase.InvalidArgument,
                    "getOrRaise called on None"
                  ], Jest.Expect[/* expect */0]((function () {
                          return Rebase.Option[/* getOrRaise */17](/* None */0);
                        })));
      }));

Jest.test("getOrRaise - Some", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* getOrRaise */17](/* Some */[42])), 42);
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
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* mapOr */18]((function (x) {
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
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* mapOrElse */19]((function (x) {
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
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.Option[/* flatten */20](param[0])), param[1]);
      }));

/*  Not a pure module */
