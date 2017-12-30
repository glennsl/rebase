'use strict';

var Jest        = require("bs-jest/src/jest.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var Rebase      = require("../src/rebase.bs.js");
var TestHelpers = require("./helpers/TestHelpers.bs.js");

describe("Concatenable.S0", (function () {
        return Jest.test("concat", (function () {
                      return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.$$String[/* concat */0]("b", "a")), "ab");
                    }));
      }));

TestHelpers.testFn("length", Rebase.$$String[/* length */1], /* :: */[
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
    ]);

TestHelpers.testFn("includes", (function (s) {
        return Rebase.$$String[/* includes */2](s, "banana");
      }), /* :: */[
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
    ]);

TestHelpers.testFn("startsWith", (function (s) {
        return Rebase.$$String[/* startsWith */3](s, "banana");
      }), /* :: */[
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
    ]);

TestHelpers.testFn("endsWith", (function (s) {
        return Rebase.$$String[/* endsWith */4](s, "banana");
      }), /* :: */[
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
    ]);

TestHelpers.testFn("isEmpty", Rebase.$$String[/* isEmpty */5], /* :: */[
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
    ]);

TestHelpers.testFn("padStart", (function (param) {
        return Rebase.$$String[/* padStart */6](param[0], param[1], "banana");
      }), /* :: */[
      /* tuple */[
        /* tuple */[
          6,
          "na"
        ],
        "banana"
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            9,
            "na"
          ],
          "nanbanana"
        ],
        /* :: */[
          /* tuple */[
            /* tuple */[
              10,
              "na"
            ],
            "nanabanana"
          ],
          /* :: */[
            /* tuple */[
              /* tuple */[
                -10,
                "na"
              ],
              "banana"
            ],
            /* [] */0
          ]
        ]
      ]
    ]);

TestHelpers.testFn("padEnd", (function (param) {
        return Rebase.$$String[/* padEnd */7](param[0], param[1], "banana");
      }), /* :: */[
      /* tuple */[
        /* tuple */[
          6,
          "na"
        ],
        "banana"
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            9,
            "na"
          ],
          "banananan"
        ],
        /* :: */[
          /* tuple */[
            /* tuple */[
              10,
              "na"
            ],
            "banananana"
          ],
          /* :: */[
            /* tuple */[
              /* tuple */[
                -10,
                "na"
              ],
              "banana"
            ],
            /* [] */0
          ]
        ]
      ]
    ]);

TestHelpers.testFn("trim", Rebase.$$String[/* trim */8], /* :: */[
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
    ]);

TestHelpers.testFn("sum", (function (param) {
        return Rebase.$$String[/* sub */9](param[0], param[1], "banana");
      }), /* :: */[
      /* tuple */[
        /* tuple */[
          0,
          0
        ],
        ""
      ],
      /* :: */[
        /* tuple */[
          /* tuple */[
            1,
            0
          ],
          ""
        ],
        /* :: */[
          /* tuple */[
            /* tuple */[
              0,
              1
            ],
            "b"
          ],
          /* :: */[
            /* tuple */[
              /* tuple */[
                2,
                2
              ],
              "na"
            ],
            /* :: */[
              /* tuple */[
                /* tuple */[
                  3,
                  4
                ],
                "ana"
              ],
              /* :: */[
                /* tuple */[
                  /* tuple */[
                    3,
                    8
                  ],
                  "ana"
                ],
                /* :: */[
                  /* tuple */[
                    /* tuple */[
                      7,
                      1
                    ],
                    ""
                  ],
                  /* :: */[
                    /* tuple */[
                      /* tuple */[
                        0,
                        -1
                      ],
                      ""
                    ],
                    /* :: */[
                      /* tuple */[
                        /* tuple */[
                          -1,
                          -1
                        ],
                        ""
                      ],
                      /* :: */[
                        /* tuple */[
                          /* tuple */[
                            -1,
                            1
                          ],
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
    ]);

TestHelpers.testFn("join", Rebase.$$String[/* join */10], /* :: */[
      /* tuple */[
        /* [] */0,
        ""
      ],
      /* :: */[
        /* tuple */[
          /* :: */[
            "a",
            /* :: */[
              "b",
              /* :: */[
                "c",
                /* [] */0
              ]
            ]
          ],
          "abc"
        ],
        /* [] */0
      ]
    ]);

var partial_arg = Rebase.$$String[/* joinWith */11];

TestHelpers.testFn("joinWith", (function (param) {
        return partial_arg(", ", param);
      }), /* :: */[
      /* tuple */[
        /* [] */0,
        ""
      ],
      /* :: */[
        /* tuple */[
          /* :: */[
            "a",
            /* :: */[
              "b",
              /* :: */[
                "c",
                /* [] */0
              ]
            ]
          ],
          "a, b, c"
        ],
        /* [] */0
      ]
    ]);

/*  Not a pure module */
