
const contador = document.getElementById("valores")

var miliseg = 0
var seg = 0
var min = 0
var hora = 0

var interval;

var paradaForcada = false

function start(){
    if(!paradaForcada){
        document.getElementById("comecar").classList.toggle("clicado")
        
        if(document.getElementById("parar").classList.contains("clicado")){
            document.getElementById("parar").classList.toggle("clicado")
        }
        interval = setInterval(() => {
            miliseg++
            
            conversao()
            mostrar()
        }, 10);
    }
    
    
}

function stop(){
    document.getElementById("parar").classList.toggle("clicado")
    if(document.getElementById("comecar").classList.contains("clicado")){
        document.getElementById("comecar").classList.toggle("clicado")
    }
    clearInterval(interval)
}

function conversao(){

    if(miliseg == 100){
        miliseg = 0
        seg++
    }

    if(seg == 60){
        seg = 0
        min++
    }

    if(min == 60){
        min = 0
        hora++
    }

    if(hora == 99 && min == 59 && seg == 59 && miliseg == 99){
        stop()
        paradaForcada = true
    }

}

function mostrar(){

    let horaString = hora.toString();
    if(hora < 10){
        horaString = "0" + horaString
    }
    let minString = min.toString();
    if(hora < 10){
        minString = "0" + minString
    }
    let segString = seg.toString();
    if(seg < 10){
        segString = "0" + segString
    }
    let miliString = miliseg.toString();
    if(miliseg < 10){
        miliString = "0" + miliString
    }
    contador.innerHTML = `${horaString}:${minString}:${segString}:${miliString}`
}