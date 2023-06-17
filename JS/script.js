const cards = document.getElementsByClassName("allCards");
let flipCardBtn = document.querySelectorAll('.flipCardBtn');
let closeClickBtn = document.querySelectorAll('.closeClickBtn');

switch (cards.length % 3) {
  case 1:
    cards[cards.length - 1].style.margin = "0 auto";
    break;
  case 2:
    cards[cards.length - 1].style.margin = "0 auto";
    cards[cards.length - 2].style.margin = "0 auto";
    break;
}


flipCardBtn.forEach(function (flipCardBtn) {
  let allCards = flipCardBtn.closest('.allCards');
  let flipCardClick = flipCardBtn.parentElement.previousElementSibling;
  let flipCard = flipCardBtn.parentElement.parentElement.parentElement;
  let bgImgVar = flipCardBtn.closest('.flip-card-back').querySelector('h1').textContent
    .replace("Mairimashita! ", "")
    .replace("One Piece: Episode A", "onePieceEpisodeA")
    .replace("spy x family", "spyXFamily")
    .replace("no", "No")
    .replace(/ /g, "")
    .replace(":", "")
    .replace(";", "")
    .replace("/", "")
    .replace("", "");
  bgImgVar = bgImgVar.charAt(0).toLowerCase() + bgImgVar.slice(1);


  flipCardBtn.addEventListener('click', function () {
    flipCard.classList.add('expandCard');
    allCards.classList.add('position-relative');


    allCards.classList.replace('col-4', 'col-12');


    flipCardClick.style.backgroundImage = `url(../IMG/wallpapers/animes/${bgImgVar}.jpg)`;




    flipCardClick.classList.replace('d-none', 'd-block');
    flipCard.classList.remove('flip-card')

  });




});

closeClickBtn.forEach(function (closeClickBtn) {
  let flipCard = closeClickBtn.parentElement.parentElement.parentElement.parentElement;
  let allCards = closeClickBtn.closest('.allCards')
  let flipCardClick = closeClickBtn.parentElement.parentElement;


  closeClickBtn.addEventListener('click', function () {
    flipCard.classList.remove('expandCard');
    flipCard.classList.add('flip-card');
    allCards.classList.remove('position-relative');
    allCards.classList.replace('col-12', 'col-4');
    flipCardClick.classList.replace('d-block', 'd-none');

  })




})








/* si es divisible 3 hacer que los dos de atras bajen y un break, si es divisible 2 hacer que bajen el de atras y adelante y un break, y si es divisible a 1 hacer que bajen los dos de adelante */