'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

describe("Mappable.S", (function () {
        var M = [Rebase.$$Array[0]];
        return Jest.test("map", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M[/* map */0], (function (x) {
                                            return x + 1 | 0;
                                          }), /* array */[
                                          1,
                                          2
                                        ])), /* array */[
                                  2,
                                  3
                                ]);
                    }));
      }));

describe("Applicative.S", (function () {
        var M_000 = Rebase.$$Array[0];
        var M_001 = Rebase.$$Array[1];
        var M_002 = Rebase.$$Array[2];
        Jest.test("apply", (function () {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, /* array */[
                                    (function (x) {
                                        return x + x | 0;
                                      }),
                                    (function (x) {
                                        return Caml_int32.imul(x, x);
                                      })
                                  ], /* array */[
                                    3,
                                    8
                                  ])), /* array */[
                            6,
                            16,
                            9,
                            64
                          ]);
              }));
        return Jest.test("from", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(M_002, 42)), /* array */[42]);
                    }));
      }));

describe("Reduceable.S", (function () {
        var M_000 = Rebase.$$Array[3];
        var M_001 = Rebase.$$Array[4];
        Jest.test("reduce", (function () {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M_000, (function (acc, x) {
                                      return x - acc | 0;
                                    }), 10, /* array */[
                                    1,
                                    2
                                  ])), 11);
              }));
        return Jest.test("reduceRight", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M_001, (function (acc, x) {
                                            return x - acc | 0;
                                          }), 10, /* array */[
                                          1,
                                          2
                                        ])), 9);
                    }));
      }));

describe("Monad.S", (function () {
        var M_000 = Rebase.$$Array[0];
        var M_001 = Rebase.$$Array[1];
        var M_002 = Rebase.$$Array[2];
        var M_003 = Rebase.$$Array[5];
        return Jest.test("flatMap", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
                                            return /* array */[
                                                    0,
                                                    x
                                                  ];
                                          }), /* array */[
                                          1,
                                          2,
                                          3
                                        ])), /* array */[
                                  0,
                                  1,
                                  0,
                                  2,
                                  0,
                                  3
                                ]);
                    }));
      }));

describe("Iterable.S", (function () {
        var M_000 = Rebase.$$Array[6];
        var M_001 = Rebase.$$Array[7];
        var M_002 = Rebase.$$Array[8];
        var M_003 = Rebase.$$Array[9];
        var M_004 = Rebase.$$Array[10];
        Jest.test("filter", (function () {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_004, (function (x) {
                                      return x % 2 === 0;
                                    }), /* array */[
                                    1,
                                    2
                                  ])), /* array */[2]);
              }));
        Jest.testAll("exists", /* :: */[
              /* tuple */[
                /* array */[
                  1,
                  3
                ],
                false
              ],
              /* :: */[
                /* tuple */[
                  /* array */[
                    1,
                    2
                  ],
                  true
                ],
                /* [] */0
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
                                      return x % 2 === 0;
                                    }), param[0])), param[1]);
              }));
        Jest.test("forEach", (function () {
                var checked = /* record */[/* contents : [] */0];
                Curry._2(M_002, (function (x) {
                        checked[0] = /* :: */[
                          x,
                          checked[0]
                        ];
                        return /* () */0;
                      }), /* array */[
                      1,
                      2
                    ]);
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](checked[0]), /* :: */[
                            2,
                            /* :: */[
                              1,
                              /* [] */0
                            ]
                          ]);
              }));
        Jest.testAll("find", /* :: */[
              /* tuple */[
                /* array */[
                  1,
                  3
                ],
                undefined
              ],
              /* :: */[
                /* tuple */[
                  /* array */[
                    1,
                    2,
                    4
                  ],
                  2
                ],
                /* [] */0
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, (function (x) {
                                      return x % 2 === 0;
                                    }), param[0])), param[1]);
              }));
        return Jest.testAll("forAll", /* :: */[
                    /* tuple */[
                      /* array */[
                        2,
                        4
                      ],
                      true
                    ],
                    /* :: */[
                      /* tuple */[
                        /* array */[
                          1,
                          2
                        ],
                        false
                      ],
                      /* [] */0
                    ]
                  ], (function (param) {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_000, (function (x) {
                                            return x % 2 === 0;
                                          }), param[0])), param[1]);
                    }));
      }));

describe("Concatenable.S", (function () {
        var M = [Rebase.$$Array[11]];
        return Jest.test("concat", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M[/* concat */0], /* array */[
                                          3,
                                          4
                                        ], /* array */[
                                          1,
                                          2
                                        ])), /* array */[
                                  1,
                                  2,
                                  3,
                                  4
                                ]);
                    }));
      }));

Jest.test("length", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$Array[/* length */16](/* array */[
                            1,
                            2
                          ])), 2);
      }));

Jest.testAll("make", /* :: */[
      /* tuple */[
        0,
        /* array */[]
      ],
      /* :: */[
        /* tuple */[
          2,
          /* array */[
            "a",
            "a"
          ]
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* make */12](param[0], "a")), param[1]);
      }));

TestHelpers.testFn("fromList", Rebase.$$Array[/* fromList */13], /* :: */[
      /* tuple */[
        /* :: */[
          1,
          /* :: */[
            2,
            /* [] */0
          ]
        ],
        /* array */[
          1,
          2
        ]
      ],
      /* :: */[
        /* tuple */[
          /* [] */0,
          /* array */[]
        ],
        /* [] */0
      ]
    ]);

var partial_arg = Rebase.Seq[/* empty */11];

var partial_arg$1 = Rebase.Seq[/* cons */12];

function partial_arg$2(param) {
  return partial_arg$1(3, partial_arg, param);
}

var partial_arg$3 = Rebase.Seq[/* cons */12];

function partial_arg$4(param) {
  return partial_arg$3(2, partial_arg$2, param);
}

var partial_arg$5 = Rebase.Seq[/* cons */12];

TestHelpers.testFn("fromSeq", Rebase.$$Array[/* fromSeq */14], /* :: */[
      /* tuple */[
        Rebase.Seq[/* empty */11],
        /* array */[]
      ],
      /* :: */[
        /* tuple */[
          (function (param) {
              return partial_arg$5(1, partial_arg$4, param);
            }),
          /* array */[
            1,
            2,
            3
          ]
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("range", (function (param) {
        return Rebase.$$Array[/* range */15](undefined, param[0], param[1]);
      }), /* :: */[
      /* tuple */[
        /* tuple */[
          0,
          0
        ],
        /* array */[0]
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            0,
            4
          ],
          /* array */[
            0,
            1,
            2,
            3,
            4
          ]
        ],
        /* :: */[
          /* tuple */[
            /* tuple */[
              2,
              4
            ],
            /* array */[
              2,
              3,
              4
            ]
          ],
          /* :: */[
            /* tuple */[
              /* tuple */[
                -2,
                0
              ],
              /* array */[
                -2,
                -1,
                0
              ]
            ],
            /* :: */[
              /* tuple */[
                /* tuple */[
                  4,
                  2
                ],
                /* array */[]
              ],
              /* :: */[
                /* tuple */[
                  /* tuple */[
                    -2,
                    -4
                  ],
                  /* array */[]
                ],
                /* :: */[
                  /* tuple */[
                    /* tuple */[
                      2,
                      -2
                    ],
                    /* array */[]
                  ],
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ]);

TestHelpers.testFn("range - step", (function (param) {
        return Rebase.$$Array[/* range */15](param[2], param[0], param[1]);
      }), /* :: */[
      /* tuple */[
        /* tuple */[
          0,
          0,
          2
        ],
        /* array */[0]
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            0,
            3,
            2
          ],
          /* array */[
            0,
            2
          ]
        ],
        /* :: */[
          /* tuple */[
            /* tuple */[
              2,
              5,
              2
            ],
            /* array */[
              2,
              4
            ]
          ],
          /* :: */[
            /* tuple */[
              /* tuple */[
                0,
                0,
                -2
              ],
              /* array */[0]
            ],
            /* :: */[
              /* tuple */[
                /* tuple */[
                  0,
                  3,
                  -2
                ],
                /* array */[]
              ],
              /* :: */[
                /* tuple */[
                  /* tuple */[
                    3,
                    0,
                    -2
                  ],
                  /* array */[
                    3,
                    1
                  ]
                ],
                /* [] */0
              ]
            ]
          ]
        ]
      ]
    ]);

Jest.test("range - step 0", (function () {
        return Jest.Expect[/* toThrowException */20]([
                    Rebase.InvalidArgument,
                    ""
                  ], Jest.Expect[/* expect */0]((function () {
                          return Rebase.$$Array[/* range */15](0, 0, 0);
                        })));
      }));

var partial_arg$6 = /* array */[
  1,
  2
];

var partial_arg$7 = Rebase.$$Array[/* get */17];

TestHelpers.testFn("get", (function (param) {
        return partial_arg$7(partial_arg$6, param);
      }), /* :: */[
      /* tuple */[
        0,
        1
      ],
      /* :: */[
        /* tuple */[
          2,
          undefined
        ],
        /* :: */[
          /* tuple */[
            -1,
            undefined
          ],
          /* [] */0
        ]
      ]
    ]);

Jest.test("set - in bounds", (function () {
        var a = /* array */[
          1,
          2
        ];
        Rebase.$$Array[/* set */18](a, 1, 3);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* get */17](a, 1)), 3);
      }));

Jest.test("set - out of bounds", (function () {
        var a = /* array */[
          1,
          2
        ];
        Rebase.$$Array[/* set */18](a, 2, 3);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* get */17](a, 2)), undefined);
      }));

Jest.test("[] get", (function () {
        var a = /* array */[
          1,
          2
        ];
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* get */17](a, 1)), 2);
      }));

Jest.test("[] set - in bounds", (function () {
        var a = /* array */[
          1,
          2
        ];
        Rebase.$$Array[/* set */18](a, 1, 3);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* get */17](a, 1)), 3);
      }));

Jest.test("[] set - out of bounds", (function () {
        var a = /* array */[
          1,
          2
        ];
        Rebase.$$Array[/* set */18](a, 2, 3);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* get */17](a, 2)), undefined);
      }));

Jest.test("getOrRaise - in bounds", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$Array[/* getOrRaise */19](1, /* array */[
                            1,
                            2
                          ])), 2);
      }));

Jest.test("getOrRaise - out of bounds", (function () {
        return Jest.Expect[/* toThrowException */20](Rebase.IndexOutOfBounds, Jest.Expect[/* expect */0]((function () {
                          return Rebase.$$Array[/* getOrRaise */19](2, /* array */[
                                      1,
                                      2
                                    ]);
                        })));
      }));

Jest.test("setOrRaise - in bounds", (function () {
        var a = /* array */[
          1,
          2
        ];
        Rebase.$$Array[/* setOrRaise */20](1, 3, a);
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$Array[/* getOrRaise */19](1, a)), 3);
      }));

Jest.test("setOrRaise - out of bounds", (function () {
        return Jest.Expect[/* toThrowException */20](Rebase.IndexOutOfBounds, Jest.Expect[/* expect */0]((function () {
                          return Rebase.$$Array[/* setOrRaise */20](2, 3, /* array */[
                                      1,
                                      2
                                    ]);
                        })));
      }));

Jest.test("unsafeGetUnchecked - in bounds", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$Array[/* unsafeGetUnchecked */21](1, /* array */[
                            1,
                            2
                          ])), 2);
      }));

Jest.test("unsafeGetUnchecked - out of bounds", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$Array[/* unsafeGetUnchecked */21](2, /* array */[
                            1,
                            2
                          ])), undefined);
      }));

Jest.test("unsafeSetUnchecked - in bounds", (function () {
        var a = /* array */[
          1,
          2
        ];
        Rebase.$$Array[/* unsafeSetUnchecked */22](1, 3, a);
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$Array[/* getOrRaise */19](1, a)), 3);
      }));

Jest.test("unsafeSetUnchecked - out of bounds", (function () {
        var a = /* array */[
          1,
          2
        ];
        Rebase.$$Array[/* unsafeSetUnchecked */22](2, 3, a);
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$Array[/* getOrRaise */19](2, a)), 3);
      }));

Jest.test("filterMap", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* filterMap */23]((function (x) {
                              var match = x % 2 === 0;
                              if (match) {
                                return x + 1 | 0;
                              }
                              
                            }), /* array */[
                            1,
                            2
                          ])), /* array */[3]);
      }));

Jest.test("fill", (function () {
        var a = /* array */[
          1,
          2
        ];
        Rebase.$$Array[/* fill */24](0, a);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](a), /* array */[
                    0,
                    0
                  ]);
      }));

Jest.testAll("slice", /* :: */[
      /* tuple */[
        0,
        0,
        /* array */[]
      ],
      /* :: */[
        /* tuple */[
          2,
          0,
          /* array */[]
        ],
        /* :: */[
          /* tuple */[
            2,
            2,
            /* array */[]
          ],
          /* :: */[
            /* tuple */[
              2,
              3,
              /* array */[3]
            ],
            /* :: */[
              /* tuple */[
                2,
                7,
                /* array */[
                  3,
                  4
                ]
              ],
              /* :: */[
                /* tuple */[
                  7,
                  9,
                  /* array */[]
                ],
                /* :: */[
                  /* tuple */[
                    0,
                    -1,
                    /* array */[
                      1,
                      2,
                      3
                    ]
                  ],
                  /* :: */[
                    /* tuple */[
                      2,
                      -1,
                      /* array */[3]
                    ],
                    /* :: */[
                      /* tuple */[
                        -1,
                        0,
                        /* array */[]
                      ],
                      /* :: */[
                        /* tuple */[
                          -1,
                          2,
                          /* array */[]
                        ],
                        /* :: */[
                          /* tuple */[
                            -1,
                            -2,
                            /* array */[]
                          ],
                          /* [] */0
                        ]
                      ]
                    ]
                  ]
                ]
              ]
            ]
          ]
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* slice */25](param[0], param[1], /* array */[
                            1,
                            2,
                            3,
                            4
                          ])), param[2]);
      }));

Jest.test("copy", (function () {
        var a = /* array */[
          1,
          2
        ];
        var b = Rebase.$$Array[/* copy */26](a);
        Rebase.$$Array[/* set */18](a, 1, 0);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](/* tuple */[
                        a,
                        b
                      ]), /* tuple */[
                    /* array */[
                      1,
                      0
                    ],
                    /* array */[
                      1,
                      2
                    ]
                  ]);
      }));

Jest.test("mapi", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* mapi */27]((function (x, i) {
                              return /* tuple */[
                                      x,
                                      i
                                    ];
                            }), /* array */[
                            "a",
                            "b"
                          ])), /* array */[
                    /* tuple */[
                      "a",
                      0
                    ],
                    /* tuple */[
                      "b",
                      1
                    ]
                  ]);
      }));

Jest.test("forEachi", (function () {
        var checked = /* record */[/* contents : [] */0];
        Rebase.$$Array[/* forEachi */28]((function (x, i) {
                checked[0] = /* :: */[
                  /* tuple */[
                    x,
                    i
                  ],
                  checked[0]
                ];
                return /* () */0;
              }), /* array */[
              "a",
              "b"
            ]);
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](checked[0]), /* :: */[
                    /* tuple */[
                      "b",
                      1
                    ],
                    /* :: */[
                      /* tuple */[
                        "a",
                        0
                      ],
                      /* [] */0
                    ]
                  ]);
      }));

Jest.testAll("findIndex", /* :: */[
      /* tuple */[
        /* array */[
          "a",
          "b"
        ],
        undefined
      ],
      /* :: */[
        /* tuple */[
          /* array */[
            "a",
            "bb",
            "c"
          ],
          /* tuple */[
            1,
            "bb"
          ]
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$Array[/* findIndex */29]((function (x) {
                              return Rebase.$$String[/* length */1](x) === 2;
                            }), param[0])), param[1]);
      }));

/*  Not a pure module */
