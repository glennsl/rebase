open Jest;
open Expect;
open! Expect.Operators;
open Rebase;
open TestHelpers;


describe("Mappable.S", () => {
  module M: Signatures.Mappable.S with type t('a) := array('a) = Array;

  test("map", () =>
    expect(M.map(x => x + 1, [|1, 2|])) == [|2, 3|]);
});


describe("Applicative.S", () => {
  module M: Signatures.Applicative.S with type t('a) := array('a) = Array;

  test("apply", () =>
    expect(M.apply([|x => x + x, x => x * x|], [|3, 8|])) == [|6, 16, 9, 64|]);

  test("from", () =>
    expect(M.from(42)) == [|42|]);
});


describe("Reduceable.S", () => {
  module M: Signatures.Reduceable.S with type t('a) := array('a) = Array;

  test("reduce", () =>
    expect(M.reduce((acc, x) => x - acc, 10, [|1, 2|])) == 11);

  test("reduceRight", () =>
    expect(M.reduceRight((acc, x) => x - acc, 10, [|1, 2|])) == 9);
});


describe("Monad.S", () => {
  module M: Signatures.Monad.S with type t('a) := array('a) = Array;

  test("flatMap", () =>
    expect(M.flatMap(x => [|0, x|], [|1, 2, 3|])) == [|0, 1, 0, 2, 0, 3|]);
});


describe("Iterable.S", () => {
  module M: Signatures.Iterable.S with type t('a) := array('a) = Array;

  test("filter", () => {
    let (===) = Pervasives.(===);
    expect(M.filter(x => x mod 2 === 0, [|1, 2|])) == [|2|]
  });

  testAll("exists", [
      ([|1, 3|], false), 
      ([|1, 2|], true)
    ], ((input, expected)) => {
    let (===) = Pervasives.(===);
    expect(M.exists(x => x mod 2 === 0, input)) == expected
  });

  test("forEach", () => {
    let checked = ref([]);
    M.forEach(x => checked := [x, ...checked^], [|1, 2|]);
    expect(checked^) == [2, 1]
  });

  testAll("find", [
      ([|1, 3|], None),
      ([|1, 2, 4|], Some(2))
    ], ((input, expected)) => {
    let (===) = Pervasives.(===);
    expect(M.find(x => x mod 2 === 0, input)) == expected
  });

  testAll("forAll", [
      ([|2, 4|], true),
      ([|1, 2|], false)
    ], ((input, expected)) => {
      let (===) = Pervasives.(===);
      expect(M.forAll(x => x mod 2 === 0, input)) == expected
    });
});


describe("Concatenable.S", () => {
  module M: Signatures.Concatenable.S with type t('a) := array('a) = Array;

  test("concat", () =>
    expect([|1, 2|] |> M.concat([|3, 4|])) == [|1, 2, 3, 4|]);
});


test("length", () =>
  expect(Array.length([|1, 2|])) === 2);

testAll("make", [
    (0, [||]),
    (2, [|"a", "a"|]),
  ], ((length, expected)) => expect(Array.make(length, "a")) == expected);


testFn("fromList",
  Array.fromList, [
    ([1, 2], [|1, 2|]),
    ([], [||])
  ]
);

testFn("fromSeq", 
  Array.fromSeq, [
    (Seq.empty, [||]),
    (Seq.(cons(1, cons(2, cons(3, empty)))), [|1, 2, 3|])
  ]
);

testFn("range", 
  ((start, finish)) => Array.range(start, finish), [
    ((0, 0), [|0|]),
    ((0, 4), [|0, 1, 2, 3, 4|]),
    ((2, 4), [|2, 3, 4|]),
    ((-2, 0), [|-2, -1, 0|]),
    ((4, 2), [||]),
    ((-2, -4), [||]),
    ((2, -2), [||]),
  ]
);

testFn("range - step", 
  ((start, finish, step)) => Array.range(start, finish, ~step), [
    ((0, 0, 2), [|0|]),
    ((0, 3, 2), [|0, 2|]),
    ((2, 5, 2), [|2, 4|]),
    ((0, 0, -2), [|0|]),
    ((0, 3, -2), [||]),
    ((3, 0, -2), [|3, 1|]),
  ]
);

test("range - step 0", () =>
  expect(
    () => Array.range(0, 0, ~step=0))
    |> toThrow);

testFn("get",
  Array.get([|1, 2|]), [
    (0, Some(1)),
    (2, None),
    (-1, None), /* should throw? */
  ]
);

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
  expect(() => Array.getOrRaise(2, [|1, 2|])) |> toThrow);

test("setOrRaise - in bounds", () => {
  let a = [|1, 2|];
  Array.setOrRaise(1, 3, a);

  expect(Array.getOrRaise(1, a)) === 3
});

test("setOrRaise - out of bounds", () =>
  expect(() => Array.setOrRaise(2, 3, [|1, 2|])) |> toThrow);

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

test("filterMap", () => {
  let (===) = Pervasives.(===);
  expect(Array.filterMap(x => x mod 2 === 0 ? Some(x + 1) : None, [|1, 2|])) == [|3|]
});

test("fill", () => {
  let a = [|1, 2|];
  Array.fill(0, a);

  expect(a) == [|0, 0|]
});

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

test("mapi", () =>
  expect(Array.mapi((x, i) => (x, i), [|"a", "b"|])) == [|("a", 0), ("b", 1)|]);

test("forEachi", () => {
  let checked = ref([]);
  Array.forEachi((x, i) => checked := [(x, i), ...checked^], [|"a", "b"|]);
  expect(checked^) == [("b", 1), ("a", 0)]
});

testAll("findIndex", [
    ([|"a", "b"|], None),
    ([|"a", "bb", "c"|], Some((1, "bb"))),
  ], ((input, expected)) => {
  let (===) = Pervasives.(===);
  expect(Array.findIndex(x => String.length(x) === 2, input)) == expected
});
