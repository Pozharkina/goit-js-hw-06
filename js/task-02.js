const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listRef = document.querySelector(`ul`);
const arreyItems = [];
for (let i = 0; i < ingredients.length; i += 1) {
  const li = document.createElement(`li`);
  li.classList.add(`item`);
  li.textContent = ingredients[i];
  arreyItems.push(li);
}
listRef.append(...arreyItems);
console.log(listRef);
