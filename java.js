const addNewBook = document.querySelector("#formButton");
const popUp = document.querySelector(".popUp");
const form = document.querySelector("#form");

addNewBook.addEventListener( 'click', () => {
    popUp.style.display = "block";
});



const submit = document.querySelector('#submit');



let title = document.querySelector("#title");
    title.addEventListener('input', ()=> {
        this.title = title.value;
    });
let author = document.querySelector("#author");
    author.addEventListener('input', ()=> {
        this.author = author.value;
    });
let pages = document.querySelector("#pages");
    pages.addEventListener('input', ()=> {
        this.pages = pages.value;
    });
let hasRead = document.querySelector("#hasRead");
    hasRead.addEventListener('input', ()=> {
        this.hasRead = hasRead.value;
    });

let janeEyre = document.querySelector('#janeEyre');
let dracula = document.querySelector('#dracula');
let jekyllHyde = document.querySelector('#jekyllHyde');
let myLibrary = [];

myLibrary.push('janeEyre');
myLibrary.push('dracula');
myLibrary.push('jekyllHyde');
console.log(myLibrary);

function book (title, author, pages, hasRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.hasRead = hasRead;

    this.info =function() {
        return this.title + this.author + this.pages + this.read
    }
    console.log(this.info);
    myLibrary.push('this.info');
};

let library = document.querySelector(".library");

function addBookToLibrary() {
    submit.addEventListener( 'click', () => {
        book(title, author, pages, hasRead);
        popUp.style.display = "none";

        let card = document.createElement('div');
        card.classList.add('bookCard');
        card.style.height = "200px";
        card.style.width = "200px";
        card.style.backgroundColor = "#e5e7e";
        card.style.boxShadow = "0px 7px 17px blue";
        card.style.borderRadius = "8px";
        library.appendChild(card);
        
        let firstLine = document.createElement( 'h3');
            firstLine.textContent = `${this.title}`;
            firstLine.style.fontFamily = "monospace";
            firstLine.style.borderBottom = "dotted 1px black";
            firstLine.style.paddingTop = "20px";
            card.appendChild(firstLine);
        let secondLine = document.createElement( 'h3');  
            secondLine.textContent = `${this.author}`;
            secondLine.style.fontFamily = "monospace";
            secondLine.style.borderBottom = "dotted 1px black";
            secondLine.style.paddingTop = "20px";
            card.appendChild(secondLine);
        let thirdLine = document.createElement( 'h3');
            thirdLine.textContent = `${this.pages}`;
            thirdLine.style.fontFamily = "monospace";
            thirdLine.style.borderBottom = "dotted 1px black";
            thirdLine.style.paddingTop = "20px";
            card.appendChild(thirdLine);
        let fourthLine = document.createElement( 'h3');
            let checkboxed = document.createElement('input');
            checkboxed.type = "checkbox";
            checkboxed.value ="value";
            checkboxed.id = "id";
            fourthLine.textContent = `${this.hasRead} ${checkboxed}`;
            fourthLine.style.fontFamily = "monospace";
            fourthLine.style.borderBottom = "dotted 1px black";
            fourthLine.style.paddingTop = "20px";
            card.appendChild(fourthLine);

    });
    
}

