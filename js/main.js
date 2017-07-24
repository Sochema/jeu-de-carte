var figure = document.getElementsByTagName("figure");
var imagesBack = document.getElementsByClassName("imagesBack");
var source = ["img/aaron.png", "img/aaron.png", "img/timothee.png", "img/timothee.png", "img/christophe.png", "img/christophe.png", "img/matthieud.png", "img/matthieud.png", "img/anass.png", "img/anass.png", "img/thomas.png", "img/thomas.png", "img/leila.png", "img/leila.png", "img/thierry.png", "img/thierry.png"];
var hasard = Math.floor(Math.random() * source.length);
var dive = document.getElementById('imgs');
var play = document.getElementById("play");
var tab = [];
var clicksource = [];
var index = 0;



// FUNCTION SUR BOUTON
function pl() {
    dive.style.visibility = "visible";
    play.innerHTML = "Play Again";
    for (var i = 0; i < figure.length; i++) {
        figure[i].getElementsByTagName('img')[1].style.visibility = "visible";
    }
    random();
}


//RANDOM SUR IMAGESBACK
function random() {
    for (var j = 0; j < source.length; j++) {
        var index;
        var hasard = Math.floor(Math.random() * source.length);
        index = source[j];
        source[j] = source[hasard];
        source[hasard] = index;
    }
    for (var i = 0; i < source.length; i++) {
        imagesBack[i].src = source[i];
    }
    clickJoueur();
}


//EVENEMENT CLICK
function clickJoueur() {
    for (let i = 0; i < figure.length; i++) {
        figure[i].addEventListener('click', pushOntab);
    }
}

function pushOntab() {
    tab.push(this);
    tab[index].getElementsByTagName('img')[1].style.visibility = "hidden";
    clicksource.push(tab[index].getElementsByTagName('img')[0].src);
    index++;
    //  console.log(clicksource);
    if (index == 2) {
        compare();
    }
    // while(clicksource.length <= 2){
    // tab.push(this);
    //  tab[index].getElementsByTagName('img')[1].style.visibility = "hidden";
    //  clicksource.push(tab[index].getElementsByTagName('img')[0].src);
    //  index++;
    //   console.log(clicksource);
    // }
    //  compare();

}

function stop() {
    for (var i = 0; i < figure.length; i++) {
        figure[i].removeEventListener("click", pushOntab);
    }
}


//COMPARE LES SOURCES DES IMAGES
function compare() {
    stop();
    if (clicksource[0] != clicksource[1]) {
        setTimeout(function() {

            tab[0].getElementsByTagName('img')[1].style.visibility = "visible";
            tab[1].getElementsByTagName('img')[1].style.visibility = "visible";
            clicksource = [];
            tab = [];
            index = 0;
            clickJoueur();
        }, 800);
    } else {
        clicksource = [];
        tab = [];
        index = 0;
        clickJoueur();
    }
}
