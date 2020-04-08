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

        if (Number(e.target.elements.captcha.value) == num1 + num2) {
            fetch('https://europe-west1-codeacademy-demo-f866c.cloudfunctions.net/books', {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify(book)
            }).then(() => {
                notification.textContent = "Added successfully";
                notification.classList.add('bg-success', 'display');
            }).catch((error) => {
                notification.textContent = error.message;
                notification.classList.add('bg-success', 'display');
            })
        } else {
            notification.textContent = "Check your captcha";
            notification.classList.remove('bg-success');
            notification.classList.add('display');
        }    
    })
}

captcha();