function captcha () {
    const num1 = Math.floor(Math.random() * 20 +1);
    const num2 = Math.floor(Math.random() * 20 +1);
    const captchaLabel = document.querySelector('label[for=captcha]');    
    captchaLabel.textContent += `${num1} + ${num2}`;    
    const form = document.querySelector('form');
    const notification = document.querySelector('.notification');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const book = {
            name: e.target.elements.name.value,
            author: e.target.elements.author.value
        }    

        if (e.target.elements.name.value.length >= 4 
            && e.target.elements.author.value.length >= 4 
            && e.target.elements.name.value.length <= 30
            && e.target.elements.author.value.length <= 30) {
            if (Number(e.target.elements.captcha.value) == num1 + num2) {
                fetch('https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books', {
                    method: 'POST',
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    body: JSON.stringify(book)
                }).then(() => {
                    notification.textContent = "Sėkmingai pridėta!";
                    notification.classList.add('bg-success', 'display');
                }).catch((error) => {
                    notification.textContent = error.message;
                    notification.classList.add('bg-success', 'display');
                })
            } else {
                notification.textContent = "Patikrinkite savo suskaičiuotą atsakymą!";
                notification.classList.remove('bg-success');
                notification.classList.add('display');
            }    
        } else {
            notification.textContent = "Knygos pavadinimas ir autoriaus vardas turi būti tarp 4 ir 30 simbolių!";
            notification.classList.remove('bg-success');
            notification.classList.add('display');
        }
    })
}

captcha();