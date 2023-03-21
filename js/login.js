const loginForm = document.getElementById('form');
const errorMsg = document.getElementById('error-msg');
const submitBtn = document.getElementById('login-btn');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "" || password === ""){
        errorMsg.classList.remove("visually-hidden");
    }
})