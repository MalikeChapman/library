

function Book(title, author, numOfPages, completed)
{
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.completed = completed;

}
let myLibrary = [];
Book.prototype.toString = function(){
    return this.name + " " + this.author + " " + this.numOfPages + " " + this.completed;
}
const add = document.getElementById(`add`);
add.addEventListener(`click`, function(){
    const moadel = document.querySelector(".moadel");
    moadel.style.display = "flex";
});

document.querySelector('.close').addEventListener('click', function(){
    document.querySelector(".moadel").style.display = "none";
});
const submit = document.getElementById("submit");
submit.addEventListener('click', addBookToLibrary);

function addBookToLibrary(){
    const author = document.getElementById('author').value;
    const title = document.getElementById(`title`).value;
    const page = document.getElementById(`pages`).value;
    let statusArray = document.getElementsByName(`status`);
    let status;
    for(let i = 0; i < statusArray.length; i++){
        if(statusArray[i].checked){
            status = statusArray[i].value;
            break;
        }
    }
    
    let book = new Book(title, author, page, status);
    myLibrary.push(book);
    displayBooks(book);
    document.querySelector(".moadel").style.display = "none";
 
    

}


function displayBooks(book){
    const librarySection = document.getElementById("library_books");
    
        const newCard = document.createElement("div");
        newCard.setAttribute('class', 'card');
        const imgDiv = document.createElement("div");
        imgDiv.setAttribute('class', 'imgdiv');
        const img = document.createElement("img");
        let path = `./images/download.png`;
        img.setAttribute('src', `${path}`);
        imgDiv.appendChild(img);
        newCard.appendChild(imgDiv);
        const title1 = document.createElement("li");
        title1.textContent = book.title;
       
        const ul = document.createElement("ul");

        let li1 = document.createElement("li");
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");

        ul.appendChild(title1);
        li1.textContent = book.author;
        ul.appendChild(li1);
        li2.textContent = book.numOfPages;
        ul.appendChild(li2);
        li3.textContent = book.completed;
        ul.appendChild(li3);
        newCard.appendChild(ul);
        const button = document.createElement("button");
        button.setAttribute('id', 'delete');
        button.setAttribute('class', 'button');
        button.setAttribute('onClick', "javascript: removeElement();")
        button.textContent = "delete";
        newCard.appendChild(button);

        librarySection.appendChild(newCard);


}
let removeElement = function(){
    const deletebtn = document.getElementById("delete");
    let nodeToRemove = deletebtn.parentNode;
    const librarySection = document.getElementById("library_books");
    librarySection.removeChild(nodeToRemove);
}

