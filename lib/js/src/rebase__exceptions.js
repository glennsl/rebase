'use strict';

var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");

var InvalidArgument = Caml_exceptions.create("Rebase__exceptions.InvalidArgument");

var IndexOutOfBounds = Caml_exceptions.create("Rebase__exceptions.IndexOutOfBounds");

var NotFound = Caml_exceptions.create("Rebase__exceptions.NotFound");

exports.InvalidArgument  = InvalidArgument;
exports.IndexOutOfBounds = IndexOutOfBounds;
exports.NotFound         = NotFound;
/* No side effect */
