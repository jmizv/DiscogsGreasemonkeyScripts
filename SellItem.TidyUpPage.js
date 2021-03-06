// ==UserScript==
// @name     Tidy up the sell item page
// @namespace   jmizv
// @include     https://www.discogs.com/sell/post/*
// @version  1
// @grant    none
// ==/UserScript==

var removePleaseVerify = true;
var removeHowToGrade = true;
var removeItemLocation = true;
var removePrivateComments = true;
var removeShippingPolicyPromotion = true;
var removeListingIsFree = true;

var checkAllowOffers = true;

// collect the elements to remove here
var elementsToRemove = [
];

if (removeHowToGrade === true) {
    var elementHowToGrade = document.getElementsByTagName("a");
    for(var i=0;i<elementHowToGrade.length;++i) {
        var elem = elementHowToGrade[i];
        if (elem.getAttribute("href") === "/help/marketplace/mp-grading") {
            elementsToRemove.push(elem);
        }
    }
}

if (removePleaseVerify === true) {
    var elements = document.getElementsByClassName("page_description push_down");
    for(var i=0;i<elements.length;++i) {
        elementsToRemove.push(elements[i]);
    }
}

var elementsFormField = document.getElementsByClassName("form-field");
if (removeItemLocation === true) {
    elementsToRemove.push(elementsFormField[3]);
}
if (removePrivateComments === true) {
    elementsToRemove.push(elementsFormField[4]);
}

if (removeShippingPolicyPromotion === true) {
    var elements = document.getElementsByClassName("shipping-policy-promotion");
    for (var i=0;i<elements.length;++i) {
        elementsToRemove.push(elements[i]);
    }
}

if (removeListingIsFree === true) {
    var elements = document.getElementsByClassName("fieldset-description");
    for (var i=0;i<elements.length;++i) {
        elementsToRemove.push(elements[i]);
    }
}

// now the final removing
for (var i=0;i<elementsToRemove.length;++i) {
    elementsToRemove[i].remove();
}

var checkBoxToSelect = document.getElementById("accept_offer");
if (checkAllowOffers === true && checkBoxToSelect) {
    checkBoxToSelect.checked = true;
}