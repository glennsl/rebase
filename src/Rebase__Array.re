open! Rebase__Types;

type t('a) = array('a);

let from = x =>
  [|x|];

[@bs.new] external _make : int => t('a) = "Array";
[@bs.get] external length : t('a) => int = "";
[@bs.send.pipe : t('a)] external fill : 'a => unit = "";
[@bs.send.pipe : t('a)] external _push : 'a => unit = "push";
[@bs.send.pipe : t('a)] external concat : t('a) => t('a) = "";
[@bs.send.pipe : t('a)] external slice : (~from: int, ~to_: int) => t('a) = "";
[@bs.send.pipe : t('a)] external copy : t('a) = "slice";
[@bs.send.pipe : t('a)] external mapi : (('a, int) => 'b) => t('b) = "map";

[@bs.get_index] external _unsafeGetUnchecked : (t('a), int) => 'a = "";
[@bs.set_index] external _unsafeSetUnchecked : (t('a), int, 'a) => unit = "";

let unsafeGetUnchecked = (index, self) => _unsafeGetUnchecked(self, index);
let unsafeSetUnchecked = (index, value, self) => _unsafeSetUnchecked(self, index, value);

let make = (length, value) => {
  let array = _make(length);
  fill(value, array);
  array
};

let fromList =
  fun | [] => [||]
      | [x, ...xs] as list => {
        let array = make(List.length(list), x);
        let rec fill = i =>
          fun | [] => array
              | [x, ...xs] => {
                _unsafeSetUnchecked(array, i, x);
                fill(i + 1, xs)
              };
        fill(1, xs)
      };
      
let fromSeq = seq => {
  let array = [||]; /* TODO: preallocate? */
  let rec fill = seq =>
    switch (seq()) {
    | Nil => array
    | Cons(x, next) => {
      _push(x, array);
      fill(next)
    }};
  fill(seq)
};

let range = (~step=1, start, finish) => {
  if (step === 0) {
    raise(InvalidArgument("Array.range: ~step=0 would cause infinite loop"));
  } else if (step < 0 && start < finish) {
    [||]
  } else if (step > 0 && start > finish) {
    [||]
  } else {
    /* TODO: preallocate?
    let length = ??;
    let array = _make(length);
    */
    let array = [||];
    let last = (finish - start) / step * step + start;

    let rec loop = n => {
      _push(n, array);

      if (n !== last) {
        loop(n + step);
      }
    };

    loop(start);
    array
  }
};

let get = (self, i) =>
  if (i >= 0 && i < length(self)) {
    Some(_unsafeGetUnchecked(self, i))
  } else {
    None
  };

let set = (self, i, value) =>
  if (i >= 0 && i < length(self)) {
    _unsafeSetUnchecked(self, i, value)
  } else {
    ()
  };


let getOrRaise = (i, self) =>
  if (i >= 0 && i < length(self)) {
    _unsafeGetUnchecked(self, i)
  } else {
    raise(IndexOutOfBounds)
  };

let setOrRaise = (i, value, self) =>
  if (i >= 0 && i < length(self)) {
    _unsafeSetUnchecked(self, i, value)
  } else {
    raise(IndexOutOfBounds)
  };

[@bs.send.pipe : t('a)] external exists : ('a => Js.boolean) => bool = "some";
let exists = (f, self) => exists(x => Js.Boolean.to_js_boolean(f(x)), self);

[@bs.send.pipe : t('a)] external filter : ('a => Js.boolean) => t('a) = "";
let filter = (f, self) => filter(x => Js.Boolean.to_js_boolean(f(x)), self);

[@bs.send.pipe : t('a)] [@bs.return undefined_to_opt]
external find : ('a => Js.boolean) => option('a) = "";
let find = (f, self) => find(x => Js.Boolean.to_js_boolean(f(x)), self);

[@bs.send.pipe : t('a)] external findIndex : ('a => Js.boolean) => int = "";
let findIndex = (f, self) =>
  switch (findIndex(x => Js.Boolean.to_js_boolean(f(x)), self)) {
  | -1 => None
  |  i => Some((i, _unsafeGetUnchecked(self, i)))
  };

[@bs.send.pipe : t('a)] external forAll : ('a => Js.boolean) => bool = "every";
let forAll = (f, self) => forAll(x => Js.Boolean.to_js_boolean(f(x)), self);

[@bs.send.pipe : t('a)] external forEach : ('a => unit) => unit = "";
[@bs.send.pipe : t('a)] external forEachi : (('a, int) => unit) => unit = "forEach";
[@bs.send.pipe : t('a)] external map : ('a => 'b) => t('b) = "";
[@bs.send.pipe : t('a)] external reduce : (('b, 'a) => 'b, 'b) => 'b = "";
[@bs.send.pipe : t('a)] external reduceRight : (('b, 'a) => 'b, 'b) => 'b = "";

let flatMap = (f, self) => {
  let result = [||];
  for (i in 0 to length(self) - 1) {
    let nested = f(_unsafeGetUnchecked(self, i));
    for (j in 0 to length(nested) - 1) {
      _push(_unsafeGetUnchecked(nested, j), result)
    }
  };
  result
};

let filterMap = (f, self) => {
  let result = [||];
  for (i in 0 to length(self) - 1) {
    switch (f(_unsafeGetUnchecked(self, i))) {
    | Some(x) => _push(x, result)
    | None    => ()
    }
  };
  result
};

let product = (f, xs, ys) =>
  flatMap(x => map(y => f(x, y), ys), xs);

let apply = (fs, xs) =>
  product((f, x) => f(x), fs, xs);
