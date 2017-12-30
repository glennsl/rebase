open Jest;
open Expect;
open! Expect.Operators;
open Rebase;

test("id", () =>
  expect(Fn.id(42)) == 42);

test("const", () =>
  expect(Fn.const(42)()) == 42);

test("flip", () =>
  expect(Fn.flip((-))(5, 10)) == 5);

test("curry", () => {
  let f = Fn.curry(((a, b)) => a - b);
  expect(f(5, 10)) == (-5)
});

test("uncurry", () => {
  let f = Fn.uncurry((a, b) => a - b);
  expect(f((5, 10))) == (-5)
});

test("<<", () => {
  let f = Fn.(string_of_int << int_of_string);
  expect(f("42")) == "42"
});

test(">>", () => {
  let f = Fn.(string_of_int >> int_of_string);
  expect(f(42)) == 42
});