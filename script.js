
    let errorImg = document.getElementById('error-img');
    errorImg.style.display = "none";
    let errorInfo = document.getElementById('error-info');
    errorInfo.style.display = "none";
    let button = document.querySelector('.submit');
    let emailField = document.getElementById('email-field');
    button.addEventListener('click',ValidateEmail);
    let email = emailField.value;

function ValidateEmail(email) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    emailField.style.border = '0.25px solid #abd499';
  }
  emailField.style.border = '0.25px solid #f96262';
       errorInfo.style.display = "block";
       errorImg.style.display = "inline";
}