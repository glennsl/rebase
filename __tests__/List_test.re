open Jest;
open Expect;
open! Expect.Operators;
open Rebase;
open TestHelpers;

describe("Mappable.S", () => {
  module M: Signatures.Mappable.S with type t('a) := list('a) = List;

  test("map", () =>
    expect(M.map(x => x + 1, [1, 2])) == [2, 3]);
});


describe("Applicative.S", () => {
  module M: Signatures.Applicative.S with type t('a) := list('a) = List;

  test("apply", () =>
    expect(M.apply([x => x + x, x => x * x], [3, 8])) == [6, 16, 9, 64]);

  test("from", () =>
    expect(M.from(42)) == [42]);
});


describe("Reduceable.S", () => {
  module M: Signatures.Reduceable.S with type t('a) := list('a) = List;

  test("reduce", () =>
    expect(M.reduce((acc, x) => x - acc, 10, [1, 2])) == 11);

  test("reduceRight", () =>
    expect(M.reduceRight((acc, x) => x - acc, 10, [1, 2])) == 9);
});


describe("Monad.S", () => {
  module M: Signatures.Monad.S with type t('a) := list('a) = List;

  test("flatMap", () =>
    expect(M.flatMap(x => [0, x], [1, 2, 3])) == [0, 1, 0, 2, 0, 3]);
});


describe("Iterable.S", () => {
  module M: Signatures.Iterable.S with type t('a) := list('a) = List;

  test("filter", () => {
    let (===) = Pervasives.(===);
    expect(M.filter(x => x mod 2 === 0, [1, 2])) == [2]
  });
  
  testAll("exists", [
      ([], false),
      ([1, 3], false),
      ([1, 2], true)
    ], ((input, expected)) => {
      let (===) = Pervasives.(===);
      expect(M.exists(x => x mod 2 === 0, input)) == expected
    }
  );
  
  test("forEach", () => {
    let checked = ref([]);
    M.forEach(x => checked := [x, ...checked^], [1, 2]);
    expect(checked^) == [2, 1]
  });
  
  testAll("find", [
      ([], None),
      ([1, 3], None),
      ([1, 2, 4], Some(2))
    ], ((input, expected)) => {
      let (===) = Pervasives.(===);
      expect(M.find(x => x mod 2 === 0, input)) == expected
    }
  );
  
  testAll("forAll", [
      ([], true),
      ([2, 4], true),
      ([1, 2], false)
    ], ((input, expected)) => {
      let (===) = Pervasives.(===);
      expect(M.forAll(x => x mod 2 === 0, input)) == expected
    }
  );
});


describe("Concatenable.S", () => {
  module M: Signatures.Concatenable.S with type t('a) := list('a) = List;

  test("concat", () =>
    expect([1, 2] |> M.concat([3, 4])) == [1, 2, 3, 4]);
});


testFn("fromArray", 
  List.fromArray, [
    ([||], []),
    ([|1, 2, 3|], [1, 2, 3])
  ]
);

testFn("fromSeq", 
  List.fromSeq, [
    (Seq.empty, []),
    (Seq.(cons(1, cons(2, cons(3, empty)))), [1, 2, 3])
  ]
);

testFn("range", 
  ((start, finish)) => List.range(start, finish), [
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
  ((start, finish, step)) => List.range(start, finish, ~step), [
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
    () => List.range(0, 0, ~step=0))
    |> toThrow);

testFn("isEmpty",
  List.isEmpty, [
    ([], true),
    ([1, 2, 3], false)
  ]
);

testFn("head", 
  List.head, [
    ([1, 2, 3], Some(1)),
    ([], None)
  ]
);

testFn("tail", 
  List.tail, [
    ([1, 2, 3], Some([2, 3])),
    ([], None)
  ]
);

test("reverse", () =>
  expect(List.reverse([1, 2])) == [2, 1]);

test("length", () =>
  expect(List.length([41, 62])) === 2);

test("filterMap", () => {
  let (===) = Pervasives.(===);
  expect(List.filterMap(x => x mod 2 === 0 ? Some(x + 1) : None, [1, 2])) == [3]
});

testFn("zip", 
  List.zip |> Fn.flip |> Fn.uncurry, [
    (([1, 2], [11, 12]), [(1, 11), (2, 12)]),
    (([1, 2, 3], [11, 12]), [(1, 11), (2, 12)]),
    (([1, 2], [11, 12, 13]), [(1, 11), (2, 12)]),
    (([1, 2], []), []),
    (([], [11, 12]), []),
  ]
);
