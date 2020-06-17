// ==UserScript==
// @name        Discogs
// @namespace   http://www.jmizv.de
// @include     https://www.discogs.com/artist/*
// @version     1
// @grant       none
// ==/UserScript==

var result = document.getElementsByTagName('a');
for (i = 0; i < result.length; ++i) {
  if (result[i].id == 'edit_link') {
    result[i].textContent='History';
    
    var space = document.createElement("span");
    space.textContent = " | ";
    result[i].parentNode.appendChild(space);
    
    var nuElement = document.createElement("a");
    nuElement.textContent="Edit Artist";
    var currLoc = window.location.href.split("history")[0];
    //if(currLoc.charAt(currLoc.length-1) == "/") {}
    currLoc += "/"
    nuElement.href = currLoc + "update";
    result[i].parentNode.appendChild(nuElement);
    break;
  }
}
