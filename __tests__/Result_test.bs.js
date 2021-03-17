'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var Pervasives = require("bs-platform/lib/js/pervasives.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");
var Caml_js_exceptions = require("bs-platform/lib/js/caml_js_exceptions.js");

Jest.describe("Mappable.S1_5", (function (param) {
        return TestHelpers.testFn("map", Curry._1(Rebase.Result.map, (function (x) {
                          return x + 1 | 0;
                        })), {
                    hd: [
                      {
                        TAG: /* Error */1,
                        _0: "err"
                      },
                      {
                        TAG: /* Error */1,
                        _0: "err"
                      }
                    ],
                    tl: {
                      hd: [
                        {
                          TAG: /* Ok */0,
                          _0: 42
                        },
                        {
                          TAG: /* Ok */0,
                          _0: 43
                        }
                      ],
                      tl: /* [] */0
                    }
                  });
      }));

Jest.describe("Mappable.S2", (function (param) {
        return TestHelpers.testFn("map2", Curry._2(Rebase.Result.map2, (function (x) {
                          return x + 1 | 0;
                        }), (function (e) {
                          return e + "or";
                        })), {
                    hd: [
                      {
                        TAG: /* Error */1,
                        _0: "err"
                      },
                      {
                        TAG: /* Error */1,
                        _0: "error"
                      }
                    ],
                    tl: {
                      hd: [
                        {
                          TAG: /* Ok */0,
                          _0: 42
                        },
                        {
                          TAG: /* Ok */0,
                          _0: 43
                        }
                      ],
                      tl: /* [] */0
                    }
                  });
      }));

Jest.describe("Applicative.S1_5", (function (param) {
        TestHelpers.testFn("apply", Curry._1(Rebase.Fn.uncurry, Rebase.Result.apply), {
              hd: [
                [
                  {
                    TAG: /* Error */1,
                    _0: "err"
                  },
                  {
                    TAG: /* Error */1,
                    _0: "err"
                  }
                ],
                {
                  TAG: /* Error */1,
                  _0: "err"
                }
              ],
              tl: {
                hd: [
                  [
                    {
                      TAG: /* Ok */0,
                      _0: (function (x) {
                          return x + 1 | 0;
                        })
                    },
                    {
                      TAG: /* Error */1,
                      _0: "err"
                    }
                  ],
                  {
                    TAG: /* Error */1,
                    _0: "err"
                  }
                ],
                tl: {
                  hd: [
                    [
                      {
                        TAG: /* Error */1,
                        _0: "err"
                      },
                      {
                        TAG: /* Ok */0,
                        _0: 1
                      }
                    ],
                    {
                      TAG: /* Error */1,
                      _0: "err"
                    }
                  ],
                  tl: {
                    hd: [
                      [
                        {
                          TAG: /* Ok */0,
                          _0: (function (x) {
                              return x + 1 | 0;
                            })
                        },
                        {
                          TAG: /* Ok */0,
                          _0: 1
                        }
                      ],
                      {
                        TAG: /* Ok */0,
                        _0: 2
                      }
                    ],
                    tl: /* [] */0
                  }
                }
              }
            });
        return Jest.test("from", (function (param) {
                      return Jest.Expect.toEqual({
                                  TAG: /* Ok */0,
                                  _0: 42
                                }, Jest.Expect.expect(Curry._1(Rebase.Result.from, 42)));
                    }));
      }));

Jest.describe("Reduceable.S1_5", (function (param) {
        TestHelpers.testFn("reduce", Curry._2(Rebase.Result.reduce, (function (acc, x) {
                    return x - acc | 0;
                  }), 10), {
              hd: [
                {
                  TAG: /* Error */1,
                  _0: "err"
                },
                10
              ],
              tl: {
                hd: [
                  {
                    TAG: /* Ok */0,
                    _0: 42
                  },
                  32
                ],
                tl: /* [] */0
              }
            });
        return TestHelpers.testFn("reduceRight", Curry._2(Rebase.Result.reduceRight, (function (acc, x) {
                          return x - acc | 0;
                        }), 10), {
                    hd: [
                      {
                        TAG: /* Error */1,
                        _0: "err"
                      },
                      10
                    ],
                    tl: {
                      hd: [
                        {
                          TAG: /* Ok */0,
                          _0: 42
                        },
                        32
                      ],
                      tl: /* [] */0
                    }
                  });
      }));

Jest.describe("Monad.S1_5", (function (param) {
        return TestHelpers.testFn("flatMap", Curry._1(Rebase.Result.flatMap, (function (x) {
                          return {
                                  TAG: /* Ok */0,
                                  _0: x + 1 | 0
                                };
                        })), {
                    hd: [
                      {
                        TAG: /* Error */1,
                        _0: "err"
                      },
                      {
                        TAG: /* Error */1,
                        _0: "err"
                      }
                    ],
                    tl: {
                      hd: [
                        {
                          TAG: /* Ok */0,
                          _0: 42
                        },
                        {
                          TAG: /* Ok */0,
                          _0: 43
                        }
                      ],
                      tl: /* [] */0
                    }
                  });
      }));

Jest.describe("Iterable.S1_5", (function (param) {
        TestHelpers.testFn("exists", Curry._1(Rebase.Result.exists, (function (x) {
                    return x % 2 === 0;
                  })), {
              hd: [
                {
                  TAG: /* Error */1,
                  _0: "err"
                },
                false
              ],
              tl: {
                hd: [
                  {
                    TAG: /* Ok */0,
                    _0: 1
                  },
                  false
                ],
                tl: {
                  hd: [
                    {
                      TAG: /* Ok */0,
                      _0: 2
                    },
                    true
                  ],
                  tl: /* [] */0
                }
              }
            });
        Jest.testAll("forEach", {
              hd: [
                {
                  TAG: /* Error */1,
                  _0: "err"
                },
                0
              ],
              tl: {
                hd: [
                  {
                    TAG: /* Ok */0,
                    _0: 1
                  },
                  1
                ],
                tl: /* [] */0
              }
            }, (function (param) {
                var checked = {
                  contents: 0
                };
                Curry._2(Rebase.Result.forEach, (function (x) {
                        checked.contents = x;
                        
                      }), param[0]);
                return Jest.Expect.toEqual(param[1], Jest.Expect.expect(checked.contents));
              }));
        TestHelpers.testFn("find", Curry._1(Rebase.Result.find, (function (x) {
                    return x % 2 === 0;
                  })), {
              hd: [
                {
                  TAG: /* Error */1,
                  _0: "err"
                },
                undefined
              ],
              tl: {
                hd: [
                  {
                    TAG: /* Ok */0,
                    _0: 1
                  },
                  undefined
                ],
                tl: {
                  hd: [
                    {
                      TAG: /* Ok */0,
                      _0: 2
                    },
                    2
                  ],
                  tl: /* [] */0
                }
              }
            });
        return TestHelpers.testFn("forAll", Curry._1(Rebase.Result.forAll, (function (x) {
                          return x % 2 === 0;
                        })), {
                    hd: [
                      {
                        TAG: /* Error */1,
                        _0: "err"
                      },
                      true
                    ],
                    tl: {
                      hd: [
                        {
                          TAG: /* Ok */0,
                          _0: 1
                        },
                        false
                      ],
                      tl: {
                        hd: [
                          {
                            TAG: /* Ok */0,
                            _0: 2
                          },
                          true
                        ],
                        tl: /* [] */0
                      }
                    }
                  });
      }));

TestHelpers.testFn("isOk", Rebase.Result.isOk, {
      hd: [
        {
          TAG: /* Error */1,
          _0: "err"
        },
        false
      ],
      tl: {
        hd: [
          {
            TAG: /* Ok */0,
            _0: 42
          },
          true
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("isError", Rebase.Result.isError, {
      hd: [
        {
          TAG: /* Error */1,
          _0: "err"
        },
        true
      ],
      tl: {
        hd: [
          {
            TAG: /* Ok */0,
            _0: 42
          },
          false
        ],
        tl: /* [] */0
      }
    });

Jest.test("wrap - Ok", (function (param) {
        return Jest.Expect.toEqual({
                    TAG: /* Ok */0,
                    _0: 42
                  }, Jest.Expect.expect(Rebase.Result.wrap(function (param) {
                            return 42;
                          })));
      }));

Jest.test("wrap - Error", (function (param) {
        var expected;
        try {
          expected = {
            TAG: /* Ok */0,
            _0: Pervasives.failwith("err")
          };
        }
        catch (raw_e){
          var e = Caml_js_exceptions.internalToOCamlException(raw_e);
          expected = {
            TAG: /* Error */1,
            _0: e
          };
        }
        return Jest.Expect.toEqual(expected, Jest.Expect.expect(Rebase.Result.wrap(function (param) {
                            return Pervasives.failwith("err");
                          })));
      }));

Jest.test("wrap1 - Ok", (function (param) {
        return Jest.Expect.toEqual({
                    TAG: /* Ok */0,
                    _0: 42
                  }, Jest.Expect.expect(Rebase.Result.wrap1((function (n) {
                              return n;
                            }), 42)));
      }));

Jest.test("wrap1 - Error", (function (param) {
        var expected;
        try {
          expected = {
            TAG: /* Ok */0,
            _0: Pervasives.failwith("err")
          };
        }
        catch (raw_e){
          var e = Caml_js_exceptions.internalToOCamlException(raw_e);
          expected = {
            TAG: /* Error */1,
            _0: e
          };
        }
        return Jest.Expect.toEqual(expected, Jest.Expect.expect(Rebase.Result.wrap1((function (_n) {
                              return Pervasives.failwith("err");
                            }), 42)));
      }));

Jest.test("wrap2 - Ok", (function (param) {
        return Jest.Expect.toEqual({
                    TAG: /* Ok */0,
                    _0: 42
                  }, Jest.Expect.expect(Rebase.Result.wrap2((function (n, m) {
                              return n + m | 0;
                            }), 40, 2)));
      }));

Jest.test("wrap2 - Error", (function (param) {
        var expected;
        try {
          expected = {
            TAG: /* Ok */0,
            _0: Pervasives.failwith("err")
          };
        }
        catch (raw_e){
          var e = Caml_js_exceptions.internalToOCamlException(raw_e);
          expected = {
            TAG: /* Error */1,
            _0: e
          };
        }
        return Jest.Expect.toEqual(expected, Jest.Expect.expect(Rebase.Result.wrap2((function (_n, _m) {
                              return Pervasives.failwith("err");
                            }), 40, 2)));
      }));

var partial_arg = {
  TAG: /* Ok */0,
  _0: 10
};

TestHelpers.testFn("or_", (function (param) {
        return Rebase.Result.or_(partial_arg, param);
      }), {
      hd: [
        {
          TAG: /* Error */1,
          _0: "err"
        },
        {
          TAG: /* Ok */0,
          _0: 10
        }
      ],
      tl: {
        hd: [
          {
            TAG: /* Ok */0,
            _0: 42
          },
          {
            TAG: /* Ok */0,
            _0: 42
          }
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("getOr", (function (param) {
        return Rebase.Result.getOr(10, param);
      }), {
      hd: [
        {
          TAG: /* Error */1,
          _0: "err"
        },
        10
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

Jest.test("getOrRaise - Error", (function (param) {
        return Jest.Expect.toThrow(Jest.Expect.expect(function (param) {
                        return Rebase.Result.getOrRaise({
                                    TAG: /* Error */1,
                                    _0: "err"
                                  });
                      }));
      }));

Jest.test("getOrRaise - Ok", (function (param) {
        return Jest.Expect.toEqual(42, Jest.Expect.expect(Rebase.Result.getOrRaise({
                            TAG: /* Ok */0,
                            _0: 42
                          })));
      }));

TestHelpers.testFn("mapOr", (function (param) {
        return Rebase.Result.mapOr((function (x) {
                      return x + 1 | 0;
                    }), 10, param);
      }), {
      hd: [
        {
          TAG: /* Error */1,
          _0: "err"
        },
        10
      ],
      tl: {
        hd: [
          {
            TAG: /* Ok */0,
            _0: 42
          },
          43
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("mapOrElse", (function (param) {
        return Rebase.Result.mapOrElse((function (x) {
                      return x + 1 | 0;
                    }), (function (param) {
                      return 10;
                    }), param);
      }), {
      hd: [
        {
          TAG: /* Error */1,
          _0: "err"
        },
        10
      ],
      tl: {
        hd: [
          {
            TAG: /* Ok */0,
            _0: 42
          },
          43
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("flatten", Rebase.Result.flatten, {
      hd: [
        {
          TAG: /* Error */1,
          _0: "err"
        },
        {
          TAG: /* Error */1,
          _0: "err"
        }
      ],
      tl: {
        hd: [
          {
            TAG: /* Ok */0,
            _0: {
              TAG: /* Error */1,
              _0: "err"
            }
          },
          {
            TAG: /* Error */1,
            _0: "err"
          }
        ],
        tl: {
          hd: [
            {
              TAG: /* Ok */0,
              _0: {
                TAG: /* Ok */0,
                _0: 42
              }
            },
            {
              TAG: /* Ok */0,
              _0: 42
            }
          ],
          tl: /* [] */0
        }
      }
    });

/*  Not a pure module */
