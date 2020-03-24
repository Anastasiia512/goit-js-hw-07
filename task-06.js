"use strict";
const input = document.querySelector("#validation-input");

input.addEventListener("change", e => {
  input.cla
  if (e.target.value.length === 6) {
    input.classList.add("valid");
  }
  input.classList.toggle("invalid");
  
});
