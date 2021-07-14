import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {  //initialize default value
  return count;  // count는 state 형식을 가진다
};


const countStore = createStore(countModifier);

console.log(countStore.getState())


// let counter = 0;

// number.innerText = counter;

// const updateCount = () => {
//   number.innerText = counter;
// }

// const handlePlus = () => {
//   counter = counter + 1;
//   updateCount();
// };

// const handleMinus = () => {
//   counter = counter - 1;
//   updateCount();
// };

// plus.addEventListener("click", handlePlus);
// minus.addEventListener("click", handleMinus);