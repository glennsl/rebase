type result 'a 'e =
  | Ok 'a
  | Error 'e;

module Option = {
  let unwrapUnsafely = fun
    | Some v => v
    | None => raise (Invalid_argument "unwrapUnsafely called on None");

  let isSome = fun
    | Some _ => true
    | None => false;

  let isNone = fun
    | Some _ => false
    | None => true;

  let may f => fun
    | Some v => f v
    | None => ();

  let or_ other => fun
    | Some _ as self => self
    | None => other;

  let getOr other => fun
    | Some v => v
    | None => other;

  let map f => fun
    | Some v => Some (f v)
    | None => None;

  let mapOr f other => fun
    | Some v => f v
    | None => other;

  let mapOrElse f g => fun
    | Some v => f v
    | None => g ();

  let andThen f => fun
    | Some v => f v
    | None => None;

  let fromResult = fun
    | Ok v => Some v
    | Error _ => None;

  let (|?) =
    fun opt v => getOr v opt;
};

module Result = {
  let unwrapUnsafely = fun
    | Ok v => v
    | Error e => raise (Invalid_argument "unwrapUnsafely called on Error");

  let isOk = fun
    | Some _ => true
    | None => false;

  let isError = fun
    | Some _ => false
    | None => true;

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
};

module Interface = {
  module type Type = {
    type t;
  };
};
