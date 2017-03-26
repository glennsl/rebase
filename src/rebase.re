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
  
  let filter pred => fun
    | Some v => pred v ? Some v : None
    | None => None;

  let exists predicate => fun
    | Some v => predicate v
    | None => false;

  let forAll predicate => fun
    | Some v => predicate v
    | None => true;

  let filter predicate => fun
    | Some v as self when predicate v => self
    | _ => None;

  let fromResult = fun
    | Ok v => Some v
    | Error _ => None;

  let (|?) =
    fun opt v => getOr v opt;
};

module Result = {
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
};

/*
module Interface = {
  /*
    Maybe add?

    Monad
    Mappable
    Foldable
    Addable
    ...
    Enumerable
  */
};
*/

module Str = {
  let isEmpty s => String.length (String.trim s) == 0;
};

/**
 * flags
 *
 * Usage:
 *    module MyFlags = Flags ();
 *    let flag1 = MyFlags.make ();
 *    let flag2 = MyFlags.make ();
 *
 *    let combined = MyFlags.many [flag1, flag2];
 */

/* must be a functor? */
module Flags: {
  type t;

  let toInt: t => int;
  let make: unit => t;
  let many: list t => t;
} = {
  type t = int;

  let toInt v => v;

  let make = {
    let n = ref 1;
    fun () => {
      n := !n lsl 1;
      !n
    }
  };

  let rec many = fun
    | [] => 0
    | [hd, ...rest] => hd lor (many rest);
};
