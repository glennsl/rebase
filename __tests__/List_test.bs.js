'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

describe("Mappable.S", (function () {
        var M = [Rebase.List[0]];
        return Jest.test("map", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M[/* map */0], (function (x) {
                                            return x + 1 | 0;
                                          }), /* :: */[
                                          1,
                                          /* :: */[
                                            2,
                                            /* [] */0
                                          ]
                                        ])), /* :: */[
                                  2,
                                  /* :: */[
                                    3,
                                    /* [] */0
                                  ]
                                ]);
                    }));
      }));

describe("Applicative.S", (function () {
        var M_000 = Rebase.List[0];
        var M_001 = Rebase.List[1];
        var M_002 = Rebase.List[2];
        Jest.test("apply", (function () {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, /* :: */[
                                    (function (x) {
                                        return x + x | 0;
                                      }),
                                    /* :: */[
                                      (function (x) {
                                          return Caml_int32.imul(x, x);
                                        }),
                                      /* [] */0
                                    ]
                                  ], /* :: */[
                                    3,
                                    /* :: */[
                                      8,
                                      /* [] */0
                                    ]
                                  ])), /* :: */[
                            6,
                            /* :: */[
                              16,
                              /* :: */[
                                9,
                                /* :: */[
                                  64,
                                  /* [] */0
                                ]
                              ]
                            ]
                          ]);
              }));
        return Jest.test("from", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._1(M_002, 42)), /* :: */[
                                  42,
                                  /* [] */0
                                ]);
                    }));
      }));

describe("Reduceable.S", (function () {
        var M_000 = Rebase.List[3];
        var M_001 = Rebase.List[4];
        Jest.test("reduce", (function () {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M_000, (function (acc, x) {
                                      return x - acc | 0;
                                    }), 10, /* :: */[
                                    1,
                                    /* :: */[
                                      2,
                                      /* [] */0
                                    ]
                                  ])), 11);
              }));
        return Jest.test("reduceRight", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._3(M_001, (function (acc, x) {
                                            return x - acc | 0;
                                          }), 10, /* :: */[
                                          1,
                                          /* :: */[
                                            2,
                                            /* [] */0
                                          ]
                                        ])), 9);
                    }));
      }));

describe("Monad.S", (function () {
        var M_000 = Rebase.List[0];
        var M_001 = Rebase.List[1];
        var M_002 = Rebase.List[2];
        var M_003 = Rebase.List[5];
        return Jest.test("flatMap", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
                                            return /* :: */[
                                                    0,
                                                    /* :: */[
                                                      x,
                                                      /* [] */0
                                                    ]
                                                  ];
                                          }), /* :: */[
                                          1,
                                          /* :: */[
                                            2,
                                            /* :: */[
                                              3,
                                              /* [] */0
                                            ]
                                          ]
                                        ])), /* :: */[
                                  0,
                                  /* :: */[
                                    1,
                                    /* :: */[
                                      0,
                                      /* :: */[
                                        2,
                                        /* :: */[
                                          0,
                                          /* :: */[
                                            3,
                                            /* [] */0
                                          ]
                                        ]
                                      ]
                                    ]
                                  ]
                                ]);
                    }));
      }));

describe("Iterable.S", (function () {
        var M_000 = Rebase.List[6];
        var M_001 = Rebase.List[7];
        var M_002 = Rebase.List[8];
        var M_003 = Rebase.List[9];
        var M_004 = Rebase.List[10];
        Jest.test("filter", (function () {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_004, (function (x) {
                                      return x % 2 === 0;
                                    }), /* :: */[
                                    1,
                                    /* :: */[
                                      2,
                                      /* [] */0
                                    ]
                                  ])), /* :: */[
                            2,
                            /* [] */0
                          ]);
              }));
        Jest.testAll("exists", /* :: */[
              /* tuple */[
                /* [] */0,
                false
              ],
              /* :: */[
                /* tuple */[
                  /* :: */[
                    1,
                    /* :: */[
                      3,
                      /* [] */0
                    ]
                  ],
                  false
                ],
                /* :: */[
                  /* tuple */[
                    /* :: */[
                      1,
                      /* :: */[
                        2,
                        /* [] */0
                      ]
                    ],
                    true
                  ],
                  /* [] */0
                ]
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
                      }), /* :: */[
                      1,
                      /* :: */[
                        2,
                        /* [] */0
                      ]
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
                /* [] */0,
                undefined
              ],
              /* :: */[
                /* tuple */[
                  /* :: */[
                    1,
                    /* :: */[
                      3,
                      /* [] */0
                    ]
                  ],
                  undefined
                ],
                /* :: */[
                  /* tuple */[
                    /* :: */[
                      1,
                      /* :: */[
                        2,
                        /* :: */[
                          4,
                          /* [] */0
                        ]
                      ]
                    ],
                    2
                  ],
                  /* [] */0
                ]
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, (function (x) {
                                      return x % 2 === 0;
                                    }), param[0])), param[1]);
              }));
        return Jest.testAll("forAll", /* :: */[
                    /* tuple */[
                      /* [] */0,
                      true
                    ],
                    /* :: */[
                      /* tuple */[
                        /* :: */[
                          2,
                          /* :: */[
                            4,
                            /* [] */0
                          ]
                        ],
                        true
                      ],
                      /* :: */[
                        /* tuple */[
                          /* :: */[
                            1,
                            /* :: */[
                              2,
                              /* [] */0
                            ]
                          ],
                          false
                        ],
                        /* [] */0
                      ]
                    ]
                  ], (function (param) {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_000, (function (x) {
                                            return x % 2 === 0;
                                          }), param[0])), param[1]);
                    }));
      }));

describe("Concatenable.S", (function () {
        var M = [Rebase.List[11]];
        return Jest.test("concat", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M[/* concat */0], /* :: */[
                                          3,
                                          /* :: */[
                                            4,
                                            /* [] */0
                                          ]
                                        ], /* :: */[
                                          1,
                                          /* :: */[
                                            2,
                                            /* [] */0
                                          ]
                                        ])), /* :: */[
                                  1,
                                  /* :: */[
                                    2,
                                    /* :: */[
                                      3,
                                      /* :: */[
                                        4,
                                        /* [] */0
                                      ]
                                    ]
                                  ]
                                ]);
                    }));
      }));

TestHelpers.testFn("fromArray", Rebase.List[/* fromArray */12], /* :: */[
      /* tuple */[
        /* array */[],
        /* [] */0
      ],
      /* :: */[
        /* tuple */[
          /* array */[
            1,
            2,
            3
          ],
          /* :: */[
            1,
            /* :: */[
              2,
              /* :: */[
                3,
                /* [] */0
              ]
            ]
          ]
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

TestHelpers.testFn("fromSeq", Rebase.List[/* fromSeq */13], /* :: */[
      /* tuple */[
        Rebase.Seq[/* empty */11],
        /* [] */0
      ],
      /* :: */[
        /* tuple */[
          (function (param) {
              return partial_arg$5(1, partial_arg$4, param);
            }),
          /* :: */[
            1,
            /* :: */[
              2,
              /* :: */[
                3,
                /* [] */0
              ]
            ]
          ]
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("range", (function (param) {
        return Rebase.List[/* range */14](undefined, param[0], param[1]);
      }), /* :: */[
      /* tuple */[
        /* tuple */[
          0,
          0
        ],
        /* :: */[
          0,
          /* [] */0
        ]
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            0,
            4
          ],
          /* :: */[
            0,
            /* :: */[
              1,
              /* :: */[
                2,
                /* :: */[
                  3,
                  /* :: */[
                    4,
                    /* [] */0
                  ]
                ]
              ]
            ]
          ]
        ],
        /* :: */[
          /* tuple */[
            /* tuple */[
              2,
              4
            ],
            /* :: */[
              2,
              /* :: */[
                3,
                /* :: */[
                  4,
                  /* [] */0
                ]
              ]
            ]
          ],
          /* :: */[
            /* tuple */[
              /* tuple */[
                -2,
                0
              ],
              /* :: */[
                -2,
                /* :: */[
                  -1,
                  /* :: */[
                    0,
                    /* [] */0
                  ]
                ]
              ]
            ],
            /* :: */[
              /* tuple */[
                /* tuple */[
                  4,
                  2
                ],
                /* [] */0
              ],
              /* :: */[
                /* tuple */[
                  /* tuple */[
                    -2,
                    -4
                  ],
                  /* [] */0
                ],
                /* :: */[
                  /* tuple */[
                    /* tuple */[
                      2,
                      -2
                    ],
                    /* [] */0
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
        return Rebase.List[/* range */14](param[2], param[0], param[1]);
      }), /* :: */[
      /* tuple */[
        /* tuple */[
          0,
          0,
          2
        ],
        /* :: */[
          0,
          /* [] */0
        ]
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            0,
            3,
            2
          ],
          /* :: */[
            0,
            /* :: */[
              2,
              /* [] */0
            ]
          ]
        ],
        /* :: */[
          /* tuple */[
            /* tuple */[
              2,
              5,
              2
            ],
            /* :: */[
              2,
              /* :: */[
                4,
                /* [] */0
              ]
            ]
          ],
          /* :: */[
            /* tuple */[
              /* tuple */[
                0,
                0,
                -2
              ],
              /* :: */[
                0,
                /* [] */0
              ]
            ],
            /* :: */[
              /* tuple */[
                /* tuple */[
                  0,
                  3,
                  -2
                ],
                /* [] */0
              ],
              /* :: */[
                /* tuple */[
                  /* tuple */[
                    3,
                    0,
                    -2
                  ],
                  /* :: */[
                    3,
                    /* :: */[
                      1,
                      /* [] */0
                    ]
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
                          return Rebase.List[/* range */14](0, 0, 0);
                        })));
      }));

TestHelpers.testFn("isEmpty", Rebase.List[/* isEmpty */15], /* :: */[
      /* tuple */[
        /* [] */0,
        true
      ],
      /* :: */[
        /* tuple */[
          /* :: */[
            1,
            /* :: */[
              2,
              /* :: */[
                3,
                /* [] */0
              ]
            ]
          ],
          false
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("head", Rebase.List[/* head */16], /* :: */[
      /* tuple */[
        /* :: */[
          1,
          /* :: */[
            2,
            /* :: */[
              3,
              /* [] */0
            ]
          ]
        ],
        1
      ],
      /* :: */[
        /* tuple */[
          /* [] */0,
          undefined
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("tail", Rebase.List[/* tail */17], /* :: */[
      /* tuple */[
        /* :: */[
          1,
          /* :: */[
            2,
            /* :: */[
              3,
              /* [] */0
            ]
          ]
        ],
        /* :: */[
          2,
          /* :: */[
            3,
            /* [] */0
          ]
        ]
      ],
      /* :: */[
        /* tuple */[
          /* [] */0,
          undefined
        ],
        /* [] */0
      ]
    ]);

Jest.test("reverse", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.List[/* reverse */20](/* :: */[
                            1,
                            /* :: */[
                              2,
                              /* [] */0
                            ]
                          ])), /* :: */[
                    2,
                    /* :: */[
                      1,
                      /* [] */0
                    ]
                  ]);
      }));

Jest.test("length", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.List[/* length */19](/* :: */[
                            41,
                            /* :: */[
                              62,
                              /* [] */0
                            ]
                          ])), 2);
      }));

Jest.test("filterMap", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.List[/* filterMap */18]((function (x) {
                              var match = x % 2 === 0;
                              if (match) {
                                return x + 1 | 0;
                              }
                              
                            }), /* :: */[
                            1,
                            /* :: */[
                              2,
                              /* [] */0
                            ]
                          ])), /* :: */[
                    3,
                    /* [] */0
                  ]);
      }));

TestHelpers.testFn("zip", Curry._1(Rebase.Fn[/* uncurry */4], Curry._1(Rebase.Fn[/* flip */2], Rebase.List[/* zip */21])), /* :: */[
      /* tuple */[
        /* tuple */[
          /* :: */[
            1,
            /* :: */[
              2,
              /* [] */0
            ]
          ],
          /* :: */[
            11,
            /* :: */[
              12,
              /* [] */0
            ]
          ]
        ],
        /* :: */[
          /* tuple */[
            1,
            11
          ],
          /* :: */[
            /* tuple */[
              2,
              12
            ],
            /* [] */0
          ]
        ]
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            /* :: */[
              1,
              /* :: */[
                2,
                /* :: */[
                  3,
                  /* [] */0
                ]
              ]
            ],
            /* :: */[
              11,
              /* :: */[
                12,
                /* [] */0
              ]
            ]
          ],
          /* :: */[
            /* tuple */[
              1,
              11
            ],
            /* :: */[
              /* tuple */[
                2,
                12
              ],
              /* [] */0
            ]
          ]
        ],
        /* :: */[
          /* tuple */[
            /* tuple */[
              /* :: */[
                1,
                /* :: */[
                  2,
                  /* [] */0
                ]
              ],
              /* :: */[
                11,
                /* :: */[
                  12,
                  /* :: */[
                    13,
                    /* [] */0
                  ]
                ]
              ]
            ],
            /* :: */[
              /* tuple */[
                1,
                11
              ],
              /* :: */[
                /* tuple */[
                  2,
                  12
                ],
                /* [] */0
              ]
            ]
          ],
          /* :: */[
            /* tuple */[
              /* tuple */[
                /* :: */[
                  1,
                  /* :: */[
                    2,
                    /* [] */0
                  ]
                ],
                /* [] */0
              ],
              /* [] */0
            ],
            /* :: */[
              /* tuple */[
                /* tuple */[
                  /* [] */0,
                  /* :: */[
                    11,
                    /* :: */[
                      12,
                      /* [] */0
                    ]
                  ]
                ],
                /* [] */0
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

/*  Not a pure module */
