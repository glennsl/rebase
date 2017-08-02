/**
 * flags
 *
 * Usage:
 *    module MyFlags = Flags ();
 *    let flag1 = MyFlags.make ();
 *    let flag2 = MyFlags.make ();
 *
 *    let combined = MyFlags.many [flag1, flag2];
 */

/* must be a functor? */
type t = int;

let toInt v => v;

let make = {
  let n = ref 1;
  fun () => {
    n := !n lsl 1;
    !n
  }
};

let rec many = fun
  | [] => 0
  | [hd, ...rest] => hd lor (many rest);