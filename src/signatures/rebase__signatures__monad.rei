module type S = {
  type t('a);

  include Rebase__signatures__applyable.S with type t('a) := t('a);

  /*
    Laternative names: andThen
    Haskell: >>= (bind)
    Fantasyland: chain (Chain category)
  */
  let flatMap: ('a => t('b), t('a)) => t('b);
};
