// ==UserScript==
// @name        Difference Contributors
// @namespace   jmizv
// @include     https://www.discogs.com/stats/contributors*
// @version     1
// @grant       none
// ==/UserScript==
var cells = document.getElementsByTagName('tr');
var currUser = document.getElementById('site_account_menu');
var currUserName = currUser.getAttribute('data-title').replace('Logged in as ','');

counter = 0;
var vals = [
];
for (i = 0; i < cells.length; ++i)
{
  if (cells[i].className == 'odd' || cells[i].className == 'even')
  {
    vals.push(cells[i].childNodes[5]);
  }
} // ####

for (i = 0; i < vals.length; ++i)
{


  // Hier den aktuellen Nutzer mal highlighten.
    var hrf = vals[i].parentNode.childNodes[3].childNodes[1].childNodes[1].getAttribute('href');
    if(hrf.indexOf(currUserName) != -1 && (hrf.indexOf(currUserName) == (hrf.length - currUserName.length)))
    {
      vals[i].parentNode.style.background = '#efdfdf';
    }

  var nEl = document.createElement('td');
  if (i != 0)
  {
    nEl.textContent = diff(vals, i - 1, i, '⬆');
  } 
  else
  {
    nEl.textContent = ' ';
  }
  vals[i].parentNode.appendChild(nEl);
  var fEl = document.createElement('td');
  if (i != 0)
  {
    fEl.textContent = "⬆ " + diff(vals, 0, i);
  } 
  else {
    fEl.textContent = ' ';
  }
  vals[i].parentNode.appendChild(fEl);
  var lEl = document.createElement('td');
  if (i != vals.length - 1)
  {
    lEl.textContent = "⬇ " + diff(vals, i, vals.length - 1);
  } 
  else
  {
    lEl.textContent = ' ';
  }
  vals[i].parentNode.appendChild(lEl);
}
function diff(vals, i1, i2) {
  return parseInt(vals[i1].textContent.replace(',', '')) - parseInt(vals[i2].textContent.replace(',', ''))
}
