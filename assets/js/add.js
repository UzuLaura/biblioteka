function captcha () {
    const num1 = Math.floor(Math.random() * 20 +1);
    const num2 = Math.floor(Math.random() * 20 +1);
    const sum = num1 + num2;
    const captchaInput = document.getElementById('captcha');
    const captchaLabel = document.querySelector('label[for=captcha]');    
    captchaLabel.textContent += `${num1} + ${num2}`;    
    const form = document.querySelector('form');

    form.addEventListener('submit', e => {
        e.preventDefault();

        if (captchaInput.value == sum) {
            console.log('passed');
        } else {
            console.log('failed');
        }    
    })
}

captcha();