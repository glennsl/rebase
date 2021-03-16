'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Caml_option = require("bs-platform/lib/js/caml_option.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

Jest.describe("Mappable.S", (function (param) {
        return TestHelpers.testFn("map", Curry._1(Rebase.$$Option.map, (function (x) {
                          return x + 1 | 0;
                        })), {
                    hd: [
                      undefined,
                      undefined
                    ],
                    tl: {
                      hd: [
                        42,
                        43
                      ],
                      tl: /* [] */0
                    }
                  });
      }));

Jest.describe("Applicative.S", (function (param) {
        TestHelpers.testFn("apply", Curry._1(Rebase.Fn.uncurry, Rebase.$$Option.apply), {
              hd: [
                [
                  undefined,
                  undefined
                ],
                undefined
              ],
              tl: {
                hd: [
                  [
                    (function (x) {
                        return x + 1 | 0;
                      }),
                    undefined
                  ],
                  undefined
                ],
                tl: {
                  hd: [
                    [
                      undefined,
                      1
                    ],
                    undefined
                  ],
                  tl: {
                    hd: [
                      [
                        (function (x) {
                            return x + 1 | 0;
                          }),
                        1
                      ],
                      2
                    ],
                    tl: /* [] */0
                  }
                }
              }
            });
        return Jest.test("from", (function (param) {
                      return Jest.Expect.toEqual(42, Jest.Expect.expect(Curry._1(Rebase.$$Option.from, 42)));
                    }));
      }));

Jest.describe("Reduceable.S", (function (param) {
        TestHelpers.testFn("reduce", Curry._2(Rebase.$$Option.reduce, (function (acc, x) {
                    return x - acc | 0;
                  }), 10), {
              hd: [
                undefined,
                10
              ],
              tl: {
                hd: [
                  42,
                  32
                ],
                tl: /* [] */0
              }
            });
        return TestHelpers.testFn("reduceRight", Curry._2(Rebase.$$Option.reduceRight, (function (acc, x) {
                          return x - acc | 0;
                        }), 10), {
                    hd: [
                      undefined,
                      10
                    ],
                    tl: {
                      hd: [
                        42,
                        32
                      ],
                      tl: /* [] */0
                    }
                  });
      }));

Jest.describe("Monad.S", (function (param) {
        return TestHelpers.testFn("flatMap", Curry._1(Rebase.$$Option.flatMap, (function (x) {
                          return x + 1 | 0;
                        })), {
                    hd: [
                      undefined,
                      undefined
                    ],
                    tl: {
                      hd: [
                        42,
                        43
                      ],
                      tl: /* [] */0
                    }
                  });
      }));

Jest.describe("Iterable.S", (function (param) {
        TestHelpers.testFn("exists", Curry._1(Rebase.$$Option.exists, (function (x) {
                    return x % 2 === 0;
                  })), {
              hd: [
                undefined,
                false
              ],
              tl: {
                hd: [
                  1,
                  false
                ],
                tl: {
                  hd: [
                    2,
                    true
                  ],
                  tl: /* [] */0
                }
              }
            });
        Jest.testAll("forEach", {
              hd: [
                undefined,
                0
              ],
              tl: {
                hd: [
                  1,
                  1
                ],
                tl: /* [] */0
              }
            }, (function (param) {
                var checked = {
                  contents: 0
                };
                Curry._2(Rebase.$$Option.forEach, (function (x) {
                        checked.contents = x;
                        
                      }), param[0]);
                return Jest.Expect.toEqual(param[1], Jest.Expect.expect(checked.contents));
              }));
        TestHelpers.testFn("find", Curry._1(Rebase.$$Option.find, (function (x) {
                    return x % 2 === 0;
                  })), {
              hd: [
                undefined,
                undefined
              ],
              tl: {
                hd: [
                  1,
                  undefined
                ],
                tl: {
                  hd: [
                    2,
                    2
                  ],
                  tl: /* [] */0
                }
              }
            });
        TestHelpers.testFn("forAll", Curry._1(Rebase.$$Option.forAll, (function (x) {
                    return x % 2 === 0;
                  })), {
              hd: [
                undefined,
                true
              ],
              tl: {
                hd: [
                  1,
                  false
                ],
                tl: {
                  hd: [
                    2,
                    true
                  ],
                  tl: /* [] */0
                }
              }
            });
        return TestHelpers.testFn("filter", Curry._1(Rebase.$$Option.filter, (function (x) {
                          return x % 2 === 0;
                        })), {
                    hd: [
                      undefined,
                      undefined
                    ],
                    tl: {
                      hd: [
                        1,
                        undefined
                      ],
                      tl: {
                        hd: [
                          2,
                          2
                        ],
                        tl: /* [] */0
                      }
                    }
                  });
      }));

Jest.test("some", (function (param) {
        return Jest.Expect.toEqual(42, Jest.Expect.expect(Rebase.$$Option.some(42)));
      }));

TestHelpers.testFn("fromResult", Rebase.$$Option.fromResult, {
      hd: [
        {
          TAG: /* Error */1,
          _0: ""
        },
        undefined
      ],
      tl: {
        hd: [
          {
            TAG: /* Ok */0,
            _0: 42
          },
          42
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("isSome", Rebase.$$Option.isSome, {
      hd: [
        undefined,
        false
      ],
      tl: {
        hd: [
          42,
          true
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("isNone", Rebase.$$Option.isNone, {
      hd: [
        undefined,
        true
      ],
      tl: {
        hd: [
          42,
          false
        ],
        tl: /* [] */0
      }
    });

var partial_arg = 10;

TestHelpers.testFn("or_", (function (param) {
        return Rebase.$$Option.or_(partial_arg, param);
      }), {
      hd: [
        undefined,
        10
      ],
      tl: {
        hd: [
          42,
          42
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("getOr", (function (param) {
        return Rebase.$$Option.getOr(10, param);
      }), {
      hd: [
        undefined,
        10
      ],
      tl: {
        hd: [
          42,
          42
        ],
        tl: /* [] */0
      }
    });

Jest.test("getOrRaise - None", (function (param) {
        return Jest.Expect.toThrow(Jest.Expect.expect(function (param) {
                        return Rebase.$$Option.getOrRaise(undefined);
                      }));
      }));

Jest.test("getOrRaise - Some", (function (param) {
        return Jest.Expect.toEqual(42, Jest.Expect.expect(Rebase.$$Option.getOrRaise(42)));
      }));

TestHelpers.testFn("mapOr", (function (param) {
        return Rebase.$$Option.mapOr((function (x) {
                      return x + 1 | 0;
                    }), 10, param);
      }), {
      hd: [
        undefined,
        10
      ],
      tl: {
        hd: [
          42,
          43
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("mapOrElse", (function (param) {
        return Rebase.$$Option.mapOrElse((function (x) {
                      return x + 1 | 0;
                    }), (function (param) {
                      return 10;
                    }), param);
      }), {
      hd: [
        undefined,
        10
      ],
      tl: {
        hd: [
          42,
          43
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("flatten", Rebase.$$Option.flatten, {
      hd: [
        undefined,
        undefined
      ],
      tl: {
        hd: [
          Caml_option.some(undefined),
          undefined
        ],
        tl: {
          hd: [
            42,
            42
          ],
          tl: /* [] */0
        }
      }
    });

/*  Not a pure module */
