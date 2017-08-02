(*
  Haskell: Functor
  Fantasyland: Functor
*)

module type S = sig
  type 'a t

  (*
    Haskell: fmap
    Fantasyland: map
  *)
  val map : ('a -> 'b) -> 'a t -> 'b t
end