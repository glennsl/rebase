
module Option : {
  include module type of Rebase__option;
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