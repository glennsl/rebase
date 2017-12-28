open Jest;
open Expect;
open! Expect.Operators;
open Rebase;

test("from", () =>
  expect(List.from(42)) == [42]);

testAll("head", [
    ([1, 2, 3], Some(1)),
    ([], None)
  ], ((input, expected)) => expect(List.head(input)) == expected);

testAll("tail", [
    ([1, 2, 3], Some([2, 3])),
    ([], None)
  ], ((input, expected)) => expect(List.tail(input)) == expected);

test("reverse", () =>
  expect(List.reverse([1, 2])) == [2, 1]);

test("filter", () => {
  let (===) = Pervasives.(===);
  expect(List.filter(x => x mod 2 === 0, [1, 2])) == [2]
});

testAll("exists", [([1, 3], false), ([1, 2], true)], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(List.exists(x => x mod 2 === 0, input)) == expected
});

test("forEach", () => {
  let checked = ref([]);
  List.forEach(x => checked := [x, ...checked^], [1, 2]);
  expect(checked^) == [2, 1]
});

testAll("find", [([1, 3], None), ([1, 2, 4], Some(2))], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(List.find(x => x mod 2 === 0, input)) == expected
});

testAll("forAll", [([2, 4], true), ([1, 2], false)], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(List.forAll(x => x mod 2 === 0, input)) == expected
});

test("flatMap", () =>
  expect(List.flatMap(xs => [0, ...xs], [[1],[2, 3]])) == [0, 1, 0, 2, 3]);

test("map", () =>
  expect(List.map(x => x + 1, [1, 2])) == [2, 3]);

test("apply", () =>
  expect(List.apply([x => x + x, x => x * x], [3, 8])) == [6, 16, 9, 64]);

test("reduce", () =>
  expect(List.reduce((acc, x) => x - acc, 10, [1, 2])) == 11);

test("reduceRight", () =>
  expect(List.reduceRight((acc, x) => x - acc, 10, [1, 2])) == 9);

test("length", () =>
  expect(List.length([41, 62])) === 2);

testAll("zip", [
  ([1, 2], [11, 12], [(1, 11), (2, 12)]),
  ([1, 2, 3], [11, 12], [(1, 11), (2, 12)]),
  ([1, 2], [11, 12, 13], [(1, 11), (2, 12)]),
  ([1, 2], [], []),
  ([], [11, 12], []),
], ((xs, ys, expected)) => expect(List.zip(xs, ys)) == expected);

testAll("toArray",
  [([1, 2], [|1, 2|]), ([], [||])],
  ((input, expected)) => expect(List.toArray(input)) == expected);