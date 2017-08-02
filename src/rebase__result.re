open Rebase__result__type;

let unwrapUnsafely = fun
  | Ok v => v
  | Error _ => raise (Invalid_argument ("unwrapUnsafely called on Error"));

let isOk = fun
  | Ok _ => true
  | Error _ => false;

let isError = fun
  | Ok _ => false
  | Error _ => true;

let catch f =>
  Ok (try f {
  | e => Error e
  });

let may f => fun
  | Ok v => f v
  | Error _ => ();

let or_ other => fun
  | Ok _ as self => self
  | Error _ => other;

let getOr other => fun
  | Ok v => v
  | Error _ => other;

let map f => fun
  | Ok v => Ok (f v)
  | e => e;

let mapOr f other => fun
  | Ok v => f v
  | Error _ => other;

let mapOrElse f g => fun
  | Ok v => f v
  | Error _ => g ();

let andThen f => fun
  | Ok v => f v
  | e => e;

let fromOption = fun
  | Some v => Ok v
  | None => Error ();