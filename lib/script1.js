var app0 = new Vue({
  el: '#app0',
  data: {
    message: "oil.boil()"
  }
})

var app1 = new Vue({
  el: '#app1',
  data: {
    message: "it's " + new Date().toLocaleString() + " for God's sake!!!"
  }
})

var app2 = new Vue({
  el: '#app2',
  data : {
    seen: false
  }
})

var app2Butt = document.getElementById("app2Butt")
app2Butt.addEventListener("click", function () {
  app2.seen = !app2.seen
})

var app3 = new Vue({
  el: '#app3',
  data: {
    todos: [
      {text: "play with a butterfly"},
      {text: "jump"},
      {text: "drive her home in the pumpkin"}
    ]
  }
})

var app4 = new Vue ({
  el: '#app4',
  data: {
    message: "drowning in oil"
  }
})
