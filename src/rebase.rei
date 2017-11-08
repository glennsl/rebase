module Array: {
  type t('a) = array('a);
  include Rebase__signatures__mappable.S with type t('a) := t('a);
  include Rebase__signatures__applyable.S with type t('a) := t('a);
  include Rebase__signatures__reduceable.S with type t('a) := t('a);
  include Rebase__signatures__monad.S with type t('a) := t('a);
  include Rebase__signatures__iterable.S with type t('a) := t('a);
  let make: (int, 'a) => t('a);
  let length: t('a) => int;
  let get: (int, t('a)) => option('a);
  /*let set : int => 'a => t 'a => bool; /* mutates */*/
  let getOrRaise: (int, t('a)) => 'a;
  let setOrRaise: (int, 'a, t('a)) => unit; /* mutates */
  let unsafeGetUnchecked: (int, t('a)) => 'a;
  let unsafeSetUnchecked: (int, 'a, t('a)) => unit; /* mutates */
  let fill: ('a, t('a)) => unit; /* mutates */
  let concat: (t('a), t('a)) => t('a);
  let slice: (~from: int, ~to_: int, t('a)) => t('a);
  let copy: t('a) => t('a);
  let mapWithIndex: (('a, int) => 'b, t('a)) => t('b)
  /*let unsafeBlitUnchecked : source::t 'a => sourceFrom::int => target::t 'a => targetFrom::int => count::int => unit; /* mutates */*/
  /*let contains : 'a => t 'a => unit;*/
  /*let reversed : t 'a => t 'a;*/
  /*let reverseInPlace : t 'a => unit; /* mutates */*/
  /*let sortInPlace : compare::('a => 'a => int) => t 'a => unit; /* mutates */*/
  /*let sorted : compare::('a => 'a => int) => t 'a => t 'a;*/
  /*let findIndex : ('a => bool) => t 'a => option (int, 'a);*/
  /*let count : ('a => bool) => t 'a => int;*/
  /*let forEachWithIndex : ('a => int => unit) => t 'a => unit;*/
  /*let filterMap : ('a => option 'b) => t 'a => t 'b;*/ /* just for perf */
  /*let range : from::int => to_::int => t int*/

  /*let push : 'a => t 'a => unit;*/ /* Put in separate ArrayList module? */
};

module List: {
  type t('a) = list('a);
  include Rebase__signatures__mappable.S with type t('a) := t('a);
  include Rebase__signatures__applyable.S with type t('a) := t('a);
  include Rebase__signatures__reduceable.S with type t('a) := t('a);
  include Rebase__signatures__monad.S with type t('a) := t('a);
  include Rebase__signatures__iterable.S with type t('a) := t('a);
  let head: t('a) => option('a);
  let tail: t('a) => option(t('a));
  let length: t('a) => int;
  let reverse: t('a) => t('a);
  let zip: t('a) => t('b) => t(('a, 'b));
  let toArray: t('a) => array('a); /* Not very efficient. How to communicate that clearly? */
};

module Option: {
  type t('a) = option('a);
  include Rebase__signatures__mappable.S with type t('a) := t('a);
  include Rebase__signatures__applyable.S with type t('a) := t('a);
  include Rebase__signatures__reduceable.S with type t('a) := t('a);
  include Rebase__signatures__monad.S with type t('a) := t('a);
  include Rebase__signatures__iterable.S with type t('a) := t('a);
  let isSome: t(_) => bool;
  let isNone: t(_) => bool;
  let or_: (t('a), t('a)) => t('a);
  let getOr: ('a, t('a)) => 'a;
  let getOrRaise: t('a) => 'a;
  let mapOr: ('a => 'b, 'b, t('a)) => 'b;
  let mapOrElse: ('a => 'b, unit => 'b, t('a)) => 'b;
  /*let fromResult : result 'a => option 'a;*/
};

module Result: {
  include (module type of Rebase__result);
};

module String: {
  include (module type of Rebase__string);
};

module Flags: {
  type t;
  
  let toInt: t => int;
  let make: unit => t;
  let many: list(t) => t;
};

exception InvalidArgument(string);
exception IndexOutOfBounds;
