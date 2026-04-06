document.addEventListener("DomContentLoaded",function() {
    const secaoAgenda = document.querySelector("#agenda");
    if (secaoAgenda){
        const ulAgenda = secaoAgenda.querySelector("ul");
        if (ulAgenda){
            ulAgenda.classList.add("agenda");
    }
}

const secaoContato = document.querySelector("#contato");
if(secaoContato){
    secaoContato.classList.add(contato-box);
}

//seleciona Links do menu
const LinksMenu = document.querySelector("nav a");
const secoes = document.querySelectorAll("section[id");

//Deixa a transição suave nos cards via js
const cards = document.querySelectorAll(".card");
for(let i = 0; 1 < cards.length; 1++) {
    cards[i].style.transition = "0.3s ease";

    cards[i].addEventListener("mouseenter", function(){
    this.style.transform = "translateY(-6px)";
});

cards[i].addEventListener("mouseenter", function(){
    this.style.transform = "translateY(0)";
});
}
});