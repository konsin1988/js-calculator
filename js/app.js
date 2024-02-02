// Elements

const result = document.getElementById("result");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const add = document.getElementById("add");
const sub = document.getElementById("sub");
const mult = document.getElementById("mult");
const div = document.getElementById("div");

function checkNumber(result) {
  if (!result && result != 0) {
    return "Not a number!!!";
  } else if (!isFinite(result)) {
    return "Division by zero";
  } else {
    return result;
  }
}

add.onclick = function () {
  result.textContent = checkNumber(Number(num1.value) + Number(num2.value));
};
sub.onclick = function () {
  result.textContent = checkNumber(Number(num1.value) - Number(num2.value));
};
mult.onclick = function () {
  result.textContent = checkNumber(Number(num1.value) * Number(num2.value));
};
div.onclick = function () {
  let temp = checkNumber(Number(num1.value) / Number(num2.value));
  if (!Number.isInteger(temp)) {
    result.textContent = temp.toFixed(5);
  } else {
    result.textContent = temp;
  }
};
