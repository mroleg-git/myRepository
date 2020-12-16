export class ToDo {
  el = null;
  constructor(todo) {
    this.task = todo.task;
    this.discription = todo.discription;
    this.importance = todo.importance;
    this.id = todo.id;
  }
  ToDoHtml() {
    return `<li class="todo__item js-todo-elem" data-todoid="${this.id}">
    <button class="todo__button todo__button--delete js-deletetodo-btn" data-deleteid="${this.id}">x</button>  
    <span class="todo__text js-todo-tasktext">
      <p class = "red-worb">To-do:</p>${this.task}
    </span>  
    
    <ul class="js-todo-discription">
      <li>
          <span class="todo__text todo__text--discription js-todo-discriptiontext">
            <p class = "red-worb">Discription:</p>${this.discription}
          </span>
      </li>
    </ul>
    </li>`;
    // <button class="todo__button todo__button--edit js-edittodo-btn">edit</button>
    //   <button class="todo__button todo__button--add js-addtodo-btn">add</button>
  }
  getEl() {
    return this.el;
  }
}
