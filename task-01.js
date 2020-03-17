"use strict";

const liItem = document.querySelectorAll("li.item");
console.log(`В списке ${liItem.length} категории.`);

const h2 = document.querySelectorAll("h2");
h2.forEach(item => {
  console.log(`Категория: ${item.textContent}`);
  console.log(
    `Количество элементов: ${item.nextElementSibling.children.length}`
  );
});
