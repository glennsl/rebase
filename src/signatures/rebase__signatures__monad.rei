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

module type S1_5 = {
  type t('a, 'e);

  include Rebase__signatures__applyable.S1_5 with type t('a, 'e) := t('a, 'e);

  let flatMap: ('a => t('b, 'e), t('a, 'e)) => t('b, 'e);
};