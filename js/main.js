var front = document.getElementsByClassName("front");
var back = document.getElementsByClassName("back");
var images = document.getElementsByClassName("imagesFront");
var imagesBack = document.getElementsByClassName("imagesBack");
var imagePlace = document.getElementsByTagName("img");
var hasard = imagesBack[Math.floor(Math.random() * imagesBack.length)];

console.log(front);

// function jeu (el){
//   turn(back);
//
// }

//function random random(images); FAIT

//function onclick FAIT


//function reste visible quand bon

//function rafraichir avec button


// function random(){
//   for (var i = 0; i <hasard.length; i++) {
//     hasard[i].innerHTML = imagePlace;
//   }
// }




// if (imagesBack[i].src == imagesBack){
//
//
// } else {
//   images[i].classList.toggle("front");
// }





//EVENEMENT CLICK
for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
      turn(i);
  });
}







//POUR RETOURNER LES IMAGES AVEC ONCLICK

function turn(index){
  images[index].classList.toggle("front");
  images[index].style.display = "none";
  //imagesBack[index].classList.add("front");

}



//si c'est pas la bonne source on rajoute la classe donc toggle pour refaire apparaitre l'image de derrière



















    //Appeler la fonction
