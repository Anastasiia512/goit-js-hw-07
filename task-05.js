"use strict";
const input = document.querySelector("input#name-input");
const span = document.querySelector("span#name-output");

input.addEventListener("input", () => (span.innerText = input.value));
