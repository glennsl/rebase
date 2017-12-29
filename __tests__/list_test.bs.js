'use strict';

var Jest       = require("bs-jest/src/jest.js");
var Curry      = require("bs-platform/lib/js/curry.js");
var Rebase     = require("../src/rebase.bs.js");
var Caml_int32 = require("bs-platform/lib/js/caml_int32.js");

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
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (xs) {
                                            return /* :: */[
                                                    0,
                                                    xs
                                                  ];
                                          }), /* :: */[
                                          /* :: */[
                                            1,
                                            /* [] */0
                                          ],
                                          /* :: */[
                                            /* :: */[
                                              2,
                                              /* :: */[
                                                3,
                                                /* [] */0
                                              ]
                                            ],
                                            /* [] */0
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
                                          3,
                                          /* [] */0
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
                                      return +(x % 2 === 0);
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
                /* :: */[
                  1,
                  /* :: */[
                    3,
                    /* [] */0
                  ]
                ],
                /* false */0
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
                  /* true */1
                ],
                /* [] */0
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_003, (function (x) {
                                      return +(x % 2 === 0);
                                    }), param[0])), param[1]);
              }));
        Jest.test("forEach", (function () {
                var checked = [/* [] */0];
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
                /* :: */[
                  1,
                  /* :: */[
                    3,
                    /* [] */0
                  ]
                ],
                /* None */0
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
                  /* Some */[2]
                ],
                /* [] */0
              ]
            ], (function (param) {
                return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_001, (function (x) {
                                      return +(x % 2 === 0);
                                    }), param[0])), param[1]);
              }));
        return Jest.testAll("forAll", /* :: */[
                    /* tuple */[
                      /* :: */[
                        2,
                        /* :: */[
                          4,
                          /* [] */0
                        ]
                      ],
                      /* true */1
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
                        /* false */0
                      ],
                      /* [] */0
                    ]
                  ], (function (param) {
                      return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Curry._2(M_000, (function (x) {
                                            return +(x % 2 === 0);
                                          }), param[0])), param[1]);
                    }));
      }));

Jest.testAll("head", /* :: */[
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
        /* Some */[1]
      ],
      /* :: */[
        /* tuple */[
          /* [] */0,
          /* None */0
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.List[/* head */11](param[0])), param[1]);
      }));

Jest.testAll("tail", /* :: */[
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
        /* Some */[/* :: */[
            2,
            /* :: */[
              3,
              /* [] */0
            ]
          ]]
      ],
      /* :: */[
        /* tuple */[
          /* [] */0,
          /* None */0
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.List[/* tail */12](param[0])), param[1]);
      }));

Jest.test("reverse", (function () {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.List[/* reverse */14](/* :: */[
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
        return Curry._2(Jest.Expect[/* Operators */24][/* == */0], Jest.Expect[/* expect */0](Rebase.List[/* length */13](/* :: */[
                            41,
                            /* :: */[
                              62,
                              /* [] */0
                            ]
                          ])), 2);
      }));

Jest.testAll("zip", /* :: */[
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
              /* :: */[
                1,
                /* :: */[
                  2,
                  /* [] */0
                ]
              ],
              /* [] */0,
              /* [] */0
            ],
            /* :: */[
              /* tuple */[
                /* [] */0,
                /* :: */[
                  11,
                  /* :: */[
                    12,
                    /* [] */0
                  ]
                ],
                /* [] */0
              ],
              /* [] */0
            ]
          ]
        ]
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.List[/* zip */15](param[0], param[1])), param[2]);
      }));

Jest.testAll("toArray", /* :: */[
      /* tuple */[
        /* :: */[
          1,
          /* :: */[
            2,
            /* [] */0
          ]
        ],
        /* int array */[
          1,
          2
        ]
      ],
      /* :: */[
        /* tuple */[
          /* [] */0,
          /* int array */[]
        ],
        /* [] */0
      ]
    ], (function (param) {
        return Curry._2(Jest.Expect[/* Operators */24][/* = */5], Jest.Expect[/* expect */0](Rebase.List[/* toArray */16](param[0])), param[1]);
      }));

/*  Not a pure module */
