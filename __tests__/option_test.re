open Jest;
open Expect;
open! Expect.Operators;
open Rebase;


describe("Mappable.S", () => {
  module M: Signatures.Mappable.S with type t('a) := option('a) = Option;

  testAll("map", [
      (None, None),
      (Some(42), Some(43)),
    ], ((input, expected)) => expect(M.map(x => x + 1, input)) == expected);
});


describe("Applicative.S", () => {
  module M: Signatures.Applicative.S with type t('a) := option('a) = Option;

  testAll("apply", [
      (None, None, None),
      (Some(x => x + 1), None, None),
      (None, Some(1), None),
      (Some(x => x + 1), Some(1), Some(2)),
    ], ((fs, xs, expected)) => expect(M.apply(fs, xs)) == expected);

  test("from", () =>
    expect(M.from(42)) == Some(42));
});


describe("Reduceable.S", () => {
  module M: Signatures.Reduceable.S with type t('a) := option('a) = Option;

  testAll("reduce", [
      (None, 10),
      (Some(42), 32),
    ], ((input, expected)) => expect(M.reduce((acc, x) => x - acc, 10, input)) == expected);

  testAll("reduceRight", [
      (None, 10),
      (Some(42), 32),
    ], ((input, expected)) => expect(M.reduceRight((acc, x) => x - acc, 10, input)) == expected);
});


describe("Monad.S", () => {
  module M: Signatures.Monad.S with type t('a) := option('a) = Option;

  testAll("flatMap", [
      (None, None),
      (Some(42), Some(43)),
    ], ((input, expected)) => expect(M.flatMap(x => Some(x + 1), input)) == expected);
});


describe("Iterable.S", () => {
  module M: Signatures.Iterable.S with type t('a) := option('a) = Option;

  testAll("exists", [
      (None, false),
      (Some(1), false), 
      (Some(2), true)
    ], ((input, expected)) => {
    let (===) = Pervasives.(===);
    expect(M.exists(x => x mod 2 === 0, input)) == expected
  });

  testAll("forEach", [
      (None, 0),
      (Some(1), 1),
    ], ((input, expected)) => {
    let checked = ref(0);
    M.forEach(x => checked := x, input);
    expect(checked^) == expected
  });

  testAll("find", [
      (None, None),
      (Some(1), None),
      (Some(2), Some(2))
    ], ((input, expected)) => {
    let (===) = Pervasives.(===);
    expect(M.find(x => x mod 2 === 0, input)) == expected
  });

  testAll("forAll", [
      (None, true),
      (Some(1), false),
      (Some(2), true),
    ], ((input, expected)) => {
      let (===) = Pervasives.(===);
      expect(M.forAll(x => x mod 2 === 0, input)) == expected
    });

  testAll("filter", [
      (None, None),
      (Some(1), None),
      (Some(2), Some(2)),
    ], ((input, expected)) => {
    let (===) = Pervasives.(===);
    expect(M.filter(x => x mod 2 === 0, input)) == expected
  });
});


test("some", () =>
  expect(Option.some(42)) == Some(42));

testAll("fromResult", [
    (Error(""), None),
    (Ok(42), Some(42)),
  ], ((input, expected)) => expect(Option.fromResult(input)) == expected);

testAll("isSome", [
    (None, false),
    (Some(42), true),
  ], ((input, expected)) => expect(Option.isSome(input)) == expected);

testAll("isNone", [
    (None, true),
    (Some(42), false),
  ], ((input, expected)) => expect(Option.isNone(input)) == expected);

testAll("or_", [
    (None, Some(10)),
    (Some(42), Some(42)),
  ], ((input, expected)) => expect(Option.or_(Some(10), input)) == expected);

testAll("getOr", [
    (None, 10),
    (Some(42), 42),
  ], ((input, expected)) => expect(Option.getOr(10, input)) == expected);

test("getOrRaise - None", () =>
  expect(() => Option.getOrRaise(None)) |> toThrowException(InvalidArgument("getOrRaise called on None")));

test("getOrRaise - Some", () =>
  expect(Option.getOrRaise(Some(42))) == 42);

testAll("mapOr", [
    (None, 10),
    (Some(42), 43),
  ], ((input, expected)) => expect(Option.mapOr(x => x + 1, 10, input)) == expected);

testAll("mapOrElse", [
    (None, 10),
    (Some(42), 43),
  ], ((input, expected)) => expect(Option.mapOrElse(x => x + 1, () => 10, input)) == expected);

testAll("flatten", [
    (None, None),
    (Some(None), None),
    (Some(Some(42)), Some(42)),
  ], ((input, expected)) => expect(Option.flatten(input)) == expected);