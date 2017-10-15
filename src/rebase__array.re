
type t 'a = array 'a;

let from x =>
  [|x|];

external make : int => t 'a = "Array" [@@bs.new];
external length : t 'a => int = "" [@@bs.get];
external fill : 'a => t 'a = "" [@@bs.send.pipe: t 'a];
external _push : 'a => unit = "push" [@@bs.send.pipe: t 'a];
external concat : t 'a => t 'a = "" [@@bs.send.pipe: t 'a];
external concatMany : array (t 'a) => t 'a = "concat" [@@bs.send.pipe: t 'a] [@@bs.splice];
external slice : from::int => to_::int => t 'a = "" [@@bs.send.pipe : t 'a];
external copy : t 'a = "slice" [@@bs.send.pipe : t 'a];
external mapWithIndex : ('a => int => 'b) => t 'b = "" [@@bs.send.pipe: t 'a];

external unsafeGetUnckecked : array 'a => int => 'a = "" [@@bs.get_index];
external unsafeSetUnckecked : array 'a => int => 'a => unit = "" [@@bs.set_index];

let get i self =>
  if (i >= 0 && i < (length self)) {
    Some (unsafeGetUnckecked self i)
  } else {
    None
  };

let set i value self =>
  if (i >= 0 && i < (length self)) {
    Some (unsafeSetUnckecked self i value)
  } else {
    None
  };

let getOrRaise i self =>
  if (i >= 0 && i < (length self)) {
    unsafeGetUnckecked self i
  } else {
    invalid_arg "getOrRaise"
  };

let setOrRaise i value self =>
  if (i >= 0 && i < (length self)) {
    unsafeSetUnckecked self i value
  } else {
    invalid_arg "setOrRaise"
  };

external exists : ('a => Js.boolean) => bool = "some" [@@bs.send.pipe: t 'a];
let exists f self => exists (fun x => Js.Boolean.to_js_boolean (f x)) self;
external filter : ('a => Js.boolean) => t 'a = "" [@@bs.send.pipe: t 'a];
let filter f self => filter (fun x => Js.Boolean.to_js_boolean (f x)) self;
external find : ('a => Js.boolean) => option 'a = "" [@@bs.send.pipe: t 'a] [@@bs.return undefined_to_opt];
let find f self => find (fun x => Js.Boolean.to_js_boolean (f x)) self;
external forAll : ('a => Js.boolean) => bool = "some" [@@bs.send.pipe: t 'a];
let forAll f self => forAll (fun x => Js.Boolean.to_js_boolean (f x)) self;
external forEach : ('a => unit) => unit = "" [@@bs.send.pipe: t 'a];
external map : ('a => 'b) => t 'b = "" [@@bs.send.pipe: t 'a];
external reduce : ('b => 'a => 'b) => 'b => 'b = "" [@@bs.send.pipe: t 'a];
external reduceRight : ('b => 'a => 'b) => 'b => 'b = "" [@@bs.send.pipe: t 'a];

let flatMap f self => {
  let result = [||];
  for i in 0 to (Js.Array.length self - 1) {
    let nested = f (unsafeGetUnckecked self i);
    for j in 0 to (Js.Array.length nested - 1) {
      _push (unsafeGetUnckecked nested j) result
    }
  };
  result
};

let product f xs ys =>
  flatMap (fun x => map (fun y => f x y) ys) xs;

let apply fs xs =>
  product (fun f x => f x) fs xs;