const refs = {
  input: document.querySelector(`#validation-input`),
  dataLength: document.querySelector(`[data-length]`),
};

refs.input.addEventListener(`blur`, onInputBlure);

function onInputBlure() {
  if (
    refs.input.value.length ===
    Number(refs.dataLength.getAttribute(`data-length`))
  ) {
    refs.input.classList.remove(`invalid`);
    return refs.input.classList.add(`valid`);
  } else {
    refs.input.classList.remove(`valid`);
    return refs.input.classList.add(`invalid`);
  }
}
