const registerForm = document.getElementById('register-form');
const registerBtn = document.getElementById('register-btn');
const regErrorMsg = document.getElementById('reg-error-msg');
const passErrorMsg = document.getElementById('password-error-msg');

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = registerForm.username.value;
    const email = registerForm.email.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;

    if(username === "" || email === "" || password === "" || confirmPassword === ""){
        regErrorMsg.classList.remove("visually-hidden");
    }

    if(password != confirmPassword){
        passErrorMsg.classList.remove("visually-hidden");
    }
})