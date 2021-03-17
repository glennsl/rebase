type nonrec t = string;

[@get] external length: t => int = "length";
[@bs.send.pipe: t] external concat: t => t = "concat";
[@bs.send.pipe: t] external includes: t => bool = "includes";
[@bs.send.pipe: t] external startsWith: t => bool = "startsWith";
[@bs.send.pipe: t] external endsWith: t => bool = "endsWith";
[@bs.send.pipe: t] external padStart: (int, string) => t = "padStart";
[@bs.send.pipe: t] external padEnd: (int, string) => t = "padEnd";
[@bs.send.pipe: t] external trim: t = "trim";
[@bs.send.pipe: t]
external sub:
  (~from: [@ns.namedArgLoc] int, ~length: [@ns.namedArgLoc] int) => t =
  "substr";

let isEmpty = s => s |> trim |> length == 0;

let rec join = x =>
  switch (x) {
  | [] => ""
  | [s, ...ss] => s ++ join(ss)
  };

let rec joinWith = (sep, x) =>
  switch (x) {
  | [] => ""
  | [s] => s
  | [s, ...ss] => s ++ sep ++ joinWith(sep, ss)
  };
