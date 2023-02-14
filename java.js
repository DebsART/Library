const addNewBook = document.querySelector("#formButton");
const popUp = document.querySelector(".popUp");

addNewBook.addEventListener( 'click', () => {
    popUp.style.display = "block";
});

const submit = document.querySelector('#submit');

submit.addEventListener( 'click', () => {
    popUp.style.display = "none";
});