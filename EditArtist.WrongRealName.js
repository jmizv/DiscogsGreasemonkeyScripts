// ==UserScript==
// @name        Discogs.EditArtist.WrongRealName
// @namespace   jmizv
// @include     https://www.discogs.com/artist/*/update
// @version     1
// @grant       none
// ==/UserScript==
var heading = document.getElementsByTagName('h2');
for(i=0;i<heading.length;++i){
  var buttonElem = document.createElement('div');
  buttonElem.innerHTML='<button id="myButton" type="button">Correct real name</button>';
  buttonElem.setAttribute('id','myContainer');
  heading[0].parentNode.insertBefore(buttonElem, heading[0]);
  
  document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
  );

  function ButtonClickAction (zEvent) {
    document.getElementById("realname").setAttribute('value','');
    document.getElementById("subnotes").innerHTML='Correct use of "Real name", cf. [g18.1].';
    document.getElementById("previewBtn").click();
  }
  var value = document.getElementById("realname").getAttribute('value');
  document.getElementById("myButton").disabled = value == null || value==='';
  break;
}
