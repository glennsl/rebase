'use strict';

var Jest = require("@glennsl/bs-jest/src/jest.bs.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/Rebase.bs.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

Jest.describe("Concatenable.S0", (function (param) {
        return Jest.test("concat", (function (param) {
                      return Curry._2(Jest.Expect.Operators.$eq$eq, Jest.Expect.expect(Rebase.$$String.concat("b", "a")), "ab");
                    }));
      }));

TestHelpers.testFn("length", Rebase.$$String.length, {
      hd: [
        "foo",
        3
      ],
      tl: {
        hd: [
          "m\xc3\xb8\xc3\xb8",
          5
        ],
        tl: {
          hd: [
            "møø",
            3
          ],
          tl: /* [] */0
        }
      }
    });

TestHelpers.testFn("includes", (function (s) {
        return Rebase.$$String.includes(s, "banana");
      }), {
      hd: [
        "nana",
        true
      ],
      tl: {
        hd: [
          "nanas",
          false
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("startsWith", (function (s) {
        return Rebase.$$String.startsWith(s, "banana");
      }), {
      hd: [
        "ba",
        true
      ],
      tl: {
        hd: [
          "na",
          false
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("endsWith", (function (s) {
        return Rebase.$$String.endsWith(s, "banana");
      }), {
      hd: [
        "ba",
        false
      ],
      tl: {
        hd: [
          "na",
          true
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("isEmpty", Rebase.$$String.isEmpty, {
      hd: [
        "",
        true
      ],
      tl: {
        hd: [
          "foo",
          false
        ],
        tl: {
          hd: [
            "\t",
            true
          ],
          tl: {
            hd: [
              "\n",
              true
            ],
            tl: {
              hd: [
                "\r",
                true
              ],
              tl: {
                hd: [
                  " ",
                  true
                ],
                tl: {
                  hd: [
                    "\t\r\n ",
                    true
                  ],
                  tl: /* [] */0
                }
              }
            }
          }
        }
      }
    });

TestHelpers.testFn("padStart", (function (param) {
        return Rebase.$$String.padStart(param[0], param[1], "banana");
      }), {
      hd: [
        [
          6,
          "na"
        ],
        "banana"
      ],
      tl: {
        hd: [
          [
            9,
            "na"
          ],
          "nanbanana"
        ],
        tl: {
          hd: [
            [
              10,
              "na"
            ],
            "nanabanana"
          ],
          tl: {
            hd: [
              [
                -10,
                "na"
              ],
              "banana"
            ],
            tl: /* [] */0
          }
        }
      }
    });

TestHelpers.testFn("padEnd", (function (param) {
        return Rebase.$$String.padEnd(param[0], param[1], "banana");
      }), {
      hd: [
        [
          6,
          "na"
        ],
        "banana"
      ],
      tl: {
        hd: [
          [
            9,
            "na"
          ],
          "banananan"
        ],
        tl: {
          hd: [
            [
              10,
              "na"
            ],
            "banananana"
          ],
          tl: {
            hd: [
              [
                -10,
                "na"
              ],
              "banana"
            ],
            tl: /* [] */0
          }
        }
      }
    });

TestHelpers.testFn("trim", Rebase.$$String.trim, {
      hd: [
        "  a",
        "a"
      ],
      tl: {
        hd: [
          "a  ",
          "a"
        ],
        tl: {
          hd: [
            "  a  ",
            "a"
          ],
          tl: {
            hd: [
              "\t a \t ",
              "a"
            ],
            tl: {
              hd: [
                "\n a \r ",
                "a"
              ],
              tl: /* [] */0
            }
          }
        }
      }
    });

TestHelpers.testFn("sum", (function (param) {
        return Rebase.$$String.sub(param[0], param[1], "banana");
      }), {
      hd: [
        [
          0,
          0
        ],
        ""
      ],
      tl: {
        hd: [
          [
            1,
            0
          ],
          ""
        ],
        tl: {
          hd: [
            [
              0,
              1
            ],
            "b"
          ],
          tl: {
            hd: [
              [
                2,
                2
              ],
              "na"
            ],
            tl: {
              hd: [
                [
                  3,
                  4
                ],
                "ana"
              ],
              tl: {
                hd: [
                  [
                    3,
                    8
                  ],
                  "ana"
                ],
                tl: {
                  hd: [
                    [
                      7,
                      1
                    ],
                    ""
                  ],
                  tl: {
                    hd: [
                      [
                        0,
                        -1
                      ],
                      ""
                    ],
                    tl: {
                      hd: [
                        [
                          -1,
                          -1
                        ],
                        ""
                      ],
                      tl: {
                        hd: [
                          [
                            -1,
                            1
                          ],
                          "a"
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
    });

TestHelpers.testFn("join", Rebase.$$String.join, {
      hd: [
        /* [] */0,
        ""
      ],
      tl: {
        hd: [
          {
            hd: "a",
            tl: {
              hd: "b",
              tl: {
                hd: "c",
                tl: /* [] */0
              }
            }
          },
          "abc"
        ],
        tl: /* [] */0
      }
    });

TestHelpers.testFn("joinWith", (function (param) {
        return Rebase.$$String.joinWith(", ", param);
      }), {
      hd: [
        /* [] */0,
        ""
      ],
      tl: {
        hd: [
          {
            hd: "a",
            tl: {
              hd: "b",
              tl: {
                hd: "c",
                tl: /* [] */0
              }
            }
          },
          "a, b, c"
        ],
        tl: /* [] */0
      }
    });

/*  Not a pure module */
