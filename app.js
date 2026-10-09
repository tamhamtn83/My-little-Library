// create modal!!
const add_book = document.getElementById("add_btn");
const modal = document.getElementById("modal");
const addbtn = document.getElementById("addbtn");
add_book.onclick= function(){
    modal.style.display = "flex"
}
modal.onclick = function(){
    if(event.target === modal){
        modal.style.display= "none";
    }
}
addbtn.onclick = function(){
    modal.style.display= "none";
}

//add book data!!
let Books = [];
const title = document.getElementById("name");
const author = document.getElementById("author");
const pages = document.getElementById("pages");
const booksgrid = document.getElementById("booksgrid")
const check = document.getElementById("isread");


function Book(title,author,pages,check){
    this.title= title;
    this.author=author;
    this.pages= pages;
    this.check = check;
};
addbtn.onclick = function(){
    //add data to localStorage and convert to Json.string!!
   const Book1 = new Book(title.value, author.value, pages.value, check.checked);
    Books.push(Book1);
    localStorage.setItem("Books",JSON.stringify(Books));
    createbookcard(Book1);
    console.log(Book1.check);
}
//Take book data out of localStorage and convert to Obj!!
    const savedbooks = localStorage.getItem("Books");
    if(savedbooks){
        Books = JSON.parse(savedbooks);
        Books.forEach(function(book){
            createbookcard(book);
        });
    }
//create book card for each book!!
function createbookcard(Book){   
        const card = document.createElement("div");
        card.classList.add("book_card");

        const title = document.createElement("p");
        title.textContent = `"`+ Book.title + `"`;

        const author = document.createElement("p");
        author.textContent = Book.author;

        const pages = document.createElement("p");
        pages.textContent = Book.pages + " pages";

        const box1 = document.createElement("div");

        box1.classList.add("button-group");

        const read_btn = document.createElement("button");

        read_btn.classList.add("button", "read_btn");
        //check if read or not!!
        if(Book.check){
            read_btn.textContent = "Read";
            read_btn.style.backgroundColor = "#9fff9c"
        }
        else{
            read_btn.textContent = "Not Read";
        }

        box1.append(read_btn);
        //change read status
        read_btn.onclick = function(){
            if(read_btn.textContent=== "Read"){
                read_btn.textContent = "Not Read";
                read_btn.style.backgroundColor = "#ff9c9c";
            }
            else{
                read_btn.textContent = "Read";
                read_btn.style.backgroundColor = "#9fff9c";
            }
        }

        const rm_btn = document.createElement("button");
        rm_btn.classList.add("button", "rm_btn")
        rm_btn.textContent = "Remove";
        box1.append(rm_btn);
        //remove bookcard
        rm_btn.onclick = function(){
            const index = Books.indexOf(Book);
            Books.splice(index, 1);
            card.remove();
            localStorage.setItem("Books",JSON.stringify(Books));
        }

        card.append(title,author,pages,box1);
        booksgrids.append(card);


       
    }
    

    
    
    