const list = document.querySelector(".list");
const input = document.querySelector("input");

let todoEvent = '';
let counter = 0;

let todoList = [
  {
    id: 1,
    task: "land a $100k job",
  },
  {
    id: 2,
    task: "drink water",
  },
  {
    id: 3,
    task: "go to gym",
  },
];

function inputChange(event) {
    todoEvent = event.target.value
}

function addTodo() {
    if (!todoEvent) {
        return
    }
    const task = {
        id: counter++,
        task: todoEvent
    }
    todoList.push(task)
    renderListHTML()
    todoEvent = '';
    input.value = ''
}

function deleteTodo(id) {
    todoList = todoList.filter(elem => elem.id !== id)
    renderListHTML()
}


function renderListHTML() {
  list.innerHTML = todoList.map(
    (elem) => ` <li>
    ${elem.task}
    <button onclick="deleteTodo(${elem.id})" class="todo__delete">
      x
    </button>
  </li>`
  ).join('');
}

renderListHTML()
