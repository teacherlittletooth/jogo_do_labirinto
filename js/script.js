const tempo = document.getElementById("tempo")
const gameOver = document.getElementById("game-over")

var min = 0
var seg = 60

var timer = setInterval( function(){
    seg--

    if( seg == -1 ) {
        seg = 59
        min--
    }

    tempo.innerHTML = (seg < 10) ? min + ":0" + seg : min + ":" + seg

    if( seg == 0 && min == 0 ) {
        clearInterval(timer)
        gameOver.style.display = "block"
    }

}, 1000 )


function bateu() {
    clearInterval(timer)
    gameOver.style.display = "block"
}