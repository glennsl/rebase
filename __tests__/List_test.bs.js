'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

Jest.describe("Mappable.S", (function (param) {
        return Jest.test("map", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.List.map, (function (x) {
                                            return x + 1 | 0;
                                          }), {
                                          hd: 1,
                                          tl: {
                                            hd: 2,
                                            tl: /* [] */0
                                          }
                                        })), {
                                  hd: 2,
                                  tl: {
                                    hd: 3,
                                    tl: /* [] */0
                                  }
                                });
                    }));
      }));

Jest.describe("Applicative.S", (function (param) {
        Jest.test("apply", (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.List.apply, {
                                    hd: (function (x) {
                                        return x + x | 0;
                                      }),
                                    tl: {
                                      hd: (function (x) {
                                          return Math.imul(x, x);
                                        }),
                                      tl: /* [] */0
                                    }
                                  }, {
                                    hd: 3,
                                    tl: {
                                      hd: 8,
                                      tl: /* [] */0
                                    }
                                  })), {
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
                          });
              }));
        return Jest.test("from", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._1(Rebase.List.from, 42)), {
                                  hd: 42,
                                  tl: /* [] */0
                                });
                    }));
      }));

Jest.describe("Reduceable.S", (function (param) {
        Jest.test("reduce", (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._3(Rebase.List.reduce, (function (acc, x) {
                                      return x - acc | 0;
                                    }), 10, {
                                    hd: 1,
                                    tl: {
                                      hd: 2,
                                      tl: /* [] */0
                                    }
                                  })), 11);
              }));
        return Jest.test("reduceRight", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._3(Rebase.List.reduceRight, (function (acc, x) {
                                            return x - acc | 0;
                                          }), 10, {
                                          hd: 1,
                                          tl: {
                                            hd: 2,
                                            tl: /* [] */0
                                          }
                                        })), 9);
                    }));
      }));

Jest.describe("Monad.S", (function (param) {
        return Jest.test("flatMap", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.List.flatMap, (function (x) {
                                            return {
                                                    hd: 0,
                                                    tl: {
                                                      hd: x,
                                                      tl: /* [] */0
                                                    }
                                                  };
                                          }), {
                                          hd: 1,
                                          tl: {
                                            hd: 2,
                                            tl: {
                                              hd: 3,
                                              tl: /* [] */0
                                            }
                                          }
                                        })), {
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
                                });
                    }));
      }));

Jest.describe("Iterable.S", (function (param) {
        Jest.test("filter", (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.List.filter, (function (x) {
                                      return x % 2 === 0;
                                    }), {
                                    hd: 1,
                                    tl: {
                                      hd: 2,
                                      tl: /* [] */0
                                    }
                                  })), {
                            hd: 2,
                            tl: /* [] */0
                          });
              }));
        Jest.testAll("exists", {
              hd: [
                /* [] */0,
                false
              ],
              tl: {
                hd: [
                  {
                    hd: 1,
                    tl: {
                      hd: 3,
                      tl: /* [] */0
                    }
                  },
                  false
                ],
                tl: {
                  hd: [
                    {
                      hd: 1,
                      tl: {
                        hd: 2,
                        tl: /* [] */0
                      }
                    },
                    true
                  ],
                  tl: /* [] */0
                }
              }
            }, (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.List.exists, (function (x) {
                                      return x % 2 === 0;
                                    }), param[0])), param[1]);
              }));
        Jest.test("forEach", (function (param) {
                var checked = {
                  contents: /* [] */0
                };
                Curry._2(Rebase.List.forEach, (function (x) {
                        checked.contents = {
                          hd: x,
                          tl: checked.contents
                        };
                        
                      }), {
                      hd: 1,
                      tl: {
                        hd: 2,
                        tl: /* [] */0
                      }
                    });
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
                /* [] */0,
                undefined
              ],
              tl: {
                hd: [
                  {
                    hd: 1,
                    tl: {
                      hd: 3,
                      tl: /* [] */0
                    }
                  },
                  undefined
                ],
                tl: {
                  hd: [
                    {
                      hd: 1,
                      tl: {
                        hd: 2,
                        tl: {
                          hd: 4,
                          tl: /* [] */0
                        }
                      }
                    },
                    2
                  ],
                  tl: /* [] */0
                }
              }
            }, (function (param) {
                return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.List.find, (function (x) {
                                      return x % 2 === 0;
                                    }), param[0])), param[1]);
              }));
        return Jest.testAll("forAll", {
                    hd: [
                      /* [] */0,
                      true
                    ],
                    tl: {
                      hd: [
                        {
                          hd: 2,
                          tl: {
                            hd: 4,
                            tl: /* [] */0
                          }
                        },
                        true
                      ],
                      tl: {
                        hd: [
                          {
                            hd: 1,
                            tl: {
                              hd: 2,
                              tl: /* [] */0
                            }
                          },
                          false
                        ],
                        tl: /* [] */0
                      }
                    }
                  }, (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.List.forAll, (function (x) {
                                            return x % 2 === 0;
                                          }), param[0])), param[1]);
                    }));
      }));

Jest.describe("Concatenable.S", (function (param) {
        return Jest.test("concat", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Curry._2(Rebase.List.concat, {
                                          hd: 3,
                                          tl: {
                                            hd: 4,
                                            tl: /* [] */0
                                          }
                                        }, {
                                          hd: 1,
                                          tl: {
                                            hd: 2,
                                            tl: /* [] */0
                                          }
                                        })), {
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
                                });
                    }));
      }));

TestHelpers.testFn("fromArray", Rebase.List.fromArray, {
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

TestHelpers.testFn("fromSeq", Rebase.List.fromSeq, {
      hd: [
        Rebase.Seq.empty,
        /* [] */0
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
        return Rebase.List.range(undefined, param[0], param[1]);
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
        return Rebase.List.range(param[2], param[0], param[1]);
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
                        return Rebase.List.range(0, 0, 0);
                      }));
      }));

TestHelpers.testFn("isEmpty", Rebase.List.isEmpty, {
      hd: [
        /* [] */0,
        true
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
          false
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("head", Rebase.List.head, {
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
        1
      ],
      tl: {
        hd: [
          /* [] */0,
          undefined
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("tail", Rebase.List.tail, {
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
          hd: 2,
          tl: {
            hd: 3,
            tl: /* [] */0
          }
        }
      ],
      tl: {
        hd: [
          /* [] */0,
          undefined
        ],
        tl: /* [] */0
      }
    });

Jest.test("reverse", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.List.reverse({
                            hd: 1,
                            tl: {
                              hd: 2,
                              tl: /* [] */0
                            }
                          })), {
                    hd: 2,
                    tl: {
                      hd: 1,
                      tl: /* [] */0
                    }
                  });
      }));

Jest.test("length", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.List.length({
                            hd: 41,
                            tl: {
                              hd: 62,
                              tl: /* [] */0
                            }
                          })), 2);
      }));

Jest.test("filterMap", (function (param) {
        return Curry._2(Jest.Expect.Operators.$eq, Jest.Expect.expect(Rebase.List.filterMap((function (x) {
                              if (x % 2 === 0) {
                                return x + 1 | 0;
                              }
                              
                            }), {
                            hd: 1,
                            tl: {
                              hd: 2,
                              tl: /* [] */0
                            }
                          })), {
                    hd: 3,
                    tl: /* [] */0
                  });
      }));

TestHelpers.testFn("zip", Curry._1(Rebase.Fn.uncurry, Curry._1(Rebase.Fn.flip, Rebase.List.zip)), {
      hd: [
        [
          {
            hd: 1,
            tl: {
              hd: 2,
              tl: /* [] */0
            }
          },
          {
            hd: 11,
            tl: {
              hd: 12,
              tl: /* [] */0
            }
          }
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
              hd: 11,
              tl: {
                hd: 12,
                tl: /* [] */0
              }
            }
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
              {
                hd: 1,
                tl: {
                  hd: 2,
                  tl: /* [] */0
                }
              },
              {
                hd: 11,
                tl: {
                  hd: 12,
                  tl: {
                    hd: 13,
                    tl: /* [] */0
                  }
                }
              }
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
                {
                  hd: 1,
                  tl: {
                    hd: 2,
                    tl: /* [] */0
                  }
                },
                /* [] */0
              ],
              /* [] */0
            ],
            tl: {
              hd: [
                [
                  /* [] */0,
                  {
                    hd: 11,
                    tl: {
                      hd: 12,
                      tl: /* [] */0
                    }
                  }
                ],
                /* [] */0
              ],
              tl: /* [] */0
            }
          }
        }
      }
    });

/*  Not a pure module */
