// Copyright (C) 2015 André Bargull. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-arraybuffer.isview
es6id: 24.1.3.1
description: >
  ArrayBuffer.isView.name is "isView".
info: >
  ArrayBuffer.isView ( arg )

  17 ECMAScript Standard Built-in Objects:
    Every built-in Function object, including constructors, that is not
    identified as an anonymous function has a name property whose value
    is a String.

    Unless otherwise specified, the name property of a built-in Function
    object, if it exists, has the attributes { [[Writable]]: false,
    [[Enumerable]]: false, [[Configurable]]: true }.
includes: [propertyHelper.js]
---*/

assert.sameValue(ArrayBuffer.isView.name, "isView");

verifyNotEnumerable(ArrayBuffer.isView, "name");
verifyNotWritable(ArrayBuffer.isView, "name");
verifyConfigurable(ArrayBuffer.isView, "name");

reportCompare(0, 0);
