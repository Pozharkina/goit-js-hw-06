const refs = {
  input: document.querySelector(`#name-input`),
  outputLable: document.querySelector(`#name-output`),
};

refs.input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
  refs.outputLable.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    refs.outputLable.textContent = `Anonymous`;
  }
}
