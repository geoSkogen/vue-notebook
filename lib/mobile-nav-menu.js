'use strict'

var open_nav = document.querySelector(".hamburger")
var close_nav = document.querySelector("#closeMobileNav")
var nav = document.querySelector(".mobileNavMenu")
var selectors = ["header", ".appScreen", ".geoBlock", "footer"]

open_nav.addEventListener("click", openNav)
close_nav.addEventListener("click", closeNav)

function openNav() {
  nav.style.left = "0"
  for (let i = 0; i < selectors.length; i++) {
    document.querySelector(selectors[i]).style.opacity = "0.3"
  }
}

function closeNav() {
  nav.style.left = "-70%"
  for (let i = 0; i < selectors.length; i++) {
    document.querySelector(selectors[i]).style.opacity = "1"
  }
}
