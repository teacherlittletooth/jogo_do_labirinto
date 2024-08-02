const timer = document.getElementById("timer")
const fim = document.getElementById("fim")

var controle = false
var tempo
var min = 1
var seg = 60

function iniciar() {
    controle = true

    tempo = setInterval(function(){
        seg--

        if(seg == -1) {
            min--
            seg = 59
        }


        if( min == 0 && seg == 0 ){
            perder()
        }

        timer.innerHTML = (seg < 10) ? min + ":0" + seg
                                     : min + ":" + seg

    }, 100)
}

function perder() {
    if(controle) {
        fim.style.display = "block"
        controle = false

        clearInterval(tempo)

        setTimeout(function(){
            window.location.reload()
        }, 5000)
    }
}

function ganhar() {
    if(controle) {
        fim.innerHTML = "VOCÊ VENCEU!"
        fim.style.display = "block"
        controle = false

        clearInterval(tempo)

        setTimeout(function(){
            window.location.reload()
        }, 5000)
    }
}