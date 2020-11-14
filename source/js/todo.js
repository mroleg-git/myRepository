window.onload = function () {
  toDoList = new ToDoList();
  toDoList.init();
};
//event.preventDefault()
class ToDo {
  el = undefined;
  constructor(todo) {
    this.task = todo.task;
    this.discription = todo.discription;
    this.importance = todo.importance;
    this.id = todo.id;
  }

  getToDo() {
    return `<li class="todo__item" data-taskid="${this.id}">
      <button class="todo__button todo__button--delete">delete</button>
      <button class="todo__button todo__button--edit"></button>
      <button class="todo__button todo__button--add"></button>
      <span class="todo__text">${this.task}</span>
    </li>`;
  }
  getEl() {
    return document.querySelector(".todo__item");
  }
}

class ToDoList {
  toDoForm = document.forms.form;
  constructor(event) {
    this.toDos = [];
    this.lastId = 0;
  }
  eventHandler() {
    document
      .querySelector(".js-list-add")
      .addEventListener("click", this.showForm.bind(this));

    document
      .querySelector(".js-form-submit")
      .addEventListener("click", this.createToDo.bind(this));

    document
      .querySelector(".js-todo-list")
      .addEventListener("click", this.deleteToDo.bind(this));
  }
  init() {
    this.eventHandler();
    //this.hideForm();
  }
  getFormData() {
    let data = {
      task: this.toDoForm.task.value,
      discription: this.toDoForm.discription.value,
      importance: this.toDoForm.importance.checked,
      id: this.lastId,
    };
    this.clearForm();
    //this.hideForm();
    return data;
  }
  showForm() {
    if (this.toDoForm.task.hasAttribute("disabled")) {
      this.toDoForm.task.removeAttribute("disabled");
    }
  }
  hideForm() {
    if (!this.toDoForm.task.hasAttribute("disabled")) {
      this.toDoForm.task.setAttribute("disabled", "disabled");
    }
  }
  clearForm() {
    this.toDoForm.reset();
  }
  createToDo(event) {
    event.preventDefault();
    let todo = new ToDo(this.getFormData());
    this.lastId++;
    this.printTodo(todo);
    todo.el = todo.getEl();
    this.toDos.push(todo);
    //console.log(this.toDos);
  }
  printTodo(todo) {
    let list = document.querySelector(".js-todo-list");
    list.insertAdjacentHTML("afterbegin", todo.getToDo());
  }
  deleteToDo(event) {
    let eventSender = event.target;
    if (eventSender.tagName == "BUTTON") {
      let elem = eventSender.closest("li");
      let id = elem.dataset.taskid;
      console.log(id);
      elem.remove();
      this.deleteFromToDos(id);
      console.log(this.toDos);
    }
  }
  deleteFromToDos(id) {
    this.toDos = this.toDos.filter(function (item) {
      return item.id != id;
    });
  }
}