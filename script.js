
    let errorImg = document.getElementById('error-img');
    errorImg.style.display = "none";
    let errorInfo = document.getElementById('error-info');
    errorInfo.style.display = "none";
    let button = document.querySelector('.submit');

    button.addEventListener('onClick',checkEmail);

function checkEmail() {
    let emailField = document.getElementById('email-field');
    let email = emailField.value;
    let validity = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (validity) {
    emailField.style.border = '0.25px solid #abd499';
    } else {
    emailField.style.border = '0.25px solid #f96262';
    errorInfo.style.display = "block";
    errorImg.style.display = "inline";
    }

}


