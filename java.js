const invalid = document.querySelector('#match');
const password = document.querySelector('#pwd');
const confirmedPassword = document.querySelector('#confirm-pwd')
const submitButton = document.querySelector('#submit')

confirmedPassword.addEventListener('change', () => {
    
    if (password.value !== confirmedPassword.value) {
        invalid.classList.add('match');
        submitButton.setAttribute('type', 'button');
        password.classList.add('error');
        confirmedPassword.classList.add('error');
    } else {
        invalid.classList.remove('match');
        submitButton.setAttribute('type', 'submit');
        password.classList.remove('error');
        confirmedPassword.classList.remove('error');
    }

});

