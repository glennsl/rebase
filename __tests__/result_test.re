open Jest;
open Expect;
open! Expect.Operators;
open Rebase__result__type;
open Rebase;

test("from", () =>
  expect(Result.from(42)) == Ok(42));
/*
testAll("filter", [
    (Error("err"), Error("err")),
    (Ok(1), Error("err")),
    (Ok(2), Ok(2)),
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Result.filter(x => x mod 2 === 0, input)) == expected
});
*/
testAll("exists", [
    (Error("err"), false),
    (Ok(1), false), 
    (Ok(2), true)
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Result.exists(x => x mod 2 === 0, input)) == expected
});

testAll("forEach", [
    (Error("err"), 0),
    (Ok(1), 1),
  ], ((input, expected)) => {
  let checked = ref(0);
  Result.forEach(x => checked := x, input);
  expect(checked^) == expected
});

testAll("find", [
    (Error("err"), None),
    (Ok(1), None),
    (Ok(2), Some(2))
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Result.find(x => x mod 2 === 0, input)) == expected
});

testAll("forAll", [
    (Error("err"), true),
    (Ok(1), false),
    (Ok(2), true),
  ], ((input, expected)) => {
    let (===) = Pervasives.(===);
    expect(Result.forAll(x => x mod 2 === 0, input)) == expected
  });

testAll("flatMap", [
    (Error("err"), Error("err")),
    (Ok(42), Ok(43)),
  ], ((input, expected)) => expect(Result.flatMap(x => Ok(x + 1), input)) == expected);

testAll("map", [
    (Error("err"), Error("err")),
    (Ok(42), Ok(43)),
  ], ((input, expected)) => expect(Result.map(x => x + 1, input)) == expected);

testAll("apply", [
    (Error("err"), Error("err"), Error("err")),
    (Ok(x => x + 1), Error("err"), Error("err")),
    (Error("err"), Ok(1), Error("err")),
    (Ok(x => x + 1), Ok(1), Ok(2)),
  ], ((fs, xs, expected)) => expect(Result.apply(fs, xs)) == expected);

testAll("reduce", [
    (Error("err"), 10),
    (Ok(42), 32),
  ], ((input, expected)) => expect(Result.reduce((acc, x) => x - acc, 10, input)) == expected);

testAll("reduceRight", [
    (Error("err"), 10),
    (Ok(42), 32),
  ], ((input, expected)) => expect(Result.reduceRight((acc, x) => x - acc, 10, input)) == expected);

testAll("isOk", [
    (Error("err"), false),
    (Ok(42), true),
  ], ((input, expected)) => expect(Result.isOk(input)) == expected);

testAll("isError", [
    (Error("err"), true),
    (Ok(42), false),
  ], ((input, expected)) => expect(Result.isError(input)) == expected);

test("wrap - Ok", () =>
  expect(Result.wrap(() => 42)) == Ok(42));

test("wrap - Error", () =>
  expect(Result.wrap(() => failwith("err"))) == Error(Failure("err")));

test("wrap1 - Ok", () =>
  expect(Result.wrap1(n => n, 42)) == Ok(42));

test("wrap1 - Error", () =>
  expect(Result.wrap1(_n => failwith("err"), 42)) == Error(Failure("err")));

test("wrap2 - Ok", () =>
  expect(Result.wrap2((n, m) => n + m, 40, 2)) == Ok(42));

test("wrap2 - Error", () =>
  expect(Result.wrap2((_n, _m) => failwith("err"), 40, 2)) == Error(Failure("err")));

testAll("or_", [
    (Error("err"), Ok(10)),
    (Ok(42), Ok(42)),
  ], ((input, expected)) => expect(Result.or_(Ok(10), input)) == expected);

testAll("getOr", [
    (Error("err"), 10),
    (Ok(42), 42),
  ], ((input, expected)) => expect(Result.getOr(10, input)) == expected);

test("getOrRaise - Error", () =>
  expect(() => Result.getOrRaise(Error("err"))) |> toThrowException(InvalidArgument("getOrRaise called on Error")));

test("getOrRaise - Ok", () =>
  expect(Result.getOrRaise(Ok(42))) == 42);

testAll("map2", [
    (Error("err"), Error("error")),
    (Ok(42), Ok(43)),
  ], ((input, expected)) => expect(Result.map2(x => x + 1, e => e ++ "or", input)) == expected);

testAll("mapOr", [
    (Error("err"), 10),
    (Ok(42), 43),
  ], ((input, expected)) => expect(Result.mapOr(x => x + 1, 10, input)) == expected);

testAll("mapOrElse", [
    (Error("err"), 10),
    (Ok(42), 43),
  ], ((input, expected)) => expect(Result.mapOrElse(x => x + 1, () => 10, input)) == expected);

testAll("flatten", [
    (Error("err"), Error("err")),
    (Ok(Error("err")), Error("err")),
    (Ok(Ok(42)), Ok(42)),
  ], ((input, expected)) => expect(Result.flatten(input)) == expected);