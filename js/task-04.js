// const buttonDecrement = document.querySelector(`[data-action="decrement"]`);
const refs = {
  buttonDecrement: document.querySelector(`[data-action="decrement"]`),
  buttonIncrement: document.querySelector(`[data-action="increment"]`),
  valueRef: document.querySelector(`#value`),
};

let counterValue = 0;
refs.buttonDecrement.addEventListener(
  `click`,
  () => (refs.valueRef.textContent = counterValue -= 1)
);
refs.buttonIncrement.addEventListener(
  `click`,
  () => (refs.valueRef.textContent = counterValue += 1)
);
console.log(refs.buttonDecrement);
console.log(refs.buttonIncrement);
