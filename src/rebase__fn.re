
let id = x => x;

let const = x =>
  () => x;

let flip = f =>
  (a, b) => f(b, a);


let curry = f =>
  (a, b) => f((a, b));

let uncurry = f =>
  ((a, b)) => f(a, b);


let (<<) = (f, g) =>
  x => x |> g |> f;

let (>>) = (f, g) =>
  x => x |> f |> g;