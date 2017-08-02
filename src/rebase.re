module Option = {
  type t 'a = option 'a;
  include Rebase__option;
};

module Result = {
  include Rebase__result;
};

module String = {
  include Rebase__string;
};

module Flags = {
  include Rebase__flags;
};