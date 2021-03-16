open! Rebase__Types;

type t('a) = array('a);

let from = x => [|x|];

[@new] external _make: int => t('a) = "Array";
[@get] external length: t('a) => int = "length";
[@bs.send.pipe: t('a)] external fill: 'a => unit = "fill";
[@bs.send.pipe: t('a)] external _push: 'a => unit = "push";
[@bs.send.pipe: t('a)] external concat: t('a) => t('a) = "concat";
[@bs.send.pipe: t('a)]
external slice:
  (~from:  int, ~to_:  int) => t('a) =
  "slice";
[@bs.send.pipe: t('a)] external copy: t('a) = "slice";
[@bs.send.pipe: t('a)] external mapi: (('a, int) => 'b) => t('b) = "map";

[@get_index] external _unsafeGetUnchecked: (t('a), int) => 'a;
[@set_index] external _unsafeSetUnchecked: (t('a), int, 'a) => unit;

let unsafeGetUnchecked = (index, self) => _unsafeGetUnchecked(self, index);
let unsafeSetUnchecked = (index, value, self) =>
  _unsafeSetUnchecked(self, index, value);

let make = (length, value) =>
  [@ns.braces]
  {
    let array = _make(length);
    fill(value, array);
    array;
  };

let fromList = x =>
  switch (x) {
  | [] => [||]
  | [x, ...xs] as list =>
    let array = make(List.length(list), x);
    let rec fill = (i, x) =>
      switch (x) {
      | [] => array
      | [x, ...xs] =>
        _unsafeSetUnchecked(array, i, x);
        fill(i + 1, xs);
      };
    fill(1, xs);
  };

let fromSeq = seq =>
  [@ns.braces]
  {
    let array = [||] /* TODO: preallocate? */;
    let rec fill = seq =>
      switch (seq()) {
      | Nil => array
      | [@implicit_arity] Cons(x, next) =>
        _push(x, array);
        fill(next);
      };
    fill(seq);
  };

let range = (~step=1, start, finish) =>
  if (step === 0) {
    raise(InvalidArgument("Array.range: ~step=0 would cause infinite loop"));
  } else if (step < 0 && start < finish) {
    [||];
  } else if (step > 0 && start > finish) {
    [||];
  } else {
    /* TODO: preallocate?
          let length = ??;
          let array = _make(length);
       */
    let array = [||];
    let last = (finish - start) / step * step + start;

    let rec loop = n =>
      [@ns.braces]
      {
        _push(n, array);

        if (n !== last) {
          loop(n + step);
        };
      };

    loop(start);
    array;
  };

let get = (self, i) =>
  if (i >= 0 && i < length(self)) {
    Some(_unsafeGetUnchecked(self, i));
  } else {
    None;
  };

let set = (self, i, value) =>
  if (i >= 0 && i < length(self)) {
    _unsafeSetUnchecked(self, i, value);
  } else {
    ();
  };

let getOrRaise = (i, self) =>
  if (i >= 0 && i < length(self)) {
    _unsafeGetUnchecked(self, i);
  } else {
    raise(IndexOutOfBounds);
  };

let setOrRaise = (i, value, self) =>
  if (i >= 0 && i < length(self)) {
    _unsafeSetUnchecked(self, i, value);
  } else {
    raise(IndexOutOfBounds);
  };

[@bs.send.pipe: t('a)] external exists: ('a => bool) => bool = "some";
[@bs.send.pipe: t('a)] external filter: ('a => bool) => t('a) = "filter";
[@bs.send.pipe: t('a)] [@return undefined_to_opt]
external find: ('a => bool) => option('a) = "find";

[@bs.send.pipe: t('a)] external findIndex: ('a => bool) => int = "findIndex";
let findIndex = (f, self) =>
  switch (findIndex(x => f(x), self)) {
  | (-1) => None
  | i => Some((i, _unsafeGetUnchecked(self, i)))
  };

[@bs.send.pipe: t('a)] external forAll: ('a => bool) => bool = "every";
[@bs.send.pipe: t('a)] external forEach: ('a => unit) => unit = "forEach";
[@bs.send.pipe: t('a)]
external forEachi: (('a, int) => unit) => unit = "forEach";
[@bs.send.pipe: t('a)] external map: ('a => 'b) => t('b) = "map";
[@bs.send.pipe: t('a)] external reduce: (('b, 'a) => 'b, 'b) => 'b = "reduce";
[@bs.send.pipe: t('a)]
external reduceRight: (('b, 'a) => 'b, 'b) => 'b = "reduceRight";

let flatMap = (f, self) =>
  [@ns.braces]
  {
    let result = [||];
    for (i in 0 to length(self) - 1) {
      let nested = f(_unsafeGetUnchecked(self, i));
      for (j in 0 to length(nested) - 1) {
        _push(_unsafeGetUnchecked(nested, j), result);
      };
    };
    result;
  };

let filterMap = (f, self) =>
  [@ns.braces]
  {
    let result = [||];
    for (i in 0 to length(self) - 1) {
      switch (f(_unsafeGetUnchecked(self, i))) {
      | Some(x) => _push(x, result)
      | None => ()
      };
    };
    result;
  };

let product = (f, xs, ys) => flatMap(x => map(y => f(x, y), ys), xs);

let apply = (fs, xs) => product((f, x) => f(x), fs, xs);
