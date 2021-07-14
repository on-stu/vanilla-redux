import { createStore } from "redux";

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {  //initialize default value
  if (action.type === "ADD") {
    return count + 1;
  }else if(action.type === "MINUS"){
    return count - 1;
  }else{
    return count;  // count는 state 형식을 가진다
  }  
};
const countStore = createStore(countModifier); 
// countModifier(any data modifier)는 reducer라고 한다!

const onChange = () => {
  number.innerText = countStore.getState();
}

countStore.subscribe(onChange);



plus.addEventListener("click", () => countStore.dispatch({type: "ADD"}));
minus.addEventListener("click", () => countStore.dispatch({type: "MINUS"}));


/* Redux를 사용하지 않는 방법 - Vanilla JS */

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