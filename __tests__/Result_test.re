open Jest;
open Expect;
open Rebase;
open TestHelpers;


describe("Mappable.S1_5", () => {
  module M: Signatures.Mappable.S1_5 with type t('a, 'e) := result('a, 'e) = Result;

  testFn("map", 
    M.map(x => x + 1), [
      (Error("err"), Error("err")),
      (Ok(42), Ok(43)),
    ]
  );
});


describe("Mappable.S2", () => {
  module M: Signatures.Mappable.S2 with type t('a, 'e) := result('a, 'e) = Result;

  testFn("map2", 
    M.map2(x => x + 1, e => e ++ "or"), [
      (Error("err"), Error("error")),
      (Ok(42), Ok(43)),
    ]
  );
});


describe("Applicative.S1_5", () => {
  module M: Signatures.Applicative.S1_5 with type t('a, 'e) := result('a, 'e) = Result;

  testFn("apply", 
    M.apply |> Fn.uncurry, [
      ((Error("err"), Error("err")), Error("err")),
      ((Ok(x => x + 1), Error("err")), Error("err")),
      ((Error("err"), Ok(1)), Error("err")),
      ((Ok(x => x + 1), Ok(1)), Ok(2)),
    ]
  );

  test("from", () =>
    expect(
      M.from(42))
      |> toEqual(Ok(42))
  );
});


describe("Reduceable.S1_5", () => {
  module M: Signatures.Reduceable.S1_5 with type t('a, 'e) := result('a, 'e) = Result;

  testFn("reduce", 
    M.reduce((acc, x) => x - acc, 10), [
      (Error("err"), 10),
      (Ok(42), 32),
    ]
  );

  testFn("reduceRight", 
    M.reduceRight((acc, x) => x - acc, 10), [
      (Error("err"), 10),
      (Ok(42), 32),
    ]
  );
});


describe("Monad.S1_5", () => {
  module M: Signatures.Monad.S1_5 with type t('a, 'e) := result('a, 'e) = Result;

  testFn("flatMap", 
    M.flatMap(x => Ok(x + 1)), [
      (Error("err"), Error("err")),
      (Ok(42), Ok(43)),
    ]
  );
});


describe("Iterable.S1_5", () => {
  module M: Signatures.Iterable.S1_5 with type t('a, 'e) := result('a, 'e) = Result;

  /*
  testFn("filter", 
    M.filter(x => x mod 2 === 0), [
      (Error("err"), Error("err")),
      (Ok(1), Error("err")),
      (Ok(2), Ok(2)),
    ]
  );
  */
  testFn("exists", 
    M.exists(x => x mod 2 === 0), [
      (Error("err"), false),
      (Ok(1), false), 
      (Ok(2), true)
    ]
  );

  testAll("forEach", [
      (Error("err"), 0),
      (Ok(1), 1),
    ], ((input, expected)) => {
    let checked = ref(0);
    M.forEach(x => checked := x, input);

    expect(checked^) |> toEqual(expected)
  });

  testFn("find", 
    M.find(x => x mod 2 === 0), [
      (Error("err"), None),
      (Ok(1), None),
      (Ok(2), Some(2))
    ]
  );

  testFn("forAll",
    M.forAll(x => x mod 2 === 0), [
      (Error("err"), true),
      (Ok(1), false),
      (Ok(2), true),
    ]
  );
});


testFn("isOk", 
  Result.isOk, [
    (Error("err"), false),
    (Ok(42), true),
  ]
);

testFn("isError",
  Result.isError, [
    (Error("err"), true),
    (Ok(42), false),
  ]
);

test("wrap - Ok", () =>
  expect(
    Result.wrap(() => 42))
    |> toEqual(Ok(42))
);

test("wrap - Error", () =>
  expect(
    Result.wrap(() => failwith("err")))
    |> toEqual(Error(Failure("err")))
);

test("wrap1 - Ok", () =>
  expect(
    Result.wrap1(n => n, 42))
    |> toEqual(Ok(42))
);

test("wrap1 - Error", () =>
  expect(
    Result.wrap1(_n => failwith("err"), 42))
    |> toEqual(Error(Failure("err")))
);

test("wrap2 - Ok", () =>
  expect(
    Result.wrap2((n, m) => n + m, 40, 2))
    |> toEqual(Ok(42))
);

test("wrap2 - Error", () =>
  expect(
    Result.wrap2((_n, _m) => failwith("err"), 40, 2))
    |> toEqual(Error(Failure("err")))
);

testFn("or_", 
  Result.or_(Ok(10)), [
    (Error("err"), Ok(10)),
    (Ok(42), Ok(42)),
  ]
);

testFn("getOr", 
  Result.getOr(10), [
    (Error("err"), 10),
    (Ok(42), 42),
  ]
);

test("getOrRaise - Error", () =>
  expect(
    () => Result.getOrRaise(Error("err")))
    |> toThrowException(InvalidArgument("getOrRaise called on Error")));

test("getOrRaise - Ok", () =>
  expect(
    Result.getOrRaise(Ok(42))) 
    |> toEqual(42)
);

testFn("mapOr", 
  Result.mapOr(x => x + 1, 10), [
    (Error("err"), 10),
    (Ok(42), 43),
  ]
);

testFn("mapOrElse",
  Result.mapOrElse(x => x + 1, () => 10), [
    (Error("err"), 10),
    (Ok(42), 43),
  ]
);

testFn("flatten",
  Result.flatten, [
    (Error("err"), Error("err")),
    (Ok(Error("err")), Error("err")),
    (Ok(Ok(42)), Ok(42)),
  ]
);