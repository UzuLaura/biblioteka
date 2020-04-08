function captcha () {
    const num1 = Math.floor(Math.random() * 20 +1);
    const num2 = Math.floor(Math.random() * 20 +1);
    
    const captchaLabel = document.querySelector('label[for=captcha]');    
    captchaLabel.textContent += `${num1} + ${num2}`;    
}

captcha();