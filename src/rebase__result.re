open Rebase__exceptions;

type t('a, 'e) = Rebase__result__type.result('a, 'e) =
  | Ok('a)
  | Error('e);

let from = x =>
  Ok(x);

let isOk =
  fun | Ok(_) => true
      | Error(_) => false;

let isError =
  fun | Ok(_) => false
      | Error(_) => true;

let wrap = f =>
  try (Ok(f())) {
  | e => Error(e)
  };

let wrap1 = (f, a) =>
  try (Ok(f(a))) {
  | e => Error(e)
  };

let wrap2 = (f, a, b) =>
  try (Ok(f(a, b))) {
  | e => Error(e)
  };

let or_ = other =>
  fun | Ok(_) as self => self
      | Error(_) => other;

let getOr = other =>
  fun | Ok(v) => v
      | Error(_) => other;

let getOrRaise =
  fun | Ok(v) => v
      | Error(_) => raise(InvalidArgument("unwrapUnsafely called on Error"));

let map = f =>
  fun | Ok(v) => Ok(f(v))
      | Error(e) => Error(e);

let map2 = (f, g) =>
  fun | Ok(v) => Ok(f(v))
      | Error(e) => Error(g(e));

let mapOr = (f, other) =>
  fun | Ok(v) => f(v)
      | Error(_) => other;

let mapOrElse = (f, g) =>
  fun | Ok(v) => f(v)
      | Error(_) => g();

let exists = predicate =>
  fun | Ok(v) => predicate(v)
      | Error(_) => false;

let forAll = predicate =>
  fun | Ok(v) => predicate(v)
      | Error(_) => true;

let filter = predicate =>
  fun | Ok(v) as self when predicate(v) => self
      | Error(_) as self => self
      | _ => Error(NotFound);

let forEach = f =>
  fun | Error(_) => ()
      | Ok(x) => f(x);

let find = predicate =>
  fun | Ok(x) when predicate(x) => Some(x)
      | _ => None;

/*
let findOrRaise = (predicate) =>
  fun | Some(x) when predicate(x) => x
      | _ => raise(NotFound);
*/

let andThen = f =>
  fun | Ok(v) => f(v)
      | Error(e) => Error(e);
let flatMap = andThen;

let flatten =
  fun | Ok(a) => a
      | Error(_) as self => self;

let apply = (f, a) =>
  switch f {
  | Error(_) as self => self
  | Ok(f) => map(f, a)
  };

let reduce = (f, acc) =>
  fun | Error(_) => acc
      | Ok(x) => f(acc, x);

let reduceRight = (f, acc) =>
  fun | Error(_) => acc
      | Ok(x) => f(acc, x);
