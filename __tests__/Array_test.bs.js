'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

Jest.describe("Mappable.S", (function (param) {
        return Jest.test("map", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.$$Array.map, (function (x) {
                                            return x + 1 | 0;
                                          }), [
                                          1,
                                          2
                                        ])), [
                                  2,
                                  3
                                ]);
                    }));
      }));

Jest.describe("Applicative.S", (function (param) {
        Jest.test("apply", (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.$$Array.apply, [
                                    (function (x) {
                                        return x + x | 0;
                                      }),
                                    (function (x) {
                                        return Math.imul(x, x);
                                      })
                                  ], [
                                    3,
                                    8
                                  ])), [
                            6,
                            16,
                            9,
                            64
                          ]);
              }));
        return Jest.test("from", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._1(Rebase.$$Array.from, 42)), [42]);
                    }));
      }));

Jest.describe("Reduceable.S", (function (param) {
        Jest.test("reduce", (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._3(Rebase.$$Array.reduce, (function (acc, x) {
                                      return x - acc | 0;
                                    }), 10, [
                                    1,
                                    2
                                  ])), 11);
              }));
        return Jest.test("reduceRight", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._3(Rebase.$$Array.reduceRight, (function (acc, x) {
                                            return x - acc | 0;
                                          }), 10, [
                                          1,
                                          2
                                        ])), 9);
                    }));
      }));

Jest.describe("Monad.S", (function (param) {
        return Jest.test("flatMap", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.$$Array.flatMap, (function (x) {
                                            return [
                                                    0,
                                                    x
                                                  ];
                                          }), [
                                          1,
                                          2,
                                          3
                                        ])), [
                                  0,
                                  1,
                                  0,
                                  2,
                                  0,
                                  3
                                ]);
                    }));
      }));

Jest.describe("Iterable.S", (function (param) {
        Jest.test("filter", (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.$$Array.filter, (function (x) {
                                      return x % 2 === 0;
                                    }), [
                                    1,
                                    2
                                  ])), [2]);
              }));
        Jest.testAll("exists", {
              hd: [
                [
                  1,
                  3
                ],
                false
              ],
              tl: {
                hd: [
                  [
                    1,
                    2
                  ],
                  true
                ],
                tl: /* [] */0
              }
            }, (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.$$Array.exists, (function (x) {
                                      return x % 2 === 0;
                                    }), param[0])), param[1]);
              }));
        Jest.test("forEach", (function (param) {
                var checked = {
                  contents: /* [] */0
                };
                Curry._2(Rebase.$$Array.forEach, (function (x) {
                        checked.contents = {
                          hd: x,
                          tl: checked.contents
                        };
                        
                      }), [
                      1,
                      2
                    ]);
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(checked.contents), {
                            hd: 2,
                            tl: {
                              hd: 1,
                              tl: /* [] */0
                            }
                          });
              }));
        Jest.testAll("find", {
              hd: [
                [
                  1,
                  3
                ],
                undefined
              ],
              tl: {
                hd: [
                  [
                    1,
                    2,
                    4
                  ],
                  2
                ],
                tl: /* [] */0
              }
            }, (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.$$Array.find, (function (x) {
                                      return x % 2 === 0;
                                    }), param[0])), param[1]);
              }));
        return Jest.testAll("forAll", {
                    hd: [
                      [
                        2,
                        4
                      ],
                      true
                    ],
                    tl: {
                      hd: [
                        [
                          1,
                          2
                        ],
                        false
                      ],
                      tl: /* [] */0
                    }
                  }, (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.$$Array.forAll, (function (x) {
                                            return x % 2 === 0;
                                          }), param[0])), param[1]);
                    }));
      }));

Jest.describe("Concatenable.S", (function (param) {
        return Jest.test("concat", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.$$Array.concat, [
                                          3,
                                          4
                                        ], [
                                          1,
                                          2
                                        ])), [
                                  1,
                                  2,
                                  3,
                                  4
                                ]);
                    }));
      }));

Jest.test("length", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.$$Array.length([
                            1,
                            2
                          ])), 2);
      }));

Jest.testAll("make", {
      hd: [
        0,
        []
      ],
      tl: {
        hd: [
          2,
          [
            "a",
            "a"
          ]
        ],
        tl: /* [] */0
      }
    }, (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.make(param[0], "a")), param[1]);
      }));

TestHelpers.testFn("fromList", Rebase.$$Array.fromList, {
      hd: [
        {
          hd: 1,
          tl: {
            hd: 2,
            tl: /* [] */0
          }
        },
        [
          1,
          2
        ]
      ],
      tl: {
        hd: [
          /* [] */0,
          []
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("fromSeq", Rebase.$$Array.fromSeq, {
      hd: [
        Rebase.Seq.empty,
        []
      ],
      tl: {
        hd: [
          (function (param) {
              return Rebase.Seq.cons(1, (function (param) {
                            return Rebase.Seq.cons(2, (function (param) {
                                          return Rebase.Seq.cons(3, Rebase.Seq.empty, param);
                                        }), param);
                          }), param);
            }),
          [
            1,
            2,
            3
          ]
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("range", (function (param) {
        return Rebase.$$Array.range(undefined, param[0], param[1]);
      }), {
      hd: [
        [
          0,
          0
        ],
        [0]
      ],
      tl: {
        hd: [
          [
            0,
            4
          ],
          [
            0,
            1,
            2,
            3,
            4
          ]
        ],
        tl: {
          hd: [
            [
              2,
              4
            ],
            [
              2,
              3,
              4
            ]
          ],
          tl: {
            hd: [
              [
                -2,
                0
              ],
              [
                -2,
                -1,
                0
              ]
            ],
            tl: {
              hd: [
                [
                  4,
                  2
                ],
                []
              ],
              tl: {
                hd: [
                  [
                    -2,
                    -4
                  ],
                  []
                ],
                tl: {
                  hd: [
                    [
                      2,
                      -2
                    ],
                    []
                  ],
                  tl: /* [] */0
                }
              }
            }
          }
        }
      }
    });

TestHelpers.testFn("range - step", (function (param) {
        return Rebase.$$Array.range(param[2], param[0], param[1]);
      }), {
      hd: [
        [
          0,
          0,
          2
        ],
        [0]
      ],
      tl: {
        hd: [
          [
            0,
            3,
            2
          ],
          [
            0,
            2
          ]
        ],
        tl: {
          hd: [
            [
              2,
              5,
              2
            ],
            [
              2,
              4
            ]
          ],
          tl: {
            hd: [
              [
                0,
                0,
                -2
              ],
              [0]
            ],
            tl: {
              hd: [
                [
                  0,
                  3,
                  -2
                ],
                []
              ],
              tl: {
                hd: [
                  [
                    3,
                    0,
                    -2
                  ],
                  [
                    3,
                    1
                  ]
                ],
                tl: /* [] */0
              }
            }
          }
        }
      }
    });

Jest.test("range - step 0", (function (param) {
        return Jest.Expect.toThrow(Jest.Expect.expect(function (param) {
                        return Rebase.$$Array.range(0, 0, 0);
                      }));
      }));

var partial_arg = [
  1,
  2
];

TestHelpers.testFn("get", (function (param) {
        return Rebase.$$Array.get(partial_arg, param);
      }), {
      hd: [
        0,
        1
      ],
      tl: {
        hd: [
          2,
          undefined
        ],
        tl: {
          hd: [
            -1,
            undefined
          ],
          tl: /* [] */0
        }
      }
    });

Jest.test("set - in bounds", (function (param) {
        var a = [
          1,
          2
        ];
        Rebase.$$Array.set(a, 1, 3);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.get(a, 1)), 3);
      }));

Jest.test("set - out of bounds", (function (param) {
        var a = [
          1,
          2
        ];
        Rebase.$$Array.set(a, 2, 3);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.get(a, 2)), undefined);
      }));

Jest.test("[] get", (function (param) {
        var a = [
          1,
          2
        ];
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.get(a, 1)), 2);
      }));

Jest.test("[] set - in bounds", (function (param) {
        var a = [
          1,
          2
        ];
        Rebase.$$Array.set(a, 1, 3);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.get(a, 1)), 3);
      }));

Jest.test("[] set - out of bounds", (function (param) {
        var a = [
          1,
          2
        ];
        Rebase.$$Array.set(a, 2, 3);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.get(a, 2)), undefined);
      }));

Jest.test("getOrRaise - in bounds", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.$$Array.getOrRaise(1, [
                            1,
                            2
                          ])), 2);
      }));

Jest.test("getOrRaise - out of bounds", (function (param) {
        return Jest.Expect.toThrow(Jest.Expect.expect(function (param) {
                        return Rebase.$$Array.getOrRaise(2, [
                                    1,
                                    2
                                  ]);
                      }));
      }));

Jest.test("setOrRaise - in bounds", (function (param) {
        var a = [
          1,
          2
        ];
        Rebase.$$Array.setOrRaise(1, 3, a);
        return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.$$Array.getOrRaise(1, a)), 3);
      }));

Jest.test("setOrRaise - out of bounds", (function (param) {
        return Jest.Expect.toThrow(Jest.Expect.expect(function (param) {
                        return Rebase.$$Array.setOrRaise(2, 3, [
                                    1,
                                    2
                                  ]);
                      }));
      }));

Jest.test("unsafeGetUnchecked - in bounds", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.$$Array.unsafeGetUnchecked(1, [
                            1,
                            2
                          ])), 2);
      }));

Jest.test("unsafeGetUnchecked - out of bounds", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.$$Array.unsafeGetUnchecked(2, [
                            1,
                            2
                          ])), undefined);
      }));

Jest.test("unsafeSetUnchecked - in bounds", (function (param) {
        var a = [
          1,
          2
        ];
        Rebase.$$Array.unsafeSetUnchecked(1, 3, a);
        return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.$$Array.getOrRaise(1, a)), 3);
      }));

Jest.test("unsafeSetUnchecked - out of bounds", (function (param) {
        var a = [
          1,
          2
        ];
        Rebase.$$Array.unsafeSetUnchecked(2, 3, a);
        return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.$$Array.getOrRaise(2, a)), 3);
      }));

Jest.test("filterMap", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.filterMap((function (x) {
                              if (x % 2 === 0) {
                                return x + 1 | 0;
                              }
                              
                            }), [
                            1,
                            2
                          ])), [3]);
      }));

Jest.test("fill", (function (param) {
        var a = [
          1,
          2
        ];
        Rebase.$$Array.fill(0, a);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(a), [
                    0,
                    0
                  ]);
      }));

Jest.testAll("slice", {
      hd: [
        0,
        0,
        []
      ],
      tl: {
        hd: [
          2,
          0,
          []
        ],
        tl: {
          hd: [
            2,
            2,
            []
          ],
          tl: {
            hd: [
              2,
              3,
              [3]
            ],
            tl: {
              hd: [
                2,
                7,
                [
                  3,
                  4
                ]
              ],
              tl: {
                hd: [
                  7,
                  9,
                  []
                ],
                tl: {
                  hd: [
                    0,
                    -1,
                    [
                      1,
                      2,
                      3
                    ]
                  ],
                  tl: {
                    hd: [
                      2,
                      -1,
                      [3]
                    ],
                    tl: {
                      hd: [
                        -1,
                        0,
                        []
                      ],
                      tl: {
                        hd: [
                          -1,
                          2,
                          []
                        ],
                        tl: {
                          hd: [
                            -1,
                            -2,
                            []
                          ],
                          tl: /* [] */0
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }, (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.slice(param[0], param[1], [
                            1,
                            2,
                            3,
                            4
                          ])), param[2]);
      }));

Jest.test("copy", (function (param) {
        var a = [
          1,
          2
        ];
        var b = Rebase.$$Array.copy(a);
        Rebase.$$Array.set(a, 1, 0);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect([
                        a,
                        b
                      ]), [
                    [
                      1,
                      0
                    ],
                    [
                      1,
                      2
                    ]
                  ]);
      }));

Jest.test("mapi", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.mapi((function (x, i) {
                              return [
                                      x,
                                      i
                                    ];
                            }), [
                            "a",
                            "b"
                          ])), [
                    [
                      "a",
                      0
                    ],
                    [
                      "b",
                      1
                    ]
                  ]);
      }));

Jest.test("forEachi", (function (param) {
        var checked = {
          contents: /* [] */0
        };
        Rebase.$$Array.forEachi((function (x, i) {
                checked.contents = {
                  hd: [
                    x,
                    i
                  ],
                  tl: checked.contents
                };
                
              }), [
              "a",
              "b"
            ]);
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(checked.contents), {
                    hd: [
                      "b",
                      1
                    ],
                    tl: {
                      hd: [
                        "a",
                        0
                      ],
                      tl: /* [] */0
                    }
                  });
      }));

Jest.testAll("findIndex", {
      hd: [
        [
          "a",
          "b"
        ],
        undefined
      ],
      tl: {
        hd: [
          [
            "a",
            "bb",
            "c"
          ],
          [
            1,
            "bb"
          ]
        ],
        tl: /* [] */0
      }
    }, (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.$$Array.findIndex((function (x) {
                              return Rebase.$$String.length(x) === 2;
                            }), param[0])), param[1]);
      }));

/*  Not a pure module */
