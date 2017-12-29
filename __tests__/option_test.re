open Jest;
open Expect;
open! Expect.Operators;
open Rebase;

test("from", () =>
  expect(Option.from(42)) == Some(42));

test("some", () =>
  expect(Option.some(42)) == Some(42));

testAll("filter", [
    (None, None),
    (Some(1), None),
    (Some(2), Some(2)),
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Option.filter(x => x mod 2 === 0, input)) == expected
});

testAll("exists", [
    (None, false),
    (Some(1), false), 
    (Some(2), true)
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Option.exists(x => x mod 2 === 0, input)) == expected
});

testAll("forEach", [
    (None, 0),
    (Some(1), 1),
  ], ((input, expected)) => {
  let checked = ref(0);
  Option.forEach(x => checked := x, input);
  expect(checked^) == expected
});

testAll("find", [
    (None, None),
    (Some(1), None),
    (Some(2), Some(2))
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Option.find(x => x mod 2 === 0, input)) == expected
});

testAll("forAll", [
    (None, true),
    (Some(1), false),
    (Some(2), true),
  ], ((input, expected)) => {
    let (===) = Pervasives.(===);
    expect(Option.forAll(x => x mod 2 === 0, input)) == expected
  });

testAll("flatMap", [
    (None, None),
    (Some(42), Some(43)),
  ], ((input, expected)) => expect(Option.flatMap(x => Some(x + 1), input)) == expected);

testAll("map", [
    (None, None),
    (Some(42), Some(43)),
  ], ((input, expected)) => expect(Option.map(x => x + 1, input)) == expected);

testAll("apply", [
    (None, None, None),
    (Some(x => x + 1), None, None),
    (None, Some(1), None),
    (Some(x => x + 1), Some(1), Some(2)),
  ], ((fs, xs, expected)) => expect(Option.apply(fs, xs)) == expected);

testAll("reduce", [
    (None, 10),
    (Some(42), 32),
  ], ((input, expected)) => expect(Option.reduce((acc, x) => x - acc, 10, input)) == expected);

testAll("reduceRight", [
    (None, 10),
    (Some(42), 32),
  ], ((input, expected)) => expect(Option.reduceRight((acc, x) => x - acc, 10, input)) == expected);

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

/*
testAll("fromResult", [
    (Result.Error(""), None),
    (Result.Ok(42), Some(42)),
  ], ((input, expected)) => expect(Option.fromResult(input)) == expected);
*/

testAll("flatten", [
    (None, None),
    (Some(None), None),
    (Some(Some(42)), Some(42)),
  ], ((input, expected)) => expect(Option.flatten(input)) == expected);