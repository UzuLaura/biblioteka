const spinner = document.createElement('span');
document.body.append(spinner);
spinner.classList.add('spinner');
const spinnerImg = document.createElement('img');
spinnerImg.src = "https://cdn.dribbble.com/users/959027/screenshots/2594575/oscar_data_loop__1_.gif";
spinner.append(spinnerImg);

function addToTable(book) {
    const table = document.querySelector('table tbody');

    const tr = table.insertRow();

    const td1 = tr.insertCell();
    td1.textContent = book.data().title;

    const td2 = tr.insertCell();
    td2.textContent = book.data().author;

    const td3 = tr.insertCell();
    const link = document.createElement('a');
    link.href = `view.html?${book.id}`;
    link.textContent = 'View';
    td3.append(link);
}

firebase
    .firestore()
    .collection('books')
    .get()
    .then((snapshot) => snapshot.docs
        .forEach(doc => {
            addToTable(doc);
        })
    )
    .then(() => document.body.removeChild(spinner));

