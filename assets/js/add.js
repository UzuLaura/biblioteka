function captcha () {
    const num1 = Math.floor(Math.random() * 20 +1);
    const num2 = Math.floor(Math.random() * 20 +1);
    const sum = num1 + num2;
    const captchaInput = document.getElementById('captcha');
    const captchaLabel = document.querySelector('label[for=captcha]');    
    captchaLabel.textContent += `${num1} + ${num2}`;    
    const form = document.querySelector('form');
    const notification = document.querySelector('.notification');

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (Number(captchaInput.value) == sum) {
            console.log('passed');
            notification.textContent = "Added successfully";
            notification.classList.add('bg-success');
            notification.classList.add('display');
        } else {
            console.log('failed');
            notification.textContent = "Check your captcha";
            notification.classList.remove('bg-success');
            notification.classList.add('display');
        }    
    })
}


captcha();