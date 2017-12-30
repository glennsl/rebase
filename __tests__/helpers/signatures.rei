module Mappable: {
  /* aka Functor */

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
    /* aka Bifunctor */
    type t('a, 'b);

    let map2: ('a => 'c, 'b => 'd, t('a, 'b)) => t('c, 'd);
  };
};


module Applicative: {

  module type S = {
    type t('a);

    include Mappable.S with type t('a) := t('a);

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

    include Mappable.S1_5 with type t('a, 'e) := t('a, 'e);

    let apply: (t(('a => 'b), 'e), t('a, 'e)) => t('b, 'e);
    let from: 'a => t('a, _);
  };
};


module Monad: {
  module type S = {
    type t('a);

    include Applicative.S with type t('a) := t('a);

    /*
      Laternative names: andThen
      Haskell: >>= (bind)
      Fantasyland: chain (Chain category)
    */
    let flatMap: ('a => t('b), t('a)) => t('b);
  };

  module type S1_5 = {
    type t('a, 'e);

    include Applicative.S1_5 with type t('a, 'e) := t('a, 'e);

    let flatMap: ('a => t('b, 'e), t('a, 'e)) => t('b, 'e);
  };
};


module Reduceable: {
  /* aka Foldable */

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

  module type S1_5 = {
    type t('a, 'e);

    /*
      Alternative names: fold
      Haskell: fold
      Fantasyland: reduce
    */
    let reduce: (('b, 'a) => 'b, 'b, t('a, _)) => 'b;

    /* reduceReversed? */
    let reduceRight: (('b, 'a) => 'b, 'b, t('a, _)) => 'b;
  };
};


module Iterable: {

  module type S = {
    type t('a);

    /*
      imm.re: every
      js: every
    */
    let forAll: ('a => bool, t('a)) => bool;

    let find: ('a => bool, t('a)) => option('a);

    /*
    let findOrRaise : (('a => bool), t('a)) => 'a;
    */
    /*
      imm.re: let forEach: while_::(elt 'a => bool)? => (elt 'a => unit) => t 'a => unit;
    */
    let forEach: ('a => unit, t('a)) => unit;

    /*
      Superfluous? It's just the inversion of forAll
    val none : ('a -> bool) -> 'a t -> bool
    */

    /*
      imm.re: some
      js: some
    */
    let exists: ('a => bool, t('a)) => bool;

    /*
      not in imm.re
    */
    let filter: ('a => bool, t('a)) => t('a);
  };

  module type S1_5 = {
    type t('a, 'e);

    let forAll: ('a => bool, t('a, _)) => bool;
    let find: ('a => bool, t('a, _)) => option('a);
    let forEach: ('a => unit, t('a, _)) => unit;
    let exists: ('a => bool, t('a, _)) => bool;
    /* Not generalizable due to unknown error type
    let filter: ('a => bool, t('a, 'e)) => t('a, 'e);
    */
  };
};

module Concatenable: {
  /* aka Semigroup */

  module type S = {
    type t('a);

    let concat: (t('a), t('a)) => t('a);
  };

  module type S0 = {
    type t;

    let concat: (t, t) => t;
  };
};