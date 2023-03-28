const loginForm = document.getElementById('login-form');

const loginBtn = document.getElementById('login-btn');

const errorMsg = document.getElementById('error-msg');


loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if(username === "" || password === ""){
        errorMsg.classList.remove("visually-hidden");
    }
    else{
        errorMsg.classList.add("visually-hidden");
    }
})