// JavaScript Document

// variabelen

var button = document.querySelector("button");
var hartje = document.querySelector("div");

// function

function likeButton() {
    hartje.classList.toggle("hartje");
}

console.log(button);

// eventlistener

addEventListener('click', likeButton);
console.log("button was clicked");