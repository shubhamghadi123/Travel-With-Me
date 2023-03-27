const registerForm = document.getElementById('register-form');
const registerBtn = document.getElementById('register-btn');
const regErrorMsg = document.getElementById('reg-error-msg');
const confirmPassErrorMsg = document.getElementById('password-error-msg');
const passErrorMsg = document.getElementById('password2-error-msg');
const passContains = document.getElementById('passwordcontains-error-msg');
const emailErrorMsg = document.getElementById('email-error-msg');


registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    const confirmPassword = registerForm.confirmPassword.value;
    const email = registerForm.email.value;

    regErrorMsg.classList.add("visually-hidden");
    confirmPassErrorMsg.classList.add("visually-hidden");
    passErrorMsg.classList.add("visually-hidden");
    passContains.classList.add("visually-hidden");
    emailErrorMsg.classList.add("visually-hidden");

    if(username === "" && email === "" && password === "" && confirmPassword === ""){
        regErrorMsg.classList.remove("visually-hidden");
    }
    else{
        console.log("123")
        if(password != confirmPassword){
            confirmPassErrorMsg.classList.remove("visually-hidden");
        }
    
        if(password.length > 1 && password.length < 8){
            passErrorMsg.classList.remove("visually-hidden");
        }
    
        if(password.value != (/[A-Z]/) && password.value != (/[0-9]/)){
            passContains.classList.remove("visually-hidden");
        }
    
        if(email.charAt(email.length-4 != '.')){
            emailErrorMsg.classList.remove("visually-hidden");
        }
    }
})
