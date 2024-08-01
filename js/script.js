const tempo = document.getElementById("tempo")
const fim = document.getElementById("fim")

function venceu() {
    if(controle) {
        clearInterval(timer)
        fim.innerHTML = "Você venceu!"
        fim.style.display = "block"
    }
}

function bateu() {
    if(controle) {
        clearInterval(timer)
        fim.style.display = "block"
    }
}

var min = 1
var seg = 60
var timer
var controle = false

function iniciar() {
    controle = true

    timer = setInterval( function() {
        seg--

        if( seg == -1 ) {
            min--
            seg = 59
        }

        tempo.innerHTML = (seg < 10) ? min + ":0" + seg : min + ":" + seg

        if( min == 0 && seg == 0 ) {
            clearInterval(timer)
            fim.style.display = "block"
        }

        if( min == 0 && seg <= 10 ) {
            tempo.style.color = "red"
        }

    }, 1000 )
}