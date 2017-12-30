# re:base
A minimal base library intended for the BuckleScript/Reason ecosystem. Uses Reasonable conventions and is easily consumed via npm.

[![npm](https://img.shields.io/npm/v/@glennsl/rebase.svg)](https://npmjs.org/@glennsl/rebase)
[![Travis](https://img.shields.io/travis/glennsl/rebase/master.svg)](https://travis-ci.org/glennsl/rebase)
[![Coveralls](https://img.shields.io/coveralls/glennsl/rebase/master.svg)](https://coveralls.io/github/glennsl/rebase?branch=master)
[![Issues](https://img.shields.io/github/issues/glennsl/rebase.svg)]()
[![Last Commit](https://img.shields.io/github/last-commit/glennsl/rebase.svg)]()

## Status
Mostly undocumented and untested. Prone to change without warning. Use at your own risk.

## Project goals
* Cross-platform
* Compile to efficient JavaScript code
* Compile to readable JavaScript code

## Design rules
* JS first
* No platform-specific APIs exposed
* Prefer piped form, e.g. `"a" |> String.concat("b") == "ab"`
* The subject of functions in type-wrapping modules should always be `t`
* Enforece common patterns using module signatures

## Installation

```sh
npm install --save @glennsl/rebase
```

Then add `@glennsl/rebase` to `bs-dependencies` in your `bsconfig.json`:
```js
{
  ...
  "bs-dependencies": ["@glennsl/rebase"]
}
```
