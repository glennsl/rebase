open Jest;
open Expect;
open! Expect.Operators;
open Rebase;

describe("Concatenable.S0", () => {
  module M: Signatures.Concatenable.S0 with type t := string = String;

  test("concat", () =>
    expect("a" |> String.concat("b")) === "ab");
});


testAll("length", [
    ("foo", 3),
    ("møø", 5),
    ({js|møø|js}, 3),
  ], ((input, expected)) => expect(String.length(input)) == expected);

test("concat", () =>
  expect("a" |> String.concat("b")) === "ab");

testAll("includes", [
  ("nana", true),
  ("nanas", false),
], ((input, expected)) => expect("banana" |> String.includes(input)) === expected);

testAll("startsWith", [
  ("ba", true),
  ("na", false),
], ((input, expected)) => expect("banana" |> String.startsWith(input)) === expected);

testAll("endsWith", [
  ("ba", false),
  ("na", true),
], ((input, expected)) => expect("banana" |> String.endsWith(input)) === expected);

testAll("isEmpty", [
  ("", true),
  ("foo", false),
  ("\t", true),
  ("\n", true),
  ("\r", true),
  (" ", true),
  ("\t\r\n ", true),
], ((input, expected)) => expect(String.isEmpty(input)) === expected);

testAll("padStart", [
  (6, "na", "banana"),
  (9, "na", "nanbanana"),
  (10, "na", "nanabanana"),
  (-10, "na", "banana"),
], ((count, pad, expected)) => expect("banana" |> String.padStart(count, pad)) === expected);

testAll("padEnd", [
  (6, "na", "banana"),
  (9, "na", "banananan"),
  (10, "na", "banananana"),
  (-10, "na", "banana"),
], ((count, pad, expected)) => expect("banana" |> String.padEnd(count, pad)) === expected);

testAll("trim", [
  ("  a", "a"),
  ("a  ", "a"),
  ("  a  ", "a"),
  ("\t a \t ", "a"),
  ("\n a \r ", "a"),
], ((input, expected)) => expect(String.trim(input)) === expected);

testAll("sum", [
  (0, 0, ""),
  (1, 0, ""),
  (0, 1, "b"),
  (2, 2, "na"),
  (3, 4, "ana"),
  (3, 8, "ana"),
  (7, 1, ""),
  (0, -1, ""),
  (-1, -1, ""),
  (-1, 1, "a"),
], ((from, length, expected)) => expect("banana" |> String.sub(~from, ~length)) === expected);