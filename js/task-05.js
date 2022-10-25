const refs = {
  input: document.querySelector(`.js-input`),
  outputLable: document.querySelector(`.js-output`),
};

refs.input.addEventListener(`input`, onInputChange);
function onInputChange(event) {
  refs.outputLable.textContent = event.currentTarget.value;
  if (event.currentTarget.value.length === 0) {
    refs.outputLable.textContent = `Anonymous`;
  }
}
