function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  button: document.querySelector(`.change-color`),
  spanColor: document.querySelector(`.color`),
};

refs.button.addEventListener(`click`, onClickButton);

function onClickButton() {
  document.body.style.backgroundColor = getRandomHexColor();
  refs.spanColor.textContent = document.body.style.backgroundColor;
}
