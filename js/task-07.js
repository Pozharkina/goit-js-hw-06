const refs = {
  input: document.getElementById(`font-size-control`),
  inputText: document.getElementById(`text`),
};

refs.input.value = 96;
refs.input.addEventListener(`input`, () => {
  refs.inputText.style.fontSize = refs.input.value + "px";
});
