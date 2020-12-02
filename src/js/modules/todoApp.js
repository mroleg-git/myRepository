import { ToDo } from "/gitHabToDo/myRepository/src/js/modules/todo.js";
import { ToDoForm } from "/gitHabToDo/myRepository/src/js/modules/todoform.js";
export class ToDoApp {
  //toDoForm = document.forms.form;
  constructor(event) {
    this.toDos = [];
    this.lastId = 0;
    this.toDoList = document.querySelector(".js-todo-list");
    this.Form = new ToDoForm();
    this.Form.init();
  }
  eventHandler() {
    document
      .querySelector(".js-list-add")
      .addEventListener("click", this.Form.showForm.bind(this.Form)); //

    document
      .querySelector(".js-form-submit")
      .addEventListener("click", this.createToDo.bind(this));

    this.toDoList.addEventListener("click", this.toDoEventHandler.bind(this));
  }
  init() {
    this.eventHandler();
  }

  createToDo(event) {
    event.preventDefault();
    if (this.Form.isValidForm()) {
      //let todo = new ToDo(this.getDataForm()); //не верно- создать объект из формы get, присвоить поле id=lastid, отправить в конструктор
      let formData = this.Form.getFormData();
      formData["id"] = this.lastId;
      let todo = new ToDo(formData);
      this.Form.clearForm();
      this.printTodo(todo);
      todo.el = this.getToDoById(this.lastId);
      this.lastId++;
      this.toDos.push(todo);
    } else {
      console.log("form is not valid! massege from to-do-app!");
    }
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
//на всякий
// getDataForm() {
//   let data = {
//     task: this.toDoForm.task.value,
//     discription: this.toDoForm.discription.value,
//     importance: this.toDoForm.importance.checked,
//     id: this.lastId,
//   };
//   //this.hideForm();
//   return data;
// }
// showForm() {
//   if (this.toDoForm.task.hasAttribute("disabled")) {
//     this.toDoForm.task.removeAttribute("disabled");
//   }
// }
// hideForm() {
//   if (!this.toDoForm.task.hasAttribute("disabled")) {
//     this.toDoForm.task.setAttribute("disabled", "disabled");
//   }
// }
// clearForm() {
//   this.toDoForm.reset();
// }
// isValidForm() {
//   let formObj = this.getDataForm();
//   if (formObj.task && formObj.discription) {
//     return true;
//   } else {
//     return false;
//   }
// }
// checkChangeForm(event) {
//   switch (event.target.name) {
//     case "task":
//       this.checkTaskInput();
//       break;
//     case "discription":
//       this.checkDiskriptionkInput();
//       break;
//     default:
//       break;
//   }
// }
// checkTaskInput() {
//   let task = this.toDoForm.task.value;
//   let inputTask = this.toDoForm.querySelector(".js-form-taskvalidmark");
//   if (task.indexOf(" ") == 0) {
//     inputTask.innerHTML = "*Задача не может начинаться символом ' '(пробел)!";
//     inputTask.style.color = "red";
//     return;
//   }
//   if (task.length > 40) {
//     let counter = task.length - 40;
//     inputTask.innerHTML =
//       "*Превышена максимальная длина на " + counter + " символов!";
//     inputTask.style.color = "red";
//   } else {
//     inputTask.innerHTML = "*поле обязательно для заполнения";
//     inputTask.style.color = "black";
//   }
//   // if (task.length < 4) {
//   //   inputTask.innerHTML = "*Задача не должна быть короче четырех символов";
//   //   inputTask.style.color = "red";
//   // }
//   // if (task.length >= 4) {
//   //   inputTask.innerHTML = "*";
//   //   inputTask.style.color = "black";
//   // }
// }
// checkDiskriptionkInput() {
//   console.log(this.toDoForm.discription.value);
//   return true;
// }
