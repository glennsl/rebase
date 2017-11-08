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

module type S1_5 = {
  type t('a, 'e);

  let map: ('a => 'b, t('a, 'e)) => t('b, 'e);
};

module type S2 = {
  type t('a, 'b);

  let map2: ('a => 'c, 'b => 'd, t('a, 'b)) => t('c, 'd);
};