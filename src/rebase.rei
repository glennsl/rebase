module Array: {
  type t('a) = array('a);

  /* Mappable.S */
  let map: ('a => 'b, t('a)) => t('b);

  /* Applicative.S */
  let apply: (t(('a => 'b)), t('a)) => t('b);
  let from: 'a => t('a);

  /* Reduceable.S */
  let reduce: (('b, 'a) => 'b, 'b, t('a)) => 'b;
  let reduceRight: (('b, 'a) => 'b, 'b, t('a)) => 'b;

  /* Monad.S */
  let flatMap: ('a => t('b), t('a)) => t('b);

  /* Iterable.S */
  let forAll: ('a => bool, t('a)) => bool;
  let find: ('a => bool, t('a)) => option('a);
  let forEach: ('a => unit, t('a)) => unit;
  let exists: ('a => bool, t('a)) => bool;
  let filter: ('a => bool, t('a)) => t('a);

  /* Concatenable.S */
  let concat: (t('a), t('a)) => t('a);

  /* -- */
  let make: (int, 'a) => t('a);
  let length: t('a) => int;

  /* `get` and `set` do not have the subject in pipe position since that would
      break the index syntax, `a[i]` is sugar for `Array.get(a, i)`. and
      `a[i] = v` is sugar for `Array.set(a, i, v)` Please look the other way and
      just use the index syntax instead. */
  let get: (t('a), int) => option('a);
  let set : (t('a), int, 'a) => unit; /* mutates, no-ops if out of bounds */

  let getOrRaise: (int, t('a)) => 'a;
  let setOrRaise: (int, 'a, t('a)) => unit; /* mutates */

  /*  turn into non-pipe form for better perf? */
  let unsafeGetUnchecked: (int, t('a)) => 'a;
  let unsafeSetUnchecked: (int, 'a, t('a)) => unit; /* mutates */

  let filterMap: ('a => option('b), t('a)) => t('b);
  let fill: ('a, t('a)) => unit; /* mutates */
  let slice: (~from: int, ~to_: int, t('a)) => t('a);
  let copy: t('a) => t('a);
  let mapi: (('a, int) => 'b, t('a)) => t('b)
  /*let unsafeBlitUnchecked : source::t 'a => sourceFrom::int => target::t 'a => targetFrom::int => count::int => unit; /* mutates */*/
  /*let contains : 'a => t 'a => unit;*/
  /*let reversed : t 'a => t 'a;*/
  /*let reverseInPlace : t 'a => unit; /* mutates */*/
  /*let sortInPlace : compare::('a => 'a => int) => t 'a => unit; /* mutates */*/
  /*let sorted : compare::('a => 'a => int) => t 'a => t 'a;*/
  /*let findIndex : ('a => bool) => t 'a => option (int, 'a);*/
  /*let count : ('a => bool) => t 'a => int;*/
  /*let forEachWithIndex : ('a => int => unit) => t 'a => unit;*/
  /*let range : from::int => to_::int => t int*/

  /*let push : 'a => t 'a => unit;*/ /* Put in separate ArrayList module? */
};

module List: {
  type t('a) = list('a);

  /* Mappable.S */
  let map: ('a => 'b, t('a)) => t('b);

  /* Applicative.S */
  let apply: (t(('a => 'b)), t('a)) => t('b);
  let from: 'a => t('a);

  /* Reduceable.S */
  let reduce: (('b, 'a) => 'b, 'b, t('a)) => 'b;
  let reduceRight: (('b, 'a) => 'b, 'b, t('a)) => 'b;

  /* Monad.S */
  let flatMap: ('a => t('b), t('a)) => t('b);

  /* Iterable.S */
  let forAll: ('a => bool, t('a)) => bool;
  let find: ('a => bool, t('a)) => option('a);
  let forEach: ('a => unit, t('a)) => unit;
  let exists: ('a => bool, t('a)) => bool;
  let filter: ('a => bool, t('a)) => t('a);
  let filterMap: ('a => option('b), t('a)) => t('b);

  /* Concatenable.S */
  let concat: (t('a), t('a)) => t('a);

  /* -- */
  let head: t('a) => option('a);
  let tail: t('a) => option(t('a));
  let length: t('a) => int;
  let reverse: t('a) => t('a);
  let zip: t('a) => t('b) => t(('b, 'a));
  let toArray: t('a) => array('a); /* Not very efficient. How to communicate that clearly? */
};

module Option: {
  type t('a) = option('a);

  /* Mappable.S */
  let map: ('a => 'b, t('a)) => t('b);

  /* Applicative.S */
  let apply: (t(('a => 'b)), t('a)) => t('b);
  let from: 'a => t('a);

  /* Reduceable.S */
  let reduce: (('b, 'a) => 'b, 'b, t('a)) => 'b;
  let reduceRight: (('b, 'a) => 'b, 'b, t('a)) => 'b;

  /* Monad.S */
  let flatMap: ('a => t('b), t('a)) => t('b);

  /* Iterable.S */
  let forAll: ('a => bool, t('a)) => bool;
  let find: ('a => bool, t('a)) => option('a);
  let forEach: ('a => unit, t('a)) => unit;
  let exists: ('a => bool, t('a)) => bool;
  let filter: ('a => bool, t('a)) => t('a);

  /* -- */
  let some: 'a => t('a);
  let isSome: t(_) => bool;
  let isNone: t(_) => bool;
  let or_: (t('a), t('a)) => t('a);
  let getOr: ('a, t('a)) => 'a;
  let getOrRaise: t('a) => 'a;
  let mapOr: ('a => 'b, 'b, t('a)) => 'b;
  let mapOrElse: ('a => 'b, unit => 'b, t('a)) => 'b;
  let flatten: (t(t('a))) => t('a);
};

module Result: {
  type t('a, 'e) = Rebase__result__type.result('a, 'e) =
    | Ok('a)
    | Error('e);

  /* Mappable.S1_5 */
  let map: ('a => 'b, t('a, 'e)) => t('b, 'e);
  /* Mappable.S2 */
  let map2: ('a => 'c, 'b => 'd, t('a, 'b)) => t('c, 'd);

  /* Applicative.S1_5 */
  let apply: (t(('a => 'b), 'e), t('a, 'e)) => t('b, 'e);
  let from: 'a => t('a, _);

  /* Reduceable.S1_5 */
  let reduce: (('b, 'a) => 'b, 'b, t('a, _)) => 'b;
  let reduceRight: (('b, 'a) => 'b, 'b, t('a, _)) => 'b;

  /* Monad.S1_5 */
  let flatMap: ('a => t('b, 'e), t('a, 'e)) => t('b, 'e);

  /* Iterable.S1_5 */
  let forAll: ('a => bool, t('a, _)) => bool;
  let find: ('a => bool, t('a, _)) => option('a);
  let forEach: ('a => unit, t('a, _)) => unit;
  let exists: ('a => bool, t('a, _)) => bool;

  /* -- */
  let isOk: t(_) => bool;
  let isError: t(_) => bool;
  let wrap: (unit => 'r) => t('r, exn);
  let wrap1: ('a => 'r, 'a) => t('r, exn);
  let wrap2: (('a, 'b) => 'r, 'a, 'b) => t('r, exn);
  let or_: (t('a, 'e), t('a, 'e)) => t('a, 'e);
  let getOr: ('a, t('a, _)) => 'a;
  let getOrRaise: t('a, _) => 'a;
  let mapOr: ('a => 'b, 'b, t('a, _)) => 'b;
  let mapOrElse: ('a => 'b, unit => 'b, t('a, _)) => 'b;
  let flatten: (t(t('a, 'e), 'e)) => t('a, 'e);
};

module String: {
  type t = string;

  /* Concatenable.S0 */
  let concat: (t, t) => t;

  /* -- */
  let length: t => int;
  let includes: (t, t) => bool;
  let startsWith: (t, t) => bool;
  let endsWith: (t, t) => bool;
  let isEmpty: t => bool;
  let padStart: (int, string, t) => t;
  let padEnd: (int, string, t) => t;
  let trim: t => t;
  let sub: (~from:int, ~length:int, t) => t;
};

exception InvalidArgument(string);
exception IndexOutOfBounds;
