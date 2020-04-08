const bookId = document.location.search.slice(1);

fetch(`https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books/${bookId}`)
    .then((response) => response.json())
    .then((data) => {
        let book = {
            name: data.name,
            author: data.author
        }
        bookInfo(book);
    })

    function bookInfo (book) {
        const h1 = document.querySelector('h1');
        h1.textContent = book.name;

        const h2 = document.querySelector('h2');
        h2.textContent = `Autorius: ${book.author}`;
    }