// 1. 1
let myButton = document.getElementById("#btnToClick");

myButton.addEventListener("click", (info) => {
  console.log(info);
});

// 1. 2
let inputFocus = document.querySelector("input.focus");

inputFocus.addEventListener("focus", () => {
  console.log(inputFocus.value);
});

// 1. 3
let input = document.querySelector("input");

input.addEventListener("input", updateValue);

function updateValue() {
  console.log(input.value);
}
