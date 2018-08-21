'use strict'

var bools = [true, false]
var rules = ["block", "none"]

class Elm {
  constructor (displayArg) {
    this.style = {display: ""}
    this.style.display = displayArg
    this.toggleDisplay()
  }
  toggleDisplay() {
      var thisRule = this.style.display
      this.style.display = rules[bools.indexOf(!bools[rules.indexOf(thisRule)])]
  }
}

class Factory {
  constructor (int) {
    this.makeElms(int)
  }
  makeElms(int) {
    var result = []
    var argIndex = -1
    for (let i = 0; i < int; i++) {
      argIndex = Math.round(Math.random())
      result.push(new Elm(rules[argIndex]))
    }
    return result
  }
}

function Main() {
  var autoFac = new Factory
  var elmArr = autoFac.makeElms(30)
  console.log(JSON.stringify(elmArr))
  elmArr.forEach( function (elm) {
    elm.toggleDisplay()
  })
  console.log(JSON.stringify(elmArr))
}

Main()
