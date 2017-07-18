var front = document.getElementsByClassName("front");
var back = document.getElementsByClassName("back");
var images = document.getElementsByClassName("imagesFront");
var imagesBack = document.getElementsByClassName("imagesBack");
var imagePlace = document.getElementsByTagName("img");
var source = ["img/aaron.png", "img/aaron.png", "img/timothee.png", "img/timothee.png", "img/christophe.png", "img/matthieud.png", "img/anass.png", "img/anass.png", "img/thomas.png", "img/thomas.png", "img/leila.png", "img/leila.png", "img/thierry.png", "img/thierry.png"];
var hasard = Math.floor(Math.random() * source.length);
var dive = document.getElementById('imgs');
var replay = document.getElementById("playagain");

//function reste visible quand bon

//function rafraichir avec button

function pl(){
  dive.style.visibility = "visible";
  replay.style.visibility = "hidden";
}



//Pour le random
function random(){
for (var j = 0; j < source.length; j++) {
  var index = 0;
  index = source[j];
  hasard;
  source[j] = source[hasard];
  source[hasard] = index;
}
}



//EVENEMENT CLICK
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        turn(i);
    });
}


// function paire(index) {
//   console.log(source);
//    for (var y = 0; y < source.length; y++) {
//      source[i] =
//    }
//         if (source[i] == imagesBack[index].src) {
//
//         } else {
//
//           setTimeout(function() {
//               images[index].classList.toggle("back");
//               source.classList.toggle("back");
//               images[index].style.visibility = "visible";
//             }, 500);
//         }
//         source = "";
//     }
// }



//POUR RETOURNER LES IMAGES AVEC ONCLICK

function turn(index) {
    images[index].classList.toggle("front");
    images[index].style.visibility = "hidden";
    // paire(index);
}



//si c'est pas la bonne source on rajoute la classe donc toggle pour refaire apparaitre l'image de derrière









//Appeler la fonction
