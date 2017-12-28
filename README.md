# rebase
A minimal base library intended for the BuckleScript/Reason ecosystem. It uses Reasonable conventions, and is easily consumed via npm.

[![npm](https://img.shields.io/npm/v/reason-rebase.svg)](https://npmjs.org/reason-rebase)
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
* Do not expose anything platform-specific

## Installation

```sh
npm install --save reason-rebase
```

Then add `reason-rebase` to `bs-dependencies` in your `bsconfig.json`:
```js
{
  ...
  "bs-dependencies": ["reason-rebase"]
}
```
