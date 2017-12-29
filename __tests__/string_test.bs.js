'use strict';

var Jest   = require("bs-jest/src/jest.js");
var Curry  = require("bs-platform/lib/js/curry.js");
var Rebase = require("../src/rebase.bs.js");

describe("Concatenable.S0", (function () {
        return Jest.test("concat", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* concat */0]("b", "a")), "ab");
                    }));
      }));

Jest.testAll("length", /* :: */[
      /* tuple */[
        "foo",
        3
      ],
      /* :: */[
        /* tuple */[
          "m\xc3\xb8\xc3\xb8",
          5
        ],
        /* :: */[
          /* tuple */[
            "møø",
            3
          ],
          /* [] */0
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.$$String[/* length */1](param[0])), param[1]);
      }));

Jest.test("concat", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* concat */0]("b", "a")), "ab");
      }));

Jest.testAll("includes", /* :: */[
      /* tuple */[
        "nana",
        /* true */1
      ],
      /* :: */[
        /* tuple */[
          "nanas",
          /* false */0
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* includes */2](param[0], "banana")), param[1]);
      }));

Jest.testAll("startsWith", /* :: */[
      /* tuple */[
        "ba",
        /* true */1
      ],
      /* :: */[
        /* tuple */[
          "na",
          /* false */0
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* startsWith */3](param[0], "banana")), param[1]);
      }));

Jest.testAll("endsWith", /* :: */[
      /* tuple */[
        "ba",
        /* false */0
      ],
      /* :: */[
        /* tuple */[
          "na",
          /* true */1
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* endsWith */4](param[0], "banana")), param[1]);
      }));

Jest.testAll("isEmpty", /* :: */[
      /* tuple */[
        "",
        /* true */1
      ],
      /* :: */[
        /* tuple */[
          "foo",
          /* false */0
        ],
        /* :: */[
          /* tuple */[
            "\t",
            /* true */1
          ],
          /* :: */[
            /* tuple */[
              "\n",
              /* true */1
            ],
            /* :: */[
              /* tuple */[
                "\r",
                /* true */1
              ],
              /* :: */[
                /* tuple */[
                  " ",
                  /* true */1
                ],
                /* :: */[
                  /* tuple */[
                    "\t\r\n ",
                    /* true */1
                  ],
                  /* [] */0
                ]
              ]
            ]
          ]
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* isEmpty */5](param[0])), param[1]);
      }));

Jest.testAll("padStart", /* :: */[
      /* tuple */[
        6,
        "na",
        "banana"
      ],
      /* :: */[
        /* tuple */[
          9,
          "na",
          "nanbanana"
        ],
        /* :: */[
          /* tuple */[
            10,
            "na",
            "nanabanana"
          ],
          /* :: */[
            /* tuple */[
              -10,
              "na",
              "banana"
            ],
            /* [] */0
          ]
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* padStart */6](param[0], param[1], "banana")), param[2]);
      }));

Jest.testAll("padEnd", /* :: */[
      /* tuple */[
        6,
        "na",
        "banana"
      ],
      /* :: */[
        /* tuple */[
          9,
          "na",
          "banananan"
        ],
        /* :: */[
          /* tuple */[
            10,
            "na",
            "banananana"
          ],
          /* :: */[
            /* tuple */[
              -10,
              "na",
              "banana"
            ],
            /* [] */0
          ]
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* padEnd */7](param[0], param[1], "banana")), param[2]);
      }));

Jest.testAll("trim", /* :: */[
      /* tuple */[
        "  a",
        "a"
      ],
      /* :: */[
        /* tuple */[
          "a  ",
          "a"
        ],
        /* :: */[
          /* tuple */[
            "  a  ",
            "a"
          ],
          /* :: */[
            /* tuple */[
              "\t a \t ",
              "a"
            ],
            /* :: */[
              /* tuple */[
                "\n a \r ",
                "a"
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* trim */8](param[0])), param[1]);
      }));

Jest.testAll("sum", /* :: */[
      /* tuple */[
        0,
        0,
        ""
      ],
      /* :: */[
        /* tuple */[
          1,
          0,
          ""
        ],
        /* :: */[
          /* tuple */[
            0,
            1,
            "b"
          ],
          /* :: */[
            /* tuple */[
              2,
              2,
              "na"
            ],
            /* :: */[
              /* tuple */[
                3,
                4,
                "ana"
              ],
              /* :: */[
                /* tuple */[
                  3,
                  8,
                  "ana"
                ],
                /* :: */[
                  /* tuple */[
                    7,
                    1,
                    ""
                  ],
                  /* :: */[
                    /* tuple */[
                      0,
                      -1,
                      ""
                    ],
                    /* :: */[
                      /* tuple */[
                        -1,
                        -1,
                        ""
                      ],
                      /* :: */[
                        /* tuple */[
                          -1,
                          1,
                          "a"
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
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* sub */9](param[0], param[1], "banana")), param[2]);
      }));

/*  Not a pure module */
