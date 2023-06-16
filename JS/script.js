const cards = document.getElementsByClassName("allCards");
const flipcard = document.getElementsByClassName("flip-card");
const animeImg = document.getElementsByClassName("animeImg");
const h1Anime = document.getElementsByClassName("h1Anime");
let h1AnimeValue;  /* igualar al valor de h1Anime para poder reemplazarlo luego */
let flipCardBtn = document.querySelectorAll('.flipCardBtn');

switch (cards.length % 3) {
	case 1:
		cards[cards.length - 1].style.margin = "0 auto";
		break;
	case 2:
		cards[cards.length - 1].style.margin = "0 auto";
		cards[cards.length - 2].style.margin = "0 auto";
		break;
}


flipCardBtn.forEach(function(flipCardBtn) {
  let flipCardFather = flipCardBtn.closest('.flip-card');

  flipCardBtn.addEventListener('click', function() {
    flipCardFather.classList.toggle('expandCard');
  });
});















/* function expandCards() {
	cards[8].classList.replace("col-4", "col-12"); - para cambiar la imagen usar el nombre del h1, la primera letra en mayusculas
	flipcard[9].classList.add("expandCard")
} */



/* .replace("Mairimashita! ", "");
.replace("One Piece: Episode A", "onePieceEpisodeA");
.replace("spy x family", "spyXFamily");
.replace(" ", "");
.replace(":", "");
.replace(";", "");
.replace("/", "");
.replace("", ""); */

/* 	
		cambiar col-4 por col-12
		cambiar height y width
		cambiar background
*/