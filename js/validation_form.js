// starter JavaScript Bootstrap for validation field
(function () {
  'use strict';

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll('.needs-validation');

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      'submit',
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add('was-validated');
      },
      false
    );
  });
})();
// starter JavaScript Bootstrap for validation field

//Start validation only letter
function isLetterKey(evt) {
  const charCode = evt.which ? evt.which : evt.keyCode;
  if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
    return true;
  return false;
}
//End validation only letter

//Start validation email
const emailField = document.querySelector('#validationEmail'),
  button = document.querySelector('#successButton');

function validateEmail(email) {
  const emailValidation = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return emailValidation.test(String(email).toLowerCase());
}
//End validation email

//submit button
const submitButton = document.querySelector('#successButton');

function seccessValidation() {
  const name = document.querySelector('#validationFirstName').value,
    email = document.querySelector('#validationLastName').value,
    message = document.querySelector('#validationEmail').value,
    jobTitle = document.querySelector('#validationJobTitle').value;

  if (name === '' || email === '' || message === '' || jobTitle === '') {
    alert('Fields required cannot be empty');
  } else {
    alert('Your information was successfully sent');
  }
}

submitButton.addEventListener('click', () => {
  seccessValidation();
});
//submit button
