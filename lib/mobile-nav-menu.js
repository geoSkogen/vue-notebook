'use strict'

window.addEventListener("load",initMobileNavMenu)

function initMobileNavMenu() {

var open_nav = document.querySelector(".hamburger")
var close_nav = document.querySelector("#closeMobileNav")
var nav = document.querySelector(".mobileNavMenu")
var selectors = ["header", ".appScreen", ".geoBlock", "footer"]
var left_count = -70

open_nav.addEventListener("click", openNav)
close_nav.addEventListener("click", closeNav)

function resetOpacity(num) {
  for (let i = 0; i < selectors.length; i++) {
      document.querySelector(selectors[i]).style.opacity = num
  }
}

function openNav() {
  var interval = setInterval(slideIn, 5)
  resetOpacity(0.3)

  function slideIn() {
    if (left_count === 0) {
      clearInterval(interval)
    } else {
      left_count++
      nav.style.left = left_count.toString() +"%"
    }
  }
}

function closeNav() {
  var interval = setInterval(slideIn, 5)
  resetOpacity(1)

  function slideIn() {
    if (left_count === -70) {
      clearInterval(interval)
    } else {
      left_count--
      nav.style.left = left_count.toString() +"%"
    }
  }
}

}
