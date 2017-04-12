var form = document.getElementById('formulario');

var hr;
var min;
var seg;

var hrOriginal;
var minOriginal;
var segOriginal;

//document.getElementById('formulario').reset();
//#6495ED
form.addEventListener('submit', function(e) {
    document.getElementById("timer").style.color="black";
    document.title = "Cronômetro Regressivo";

    var campoHr = document.getElementById('hora');
    var campoMin = document.getElementById('minuto');
    var campoSeg = document.getElementById('segundo');

    hr = campoHr.value;
    min = campoMin.value;
    seg = campoSeg.value;

    //console.log("hr "+ hr + " min "+ min + " seg " + seg);

    hrOriginal = hr;
    minOriginal = min;
    segOriginal = seg;
    // alerta o valor do campo
    //alert(campoHr.value);
    mostrarTempo(hr, min, seg);
    document.getElementById('formulario').reset();
    // impede o envio do form
    e.preventDefault();
});

function mostrarTempo(hora, minuto, segundo){
    if(hora < 10){
        hora = '0' + hora;
    }
    if(minuto < 10){
        minuto = '0' + minuto;
    }
    if(segundo < 10){
        segundo = '0' + segundo;
    }
    document.getElementById("timer").innerHTML = ""+hora+":"+minuto+":"+segundo+"";
    document.title = ""+hora+":"+minuto+":"+segundo+"";
}

function contagem(){
    if(hr == 0 && min == 0 && seg <= 0){
        clearTimeout(timerID);
        mostrarTempo(0, 0, 0);
        document.getElementById("timer").style.color="red";
        document.title = "FIM";

    }else {

        seg--;
        if(seg < 0){
            seg = 59;
            min = min-1;
        }
    	if(min <= 0){
    	   min = 59;
    	   hr = hr-1;
        }
        if(hr < 0){
            hr = 0;
            min = 0;
        }

        console.log(min);
        mostrarTempo(hr, min, seg);
        timerID = setTimeout("contagem()",1000);

    }
}

function pausaContagem(){
    clearTimeout(timerID);
}

function reiniciaContagem(){
    mostrarTempo(hrOriginal, minOriginal, segOriginal);
    document.getElementById("timer").style.color="black";
    clearTimeout(timerID);
    hr = hrOriginal;
    min = minOriginal;
    seg = segOriginal;
    contagem();

}
