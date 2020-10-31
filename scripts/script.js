// JavaScript Document

// variabelen

var button = document.querySelector("button");
var hartje = document.querySelector("div");
var nieuwsbriefsKnop = document.querySelector('#nieuwsbrief');
var antwoordTekst = document.querySelector('#antwoord');

setTimeout(signUp, 1000);

// function

function likeButton() {
    hartje.classList.toggle("hartje");
}

function signUp() {
    antwoordTekst.textContent = 'Thank you for signing up!';
}


// eventlistener

addEventListener('click', likeButton);
nieuwsbriefsKnop.addEventListener('click', signUp);



console.log(button);




console.log("button was clicked");