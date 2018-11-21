function createBook(selector, title, author, isbn) {

    let idCounter = 1;

    let addBook = (function generateBook() {
        let element = $(selector);

        let bookDiv = $(`<div id=${'book' + idCounter++} style='border: medium none'></div>`);

        let titleParagraph = $(`<p class = 'title'>${title}</p>`);
        let authorParagraph = $(`<p class = 'author'>${author}</p>`);
        let isbnParagraph = $(`<p class = 'isbn'>${isbn}</p>`);
        let selectBtn = $("<button>Select</button>");
        let deselectBtn = $("<button>Deselect</button>");

        selectBtn.on('click', function (e) {
            bookDiv.css("border", "2px solid blue");
        });

        deselectBtn.on('click', function (e) {
            bookDiv.css("border", "none");
        });

        bookDiv.append(titleParagraph);
        bookDiv.append(authorParagraph);
        bookDiv.append(isbnParagraph);
        bookDiv.append(selectBtn);
        bookDiv.append(deselectBtn);

        element.append(bookDiv);
    }());
}