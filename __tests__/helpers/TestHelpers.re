open Jest;
open Expect;
open! Expect.Operators;

let testFn = (name, f, cases) =>
  testAll(name, cases, ((input, expected)) => expect(input |> f) == expected)