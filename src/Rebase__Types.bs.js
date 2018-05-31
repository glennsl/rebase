'use strict';

var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var InvalidArgument = Caml_exceptions.create("Rebase__Types.InvalidArgument");

var IndexOutOfBounds = Caml_exceptions.create("Rebase__Types.IndexOutOfBounds");

var NotFound = Caml_exceptions.create("Rebase__Types.NotFound");

exports.InvalidArgument = InvalidArgument;
exports.IndexOutOfBounds = IndexOutOfBounds;
exports.NotFound = NotFound;
/* No side effect */
