import { ToDo } from "/gitHabToDo/myRepository/src/js/modules/todo.js";
import { ToDoForm } from "/gitHabToDo/myRepository/src/js/modules/todoform.js";
export class ToDoApp {
  constructor(event) {
    this.lastId = 0;
    this.toDos = [];

    this.toDoList = document.querySelector(".js-todo-list");

    this.Form = new ToDoForm();
  }
  eventHandler() {
    document
      .querySelector(".js-form-submit")
      .addEventListener("click", this.createToDo.bind(this));

    this.toDoList.addEventListener("click", this.toDoEventHandler.bind(this));

    document
      .querySelector(".js-deletetodo-all")
      .addEventListener("click", this.clearAllToDos.bind(this));
  }
  init() {
    this.eventHandler();
  }

  createToDo(event) {
    event.preventDefault();
    if (this.Form.submitedWithoutValidation) {
      this.Form.init();
    }
    if (this.Form.checkValidForm()) {
      let formData = this.Form.getFormData();
      formData["id"] = this.lastId;
      let todo = new ToDo(formData);
      this.Form.clearForm();

      this.printTodo(todo);
      todo.el = this.getToDoById(this.lastId);
      this.lastId++;
      this.toDos.push(todo);
    } else {
      this.Form.invalidReport();
    }
  }
  printTodo(todo) {
    this.toDoList.insertAdjacentHTML("afterbegin", todo.ToDoHtml());
  }
  getToDoById(id) {
    let allToDo = document.querySelectorAll(".js-todo-elem");
    let toDoListElement;
    allToDo.forEach((element) => {
      if (element.dataset.todoid == id) {
        toDoListElement = element;
      }
    });
    return toDoListElement;
  }
  toDoEventHandler(event) {
    let eventSender = event.target;
    if (eventSender.classList.contains("js-deletetodo-btn")) {
      this.deleteToDo(eventSender);
    }
    // else if (eventSender.classList.contains("js-edittodo-btn")) {
    //   console.log("edit");
    // } else if (eventSender.classList.contains("js-addtodo-btn")) {
    //   console.log("add");
    // }
  }
  deleteToDo(eventSender) {
    let elem = this.getToDoById(eventSender.dataset.deleteid);
    elem.remove();
    this.deleteFromToDos(elem.dataset.todoid);
  }
  deleteFromToDos(id) {
    this.toDos = this.toDos.filter(function (item) {
      return item.id != id;
    });
  }
  clearAllToDos() {
    console.log("clear all");
    let allToDo = document.querySelectorAll(".js-todo-elem");
    for (let elem of allToDo) {
      elem.remove();
    }
    this.toDos.length = 0;
  }
}
