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
