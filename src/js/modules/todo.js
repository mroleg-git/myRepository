export class ToDo {
  el = null;
  constructor(todo) {
    this.task = todo.task;
    this.discription = todo.discription;
    this.importance = todo.importance;
    this.id = todo.id;
  }
  ToDoHtml() {
    return `<li class="todo__item" data-todoid="${this.id}">
      <span class="todo__text">${this.task}</span>  
      <button class="todo__button todo__button--delete js-deletetodo-btn" data-deleteid="${this.id}">delete</button>
    </li>`;
    // <button class="todo__button todo__button--edit js-edittodo-btn">edit</button>
    //   <button class="todo__button todo__button--add js-addtodo-btn">add</button>
  }
  getEl() {
    return this.el;
  }
}
