const counter = document.querySelector("#counter");
const table = document.querySelector("#todos");
const uri = "api/todo";
const todos = [];

function getCount(data) {
  if (data) {
    counter.textContent = data > 1 ? `${data} to-dos` : `${data} to-do`;
  } else {
    counter.textContent = `Add something to your list`;
  }
}

function getData() {
  fetch(uri)
    .then(response => response.json())
    .then(data => {
      todos.push(...data);
      getCount(data.length);
    });
}

getData();
