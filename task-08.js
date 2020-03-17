const input = document.querySelector("input[type='number']");
const buttonRender = document.querySelector("button[data-action='render']");
const buttonDestroy = document.querySelector("button[data-action='destroy']");
const divBoxes = document.querySelector("#boxes");

buttonRender.addEventListener("click", () => createBoxes(input.value));
buttonDestroy.addEventListener("click", destroyBoxes);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function resizeElement(block, size, num) {
  block.style[size] = 30 + num + "px";
}

function createBoxes(amount) {
  if(amount >= 1 && amount <= 100) {
const arrDiv = []; 
  for (let i = 0; i < amount; i += 1) { 
 const div = document.createElement('div');
  div.style.width = resizeElement(div, 'width', (i*10));
  div.style.height = resizeElement(div, 'height',(i*10));
  div.style.backgroundColor = `rgb(${getRandomInt(255)},${getRandomInt(255)},${getRandomInt(255)})`;
  arrDiv.push(div);
  }  
 divBoxes.append(...arrDiv);
 input.value = "";
 }
}

function destroyBoxes() {
  divBoxes.remove("div");
}
