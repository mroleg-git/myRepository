import { ToDoApp } from "/gitHabToDo/myRepository/src/js/modules/todoApp.js";
import "../css/todo.css";
window.onload = function () {
  let toDoList = new ToDoApp();
  toDoList.init();
};

// let sm = 0;
// function f(
//   sm = 1,
//   fx = () => {
//     console.log(sm);
//   }
// ) {
//   var sm = 2;
//   fx();
// }
// f();

// function remember(routes) {
//   let start = findeStart(routes);
//   return sortArrs(start, routes);
// }

// function findeStart(srcArr) {
//   for (let i = 0; i < srcArr.length; i++) {
//     let c = 0;
//     for (let j = 0; j < srcArr.length; j++) {
//       if (!(srcArr[i][0].indexOf(srcArr[j][1]) + 1)) {
//         c++;
//       }
//     }
//     if (c == srcArr.length) {
//       return srcArr[i];
//     }
//   }
// }
// function sortArrs(start, srcArr) {
//   let mas = [];
//   mas[0] = start;
//   for (let j = 0; j < srcArr.length; j++) {
//     for (let i = 0; i < srcArr.length; i++) {
//       if (start[1] == srcArr[i][0]) {
//         mas[j + 1] = srcArr[i];
//         start = srcArr[i];
//         break;
//       }
//     }
//   }
//   return mas;
// }
// console.log(
//   remember([
//     ["mnl", "tag"],
//     ["ceb", "tac"],
//     ["tag", "ceb"],
//     ["tac", "bor"],
//   ])
// );
// console.log(
//   remember([
//     ["Chicago", "Winnipeg"],
//     ["Halifax", "Monreal"],
//     ["Monreal", "Toronto"],
//     ["Toronto", "Chicago"],
//     ["Winnipeg", "Siattle"],
//   ])
// );
// console.log(
//   remember([
//     ["USA", "BRA"],
//     ["JPN", "PHL"],
//     ["BRA", "UAE"],
//     ["UAE", "JPN"],
//   ])
//);//*/
// class ToDo {
//   el = null;
//   constructor(todo) {
//     this.task = todo.task;
//     this.discription = todo.discription;
//     this.importance = todo.importance;
//     this.id = todo.id;
//   }
//   ToDoHtml() {
//     return `<li class="todo__item" data-todoid="${this.id}">
//         <button class="todo__button todo__button--delete js-deletetodo-btn" data-deleteid="${this.id}">delete</button>
//         <button class="todo__button todo__button--edit js-edittodo-btn">edit</button>
//         <button class="todo__button todo__button--add js-addtodo-btn">add</button>
//         <span class="todo__text">${this.task}</span>
//       </li>`;
//   }
//   getEl() {
//     return this.el;
//   }
// }

// class ToDoList {
//   toDoForm = document.forms.form;
//   constructor(event) {
//     this.toDos = [];
//     this.lastId = 0;
//     this.toDoList = document.querySelector(".js-todo-list");
//   }
//   eventHandler() {
//     document
//       .querySelector(".js-list-add")
//       .addEventListener("click", this.showForm.bind(this));

//     document
//       .querySelector(".js-form-submit")
//       .addEventListener("click", this.createToDo.bind(this));

//     this.toDoList.addEventListener("click", this.toDoEventHandler.bind(this));
//   }
//   init() {
//     this.eventHandler();
//     //this.hideForm();
//   }
//   getFormData() {
//     let data = {
//       task: this.toDoForm.task.value,
//       discription: this.toDoForm.discription.value,
//       importance: this.toDoForm.importance.checked,
//       id: this.lastId,
//     };
//     this.clearForm();
//     //this.hideForm();
//     return data;
//   }
//   showForm() {
//     if (this.toDoForm.task.hasAttribute("disabled")) {
//       this.toDoForm.task.removeAttribute("disabled");
//     }
//   }
//   hideForm() {
//     if (!this.toDoForm.task.hasAttribute("disabled")) {
//       this.toDoForm.task.setAttribute("disabled", "disabled");
//     }
//   }
//   clearForm() {
//     this.toDoForm.reset();
//   }

//   createToDo(event) {
//     event.preventDefault();
//     let todo = new ToDo(this.getFormData());
//     this.printTodo(todo);
//     todo.el = this.getToDoById(this.lastId);
//     this.lastId++;
//     this.toDos.push(todo);
//     //console.log(this.toDos);
//   }
//   printTodo(todo) {
//     this.toDoList.insertAdjacentHTML("afterbegin", todo.ToDoHtml());
//   }
//   getToDoById(id) {
//     let allToDo = document.querySelectorAll(".todo__item");
//     let toDoListElement;
//     allToDo.forEach((element) => {
//       if (element.dataset.todoid == id) {
//         toDoListElement = element;
//       }
//     });
//     return toDoListElement;
//   }
//   toDoEventHandler(event) {
//     let eventSender = event.target;
//     if (eventSender.classList.contains("js-deletetodo-btn")) {
//       this.deleteToDo(eventSender);
//     } else if (eventSender.classList.contains("js-edittodo-btn")) {
//       console.log("edit");
//     } else if (eventSender.classList.contains("js-addtodo-btn")) {
//       console.log("add");
//     }
//   }
//   deleteToDo(eventSender) {
//     let elem = this.getToDoById(eventSender.dataset.deleteid);
//     elem.remove();
//     this.deleteFromToDos(elem.dataset.todoid);
//   }
//   deleteFromToDos(id) {
//     this.toDos = this.toDos.filter(function (item) {
//       return item.id != id;
//     });
//   }
// }
//*/
