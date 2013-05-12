// ==UserScript==
//
// @name           Dark by Default
// @description    Makes pages dark by default
// @homepage       http://github.com/oliversalzburg/dbd/
// @namespace      http://oliversalzburg.github.com/
// @author         Oliver Salzburg, oliversalzburg (http://github.com/oliversalzburg/)
// @license        MIT License (http://opensource.org/licenses/mit-license.php)
//
// @include        http://*
//
// @version        0.1
//
// ==/UserScript==

// From http://www.avoid.org/?p=78
function hasClass(el, name) {
  return new RegExp('(\\s|^)'+name+'(\\s|$)').test(el.className);
}
function addClass(el, name) {
  if (!hasClass(el, name)) { el.className += (el.className ? ' ' : '') +name; }
}
function removeClass(el, name) {
  if (hasClass(el, name)) {
    el.className=el.className.replace(new RegExp('(\\s|^)'+name+'(\\s|$)'),' ').replace(/^\s+|\s+$/g, '');
  }
}

var htmlElement = document.getElementsByTagName( "html" );
if( htmlElement && htmlElement[ 0 ] ) {
  addClass( htmlElement[ 0 ], "black-html" );
  window.onload = function() {
    removeClass( htmlElement[ 0 ], "black-html" );
  }
}