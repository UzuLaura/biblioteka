fetch("https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books")
    .then((data) => data.json())
    .then((data) => {
        const table = document.querySelector('table tbody');
        data.forEach((item) => {
            const book = {
                name: item.name,
                author: item.author,
                id: item.id
            }
            const tr = table.insertRow();

            const td1 = tr.insertCell();
            td1.textContent = book.name;

            const td2 = tr.insertCell();    
            td2.textContent = book.author;

            const td3 = tr.insertCell();    
            const link = document.createElement('a');
            link.href = book.id;
            link.textContent = 'View';
            td3.append(link);
        });
    })

    // function spinner () {
    //     const spinner = document.createElement('span');
    //     document.body.append(spinner);
    //     div.classList.add('spinner');
    // }