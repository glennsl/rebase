/*
  Gramatically correct: Reducible
  Haskell: Foldable
  Fantasyland: Foldable
*/

module type S = {
  type t('a);

  /*
    Alternative names: fold
    Haskell: fold
    Fantasyland: reduce
  */
  let reduce: (('b, 'a) => 'b, 'b, t('a)) => 'b;

  /* reduceReversed? */
  let reduceRight: (('b, 'a) => 'b, 'b, t('a)) => 'b;
};
