open Jest;
open Expect;
open! Expect.Operators;
open Rebase;
open TestHelpers;

describe("Concatenable.S0", () => {
  module M: Signatures.Concatenable.S0 with type t := string = String;

  test("concat", () =>
    expect("a" |> String.concat("b")) === "ab");
});


testFn("length",
  String.length, [
    ("foo", 3),
    ("møø", 5),
    ({js|møø|js}, 3),
  ]
);

testFn("includes",
  s => "banana" |> String.includes(s), [
    ("nana", true),
    ("nanas", false),
  ]
);

testFn("startsWith",
  s => "banana" |> String.startsWith(s), [
    ("ba", true),
    ("na", false),
  ]
);

testFn("endsWith",
  s => "banana" |> String.endsWith(s), [
    ("ba", false),
    ("na", true),
  ]
);

testFn("isEmpty",
  String.isEmpty, [
    ("", true),
    ("foo", false),
    ("\t", true),
    ("\n", true),
    ("\r", true),
    (" ", true),
    ("\t\r\n ", true),
  ]
);

testFn("padStart",
  ((count, pad)) => "banana" |> String.padStart(count, pad), [
    ((6, "na"), "banana"),
    ((9, "na"), "nanbanana"),
    ((10, "na"), "nanabanana"),
    ((-10, "na"), "banana"),
  ]
);

testFn("padEnd", 
  ((count, pad)) => "banana" |> String.padEnd(count, pad), [
    ((6, "na"), "banana"),
    ((9, "na"), "banananan"),
    ((10, "na"), "banananana"),
    ((-10, "na"), "banana"),
  ]
);

testFn("trim", 
  String.trim, [
    ("  a", "a"),
    ("a  ", "a"),
    ("  a  ", "a"),
    ("\t a \t ", "a"),
    ("\n a \r ", "a"),
  ]
);

testFn("sum", 
  ((from, length)) => "banana" |> String.sub(~from, ~length), [
    ((0, 0), ""),
    ((1, 0), ""),
    ((0, 1), "b"),
    ((2, 2), "na"),
    ((3, 4), "ana"),
    ((3, 8), "ana"),
    ((7, 1), ""),
    ((0, -1), ""),
    ((-1, -1), ""),
    ((-1, 1), "a"),
  ]
);

testFn("join",
  String.join, [
    ([], ""),
    (["a", "b", "c"], "abc")
  ]
);

testFn("joinWith", 
  String.joinWith(", "), [
    ([], ""),
    (["a", "b", "c"], "a, b, c")
  ]
);
