(*
  Gramatically correct: Reducible
  Haskell: Foldable
  Fantasyland: Foldable
*)

module type S = sig
  type 'a t

  (*
    Alternative names: fold
    Haskell: fold
    Fantasyland: reduce
  *)
  val reduce : ('b -> 'a -> 'b) -> 'b -> 'a t -> 'b
  val reduceReverse : ('a -> 'b -> 'b) -> 'b -> 'a t -> 'b
end