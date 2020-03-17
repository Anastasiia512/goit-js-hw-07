"use strict";
let counterValue = 0;
const buttonDec = document.querySelector("[data-action~='decrement']");
const buttonInc = document.querySelector("[data-action~='increment']");
const spanId = document.querySelector("#value");

function increment() {
  spanId.textContent = counterValue += 1;
}

function decrement() {
  spanId.textContent = counterValue -= 1;
}

buttonDec.addEventListener("click", decrement);

buttonInc.addEventListener("click", increment);
