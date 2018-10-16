'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

var _toList = Rebase.List[/* fromSeq */13];

function _explode() {
  return Pervasives.failwith("Oops, not lazy! The function evaluated too much");
}

describe("Mappable.S", (function () {
        var M = [Rebase.Seq[0]];
        TestHelpers.testFn("map", Curry._2(Rebase.Fn[/* >> */6], Curry._1(M[/* map */0], (function (x) {
                        return x + 1 | 0;
                      })), _toList), /* :: */[
              /* tuple */[
                Rebase.Seq[/* fromList */14](/* [] */0),
                /* [] */0
              ],
              /* :: */[
                /* tuple */[
                  Rebase.Seq[/* fromList */14](/* :: */[
                        1,
                        /* :: */[
                          2,
                          /* [] */0
                        ]
                      ]),
                  /* :: */[
                    2,
                    /* :: */[
                      3,
                      /* [] */0
                    ]
                  ]
                ],
                /* [] */0
              ]
            ]);
        return Jest.test("map - lazy", (function () {
                      var partial_arg = Rebase.Seq[/* cons */12];
                      return Jest.Expect[/* toEqual */12](2, Jest.Expect[/* expect */0](Rebase.Seq[/* head */18](Curry._2(M[/* map */0], (function (x) {
                                                return x + 1 | 0;
                                              }), (function (param) {
                                                return partial_arg(1, _explode, param);
                                              })))));
                    }));
      }));

describe("Applicative.S", (function () {
        var M_000 = Rebase.Seq[0];
        var M_001 = Rebase.Seq[1];
        var M_002 = Rebase.Seq[2];
        Jest.test("apply", (function () {
                return Jest.Expect[/* toEqual */12](/* :: */[
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
                          ], Jest.Expect[/* expect */0](_toList(Curry._2(M_001, Rebase.Seq[/* fromList */14](/* :: */[
                                            (function (x) {
                                                return x + x | 0;
                                              }),
                                            /* :: */[
                                              (function (x) {
                                                  return Caml_int32.imul(x, x);
                                                }),
                                              /* [] */0
                                            ]
                                          ]), Rebase.Seq[/* fromList */14](/* :: */[
                                            3,
                                            /* :: */[
                                              8,
                                              /* [] */0
                                            ]
                                          ])))));
              }));
        Jest.test("apply - lazy", (function () {
                var partial_arg = Rebase.Seq[/* cons */12];
                return Jest.Expect[/* toEqual */12](6, Jest.Expect[/* expect */0](Rebase.Seq[/* head */18](Curry._2(M_001, Rebase.Seq[/* fromList */14](/* :: */[
                                            (function (x) {
                                                return x + x | 0;
                                              }),
                                            /* [] */0
                                          ]), (function (param) {
                                          return partial_arg(3, _explode, param);
                                        })))));
              }));
        return Jest.test("from", (function () {
                      return Jest.Expect[/* toEqual */12](/* :: */[
                                  42,
                                  /* [] */0
                                ], Jest.Expect[/* expect */0](_toList(Curry._1(M_002, 42))));
                    }));
      }));

describe("Reduceable.S", (function () {
        var M_000 = Rebase.Seq[3];
        var M_001 = Rebase.Seq[4];
        Jest.test("reduce", (function () {
                return Jest.Expect[/* toEqual */12](11, Jest.Expect[/* expect */0](Curry._3(M_000, (function (acc, x) {
                                      return x - acc | 0;
                                    }), 10, Rebase.Seq[/* fromList */14](/* :: */[
                                        1,
                                        /* :: */[
                                          2,
                                          /* [] */0
                                        ]
                                      ]))));
              }));
        return Jest.test("reduceRight", (function () {
                      return Jest.Expect[/* toEqual */12](9, Jest.Expect[/* expect */0](Curry._3(M_001, (function (acc, x) {
                                            return x - acc | 0;
                                          }), 10, Rebase.Seq[/* fromList */14](/* :: */[
                                              1,
                                              /* :: */[
                                                2,
                                                /* [] */0
                                              ]
                                            ]))));
                    }));
      }));

describe("Monad.S", (function () {
        var M_000 = Rebase.Seq[0];
        var M_001 = Rebase.Seq[1];
        var M_002 = Rebase.Seq[2];
        var M_003 = Rebase.Seq[5];
        Jest.test("flatMap", (function () {
                return Jest.Expect[/* toEqual */12](/* :: */[
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
                          ], Jest.Expect[/* expect */0](_toList(Curry._2(M_003, (function (x) {
                                          var partial_arg = Rebase.Seq[/* from */2](x);
                                          var partial_arg$1 = Rebase.Seq[/* cons */12];
                                          return (function (param) {
                                              return partial_arg$1(0, partial_arg, param);
                                            });
                                        }), Rebase.Seq[/* fromList */14](/* :: */[
                                            1,
                                            /* :: */[
                                              2,
                                              /* :: */[
                                                3,
                                                /* [] */0
                                              ]
                                            ]
                                          ])))));
              }));
        Jest.test("flatMap - lazy outer", (function () {
                var partial_arg = Rebase.Seq[/* cons */12];
                return Jest.Expect[/* toEqual */12](1, Jest.Expect[/* expect */0](Rebase.Seq[/* head */18](Curry._2(M_003, (function (x) {
                                          var partial_arg = Rebase.Seq[/* empty */11];
                                          var partial_arg$1 = Rebase.Seq[/* cons */12];
                                          return (function (param) {
                                              return partial_arg$1(x, partial_arg, param);
                                            });
                                        }), (function (param) {
                                          return partial_arg(1, _explode, param);
                                        })))));
              }));
        return Jest.test("flatMap - lazy inner", (function () {
                      return Jest.Expect[/* toEqual */12](1, Jest.Expect[/* expect */0](Rebase.Seq[/* head */18](Curry._2(M_003, (function (x) {
                                                var partial_arg = Rebase.Seq[/* cons */12];
                                                var partial_arg$1 = function (param) {
                                                  return partial_arg(0, _explode, param);
                                                };
                                                var partial_arg$2 = Rebase.Seq[/* cons */12];
                                                return (function (param) {
                                                    return partial_arg$2(x, partial_arg$1, param);
                                                  });
                                              }), Rebase.Seq[/* fromList */14](/* :: */[
                                                  1,
                                                  /* :: */[
                                                    2,
                                                    /* [] */0
                                                  ]
                                                ])))));
                    }));
      }));

describe("Iterable.S", (function () {
        var M_000 = Rebase.Seq[6];
        var M_001 = Rebase.Seq[7];
        var M_002 = Rebase.Seq[8];
        var M_003 = Rebase.Seq[9];
        var M_004 = Rebase.Seq[10];
        Jest.test("forEach", (function () {
                var checked = /* record */[/* contents : [] */0];
                Rebase.Seq[/* forEach */8]((function (x) {
                        checked[0] = /* :: */[
                          x,
                          checked[0]
                        ];
                        return /* () */0;
                      }), Rebase.Seq[/* fromList */14](/* :: */[
                          1,
                          /* :: */[
                            2,
                            /* [] */0
                          ]
                        ]));
                return Jest.Expect[/* toEqual */12](/* :: */[
                            2,
                            /* :: */[
                              1,
                              /* [] */0
                            ]
                          ], Jest.Expect[/* expect */0](checked[0]));
              }));
        Jest.test("filter", (function () {
                return Jest.Expect[/* toEqual */12](/* :: */[
                            2,
                            /* [] */0
                          ], Jest.Expect[/* expect */0](_toList(Curry._2(M_004, (function (x) {
                                          return x % 2 === 0;
                                        }), Rebase.Seq[/* fromList */14](/* :: */[
                                            1,
                                            /* :: */[
                                              2,
                                              /* [] */0
                                            ]
                                          ])))));
              }));
        Jest.test("filter - lazy", (function () {
                var partial_arg = Rebase.Seq[/* cons */12];
                var partial_arg$1 = function (param) {
                  return partial_arg(2, _explode, param);
                };
                var partial_arg$2 = Rebase.Seq[/* cons */12];
                return Jest.Expect[/* toEqual */12](2, Jest.Expect[/* expect */0](Rebase.Seq[/* head */18](Curry._2(M_004, (function (x) {
                                          return x % 2 === 0;
                                        }), (function (param) {
                                          return partial_arg$2(1, partial_arg$1, param);
                                        })))));
              }));
        TestHelpers.testFn("exists", Curry._1(M_003, (function (x) {
                    return x % 2 === 0;
                  })), /* :: */[
              /* tuple */[
                Rebase.Seq[/* fromList */14](/* [] */0),
                false
              ],
              /* :: */[
                /* tuple */[
                  Rebase.Seq[/* fromList */14](/* :: */[
                        1,
                        /* :: */[
                          3,
                          /* [] */0
                        ]
                      ]),
                  false
                ],
                /* :: */[
                  /* tuple */[
                    Rebase.Seq[/* fromList */14](/* :: */[
                          1,
                          /* :: */[
                            2,
                            /* [] */0
                          ]
                        ]),
                    true
                  ],
                  /* [] */0
                ]
              ]
            ]);
        Jest.test("exists - lazy", (function () {
                var partial_arg = Rebase.Seq[/* cons */12];
                var partial_arg$1 = function (param) {
                  return partial_arg(2, _explode, param);
                };
                var partial_arg$2 = Rebase.Seq[/* cons */12];
                return Jest.Expect[/* toEqual */12](true, Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
                                      return x % 2 === 0;
                                    }), (function (param) {
                                      return partial_arg$2(1, partial_arg$1, param);
                                    }))));
              }));
        TestHelpers.testFn("find", Curry._1(M_001, (function (x) {
                    return x % 2 === 0;
                  })), /* :: */[
              /* tuple */[
                Rebase.Seq[/* fromList */14](/* [] */0),
                undefined
              ],
              /* :: */[
                /* tuple */[
                  Rebase.Seq[/* fromList */14](/* :: */[
                        1,
                        /* :: */[
                          3,
                          /* [] */0
                        ]
                      ]),
                  undefined
                ],
                /* :: */[
                  /* tuple */[
                    Rebase.Seq[/* fromList */14](/* :: */[
                          1,
                          /* :: */[
                            2,
                            /* [] */0
                          ]
                        ]),
                    2
                  ],
                  /* [] */0
                ]
              ]
            ]);
        Jest.test("find - lazy", (function () {
                var partial_arg = Rebase.Seq[/* cons */12];
                var partial_arg$1 = function (param) {
                  return partial_arg(2, _explode, param);
                };
                var partial_arg$2 = Rebase.Seq[/* cons */12];
                return Jest.Expect[/* toEqual */12](2, Jest.Expect[/* expect */0](Curry._2(M_001, (function (x) {
                                      return x % 2 === 0;
                                    }), (function (param) {
                                      return partial_arg$2(1, partial_arg$1, param);
                                    }))));
              }));
        return TestHelpers.testFn("forAll", Curry._1(M_000, (function (x) {
                          return x % 2 === 0;
                        })), /* :: */[
                    /* tuple */[
                      Rebase.Seq[/* fromList */14](/* [] */0),
                      true
                    ],
                    /* :: */[
                      /* tuple */[
                        Rebase.Seq[/* fromList */14](/* :: */[
                              2,
                              /* :: */[
                                4,
                                /* [] */0
                              ]
                            ]),
                        true
                      ],
                      /* :: */[
                        /* tuple */[
                          Rebase.Seq[/* fromList */14](/* :: */[
                                1,
                                /* :: */[
                                  2,
                                  /* [] */0
                                ]
                              ]),
                          false
                        ],
                        /* [] */0
                      ]
                    ]
                  ]);
      }));

TestHelpers.testProperty("empty", Rebase.Seq[/* empty */11](/* () */0) === /* Nil */0);

TestHelpers.testFn("cons", Curry._2(Rebase.Fn[/* >> */6], Curry._1(Rebase.Fn[/* uncurry */4], Rebase.Seq[/* cons */12]), _toList), /* :: */[
      /* tuple */[
        /* tuple */[
          1,
          Rebase.Seq[/* fromList */14](/* [] */0)
        ],
        /* :: */[
          1,
          /* [] */0
        ]
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            1,
            Rebase.Seq[/* fromList */14](/* :: */[
                  2,
                  /* :: */[
                    3,
                    /* [] */0
                  ]
                ])
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

TestHelpers.testFn("fromArray", Curry._2(Rebase.Fn[/* >> */6], Rebase.Seq[/* fromArray */13], _toList), /* :: */[
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

TestHelpers.testFn("fromList", Curry._2(Rebase.Fn[/* >> */6], Rebase.Seq[/* fromList */14], _toList), /* :: */[
      /* tuple */[
        /* [] */0,
        /* [] */0
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
        return _toList(Rebase.Seq[/* range */15](undefined, param[0], param[1]));
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
        return _toList(Rebase.Seq[/* range */15](param[2], param[0], param[1]));
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
                          return Rebase.Seq[/* range */15](0, 0, 0);
                        })));
      }));

TestHelpers.testFn("isEmpty", Rebase.Seq[/* isEmpty */17], /* :: */[
      /* tuple */[
        Rebase.Seq[/* empty */11],
        true
      ],
      /* :: */[
        /* tuple */[
          Rebase.Seq[/* fromList */14](/* :: */[
                1,
                /* :: */[
                  2,
                  /* :: */[
                    3,
                    /* [] */0
                  ]
                ]
              ]),
          false
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("head", Rebase.Seq[/* head */18], /* :: */[
      /* tuple */[
        Rebase.Seq[/* empty */11],
        undefined
      ],
      /* :: */[
        /* tuple */[
          Rebase.Seq[/* fromList */14](/* :: */[
                1,
                /* :: */[
                  2,
                  /* :: */[
                    3,
                    /* [] */0
                  ]
                ]
              ]),
          1
        ],
        /* [] */0
      ]
    ]);

TestHelpers.testFn("count", Rebase.Seq[/* count */16], /* :: */[
      /* tuple */[
        Rebase.Seq[/* fromList */14](/* [] */0),
        0
      ],
      /* :: */[
        /* tuple */[
          Rebase.Seq[/* fromList */14](/* :: */[
                1,
                /* :: */[
                  2,
                  /* :: */[
                    3,
                    /* [] */0
                  ]
                ]
              ]),
          3
        ],
        /* [] */0
      ]
    ]);

Jest.test("filterMap", (function () {
        var partial_arg = Rebase.Seq[/* fromList */14](/* :: */[
              1,
              /* :: */[
                2,
                /* [] */0
              ]
            ]);
        var partial_arg$1 = Rebase.Seq[/* filterMap */19];
        return Jest.Expect[/* toEqual */12](/* :: */[
                    3,
                    /* [] */0
                  ], Jest.Expect[/* expect */0](_toList((function (param) {
                              return partial_arg$1((function (x) {
                                            var match = x % 2 === 0;
                                            if (match) {
                                              return x + 1 | 0;
                                            }
                                            
                                          }), partial_arg, param);
                            }))));
      }));

Jest.test("filterMap - lazy", (function () {
        var partial_arg = Rebase.Seq[/* cons */12];
        var partial_arg$1 = function (param) {
          return partial_arg(2, _explode, param);
        };
        var partial_arg$2 = Rebase.Seq[/* cons */12];
        var partial_arg$3 = function (param) {
          return partial_arg$2(1, partial_arg$1, param);
        };
        var partial_arg$4 = Rebase.Seq[/* filterMap */19];
        return Jest.Expect[/* toEqual */12](3, Jest.Expect[/* expect */0](Rebase.Seq[/* head */18]((function (param) {
                              return partial_arg$4((function (x) {
                                            var match = x % 2 === 0;
                                            if (match) {
                                              return x + 1 | 0;
                                            }
                                            
                                          }), partial_arg$3, param);
                            }))));
      }));

TestHelpers.testFn("zip", Curry._2(Rebase.Fn[/* >> */6], Curry._1(Rebase.Fn[/* uncurry */4], Curry._1(Rebase.Fn[/* flip */2], Rebase.Seq[/* zip */20])), _toList), /* :: */[
      /* tuple */[
        /* tuple */[
          Rebase.Seq[/* fromList */14](/* :: */[
                1,
                /* :: */[
                  2,
                  /* [] */0
                ]
              ]),
          Rebase.Seq[/* fromList */14](/* :: */[
                11,
                /* :: */[
                  12,
                  /* [] */0
                ]
              ])
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
            Rebase.Seq[/* fromList */14](/* :: */[
                  1,
                  /* :: */[
                    2,
                    /* :: */[
                      3,
                      /* [] */0
                    ]
                  ]
                ]),
            Rebase.Seq[/* fromList */14](/* :: */[
                  11,
                  /* :: */[
                    12,
                    /* [] */0
                  ]
                ])
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
              Rebase.Seq[/* fromList */14](/* :: */[
                    1,
                    /* :: */[
                      2,
                      /* [] */0
                    ]
                  ]),
              Rebase.Seq[/* fromList */14](/* :: */[
                    11,
                    /* :: */[
                      12,
                      /* :: */[
                        13,
                        /* [] */0
                      ]
                    ]
                  ])
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
                Rebase.Seq[/* fromList */14](/* :: */[
                      1,
                      /* :: */[
                        2,
                        /* [] */0
                      ]
                    ]),
                Rebase.Seq[/* fromList */14](/* [] */0)
              ],
              /* [] */0
            ],
            /* :: */[
              /* tuple */[
                /* tuple */[
                  Rebase.Seq[/* fromList */14](/* [] */0),
                  Rebase.Seq[/* fromList */14](/* :: */[
                        11,
                        /* :: */[
                          12,
                          /* [] */0
                        ]
                      ])
                ],
                /* [] */0
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ]);

Jest.test("zip - lazy", (function () {
        var partial_arg = Rebase.Seq[/* cons */12];
        var partial_arg$1 = function (param) {
          return partial_arg("a", _explode, param);
        };
        var partial_arg$2 = Rebase.Seq[/* cons */12];
        var partial_arg$3 = function (param) {
          return partial_arg$2(1, _explode, param);
        };
        var partial_arg$4 = Rebase.Seq[/* zip */20];
        return Jest.Expect[/* toEqual */12](/* tuple */[
                    "a",
                    1
                  ], Jest.Expect[/* expect */0](Rebase.Seq[/* head */18]((function (param) {
                              return partial_arg$4(partial_arg$3, partial_arg$1, param);
                            }))));
      }));

exports._toList = _toList;
exports._explode = _explode;
/*  Not a pure module */
