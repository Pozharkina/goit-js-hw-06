const refs = {
  form: document.querySelector(`.login-form`),
  inputMail: document.querySelector(`.js-email`),
  inputPass: document.querySelector(`.js-pass`),
  button: document.querySelector(`.js-btn`),
};

refs.form.addEventListener(`submit`, handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  if (email.value === "" || password.value === "") {
    alert(`please fiil the line`);
  }
  console.log(`email:${email.value}, password: ${password.value}`);
  event.currentTarget.reset();
}
