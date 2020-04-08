fetch("https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books")
    .then((data) => data.json())
    .then((data) => {
        const table = document.querySelector('table tbody');
        data.forEach((item) => {
            const book = {
                name: item.name,
                author: item.author
            }
            const tr = table.insertRow();
            const td1 = tr.insertCell();
            const td2 = tr.insertCell();    
            td1.textContent = book.name;
            td2.textContent = book.author;
        });
    })