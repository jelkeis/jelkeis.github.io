function centerLastCards() {      /* MX AUTO EN LAS CARDS FINALES, TENGO QUE PONER QUE TOME TODOS LOS CARDS Y HACER %3 PARA SACAR SI QUEDAN 2 O 1 EXTRAS */
  let cards = document.getElementsByClassName("allCards");
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    let amountOfCards = i;
    switch (amountOfCards%3) {
      case 1:
        let all = document.querySelector("body")
        all.style.display = "none";
        break;
      case 2:

        break;
    }
  }
}


function expandCards() {

}