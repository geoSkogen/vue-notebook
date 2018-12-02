'use strict'

var modal = document.querySelector(".mobileSearchModal")
var open_modals = document.querySelectorAll(".look")
var close_modal = document.querySelector("#closeSearchModal")
var selectors = ["header", ".appScreen", ".geoBlock", "footer"]
var opacity_count = 0

open_modals[0].addEventListener("click", openModal)
open_modals[1].addEventListener("click", openModal)
close_modal.addEventListener("click", closeModal)

function resetOpacity(num) {
  for (let i = 0; i < selectors.length; i++) {
      document.querySelector(selectors[i]).style.opacity = num
  }
}

function openModal() {
  modal.style.display = "block"
  var interval = setInterval(fadeIn, 5)
  resetOpacity(0.3)

  function fadeIn() {
    if (opacity_count > 0.99) {
      opacity_count = 1
      clearInterval(interval)
    } else {
      opacity_count = (opacity_count * 100 + 1)/100
      modal.style.opacity = opacity_count
    }
  }
}

function closeModal() {
  var interval = setInterval(fadeOut, 5)
  resetOpacity(1)

  function fadeOut() {
    if (opacity_count < 0.05) {
      opacity_count = 0
      modal.style.display = "none"
      clearInterval(interval)
    } else {
      opacity_count = (opacity_count * 100 - 1)/100
      modal.style.opacity = opacity_count
    }
  }
}
