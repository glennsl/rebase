module type S = {
  type t('a);

  /*
    imm.re: every
  */
  let forAll: ('a => bool, t('a)) => bool;

  let find: ('a => bool, t('a)) => option('a);

  /*val findOrRaise : ('a -> bool) -> 'a t -> 'a*/

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
  */
  let exists: ('a => bool, t('a)) => bool;

  /*
    not in imm.re
  */
  let filter: ('a => bool, t('a)) => t('a);
};
