
module Option : {
  type t 'a = option 'a;

  include Rebase__signatures__mappable.S with type t 'a := t 'a;
  include Rebase__signatures__applyable.S with type t 'a := t 'a;
  include Rebase__signatures__reduceable.S with type t 'a := t 'a;
  include Rebase__signatures__monad.S with type t 'a := t 'a;
  include Rebase__signatures__iterable.S with type t 'a := t 'a;

};

module Result : {
  include module type of Rebase__result;
};

module String : {
  include module type of Rebase__string;
};

module Flags : {
  type t;

  let toInt: t => int;
  let make: unit => t;
  let many: list t => t;
};