
type t 'a = list 'a;

let head =
  fun | [] => None
      | [x, ..._] => Some x;

let tail =
  fun | [] => None
      | [_, ...xs] => Some xs;

let rec reverseAndAppend acc =>
  fun | [] => acc
      | [x, ...xs] => reverseAndAppend [x, ...acc] xs;

let reverse self => reverseAndAppend [] self;

let rec filter predicate =>
  fun | [] => []
      | [x, ...xs] when predicate x => [x, ...filter predicate xs] /* NOTE: not tail-recursive */
      | [_, ...xs] => filter predicate xs;

let rec exists predicate =>
  fun | [] => false
      | [x, ..._] when predicate x => true
      | [_, ...xs] => exists predicate xs;

let rec forEach f =>
  fun | [] => ()
      | [x, ...xs] => {
        f x;
        forEach f xs
      };

let rec find predicate =>
  fun | [] => None
      | [x, ..._] when predicate x => Some x
      | [_, ...xs] => find predicate xs;

let rec forAll predicate =>
  fun | [] => true
      | [x, ...xs] when predicate x => forAll predicate xs
      | _ => false;

let flatMap (f: ('a => list 'b)) (self: list 'a): list 'b => {
  let rec loop inner outer =>
    switch inner {
    | [] =>
      switch outer {
      | [] => []
      | [x, ...xs] => loop (f x) xs
      }
    | [x, ...xs] => [x, ...loop xs outer]
    };
  loop [] self
};

let from x => [x];

let rec map f =>
  fun | [] => []
      | [x, ...xs] => [f x, ...map f xs];

let product f xs ys =>
  flatMap (fun x => map (fun y => f x y) ys) xs;

let apply (fs: list ('a => 'b)) xs =>
  product (fun f x => f x) fs xs;

let rec reduce f acc =>
  fun | [] => acc
      | [x, ...xs] => reduce f (f acc x) xs;

let rec reduceRight f acc =>
  fun | [] => acc
      | [x, ...xs] => f (reduceRight f acc xs) x;