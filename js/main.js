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

//function random random(images);

//function onclick


//function reste visible quand bon

//function rafraichir avec button


// function random(){
//   for (var i = 0; i <hasard.length; i++) {
//     hasard[i].innerHTML = imagePlace;
//   }
// }






// function return(){
//   imagePlace.style.transform = "rotate(20deg)";
// }



//EVENEMENT CLICK
for (var i = 0; i < imagesBack.length; i++) {
    imagesBack[i].addEventListener('click', function() {
        turn(this);
    });
}


// for (var i = 0; i < images.length; i++) {
//   images[i].addEventListener('click', function(){
//     retourne(this);
//   })
// }

// POUR RETOURNER IMAGES1 SUR IMAGES2
function turn(imagesBack) {
    var id = setInterval(reverse, 10);
    var width = 0;

    function reverse(){
        if (width === 120){
            clearInterval(id);
            images.style.display = "none";
            imagesBack.style.display = "block";
    } else {
        width++;
        imagesBack.style.left = width + 'px';
    }
  }
}

//
// cancelAnimationFrame(turn);
//
// function retourne(images) {
//     var id = setInterval(reverse, 10);
//     var width = 120;
//
//     function reverse(){
//         if (width === 0){
//             clearInterval(id);
//             images.style.display = "block";
//     } else {
//         width++;
//         images.style.width = width + 'px';
//     }
//   }
// }












    //Appeler la fonction
