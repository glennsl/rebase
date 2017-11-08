/*
  Haskell: Functor
  Fantasyland: Functor
*/

module type S = {
  type t('a);

  /*
    Haskell: fmap
    Fantasyland: map
  */
  let map: ('a => 'b, t('a)) => t('b);
};
