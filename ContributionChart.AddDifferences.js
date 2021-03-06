// ==UserScript==
// @name        Difference Contributors
// @namespace   jmizv
// @include     https://www.discogs.com/stats/contributors*
// @version     2
// @grant       none
// ==/UserScript==
var cells = document.getElementsByTagName('tr');
var currUser = document.getElementById('site_account_menu');
var currUserName = currUser.getAttribute('data-title').replace('Logged in as ','');
var header = document.getElementsByTagName('thead');

// first collect the points 
counter = 0;
var values = [
];
for (i = 0; i < cells.length; ++i) {
  if (cells[i].className == 'odd' || cells[i].className == 'even') {
    values.push(cells[i].childNodes[5]);
  }
}

// add table header
var headerRow = header[0].childNodes[1];

function createAdditionalHeader(text) {
  var headerElementToNext = document.createElement("th");
  headerElementToNext.textContent = text;
  headerRow.appendChild(headerElementToNext);
}

createAdditionalHeader("Points to next");
createAdditionalHeader("Points to Top");
createAdditionalHeader("Points to Bottom");

// add new table columns
for (i = 0; i < values.length; ++i) {
  // Try to highlight current user
    var hrf = values[i].parentNode.childNodes[3].childNodes[1].childNodes[1].getAttribute('href');
    if (hrf.indexOf(currUserName) != -1 && (hrf.indexOf(currUserName) == (hrf.length - currUserName.length))) {
      values[i].parentNode.style.background = '#efdfdf';
    }

  var nEl = document.createElement('td');
  if (i != 0) {
    nEl.textContent = diff(values, i - 1, i, '⬆');
  } else {
    nEl.textContent = ' ';
  }
  values[i].parentNode.appendChild(nEl);
  var fEl = document.createElement('td');
  if (i != 0) {
    fEl.textContent = "⬆ " + diff(values, 0, i);
  } else {
    fEl.textContent = ' ';
  }
  values[i].parentNode.appendChild(fEl);
  var lEl = document.createElement('td');
  if (i != values.length - 1) {
    lEl.textContent = "⬇ " + diff(values, i, values.length - 1);
  } else {
    lEl.textContent = ' ';
  }
  values[i].parentNode.appendChild(lEl);
}

function diff(values, i1, i2) {
  return parseInt(values[i1].textContent.replace(',', '')) - parseInt(values[i2].textContent.replace(',', ''))
}
