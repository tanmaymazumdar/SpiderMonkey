/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


/**
 *  File Name:          boolean-001.js
 *  Description:
 *
 *  In JavaScript 1.2, new Boolean(false) evaluates to false.
 *
 *  Author:             christine@netscape.com
 *  Date:               11 August 1998
 */
var SECTION = "boolean-001.js";
var TITLE   = "new Boolean(false) should evaluate to false";

writeHeaderToLog( SECTION + " "+ TITLE);

BooleanTest( "new Boolean(true)",  new Boolean(true),  true );
BooleanTest( "new Boolean(false)", new Boolean(false), true );
BooleanTest( "true",               true,               true );
BooleanTest( "false",              false,              false );

test();

function BooleanTest( string, object, expect ) {
  if ( object ) {
    result = true;
  } else {
    result = false;
  }

  new TestCase(
    string,
    expect,
    result );
}

