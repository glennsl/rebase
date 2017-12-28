module Array = Rebase__array;

module List = Rebase__list;

module Option = {
  include Rebase__option;
};

module Result = {
  include Rebase__result;
};

module String = {
  include Rebase__string;
};

include Rebase__exceptions;