// |reftest| skip -- BigInt is not supported
// Copyright (C) 2017 Josh Wolfe. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: pending
description: BigInt.asIntN type coercion for bits parameter
info: >
  BigInt.asIntN ( bits, bigint )

  1. Let bits be ? ToIndex(bits).

features: [BigInt, Symbol, Symbol.toPrimitive]
includes: [typeCoercion.js]
---*/

testCoercibleToIndexZero(function(zero) {
  assert.sameValue(BigInt.asIntN(zero, 1n), 0n);
});

testCoercibleToIndexOne(function(one) {
  assert.sameValue(BigInt.asIntN(one, 1n), -1n);
});

testCoercibleToIndexFromIndex(3, function(three) {
  assert.sameValue(BigInt.asIntN(three, 10n), 2n);
});

testNotCoercibleToIndex(function(error, value) {
  assert.throws(error, function() { BigInt.asIntN(value, 0n); });
});

reportCompare(0, 0);
