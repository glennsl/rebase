open Rebase;

let x = Some 42 |> Option.map (fun n => n * 2);

let y = [|1,2,3|] |> Array.map (fun n => n * 2);