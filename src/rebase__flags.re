/**
 * flags
 *
 * Usage:
 *    module MyFlags = Flags();
 *    let flag1 = MyFlags.make();
 *    let flag2 = MyFlags.make();
 *
 *    let combined = MyFlags.many([flag1, flag2]);
 */

/* must be a functor? */
type t = int;

let toInt = (v) => v;

let make = {
  let n = ref(1);
  () => {
    n.contents = n.contents lsl 1;
    n.contents
  }
};

let rec many =
  fun | [] => 0
      | [x, ...xs] => x lor many(xs);
