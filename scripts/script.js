// javaScript document

// variabelen

var hartje = document.querySelector("div");
var popupopen = document.getElementById('popupopen');
var popup_container = document.getElementById('popup_container');
var popupclose = document.getElementById('popupclose');
var allButtons = document.querySelectorAll('.inspog section button')


// function

function likeButton() {
    hartje.classList.toggle("hartje");
}

function hidePopup() {
    popup_container.classList.remove('show');
}

function showPopup() {
    popup_container.classList.add('show');
}

// eventlistener

popupclose.addEventListener('click', hidePopup)
popupopen.addEventListener('click', showPopup)

allButtons.forEach(singleButton => {
    singleButton.addEventListener('click', likeButton)
})