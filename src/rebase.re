module Option = {
  let unwrapUnsafely = fun
  | Some v => v
  | None => assert false;

  let is_some = fun
  | Some _ => true
  | None => false;

  let is_none = fun
  | Some _ => false
  | None => true;

  let may f => fun
  | Some v => f v
  | None => ();

  let or_ other => fun
  | Some _ as self => self
  | None => other;

  let get_or other => fun
  | Some v => v
  | None => other;

  let map f => fun
  | Some v => Some (f v)
  | None => None;

  let map_or f other => fun
  | Some v => f v
  | None => other;

  let map_or_else f g => fun
  | Some v => f v
  | None => g ();

  let and_then f => fun
  | Some v => f v
  | None => None;
};
