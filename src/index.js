import { createStore } from 'redux';

const form = document.querySelector("form");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";

const reducer = (state = [], action) => {
  switch (action.type){
    case ADD_TODO:
      return [...state, {text: action.text, id: Date.now()}];  //mutate하면 안되고 new state를 만들어서 return해야 함!
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);
    default:
      return state;
  }
}

const store = createStore(reducer);

const deleteToDo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch({type: DELETE_TODO, id})
}

const todoPaint = () => {
  ul.innerHTML = ""; // 이걸 안하면 중복돼서 페인팅되는데 이유는 모르겠다..
  const toDOs = store.getState();
  toDOs.forEach(todo => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerText = "DEL"
    btn.addEventListener("click", deleteToDo);
    li.id = todo.id;
    li.innerText = todo.text;
    ul.appendChild(li);
    li.appendChild(btn);
  })
}

store.subscribe(todoPaint);

const addToDo = text => {
  store.dispatch({type: ADD_TODO, text})
}

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  addToDo(todo);
};

form.addEventListener("submit", onSubmit)