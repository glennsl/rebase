
type t 'a = array 'a;

let from x =>
  [|x|];

external unsafeGet : array 'a => int => 'a = "" [@@bs.get_index];
external unsafeSet : array 'a => int => 'a => unit = "" [@@bs.set_index];

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

external _create : int => array 'a = "Array" [@@bs.new];
external _fill : 'a => array 'a = "fill" [@@bs.send.pipe: array 'a];
external _push : 'a => unit = "push" [@@bs.send.pipe: array 'a];

let flatMap f xs => {
  let acc = [||];
  for i in 0 to (Js.Array.length xs - 1) {
    let a = f (unsafeGet xs i);
    for j in 0 to (Js.Array.length a - 1) {
      _push (unsafeGet a j) acc
    }
  };
  acc
};

let product f xs ys => flatMap (fun x => map (fun y => f x y) ys) xs;

let apply fs xs => product (fun f x => f x) fs xs;
