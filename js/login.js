const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const errorMsg = document.getElementById('error-msg');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "" || password === ""){
        errorMsg.classList.remove("visually-hidden");
    }
})

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "" || password === ""){
        errorMsg.classList.remove("visually-hidden");
    }
})