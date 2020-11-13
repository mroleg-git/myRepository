window.onload = function () {
  toDoList = new ToDoList();
  toDoList.init();
};
//event.preventDefault()
class ToDo {
  toDolayout = undefined;
  constructor(todo) {
    this.task = todo.task;
    this.discription = todo.discription;
    this.importance = todo.importance;
    this.id = todo.id;
  }

  getToDo() {}
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
  }
  init() {
    this.eventHandler();
    this.hideForm();
  }
  getFormData(event) {
    event.preventDefault();
    let data = {
      task: this.toDoForm.task.value,
      discription: this.toDoForm.discription.value,
      importance: this.toDoForm.importance.checked,
      id: this.lastId,
    };
    this.clearForm();
    this.hideForm();
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
    let todo = new ToDo(this.getFormData(event));
    this.lastId++;
    this.toDos.push(todo);
    console.log(this.toDos);
  }
}
