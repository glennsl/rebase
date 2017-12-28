
type t = string;

[@bs.get] external length : t => int = "";
[@bs.send.pipe: t] external concat : t => t = "";
[@bs.send.pipe: t] external includes : t => bool = "";
[@bs.send.pipe: t] external startsWith : t => bool = "";
[@bs.send.pipe: t] external endsWith : t => bool = "";
[@bs.send.pipe: t] external padStart : int => string => t = "";
[@bs.send.pipe: t] external padEnd : int => string => t = "";
[@bs.send.pipe: t] external trim : t = "";
[@bs.send.pipe: t] external sub : (~from:int, ~length:int) => t = "substr";

let isEmpty = s =>
  s |> trim
    |> length == 0;