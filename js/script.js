const tempo = document.getElementById("tempo")

var min = 3
var seg = 60

var timer = setInterval( function() {
    seg--

    if( seg == -1 ) {
        min--
        seg = 59
    }

    tempo.innerHTML = (seg < 10) ? min + ":0" + seg : min + ":" + seg

    if( min == 0 && seg <= 30 ) {
        tempo.style.color = "red"
    }
    
    if( min == 0 && seg == 0) {
        clearInterval(timer)
    }
}, 1000 )