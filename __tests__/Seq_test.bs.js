'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

var _toList = Rebase.List.fromSeq;

function _explode(param) {
  return Pervasives.failwith("Oops, not lazy! The function evaluated too much");
}

Jest.describe("Mappable.S", (function (param) {
        TestHelpers.testFn("map", Curry._2(Rebase.Fn.$great$great, Curry._1(Rebase.Seq.map, (function (x) {
                        return x + 1 | 0;
                      })), _toList), {
              hd: [
                Rebase.Seq.fromList(/* [] */0),
                /* [] */0
              ],
              tl: {
                hd: [
                  Rebase.Seq.fromList({
                        hd: 1,
                        tl: {
                          hd: 2,
                          tl: /* [] */0
                        }
                      }),
                  {
                    hd: 2,
                    tl: {
                      hd: 3,
                      tl: /* [] */0
                    }
                  }
                ],
                tl: /* [] */0
              }
            });
        return Jest.test("map - lazy", (function (param) {
                      return Jest.Expect.toEqual(2, Jest.Expect.expect(Rebase.Seq.head(Curry._2(Rebase.Seq.map, (function (x) {
                                                return x + 1 | 0;
                                              }), (function (param) {
                                                return Rebase.Seq.cons(1, _explode, param);
                                              })))));
                    }));
      }));

Jest.describe("Applicative.S", (function (param) {
        Jest.test("apply", (function (param) {
                return Jest.Expect.toEqual({
                            hd: 6,
                            tl: {
                              hd: 16,
                              tl: {
                                hd: 9,
                                tl: {
                                  hd: 64,
                                  tl: /* [] */0
                                }
                              }
                            }
                          }, Jest.Expect.expect(_toList(Curry._2(Rebase.Seq.apply, Rebase.Seq.fromList({
                                            hd: (function (x) {
                                                return x + x | 0;
                                              }),
                                            tl: {
                                              hd: (function (x) {
                                                  return Math.imul(x, x);
                                                }),
                                              tl: /* [] */0
                                            }
                                          }), Rebase.Seq.fromList({
                                            hd: 3,
                                            tl: {
                                              hd: 8,
                                              tl: /* [] */0
                                            }
                                          })))));
              }));
        Jest.test("apply - lazy", (function (param) {
                return Jest.Expect.toEqual(6, Jest.Expect.expect(Rebase.Seq.head(Curry._2(Rebase.Seq.apply, Rebase.Seq.fromList({
                                            hd: (function (x) {
                                                return x + x | 0;
                                              }),
                                            tl: /* [] */0
                                          }), (function (param) {
                                          return Rebase.Seq.cons(3, _explode, param);
                                        })))));
              }));
        return Jest.test("from", (function (param) {
                      return Jest.Expect.toEqual({
                                  hd: 42,
                                  tl: /* [] */0
                                }, Jest.Expect.expect(_toList(Curry._1(Rebase.Seq.from, 42))));
                    }));
      }));

Jest.describe("Reduceable.S", (function (param) {
        Jest.test("reduce", (function (param) {
                return Jest.Expect.toEqual(11, Jest.Expect.expect(Curry._3(Rebase.Seq.reduce, (function (acc, x) {
                                      return x - acc | 0;
                                    }), 10, Rebase.Seq.fromList({
                                        hd: 1,
                                        tl: {
                                          hd: 2,
                                          tl: /* [] */0
                                        }
                                      }))));
              }));
        return Jest.test("reduceRight", (function (param) {
                      return Jest.Expect.toEqual(9, Jest.Expect.expect(Curry._3(Rebase.Seq.reduceRight, (function (acc, x) {
                                            return x - acc | 0;
                                          }), 10, Rebase.Seq.fromList({
                                              hd: 1,
                                              tl: {
                                                hd: 2,
                                                tl: /* [] */0
                                              }
                                            }))));
                    }));
      }));

Jest.describe("Monad.S", (function (param) {
        Jest.test("flatMap", (function (param) {
                return Jest.Expect.toEqual({
                            hd: 0,
                            tl: {
                              hd: 1,
                              tl: {
                                hd: 0,
                                tl: {
                                  hd: 2,
                                  tl: {
                                    hd: 0,
                                    tl: {
                                      hd: 3,
                                      tl: /* [] */0
                                    }
                                  }
                                }
                              }
                            }
                          }, Jest.Expect.expect(_toList(Curry._2(Rebase.Seq.flatMap, (function (x) {
                                          var partial_arg = Rebase.Seq.from(x);
                                          return function (param) {
                                            return Rebase.Seq.cons(0, partial_arg, param);
                                          };
                                        }), Rebase.Seq.fromList({
                                            hd: 1,
                                            tl: {
                                              hd: 2,
                                              tl: {
                                                hd: 3,
                                                tl: /* [] */0
                                              }
                                            }
                                          })))));
              }));
        Jest.test("flatMap - lazy outer", (function (param) {
                return Jest.Expect.toEqual(1, Jest.Expect.expect(Rebase.Seq.head(Curry._2(Rebase.Seq.flatMap, (function (x) {
                                          return function (param) {
                                            return Rebase.Seq.cons(x, Rebase.Seq.empty, param);
                                          };
                                        }), (function (param) {
                                          return Rebase.Seq.cons(1, _explode, param);
                                        })))));
              }));
        return Jest.test("flatMap - lazy inner", (function (param) {
                      return Jest.Expect.toEqual(1, Jest.Expect.expect(Rebase.Seq.head(Curry._2(Rebase.Seq.flatMap, (function (x) {
                                                return function (param) {
                                                  return Rebase.Seq.cons(x, (function (param) {
                                                                return Rebase.Seq.cons(0, _explode, param);
                                                              }), param);
                                                };
                                              }), Rebase.Seq.fromList({
                                                  hd: 1,
                                                  tl: {
                                                    hd: 2,
                                                    tl: /* [] */0
                                                  }
                                                })))));
                    }));
      }));

Jest.describe("Iterable.S", (function (param) {
        Jest.test("forEach", (function (param) {
                var checked = {
                  contents: /* [] */0
                };
                Rebase.Seq.forEach((function (x) {
                        checked.contents = {
                          hd: x,
                          tl: checked.contents
                        };
                        
                      }), Rebase.Seq.fromList({
                          hd: 1,
                          tl: {
                            hd: 2,
                            tl: /* [] */0
                          }
                        }));
                return Jest.Expect.toEqual({
                            hd: 2,
                            tl: {
                              hd: 1,
                              tl: /* [] */0
                            }
                          }, Jest.Expect.expect(checked.contents));
              }));
        Jest.test("filter", (function (param) {
                return Jest.Expect.toEqual({
                            hd: 2,
                            tl: /* [] */0
                          }, Jest.Expect.expect(_toList(Curry._2(Rebase.Seq.filter, (function (x) {
                                          return x % 2 === 0;
                                        }), Rebase.Seq.fromList({
                                            hd: 1,
                                            tl: {
                                              hd: 2,
                                              tl: /* [] */0
                                            }
                                          })))));
              }));
        Jest.test("filter - lazy", (function (param) {
                return Jest.Expect.toEqual(2, Jest.Expect.expect(Rebase.Seq.head(Curry._2(Rebase.Seq.filter, (function (x) {
                                          return x % 2 === 0;
                                        }), (function (param) {
                                          return Rebase.Seq.cons(1, (function (param) {
                                                        return Rebase.Seq.cons(2, _explode, param);
                                                      }), param);
                                        })))));
              }));
        TestHelpers.testFn("exists", Curry._1(Rebase.Seq.exists, (function (x) {
                    return x % 2 === 0;
                  })), {
              hd: [
                Rebase.Seq.fromList(/* [] */0),
                false
              ],
              tl: {
                hd: [
                  Rebase.Seq.fromList({
                        hd: 1,
                        tl: {
                          hd: 3,
                          tl: /* [] */0
                        }
                      }),
                  false
                ],
                tl: {
                  hd: [
                    Rebase.Seq.fromList({
                          hd: 1,
                          tl: {
                            hd: 2,
                            tl: /* [] */0
                          }
                        }),
                    true
                  ],
                  tl: /* [] */0
                }
              }
            });
        Jest.test("exists - lazy", (function (param) {
                return Jest.Expect.toEqual(true, Jest.Expect.expect(Curry._2(Rebase.Seq.exists, (function (x) {
                                      return x % 2 === 0;
                                    }), (function (param) {
                                      return Rebase.Seq.cons(1, (function (param) {
                                                    return Rebase.Seq.cons(2, _explode, param);
                                                  }), param);
                                    }))));
              }));
        TestHelpers.testFn("find", Curry._1(Rebase.Seq.find, (function (x) {
                    return x % 2 === 0;
                  })), {
              hd: [
                Rebase.Seq.fromList(/* [] */0),
                undefined
              ],
              tl: {
                hd: [
                  Rebase.Seq.fromList({
                        hd: 1,
                        tl: {
                          hd: 3,
                          tl: /* [] */0
                        }
                      }),
                  undefined
                ],
                tl: {
                  hd: [
                    Rebase.Seq.fromList({
                          hd: 1,
                          tl: {
                            hd: 2,
                            tl: /* [] */0
                          }
                        }),
                    2
                  ],
                  tl: /* [] */0
                }
              }
            });
        Jest.test("find - lazy", (function (param) {
                return Jest.Expect.toEqual(2, Jest.Expect.expect(Curry._2(Rebase.Seq.find, (function (x) {
                                      return x % 2 === 0;
                                    }), (function (param) {
                                      return Rebase.Seq.cons(1, (function (param) {
                                                    return Rebase.Seq.cons(2, _explode, param);
                                                  }), param);
                                    }))));
              }));
        return TestHelpers.testFn("forAll", Curry._1(Rebase.Seq.forAll, (function (x) {
                          return x % 2 === 0;
                        })), {
                    hd: [
                      Rebase.Seq.fromList(/* [] */0),
                      true
                    ],
                    tl: {
                      hd: [
                        Rebase.Seq.fromList({
                              hd: 2,
                              tl: {
                                hd: 4,
                                tl: /* [] */0
                              }
                            }),
                        true
                      ],
                      tl: {
                        hd: [
                          Rebase.Seq.fromList({
                                hd: 1,
                                tl: {
                                  hd: 2,
                                  tl: /* [] */0
                                }
                              }),
                          false
                        ],
                        tl: /* [] */0
                      }
                    }
                  });
      }));

TestHelpers.testProperty("empty", Rebase.Seq.empty(undefined) === /* Nil */0);

TestHelpers.testFn("cons", Curry._2(Rebase.Fn.$great$great, Curry._1(Rebase.Fn.uncurry, Rebase.Seq.cons), _toList), {
      hd: [
        [
          1,
          Rebase.Seq.fromList(/* [] */0)
        ],
        {
          hd: 1,
          tl: /* [] */0
        }
      ],
      tl: {
        hd: [
          [
            1,
            Rebase.Seq.fromList({
                  hd: 2,
                  tl: {
                    hd: 3,
                    tl: /* [] */0
                  }
                })
          ],
          {
            hd: 1,
            tl: {
              hd: 2,
              tl: {
                hd: 3,
                tl: /* [] */0
              }
            }
          }
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("fromArray", Curry._2(Rebase.Fn.$great$great, Rebase.Seq.fromArray, _toList), {
      hd: [
        [],
        /* [] */0
      ],
      tl: {
        hd: [
          [
            1,
            2,
            3
          ],
          {
            hd: 1,
            tl: {
              hd: 2,
              tl: {
                hd: 3,
                tl: /* [] */0
              }
            }
          }
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("fromList", Curry._2(Rebase.Fn.$great$great, Rebase.Seq.fromList, _toList), {
      hd: [
        /* [] */0,
        /* [] */0
      ],
      tl: {
        hd: [
          {
            hd: 1,
            tl: {
              hd: 2,
              tl: {
                hd: 3,
                tl: /* [] */0
              }
            }
          },
          {
            hd: 1,
            tl: {
              hd: 2,
              tl: {
                hd: 3,
                tl: /* [] */0
              }
            }
          }
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("range", (function (param) {
        return _toList(Rebase.Seq.range(undefined, param[0], param[1]));
      }), {
      hd: [
        [
          0,
          0
        ],
        {
          hd: 0,
          tl: /* [] */0
        }
      ],
      tl: {
        hd: [
          [
            0,
            4
          ],
          {
            hd: 0,
            tl: {
              hd: 1,
              tl: {
                hd: 2,
                tl: {
                  hd: 3,
                  tl: {
                    hd: 4,
                    tl: /* [] */0
                  }
                }
              }
            }
          }
        ],
        tl: {
          hd: [
            [
              2,
              4
            ],
            {
              hd: 2,
              tl: {
                hd: 3,
                tl: {
                  hd: 4,
                  tl: /* [] */0
                }
              }
            }
          ],
          tl: {
            hd: [
              [
                -2,
                0
              ],
              {
                hd: -2,
                tl: {
                  hd: -1,
                  tl: {
                    hd: 0,
                    tl: /* [] */0
                  }
                }
              }
            ],
            tl: {
              hd: [
                [
                  4,
                  2
                ],
                /* [] */0
              ],
              tl: {
                hd: [
                  [
                    -2,
                    -4
                  ],
                  /* [] */0
                ],
                tl: {
                  hd: [
                    [
                      2,
                      -2
                    ],
                    /* [] */0
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
        return _toList(Rebase.Seq.range(param[2], param[0], param[1]));
      }), {
      hd: [
        [
          0,
          0,
          2
        ],
        {
          hd: 0,
          tl: /* [] */0
        }
      ],
      tl: {
        hd: [
          [
            0,
            3,
            2
          ],
          {
            hd: 0,
            tl: {
              hd: 2,
              tl: /* [] */0
            }
          }
        ],
        tl: {
          hd: [
            [
              2,
              5,
              2
            ],
            {
              hd: 2,
              tl: {
                hd: 4,
                tl: /* [] */0
              }
            }
          ],
          tl: {
            hd: [
              [
                0,
                0,
                -2
              ],
              {
                hd: 0,
                tl: /* [] */0
              }
            ],
            tl: {
              hd: [
                [
                  0,
                  3,
                  -2
                ],
                /* [] */0
              ],
              tl: {
                hd: [
                  [
                    3,
                    0,
                    -2
                  ],
                  {
                    hd: 3,
                    tl: {
                      hd: 1,
                      tl: /* [] */0
                    }
                  }
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
                        return Rebase.Seq.range(0, 0, 0);
                      }));
      }));

TestHelpers.testFn("isEmpty", Rebase.Seq.isEmpty, {
      hd: [
        Rebase.Seq.empty,
        true
      ],
      tl: {
        hd: [
          Rebase.Seq.fromList({
                hd: 1,
                tl: {
                  hd: 2,
                  tl: {
                    hd: 3,
                    tl: /* [] */0
                  }
                }
              }),
          false
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("head", Rebase.Seq.head, {
      hd: [
        Rebase.Seq.empty,
        undefined
      ],
      tl: {
        hd: [
          Rebase.Seq.fromList({
                hd: 1,
                tl: {
                  hd: 2,
                  tl: {
                    hd: 3,
                    tl: /* [] */0
                  }
                }
              }),
          1
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("count", Rebase.Seq.count, {
      hd: [
        Rebase.Seq.fromList(/* [] */0),
        0
      ],
      tl: {
        hd: [
          Rebase.Seq.fromList({
                hd: 1,
                tl: {
                  hd: 2,
                  tl: {
                    hd: 3,
                    tl: /* [] */0
                  }
                }
              }),
          3
        ],
        tl: /* [] */0
      }
    });

Jest.test("filterMap", (function (param) {
        var partial_arg = Rebase.Seq.fromList({
              hd: 1,
              tl: {
                hd: 2,
                tl: /* [] */0
              }
            });
        return Jest.Expect.toEqual({
                    hd: 3,
                    tl: /* [] */0
                  }, Jest.Expect.expect(_toList(function (param) {
                            return Rebase.Seq.filterMap((function (x) {
                                          if (x % 2 === 0) {
                                            return x + 1 | 0;
                                          }
                                          
                                        }), partial_arg, param);
                          })));
      }));

Jest.test("filterMap - lazy", (function (param) {
        return Jest.Expect.toEqual(3, Jest.Expect.expect(Rebase.Seq.head(function (param) {
                            return Rebase.Seq.filterMap((function (x) {
                                          if (x % 2 === 0) {
                                            return x + 1 | 0;
                                          }
                                          
                                        }), (function (param) {
                                          return Rebase.Seq.cons(1, (function (param) {
                                                        return Rebase.Seq.cons(2, _explode, param);
                                                      }), param);
                                        }), param);
                          })));
      }));

TestHelpers.testFn("zip", Curry._2(Rebase.Fn.$great$great, Curry._1(Rebase.Fn.uncurry, Curry._1(Rebase.Fn.flip, Rebase.Seq.zip)), _toList), {
      hd: [
        [
          Rebase.Seq.fromList({
                hd: 1,
                tl: {
                  hd: 2,
                  tl: /* [] */0
                }
              }),
          Rebase.Seq.fromList({
                hd: 11,
                tl: {
                  hd: 12,
                  tl: /* [] */0
                }
              })
        ],
        {
          hd: [
            1,
            11
          ],
          tl: {
            hd: [
              2,
              12
            ],
            tl: /* [] */0
          }
        }
      ],
      tl: {
        hd: [
          [
            Rebase.Seq.fromList({
                  hd: 1,
                  tl: {
                    hd: 2,
                    tl: {
                      hd: 3,
                      tl: /* [] */0
                    }
                  }
                }),
            Rebase.Seq.fromList({
                  hd: 11,
                  tl: {
                    hd: 12,
                    tl: /* [] */0
                  }
                })
          ],
          {
            hd: [
              1,
              11
            ],
            tl: {
              hd: [
                2,
                12
              ],
              tl: /* [] */0
            }
          }
        ],
        tl: {
          hd: [
            [
              Rebase.Seq.fromList({
                    hd: 1,
                    tl: {
                      hd: 2,
                      tl: /* [] */0
                    }
                  }),
              Rebase.Seq.fromList({
                    hd: 11,
                    tl: {
                      hd: 12,
                      tl: {
                        hd: 13,
                        tl: /* [] */0
                      }
                    }
                  })
            ],
            {
              hd: [
                1,
                11
              ],
              tl: {
                hd: [
                  2,
                  12
                ],
                tl: /* [] */0
              }
            }
          ],
          tl: {
            hd: [
              [
                Rebase.Seq.fromList({
                      hd: 1,
                      tl: {
                        hd: 2,
                        tl: /* [] */0
                      }
                    }),
                Rebase.Seq.fromList(/* [] */0)
              ],
              /* [] */0
            ],
            tl: {
              hd: [
                [
                  Rebase.Seq.fromList(/* [] */0),
                  Rebase.Seq.fromList({
                        hd: 11,
                        tl: {
                          hd: 12,
                          tl: /* [] */0
                        }
                      })
                ],
                /* [] */0
              ],
              tl: /* [] */0
            }
          }
        }
      }
    });

Jest.test("zip - lazy", (function (param) {
        return Jest.Expect.toEqual([
                    "a",
                    1
                  ], Jest.Expect.expect(Rebase.Seq.head(function (param) {
                            return Rebase.Seq.zip((function (param) {
                                          return Rebase.Seq.cons(1, _explode, param);
                                        }), (function (param) {
                                          return Rebase.Seq.cons("a", _explode, param);
                                        }), param);
                          })));
      }));

exports._toList = _toList;
exports._explode = _explode;
/*  Not a pure module */
