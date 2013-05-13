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
// @version        0.4
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
  // From http://stackoverflow.com/questions/1720320/how-to-dynamically-create-css-class-in-javascript-and-apply
  var style = document.createElement( "style" );
  style.type = "text/css";
  style.innerHTML = ".black-html { background-color: #000; }";

  // We just put the style element on the html element
  htmlElement[ 0 ].appendChild( style );

  htmlElement[ 0 ].setAttribute( "dark-by-default", "dark-by-default" );
  addClass( htmlElement[ 0 ], "dark-by-default" );
  addClass( htmlElement[ 0 ], "black-html" );
  window.addEventListener( "load", function() {
    removeClass( htmlElement[ 0 ], "black-html" );
  }, false );
}