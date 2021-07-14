const form = document.querySelector("form");
const button = document.querySelector("button");
const ul = document.querySelector("ul");
const input = document.querySelector("input");

const createTodo = (todo) => {
  const li = document.createElement("li");
  li.innerText = todo;
  ul.appendChild(li);
};

const onSubmit = (e) => {
  e.preventDefault();
  const todo = input.value;
  input.value = "";
  createTodo(todo);
};

form.addEventListener("submit", onSubmit)