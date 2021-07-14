const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let counter = 0;

number.innerText = counter;

const updateCount = () => {
  number.innerText = counter;
}

const handlePlus = () => {
  counter = counter + 1;
  updateCount();
};

const handleMinus = () => {
  counter = counter - 1;
  updateCount();
};

plus.addEventListener("click", handlePlus);
minus.addEventListener("click", handleMinus);