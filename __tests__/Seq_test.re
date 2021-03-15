open Jest;
open Expect;
open Rebase;
open TestHelpers;

let _toList = List.fromSeq;

let _explode = () => failwith("Oops, not lazy! The function evaluated too much");


describe("Mappable.S", () => {
  module M: Signatures.Mappable.S with type t('a) := seq('a) = Seq;

  testFn("map",
    Fn.(M.map(x => x + 1) >> _toList), [
      ([]     |> Seq.fromList, []),
      ([1, 2] |> Seq.fromList, [2, 3]),
    ]
  );

  test("map - lazy", () =>
    expect(
      M.map(x => x + 1, Seq.cons(1, _explode)) |> Seq.head)
      |> toEqual(Some(2)));
});


describe("Applicative.S", () => {
  module M: Signatures.Applicative.S with type t('a) := Seq.t('a) = Seq;

  test("apply", () =>
    expect(
      M.apply(
        Seq.fromList([x => x + x, x => x * x]),
        Seq.fromList([3, 8])
      ) |> _toList)
      |> toEqual([6, 16, 9, 64])
  );

  test("apply - lazy", () =>
    expect(
      M.apply(
        Seq.fromList([x => x + x]),
        Seq.cons(3, _explode)
      ) |> Seq.head)
      |> toEqual(Some(6)));

  test("from", () =>
    expect(
      M.from(42) |> _toList)
      |> toEqual([42])
  );
});


describe("Reduceable.S", () => {
  module M: Signatures.Reduceable.S with type t('a) := Seq.t('a) = Seq;

  test("reduce", () =>
    expect(
      M.reduce((acc, x) => x - acc, 10, [1, 2] |> Seq.fromList))
      |> toEqual(11)
  );

  test("reduceRight", () =>
    expect(
      M.reduceRight((acc, x) => x - acc, 10, [1, 2] |> Seq.fromList))
      |> toEqual(9)
  );
});


describe("Monad.S", () => {
  module M: Signatures.Monad.S with type t('a) := Seq.t('a) = Seq;

  test("flatMap", () =>
    expect(
      M.flatMap(x => Seq.cons(0, Seq.from(x)), [1, 2, 3] |> Seq.fromList) |> _toList)
      |> toEqual([0, 1, 0, 2, 0, 3]));

  test("flatMap - lazy outer", () =>
    expect(
      M.flatMap(x => Seq.cons(x, Seq.empty), Seq.cons(1, _explode)) |> Seq.head)
      |> toEqual(Some(1)));

  test("flatMap - lazy inner", () =>
    expect(
      M.flatMap(x => Seq.cons(x, Seq.cons(0, _explode)), [1, 2] |> Seq.fromList) |> Seq.head)
      |> toEqual(Some(1)));
});


describe("Iterable.S", () => {
  module M: Signatures.Iterable.S with type t('a) := Seq.t('a) = Seq;

  test("forEach", () => {
    let checked = ref([]);
    Seq.forEach(x => checked := [x, ...checked^], Seq.fromList([1, 2]));
    expect(checked^) |> toEqual([2, 1])
  });

  test("filter", () =>
    expect(
      M.filter(x => x mod 2 === 0, [1, 2] |> Seq.fromList) |> _toList)
      |> toEqual([2])
  );

  test("filter - lazy", () =>
    expect(
      M.filter(x => x mod 2 === 0, Seq.cons(1, Seq.cons(2, _explode))) |> Seq.head)
      |> toEqual(Some(2))
  );

  testFn("exists",
    M.exists(x => x mod 2 === 0), [
      ([]     |> Seq.fromList, false),
      ([1, 3] |> Seq.fromList, false),
      ([1, 2] |> Seq.fromList, true),
    ]
  );

  test("exists - lazy", () =>
    expect(
      M.exists(x => x mod 2 === 0, Seq.cons(1, Seq.cons(2, _explode))))
      |> toEqual(true)
  );

  testFn("find",
    M.find(x => x mod 2 === 0), [
      ([]     |> Seq.fromList, None),
      ([1, 3] |> Seq.fromList, None),
      ([1, 2] |> Seq.fromList, Some(2)),
    ]
  );

  test("find - lazy", () =>
    expect(
      M.find(x => x mod 2 === 0, Seq.cons(1, Seq.cons(2, _explode))))
      |> toEqual(Some(2))
  );

  testFn("forAll",
    M.forAll(x => x mod 2 === 0), [
      ([]     |> Seq.fromList, true),
      ([2, 4] |> Seq.fromList, true),
      ([1, 2] |> Seq.fromList, false),
    ]
  );
});

testProperty("empty", Seq.empty() == Nil);

testFn("cons",
  Fn.(Seq.cons |> uncurry >> _toList), [
    ((1, []     |> Seq.fromList), [1]),
    ((1, [2, 3] |> Seq.fromList), [1, 2, 3]),
  ]
);

testFn("fromArray",
  Fn.(Seq.fromArray >> _toList), [
    ([||],        []),
    ([|1, 2, 3|], [1, 2, 3]),
  ]
);

testFn("fromList",
  Fn.(Seq.fromList >> _toList), [
    ([],        []),
    ([1, 2, 3], [1, 2, 3]),
  ]
);

testFn("range",
  ((start, finish)) => Seq.range(start, finish) |> _toList, [
    ((0, 0), [0]),
    ((0, 4), [0, 1, 2, 3, 4]),
    ((2, 4), [2, 3, 4]),
    ((-2, 0), [-2, -1, 0]),
    ((4, 2), []),
    ((-2, -4), []),
    ((2, -2), []),
  ]
);

testFn("range - step",
  ((start, finish, step)) => Seq.range(start, finish, ~step) |> _toList, [
    ((0, 0, 2), [0]),
    ((0, 3, 2), [0, 2]),
    ((2, 5, 2), [2, 4]),
    ((0, 0, -2), [0]),
    ((0, 3, -2), []),
    ((3, 0, -2), [3, 1]),
  ]
);

test("range - step 0", () =>
  expect(
    () => Seq.range(0, 0, ~step=0))
    |> toThrow);


testFn("isEmpty",
  Seq.isEmpty, [
    (Seq.empty,                 true),
    ([1, 2, 3] |> Seq.fromList, false),
  ]
);

testFn("head",
  Seq.head, [
    (Seq.empty,                 None),
    ([1, 2, 3] |> Seq.fromList, Some(1)),
  ]
);

testFn("count",
  Seq.count, [
    ([]        |> Seq.fromList, 0),
    ([1, 2, 3] |> Seq.fromList, 3),
  ]
);

test("filterMap", () => {
  expect(
    Seq.filterMap(x => x mod 2 === 0 ? Some(x + 1) : None, [1, 2] |> Seq.fromList) |> _toList)
    |> toEqual([3])
});

test("filterMap - lazy", () => {
  expect(
    Seq.filterMap(x => x mod 2 === 0 ? Some(x + 1) : None, Seq.cons(1, Seq.cons(2, _explode))) |> Seq.head)
    |> toEqual(Some(3))
});

testFn("zip",
  Fn.(Seq.zip |> flip |> uncurry >> _toList), [
    (([1, 2]    |> Seq.fromList, [11, 12]     |> Seq.fromList), [(1, 11), (2, 12)]),
    (([1, 2, 3] |> Seq.fromList, [11, 12]     |> Seq.fromList), [(1, 11), (2, 12)]),
    (([1, 2]    |> Seq.fromList, [11, 12, 13] |> Seq.fromList), [(1, 11), (2, 12)]),
    (([1, 2]    |> Seq.fromList, []           |> Seq.fromList), []),
    (([]        |> Seq.fromList, [11, 12]     |> Seq.fromList), []),
  ]
);

test("zip - lazy", () => {
  expect(
    Seq.zip(Seq.cons(1, _explode), Seq.cons("a",  _explode)) |> Seq.head)
    |> toEqual(Some(("a", 1)))
});
