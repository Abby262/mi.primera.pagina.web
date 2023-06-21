function showAlert() {
  alert('Hola, esta es una alerta hecha con JavaScrip'); 
}

const form = document.getElementById('myForm')

function validateEmail(email) {
 
  const regex = /^[^\s@]+@[^\s@]+.[^\s@]{2,7}$/
  return regex.test(email)
}

function validateForm() {
    const Input = document.getElementById('email');
    const InputValue = Input.value;
    if (!validateEmail(InputValue)) {
      alert('Por favor ingrese un correo electrónico válido.');
 } else {
      alert('Correo electrónico enviado correctamente.');
    }
  }

  if(form){
    form.addEventListener('submit', function (lala){
      lala.preventDefault();
      validateForm();
      })
  }

  document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
      document.querySelector(".nav-links").classList.toggle("nav-links-responsive")
  }
  )