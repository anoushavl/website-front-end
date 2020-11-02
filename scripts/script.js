// JavaScript Document

// variabelen

var button = document.querySelector("button");
var hartje = document.querySelector("div");
var popupopen = document.getElementById('popupopen');
var popup_container = document.getElementById('popup_container');
var popupclose = document.getElementById('popupclose');
var overlay = document.getElementById('overlay');


// function

function likeButton() {
    hartje.classList.toggle("hartje");
}

function hidePopup(){
	popup_container.classList.remove('show');
}

function showPopup (){
	popup_container.classList.add('show');
}

// eventlistener

addEventListener('click', likeButton);
popupclose.addEventListener('click',hidePopup)
popupopen.addEventListener('click', showPopup)


