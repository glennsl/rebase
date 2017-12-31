open! Rebase__Types;

type t('a) = seq('a);

[@bs.get_index] external _unsafeArrayGet: array('a) => int => 'a = "";

let empty = () => Nil;
let cons = (x, seq) => () => Cons(x, seq);

let fromArray = arr => {
  let rec get = i => {
    let x = _unsafeArrayGet(arr, i);
    if (Js.Undefined.testAny(x)) {
      Nil
    } else {
      Cons(x, () => get(i + 1))
    }
  };
  () => get(0)
};

let from = x =>
  cons(x, empty);

let rec fromList =
  fun | []          => empty
      | [x, ...xs]  => cons(x, fromList(xs));

let range = (~step=1, start, finish) => {
  if (step === 0) {
    raise(InvalidArgument("Seq.range: ~step=0 would cause infinite loop"));
  } else if (step < 0 && start < finish) {
    empty
  } else if (step > 0 && start > finish) {
    empty
  } else {
    let last = (finish - start) / step * step + start;

    let rec next =
      fun | n when n === last => () => Cons(n, empty)
          | n                 => () => Cons(n, next(n + step));

    next(start)
  }
};

let isEmpty = seq =>
  switch (seq()) {
  | Nil => true
  | _   => false
  };

let head = seq =>
  switch (seq()) {
  | Nil        => None
  | Cons(x, _) => Some(x)
  };

let rec filter = (predicate, seq) =>
  () => {
    let rec loop = seq =>
      switch (seq()) {
      | Nil           => Nil
      | Cons(x, next) when predicate(x) => Cons(x, filter(predicate, next))
      | Cons(_, next) => loop(next)
      };
    loop(seq)
  };

let rec filterMap = (f, seq) =>
  () => {
    let rec loop = seq =>
      switch (seq()) {
      | Nil           => Nil
      | Cons(x,next)  =>
        switch (f(x)) {
        | Some(x) => Cons(x, filterMap(f, next))
        | None    => loop(next);
        }
      };
    loop(seq)
  };

let rec exists = (predicate, seq) =>
  switch(seq()) {
  | Nil           => false
  | Cons(x, _)    when predicate(x) => true
  | Cons(_, next) => exists(predicate, next)
  };

let rec forEach = (f, seq) =>
  switch (seq()) {
  | Nil => ()
  | Cons(element, next) =>
    f(element);
    forEach(f, next);
  };

let rec find = (predicate, seq) =>
  switch(seq()) {
  | Nil           => None
  | Cons(x, _)    when predicate(x) => Some(x)
  | Cons(_, next) => find(predicate, next)
  };

let rec forAll = (predicate, seq) =>
  switch(seq()) {
  | Nil           => true
  | Cons(x, next) when predicate(x) => forAll(predicate, next)
  | _             => false
  };

let rec map = (f, seq) =>
  () => 
    switch (seq()) {
    | Nil           => Nil
    | Cons(x, next) => Cons(f(x), map(f, next))
    };

let flatMap = (f, seq) => {
  let rec aux = (inner, outer) =>
    switch (inner()) {
    | Nil =>
      switch (outer()) {
      | Nil           => Nil
      | Cons(x, next) => aux(f(x), next)
      }
    | Cons(x, next) =>
      Cons(x, () => aux(next, outer))
    };
  () => aux(empty, seq)
};

let rec reduce = (f, acc, seq) =>
  switch (seq()) {
  | Nil           => acc
  | Cons(x, next) => reduce(f, f(acc, x), next);
  };

let rec reduceRight = (f, acc, seq) =>
  switch (seq()) {
  | Nil           => acc
  | Cons(x, next) => f(reduceRight(f, acc, next), x);
  };

let product = (f, xs, ys) =>
  flatMap((x) => map((y) => f(x, y), ys), xs);

let apply = (fs, xs) =>
  product((f, x) => f(x), fs, xs);

let count = seq => {
  let n = ref(0);
  seq |> forEach(_x => n := n^ + 1);
  n^;
};

let rec zip = (ys, xs) =>
  () => 
    switch (xs(), ys()) {
    | (Nil, _) | (_, Nil) =>
      Nil
    | (Cons(x, nextX), Cons(y, nextY)) =>
      Cons((x,y), zip(nextY, nextX))
    };

