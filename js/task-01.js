const listRef = document.querySelectorAll(`li.item`);
console.log(`Number of categories:`, listRef.length);
const textRef = document.querySelectorAll(`h2`);
[...listRef].forEach((item) => {
  console.log(`Category:`, item.querySelector(`h2`).textContent);
  console.log(`Elements:`, item.querySelectorAll(`ul li`).length);
});

