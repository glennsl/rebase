module type S = sig
  type 'a t

  include Rebase__signatures__applyable.S with type 'a t := 'a t

  (*
    Laternative names: andThen
    Haskell: >>= (bind)
    Fantasyland: chain (Chain category)
  *)
  val flatMap : ('a -> 'b t) -> 'a t -> 'b t
end