module type S = sig
  type 'a t

  (*
    imm.re: every
  *)
  val forAll : ('a -> bool) -> 'a t -> bool

  val find : ('a -> bool) -> 'a t -> 'a option

  val findOrRaise : ('a -> bool) -> 'a t -> 'a

  (*
    imm.re: let forEach: while_::(elt 'a => bool)? => (elt 'a => unit) => t 'a => unit;
  *)
  val forEach : ('a -> unit) -> 'a t -> unit

  (*
    Superfluous? It's just the inversion of forAll
  val none : ('a -> bool) -> 'a t -> bool
  *)

  (*
    imm.re: some
  *)  
  val exists : ('a -> bool) -> 'a t -> bool

  (*
    not in imm.re
  *)
  val filter : ('a -> bool) -> 'a t -> 'a t
end