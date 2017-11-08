open Rebase;

let x = Some(42) |> Option.map((n) => n * 2);

let y = [|1, 2, 3|] |> Array.map((n) => n * 2);
