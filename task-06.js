"use strict";
const input = document.querySelector("#validation-input");

input.addEventListener("change", e => {
  if (e.target.value.length === 6) {
    input.classList.add("valid");
    return;
  }
  input.classList.add("invalid");
});
