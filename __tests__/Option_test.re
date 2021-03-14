open Jest;
open Expect;
open Rebase;
open TestHelpers;


describe("Mappable.S", () => {
  module M: Signatures.Mappable.S with type t('a) := option('a) = Option;

  testFn("map", 
    M.map(x => x + 1), [
      (None, None),
      (Some(42), Some(43)),
    ]
  );
});


describe("Applicative.S", () => {
  module M: Signatures.Applicative.S with type t('a) := option('a) = Option;

  testFn("apply", 
    M.apply |> Fn.uncurry, [
      ((None, None), None),
      ((Some(x => x + 1), None), None),
      ((None, Some(1)), None),
      ((Some(x => x + 1), Some(1)), Some(2)),
    ]
  );

  test("from", () =>
    expect(
      M.from(42))
      |> toEqual(Some(42))
  );
});


describe("Reduceable.S", () => {
  module M: Signatures.Reduceable.S with type t('a) := option('a) = Option;

  testFn("reduce", 
    M.reduce((acc, x) => x - acc, 10), [
      (None, 10),
      (Some(42), 32),
    ]
  );

  testFn("reduceRight", 
    M.reduceRight((acc, x) => x - acc, 10), [
      (None, 10),
      (Some(42), 32),
    ]
  );
});


describe("Monad.S", () => {
  module M: Signatures.Monad.S with type t('a) := option('a) = Option;

  testFn("flatMap", 
    M.flatMap(x => Some(x + 1)), [
      (None, None),
      (Some(42), Some(43)),
    ]
  );
});


describe("Iterable.S", () => {
  module M: Signatures.Iterable.S with type t('a) := option('a) = Option;

  testFn("exists", 
    M.exists(x => x mod 2 === 0), [
      (None, false),
      (Some(1), false), 
      (Some(2), true)
    ]
  );

  testAll("forEach", [
      (None, 0),
      (Some(1), 1),
    ], ((input, expected)) => {
    let checked = ref(0);
    M.forEach(x => checked := x, input);

    expect(checked^) |> toEqual(expected)
  });

  testFn("find", 
    M.find(x => x mod 2 === 0), [
      (None, None),
      (Some(1), None),
      (Some(2), Some(2))
    ]
  );

  testFn("forAll", 
    M.forAll(x => x mod 2 === 0), [
      (None, true),
      (Some(1), false),
      (Some(2), true),
    ]
  );

  testFn("filter", 
    M.filter(x => x mod 2 === 0), [
      (None, None),
      (Some(1), None),
      (Some(2), Some(2)),
    ]
  );
});


test("some", () =>
  expect(
    Option.some(42))
    |> toEqual(Some(42))
);

testFn("fromResult", 
  Option.fromResult, [
    (Error(""), None),
    (Ok(42), Some(42)),
  ]
);

testFn("isSome", 
  Option.isSome, [
    (None, false),
    (Some(42), true),
  ]
);

testFn("isNone",
  Option.isNone, [
    (None, true),
    (Some(42), false),
  ]
);

testFn("or_", 
  Option.or_(Some(10)), [
    (None, Some(10)),
    (Some(42), Some(42)),
  ]
);

testFn("getOr", 
  Option.getOr(10), [
    (None, 10),
    (Some(42), 42),
  ]
);

test("getOrRaise - None", () =>
  expect(
    () => Option.getOrRaise(None))
    |> toThrow);

test("getOrRaise - Some", () =>
  expect(
    Option.getOrRaise(Some(42)))
    |> toEqual(42)
);

testFn("mapOr", 
  Option.mapOr(x => x + 1, 10), [
    (None, 10),
    (Some(42), 43),
  ]
);

testFn("mapOrElse", 
  Option.mapOrElse(x => x + 1, () => 10), [
    (None, 10),
    (Some(42), 43),
  ]
);

testFn("flatten", 
  Option.flatten, [
    (None, None),
    (Some(None), None),
    (Some(Some(42)), Some(42)),
  ]
);
