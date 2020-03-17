"use strict";
const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы"
];

const createLi = function(arr) {
  return arr.map(el => {
    const li = document.createElement("li");
    li.textContent = el;
    return li;
  });
};

const ingredientsId = document.getElementById("ingredients");
ingredientsId.append(...createLi(ingredients));
