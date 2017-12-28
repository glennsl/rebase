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
[@bs.send.pipe : t('a)] external mapWithIndex : (('a, int) => 'b) => t('b) = "";

[@bs.get_index] external _unsafeGetUnchecked : (t('a), int) => 'a = "";
[@bs.set_index] external _unsafeSetUnchecked : (t('a), int, 'a) => unit = "";

let unsafeGetUnchecked = (index, self) => _unsafeGetUnchecked(self, index);
let unsafeSetUnchecked = (index, value, self) => _unsafeSetUnchecked(self, index, value);

let make = (length, value) => {
  let array = _make(length);
  fill(value, array);
  array
};

let get = (i, self) =>
  if (i >= 0 && i < length(self)) {
    Some(_unsafeGetUnchecked(self, i))
  } else {
    None
  };
/*
let set = (i, value, self) =>
  if (i >= 0 && i < length(self)) {
    unsafeSetUnchecked(self, i, value)
  } else {
    raise(Rebase__exceptions.IndexOutOfBounds)
  };
*/

let getOrRaise = (i, self) =>
  if (i >= 0 && i < length(self)) {
    _unsafeGetUnchecked(self, i)
  } else {
    raise(Rebase__exceptions.IndexOutOfBounds)
  };

let setOrRaise = (i, value, self) =>
  if (i >= 0 && i < length(self)) {
    _unsafeSetUnchecked(self, i, value)
  } else {
    raise(Rebase__exceptions.IndexOutOfBounds)
  };

[@bs.send.pipe : t('a)] external exists : ('a => Js.boolean) => bool = "some";
let exists = (f, self) => exists(x => Js.Boolean.to_js_boolean(f(x)), self);
[@bs.send.pipe : t('a)] external filter : ('a => Js.boolean) => t('a) = "";
let filter = (f, self) => filter(x => Js.Boolean.to_js_boolean(f(x)), self);
[@bs.send.pipe : t('a)] [@bs.return undefined_to_opt]
external find : ('a => Js.boolean) => option('a) = "";
let find = (f, self) => find(x => Js.Boolean.to_js_boolean(f(x)), self);
[@bs.send.pipe : t('a)] external forAll : ('a => Js.boolean) => bool = "some";
let forAll = (f, self) => forAll(x => Js.Boolean.to_js_boolean(f(x)), self);
[@bs.send.pipe : t('a)] external forEach : ('a => unit) => unit = "";
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

let product = (f, xs, ys) =>
  flatMap(x => map(y => f(x, y), ys), xs);

let apply = (fs, xs) =>
  product((f, x) => f(x), fs, xs);
