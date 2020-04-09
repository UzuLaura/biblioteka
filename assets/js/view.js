const bookId = document.location.search.slice(1);

firebase
    .firestore()
    .collection('books')
    .doc(bookId)
    .get()
    .then((data) => {
        bookInfo(data);
    })

function bookInfo(book) {
    const h1 = document.querySelector('h1');
    h1.textContent = book.data().title;

    const h2 = document.querySelector('h2');
    h2.textContent = `Autorius: ${book.data().author}`;
}