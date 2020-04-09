let num1 = Math.floor(Math.random() * 20 + 1);
let num2 = Math.floor(Math.random() * 20 + 1);

const captchaLabel = document.querySelector('label[for=captcha]');
captchaLabel.textContent = `Suskaičiuokite ${num1} + ${num2}`;
const form = document.querySelector('form');
const notification = document.querySelector('.notification');

form.addEventListener('submit', e => {
    e.preventDefault();

    const book = {
        title: e.target.elements.name.value,
        author: e.target.elements.author.value
    }

    if (e.target.elements.name.value.length >= 4
        && e.target.elements.author.value.length >= 4
        && e.target.elements.name.value.length <= 30
        && e.target.elements.author.value.length <= 30) {
        if (Number(e.target.elements.captcha.value) == num1 + num2) {
            firebase
                .firestore()
                .collection('books')
                .add({
                    title: book.title,
                    author: book.author
                })
                .then(() => {
                    notification.textContent = "Sėkmingai pridėta!";
                    notification.classList.add('bg-success', 'display');
                    num1 = Math.floor(Math.random() * 20 + 1);
                    num2 = Math.floor(Math.random() * 20 + 1);
                    captchaLabel.textContent = `Suskaičiuokite ${num1} + ${num2}`;
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

