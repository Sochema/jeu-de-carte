var front = document.getElementsByClassName("front");
var back = document.getElementsByClassName("back");
var images = document.getElementsByClassName("imagesFront");
var imagesBack = document.getElementsByClassName("imagesBack");
var imagePlace = document.getElementsByTagName("img");
var hasard = imagesBack[Math.floor(Math.random() * imagesBack.length)];
var source = "";

var play = document.getElementById("play");
var replay = document.getElementById("playagain");


//function reste visible quand bon

//function rafraichir avec button

function play(){
  imagesBack[i] = hasard;
  play.style.display = "block";
  replay.style.display = "none";
  jeu.style.visibility = "visible";
}

  function random(){
    imagesBack[i] = hasard;
  }

for (var i = 0; i < imagesBack.length; i++) {
  imagesBack[i].addEventListener("click", function(){
    hasard;
  })
}


//EVENEMENT CLICK
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        turn(i);
    });
}


function paire(index) {
  console.log(source);
    if (source == "") {
        source = imagesBack[index];
    } else {
        if (source.src == imagesBack[index].src) {

        } else {
          setTimeout(function() {
              images[index].classList.toggle("back");
              source.style.zIndex = "2";
              images[index].style.visibility = "visible";
            }, 500);
        }
        source = "";
    }
}



//POUR RETOURNER LES IMAGES AVEC ONCLICK

function turn(index) {
    images[index].classList.toggle("front");
    images[index].style.visibility = "hidden";
    paire(index);
}



//si c'est pas la bonne source on rajoute la classe donc toggle pour refaire apparaitre l'image de derrière









//Appeler la fonction
