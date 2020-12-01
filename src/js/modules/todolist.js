// export { flogtodo } from "./todo.js";
import { ToDo } from "/gitHabToDo/myRepository/src/js/modules/todo.js";
export class ToDoList {
  toDoForm = document.forms.form;
  constructor(event) {
    this.toDos = [];
    this.lastId = 0;
    this.toDoList = document.querySelector(".js-todo-list");
  }
  eventHandler() {
    document
      .querySelector(".js-list-add")
      .addEventListener("click", this.showForm.bind(this));

    document
      .querySelector(".js-form-submit")
      .addEventListener("click", this.createToDo.bind(this));

    this.toDoList.addEventListener("click", this.toDoEventHandler.bind(this));
    this.toDoForm.addEventListener("input", this.checkChangeForm.bind(this)); //change
  }
  init() {
    this.eventHandler();
    //this.hideForm();
  }

  getDataForm() {
    let data = {
      task: this.toDoForm.task.value,
      discription: this.toDoForm.discription.value,
      importance: this.toDoForm.importance.checked,
      id: this.lastId,
    };
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
  isValidForm() {
    let formObj = this.getDataForm();
    if (formObj.task && formObj.discription) {
      return true;
    } else {
      return false;
    }
  }
  checkChangeForm(event) {
    //console.log(event.target.name);
    switch (event.target.name) {
      case "task":
        this.checkTaskInput();
        break;
      case "discription":
        this.checkDiskriptionkInput();
        break;
      default:
        break;
    }
  }
  checkTaskInput() {
    let task = this.toDoForm.task.value;
    if (task.length < 4) {
      let inputTask = this.toDoForm.querySelector(".js-form-taskvalidmark");
      inputTask.innerHTML = "*Задача не должна быть короче четырех символов";
      inputTask.style.color = "red";
    }
    if (task.length >= 4) {
      let inputTask = this.toDoForm.querySelector(".js-form-taskvalidmark");
      inputTask.innerHTML = "*";
      inputTask.style.color = "black";
    }
  }
  checkDiskriptionkInput() {
    console.log(this.toDoForm.discription.value);
  }

  createToDo(event) {
    if (this.isValidForm()) {
      event.preventDefault();
      let todo = new ToDo(this.getDataForm());
      this.clearForm();
      this.printTodo(todo);
      todo.el = this.getToDoById(this.lastId);
      this.lastId++;
      this.toDos.push(todo);
    } else alert("form is not valid!");

    //console.log(this.toDos);
  }
  printTodo(todo) {
    this.toDoList.insertAdjacentHTML("afterbegin", todo.ToDoHtml());
  }
  getToDoById(id) {
    let allToDo = document.querySelectorAll(".todo__item");
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
    } else if (eventSender.classList.contains("js-edittodo-btn")) {
      console.log("edit");
    } else if (eventSender.classList.contains("js-addtodo-btn")) {
      console.log("add");
    }
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
}
