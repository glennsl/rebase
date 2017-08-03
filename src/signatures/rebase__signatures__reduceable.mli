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

  (* reduceReversed? *)
  val reduceRight : ('b -> 'a -> 'b) -> 'b -> 'a t -> 'b
end