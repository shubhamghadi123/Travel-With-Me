function validate(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    const regErrorMsg = document.getElementById('reg-error-msg');
    const emailErrorMsg = document.getElementById('email-error-msg');
    const confirmPassErrorMsg = document.getElementById('password-error-msg');
    const passContains = document.getElementById('passwordcontains-error-msg');
    const passErrorMsg = document.getElementById('password2-error-msg');
    var regEmail = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    var upper = /[A-Z]/
    var lower = /[a-z]/
    var number = /[0-9]/
    var specialCharacter = /[!\@\#\$\%\^\&\*\_\=\+\-\?\>\<\.\,]/
    
    regErrorMsg.classList.add("visually-hidden");
    emailErrorMsg.classList.add("visually-hidden");
    confirmPassErrorMsg.classList.add("visually-hidden");
    passErrorMsg.classList.add("visually-hidden");
    passContains.classList.add("visually-hidden");

    if(username === "" || email === "" || password === "" || confirmPassword === ""){
        regErrorMsg.classList.remove("visually-hidden");
    }
    else{
        if(password.length > 1 && password.length < 8){
            passErrorMsg.classList.remove("visually-hidden");
        }
        else if(password != confirmPassword){
            confirmPassErrorMsg.classList.remove("visually-hidden");
        }
        else if(!password.match(upper) || !password.match(lower)
        || !password.match(number) || !password.match(specialCharacter)){
            passContains.classList.remove("visually-hidden");
        }

        if(!email.match(regEmail)){
            emailErrorMsg.classList.remove("visually-hidden");
        }
    }
}