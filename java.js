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


let janeEyre = document.querySelector('#janeEyre');
let dracula = document.querySelector('#dracula');
let jekyllHyde = document.querySelector('#jekyllHyde');
let myLibrary = [];

myLibrary.push('janeEyre');
myLibrary.push('dracula');
myLibrary.push('jekyllHyde');
    

function book (title, author, pages, ) {
    this.title = title;
    this.author = author;
    this.pages = pages + " pages";
   

    this.info =function() {
        return this.title + this.author + this.pages
    }
    console.log(this.info);
   
};

let library = document.querySelector(".library");
let books = document.querySelectorAll(".bookCard");
let newBook;
function addBookToLibrary() {
    
    submit.addEventListener( 'click', () => {
        newBook = new book(title, author, pages);
        myLibrary.push('newBook');
        popUp.style.display = "none";
        event.preventDefault();
        let card = document.createElement('div');
        card.classList.add('bookCard');
        card.style.height = "200px";
        card.style.width = "200px";
        card.style.backgroundColor = "#e5e7e";
        card.style.boxShadow = "0px 7px 17px blue";
        card.style.borderRadius = "8px";
        card.setAttribute("id", `${title}`);
        
       
        
        let firstLine = document.createElement( 'h3');
            firstLine.innerHTML = `${this.title}`;
            firstLine.style.fontFamily = "monospace";
            firstLine.style.borderBottom = "dotted 1px black";
            firstLine.style.paddingTop = "20px";
            card.appendChild(firstLine);
        let secondLine = document.createElement( 'h3');  
            secondLine.innerHTML = `${this.author}`;
            secondLine.style.fontFamily = "monospace";
            secondLine.style.borderBottom = "dotted 1px black";
            secondLine.style.paddingTop = "20px";
            card.appendChild(secondLine);
        let thirdLine = document.createElement( 'h3');
            thirdLine.innerHTML = `${this.pages}`;
            thirdLine.style.fontFamily = "monospace";
            thirdLine.style.borderBottom = "dotted 1px black";
            thirdLine.style.paddingTop = "20px";
            card.appendChild(thirdLine);
        let readBttn = document.createElement( 'button');
        
                if(document.getElementById('no').checked ) {
                    readBttn.textContent = 'Not Read';
                    readBttn.style.backgroundColor = 'red'
                } else if (document.getElementById('yes').checked) {
                    readBttn.textContent = 'Read';
                    readBttn.style.backgroundColor = 'green';
                };
            readBttn.style.fontFamily = "monospace";
            readBttn.style.color ="white";
            readBttn.style.height ="22px";

            readBttn.addEventListener( 'click',()=> {
                if( readBttn.textContent == 'Not Read') {
                    readBttn.textContent = 'Read';
                    readBttn.style.backgroundColor = 'green';
                } else if (readBttn.textContent == 'Read') {
                    readBttn.textContent = 'Not Read',
                readBttn.style.backgroundColor = 'red'
                }
            })
            card.appendChild(readBttn);


       

        let deleteButton = document.createElement('button');
            deleteButton.textContent = "delete";
            deleteButton.style.height ="22px";
            deleteButton.style.backgroundColor = "blue"; 
            deleteButton.style.fontFamily = "monospace";
            deleteButton.style.borderBottom = "dotted 1px black";
            deleteButton.style.color = "white";
           
            card.appendChild(deleteButton);
            deleteButton.addEventListener( 'click', () => {
                library.removeChild(card);
                myLibrary.splice(Math.floor(Math.random() * myLibrary.length) ,1) [0];;
            })
            card.appendChild(deleteButton);
            


            library.appendChild(card);
   
           
            });

        };



        let rButton = document.querySelectorAll('#rButton');
        let dButton = document.querySelectorAll('#dButton');
        for (let i = 0; i < rButton.length; i++) {
             rButton[i].addEventListener('click',()=>{
            if (rButton[i].style.backgroundColor == 'green',
            rButton[i].textContent == "Read") {
                rButton[i].textContent = 'Not Read';
                rButton[i].style.backgroundColor = 'red';
            } else if (rButton[i].style.backgroundColor == 'red') {
                rButton[i].textContent = 'Read';
                rButton[i].style.backgroundColor = 'green';
            }
         });
        };
    
        for (let i = 0; i < dButton.length; i++) {
        dButton[i].addEventListener('click', ()=> {
            library.removeChild(books[i]);
            myLibrary.splice(Math.floor(Math.random() * myLibrary.length) ,1) [0];
        });
    };
console.log(addBookToLibrary());
console.log(myLibrary);

