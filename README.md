# rebase
A minimal base library intended for the BuckleScript/Reason ecosystem. It uses Reasonable conventions, and is easily consumed via npm. 

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