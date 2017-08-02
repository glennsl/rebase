(*
  Gramatically correct: Applicable
  Haskell: Applicative
  Fantasyland: Applicative
*)

module type S = sig
  type 'a t

  include Rebase__signatures__mappable.S with type 'a t := 'a t

  (*
    Haskell: ??
    Fantasyland: ap (Apply category)
  *)
  val apply : ('a -> 'b) t -> 'a t -> 'b t

  (*
    Alternative names: of_, ofValue, fromValue
    Haskell: pure (return)
    Fantasyland: of
  *)
  val from : 'a -> 'a t
end