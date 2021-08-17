var altura, largura = 0;
var vidas = 3;
var tempo = 10;
var tempoMosquito = 1500;

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal'){
    tempoMosquito = 1500;
}
else if (nivel === 'dificil') {
    tempoMosquito = 1000;
}
else {
    tempoMosquito = 750;
}

function ajustaTamanho() {
    altura = window.innerHeight;
    largura = window.innerWidth;

}
ajustaTamanho()
posRandom()
document.getElementById('cronometer').innerHTML = tempo;

var cronometro = setInterval(function() {
    tempo--;
    if (tempo < 0) {
        clearInterval(cronometro);
        clearInterval(criaMosquito);
        window.location.href = "vitoria.html"
    }
    else {
        document.getElementById('cronometer').innerHTML = tempo;
    }
},1000)

var criaMosquito = setInterval(function() {
    posRandom()
}, tempoMosquito);

function posRandom() {
//Remover mosquito anterior caso exista
    if (document.getElementById('mosquito')) {
        document.getElementById('mosquito').remove()
        if (vidas == 0) {
            window.location.href = "game_over.html"
        }
        else {

            document.getElementById('v' + vidas).src = "img/coracao_vazio.png";
            vidas--;
        }
    }

    var posX = Math.floor(Math.random() * largura) - 90;
    var posY = Math.floor(Math.random() * altura) - 90;
    
    posX = posX < 0 ? 0 : posX;
    posY = posY < 0 ? 0 : posY;
    
    console.log(posX,posY)
    //Criação do elemento HMTL img
    var mosquito = document.createElement('img');
    mosquito.src = 'img/mosca.png';
    mosquito.className = tamRandom() + ' ' + randomSide();
    mosquito.style.left = posX + 'px';
    mosquito.style.top = posY + 'px';
    mosquito.style.position = 'absolute';
    mosquito.id = 'mosquito';
    mosquito.onclick = function() {
        this.remove();
    }
    document.body.appendChild(mosquito);

    tamRandom()
}
function tamRandom() {
    var classe = Math.floor(Math.random() * 3);
    switch(classe) {
        case 0:
            return 'mosquito1';
        case 1:
            return 'mosquito2';
        case 2:
            return 'mosquito3';
    
    }
}
function randomSide() {
    var lado = Math.floor(Math.random() * 2);
    switch(lado) {
        case 0:
            return 'aSide';
        case 1:
            return 'bSide';
    }
}