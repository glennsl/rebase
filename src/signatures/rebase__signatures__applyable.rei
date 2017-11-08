/*
  Gramatically correct: Applicable
  Haskell: Applicative
  Fantasyland: Applicative
*/

module type S = {
  type t('a);

  include Rebase__signatures__mappable.S with type t('a) := t('a);

  /*
    Haskell: ??
    Fantasyland: ap (Apply category)
  */
  let apply: (t(('a => 'b)), t('a)) => t('b);

  /*
    Alternative names: of_, ofValue, fromValue
    Haskell: pure (return)
    Fantasyland: of
  */
  let from: 'a => t('a);
};

module type S1_5 = {
  type t('a, 'e);

  include Rebase__signatures__mappable.S1_5 with type t('a, 'e) := t('a, 'e);

  let apply: (t(('a => 'b), 'e), t('a, 'e)) => t('b, 'e);
  let from: 'a => t('a, _);
};