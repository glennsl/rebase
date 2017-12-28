open Jest;
open Expect;
open! Expect.Operators;
open Rebase;

test("from", () =>
  expect(Array.from(42)) == [|42|]);

test("filter", () => {
  let (===) = Pervasives.(===);
  expect(Array.filter(x => x mod 2 === 0, [|1, 2|])) == [|2|]
});

testAll("exists", [
    ([|1, 3|], false), 
    ([|1, 2|], true)
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Array.exists(x => x mod 2 === 0, input)) == expected
});

test("forEach", () => {
  let checked = ref([]);
  Array.forEach(x => checked := [x, ...checked^], [|1, 2|]);
  expect(checked^) == [2, 1]
});

testAll("find", [
    ([|1, 3|], None),
    ([|1, 2, 4|], Some(2))
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Array.find(x => x mod 2 === 0, input)) == expected
});

testAll("forAll", [
    ([|2, 4|], true),
    ([|1, 2|], false)
  ], ((input, expected)) => {
    let (===) = Pervasives.(===);
    expect(Array.forAll(x => x mod 2 === 0, input)) == expected
  });

test("flatMap", () =>
  expect(Array.flatMap(xs => xs |> Array.map(x => x + 1), [|[|1|], [|2, 3|]|])) == [|2, 3, 4|]);

test("map", () =>
  expect(Array.map(x => x + 1, [|1, 2|])) == [|2, 3|]);

test("apply", () =>
  expect(Array.apply([|x => x + x, x => x * x|], [|3, 8|])) == [|6, 16, 9, 64|]);

test("reduce", () =>
  expect(Array.reduce((acc, x) => x - acc, 10, [|1, 2|])) == 11);

test("reduceRight", () =>
  expect(Array.reduceRight((acc, x) => x - acc, 10, [|1, 2|])) == 9);

test("length", () =>
  expect(Array.length([|1, 2|])) === 2);

testAll("make", [
    (0, [||]),
    (2, [|"a", "a"|]),
  ], ((length, expected)) => expect(Array.make(length, "a")) == expected);

testAll("get", [
    (0, Some(1)),
    (2, None),
    (-1, None), /* should raise exception? */
  ], ((index, expected)) => expect(Array.get([|1, 2|], index)) == expected);

test("set - in bounds", () => {
  let a = [|1, 2|];
  Array.set(a, 1, 3);

  expect(Array.get(a, 1)) == Some(3)
});

test("set - out of bounds", () => {
  let a = [|1, 2|];
  Array.set(a, 2, 3);

  expect(Array.get(a, 2)) == None
});

test("[] get", () => {
  let a = [|1, 2|];
  expect(a[1]) == Some(2)
});

test("[] set - in bounds", () => {
  let a = [|1, 2|];
  a[1] = 3;

  expect(Array.get(a, 1)) == Some(3)
});

test("[] set - out of bounds", () => {
  let a = [|1, 2|];
  a[2] = 3;

  expect(Array.get(a, 2)) == None
});

test("getOrRaise - in bounds", () =>
  expect(Array.getOrRaise(1, [|1, 2|])) === 2);

test("getOrRaise - out of bounds", () =>
  expect(() => Array.getOrRaise(2, [|1, 2|])) |> toThrowException(IndexOutOfBounds));

test("setOrRaise - in bounds", () => {
  let a = [|1, 2|];
  Array.setOrRaise(1, 3, a);

  expect(Array.getOrRaise(1, a)) === 3
});

test("setOrRaise - out of bounds", () =>
  expect(() => Array.setOrRaise(2, 3, [|1, 2|])) |> toThrowException(IndexOutOfBounds));

test("unsafeGetUnchecked - in bounds", () =>
  expect(Array.unsafeGetUnchecked(1, [|1, 2|])) === 2);

test("unsafeGetUnchecked - out of bounds", () =>
  expect(Array.unsafeGetUnchecked(2, [|1, 2|])) === Obj.magic(Js.undefined));

test("unsafeSetUnchecked - in bounds", () => {
  let a = [|1, 2|];
  Array.unsafeSetUnchecked(1, 3, a);

  expect(Array.getOrRaise(1, a)) === 3
});

test("unsafeSetUnchecked - out of bounds", () => {
  let a = [|1, 2|];
  Array.unsafeSetUnchecked(2, 3, a);

  /* NOTE: This is most likely not how a native implementation will behave */
  expect(Array.getOrRaise(2, a)) === 3
});

test("fill", () => {
  let a = [|1, 2|];
  Array.fill(0, a);

  expect(a) == [|0, 0|]
});

test("concat", () =>
  expect([|1, 2|] |> Array.concat([|3, 4|])) == [|1, 2, 3, 4|]);

testAll("slice", [
    (0, 0, [||]),
    (2, 0, [||]),
    (2, 2, [||]),
    (2, 3, [|3|]),
    (2, 7, [|3, 4|]),
    (7, 9, [||]),
    (0, -1, [|1, 2, 3|]),
    (2, -1, [|3|]),
    (-1, 0, [||]),
    (-1, 2, [||]),
    (-1, -2, [||]),
  ], ((from, to_, expected)) => expect([|1, 2, 3, 4|] |> Array.slice(~from, ~to_)) == expected);

test("copy", () => {
  let a = [|1, 2|];
  let b = Array.copy(a);
  a[1] = 0;

  expect((a, b)) == ([|1, 0|], [|1, 2|])
});

test("mapWithIndex", () =>
  expect(Array.mapWithIndex((x, i) => x + i, [|1, 2|])) == [|1, 3|]);