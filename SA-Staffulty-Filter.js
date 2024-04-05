// ==UserScript==
// @name        Filter Faculty sonomaacademy.org
// @namespace   Violentmonkey Scripts
// @match       https://www.sonomaacademy.org/about/meet-us-faculty--staff*
// @grant       none
// @version     1.0
// @author      -
// @description 3/5/2024, 3:21:34 PM
// ==/UserScript==

var staffultyElements;
var staffultyArray = [];
var searchBar;

let init = function() {
  console.log("Init Started");
// Staffuly Elements/List
  staffultyElements = document.querySelector('#content_1903384').children[0].children[0].children[0].children;
  for (let i = 0; i < staffultyElements.length; i++) {
    let profile = staffultyElements[i];
    staffultyArray.push([profile.children[1].innerHTML.toLowerCase(), profile]);
  }
  console.log(staffultyArray)

// Search Bar
  searchBar = document.createElement("input");
  searchBar.setAttribute("type", "text");
  searchBar.setAttribute("placeholder", "Staffuly Name");

  searchBar.addEventListener("input", search);

  document.querySelector('#content_1903384 > div > div > ul').style.gridTemplateColumns = "repeat(5, 18%)";
  document.querySelector('#content_1903384').prepend(searchBar);

  console.log("Init Finished");
}

let search = function() {
  let userSearch = searchBar.value.toLowerCase();
  staffultyArray.forEach((e) => {e[1].style.display = (e[0].includes(userSearch)) ? "grid" : "none";});
}


window.addEventListener("load", init);
