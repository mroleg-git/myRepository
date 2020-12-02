export class ToDoForm {
  thisForm = document.forms.form;

  textInptValid = true;
  tAreaInputValid = true;
  textInputWasChanged = false;
  tAreaInputWasChanged = false;

  constructor() {}
  init() {
    this.thisForm.addEventListener("input", this.checkFormInputs.bind(this));
    this.thisForm.addEventListener("change", this.checkFormChanges.bind(this));
  }
  getFormData() {
    return {
      task: this.thisForm.task.value,
      discription: this.thisForm.discription.value,
      importance: this.thisForm.importance.checked,
    };
  }
  showForm() {
    if (this.thisForm.task.hasAttribute("disabled")) {
      this.thisForm.task.removeAttribute("disabled");
    }
  }
  hideForm() {
    if (!this.thisForm.task.hasAttribute("disabled")) {
      this.thisForm.task.setAttribute("disabled", "disabled");
    }
  }
  clearForm() {
    this.thisForm.reset();
  }
  isValidForm() {
    if (this.textInptValid && this.tAreaInputValid) {
      return true;
    } else {
      return false;
    }
  }
  checkTextInpChange() {
    let taskInput = this.thisForm.task;
    if (this.textInputWasChanged) {
      if (!this.textInptValid) {
        taskInput.style.backgroundColor = "red";
        console.log("input red");
      } else {
        taskInput.style.backgroundColor = "white";
      }
    } else {
      console.log("textInputWasChanged " + textInputWasChanged);
    }
  }
  checkTAreaInpChange() {
    console.log("area change");
  }
  checkFormChanges(event) {
    switch (event.target.name) {
      case "task":
        this.checkTextInpChange();
        break;
      case "discription":
        this.checkTAreaInpChange();
        break;
      default:
        break;
    }
  }
  checkFormInputs(event) {
    switch (event.target.name) {
      case "task":
        this.checkTextInput();
        this.textInputWasChanged = true;
        break;
      case "discription":
        this.checkTAreaInput();
        this.tAreaInputWasChanged = true;
        break;
      default:
        break;
    }
  }
  checkTextInput() {
    let taskText = this.thisForm.task.value;
    let inputTaskMark = this.thisForm.querySelector(".js-form-taskvalidmark");

    if (taskText.indexOf(" ") == 0) {
      inputTaskMark.innerHTML =
        "*Задача не может начинаться символом 'пробел'!";
      inputTaskMark.style.color = "red";
      this.textInptValid = false;
      return;
    }
    if (taskText.length < 4) {
      inputTaskMark.innerHTML =
        "*Задача не может быть короче четырех символов!";
      inputTaskMark.style.color = "red";
      this.textInptValid = false;
      return;
    }
    if (taskText.length > 40) {
      let counter = taskText.length - 40;
      inputTaskMark.innerHTML =
        "*Превышена максимальная длина на " + counter + " символов!";
      inputTaskMark.style.color = "red";
      this.textInptValid = false;
      return;
    }
    inputTaskMark.innerHTML = "*Обязательное поле.";
    inputTaskMark.style.color = "black";
    this.textInptValid = true;
    return;
  }
  checkTAreaInput() {
    let taskDiscriprion = this.thisForm.discription.value;
    let inputDiscriprionMark = this.thisForm.querySelector(
      ".js-form-discriptionvalidmark"
    );

    if (taskDiscriprion.indexOf(" ") == 0) {
      inputDiscriprionMark.innerHTML =
        "*Описание не может начинаться символом 'пробел'!";
      inputDiscriprionMark.style.color = "red";
      this.tAreaInputValid = false;
      return;
    }
    if (taskDiscriprion.length < 4) {
      inputDiscriprionMark.innerHTML =
        "*Описание не может быть короче четырех символов!";
      inputDiscriprionMark.style.color = "red";
      this.tAreaInputValid = false;
      return;
    }
    if (taskDiscriprion.length > 250) {
      let counter = taskDiscriprion.length - 250;
      inputDiscriprionMark.innerHTML =
        "*Описание максимальная длина на " + counter + " символов!";
      inputDiscriprionMark.style.color = "red";
      this.tAreaInputValid = false;
      return;
    }
    inputDiscriprionMark.innerHTML = "*Обязательное поле";
    inputDiscriprionMark.style.color = "black";
    this.tAreaInputValid = true;
    return;
  }
}
