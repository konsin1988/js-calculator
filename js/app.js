// Elements

const result = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const div = document.getElementById("div");

add.onclick = function () {
  result.textContent = Number(num1.value) + Number(num2.value);
};
sub.onclick = function () {
  result.textContent = Number(num1.value) - Number(num2.value);
};
mult.onclick = function () {
  result.textContent = Number(num1.value) * Number(num2.value);
};
div.onclick = function () {
  result.textContent = (Number(num1.value) / Number(num2.value)).toFixed(5);
};
