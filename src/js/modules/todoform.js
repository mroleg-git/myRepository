export class ToDoForm {
  thisForm = document.forms.form;
  submitedWithoutValidation;

  constructor() {
    this.formDefaults();
    this.onInputFormHendler = this.listenInputFields.bind(this);
  }

  addEventListeners() {
    this.thisForm.addEventListener("input", this.onInputFormHendler);
    // this.thisForm.addEventListener("input", this.listenInputFields.bind(this));
    //this.thisForm.addEventListener("change", this.checkFormChanges.bind(this));
  }
  init() {
    this.addEventListeners();
  }

  removeIventListeners() {
    this.thisForm.removeEventListener("input", this.onInputFormHendler);
  }
  formDefaults() {
    this.submitedWithoutValidation = true;
  }
  clearForm() {
    this.thisForm.reset();
    this.formDefaults();
    this.removeIventListeners();
  }

  getFormData() {
    return {
      task: this.thisForm.task.value,
      discription: this.thisForm.discription.value,
      importance: this.thisForm.importance.checked,
    };
  }

  //----------------------------------------------------V-oninput-V----------------------------------------------------
  checkValidForm() {
    if (this.taskValidator() && this.discriptionValidator()) {
      return true;
    } else {
      return false;
    }
  }
  //----------------------------------------------------oninput----------------------------------------------------
  listenInputFields(event) {
    switch (event.target.name) {
      case "task":
        this.taskValidator();
        break;
      case "discription":
        this.discriptionValidator();
        break;
      default:
        break;
    }
  }
  //----------------------------------------------------check's----------------------------------------------------
  checkValidFrstChar(innerText) {
    if (innerText.indexOf(" ") == 0) {
      return false;
    } else return true;
  }
  checkMinLength(innerText, minLength) {
    if (innerText.length < minLength) {
      return false;
    } else return true;
  }
  checkMaxLength(innerText, maxLength) {
    if (innerText.length > maxLength) {
      return false;
    } else return true;
  }
  //----------------------------------------------------reports----------------------------------------------------
  invalidReportFrstChar(clarificationEl) {
    clarificationEl.innerHTML = "*Текст не может начинаться символом 'пробел'!";
    clarificationEl.style.color = "red";
  }
  invalidReportMinLength(clarificationEl) {
    clarificationEl.innerHTML = "*Текст не может быть короче 5 символов!";
    clarificationEl.style.color = "red";
  }
  invalidReportMaxLength(clarificationEl, outOfRange) {
    clarificationEl.innerHTML =
      "*Превышена максимальная длина на " + outOfRange + " символов!";
    clarificationEl.style.color = "red";
  }
  taskReportDefault(clarificationEl) {
    clarificationEl.innerHTML = "*Обязательное поле.";
    clarificationEl.style.color = "black";
  }
  invalidReport() {
    this.taskValidator();
    this.discriptionValidator();
    console.log("form is not valid! massege from to-do-app!");
  }
  //----------------------------------------------------validators----------------------------------------------------
  taskValidator() {
    //что бы поле ввода не оставалось красным после возвращения к нему снов - доработать
    // let taskInputField = this.thisForm.task;
    // taskInputField.style.backgroundColor = "white";
    //

    let taskInnerText = this.thisForm.task.value;
    let taskClarification = this.thisForm.querySelector(".js-form-taskclarify");

    if (!this.checkValidFrstChar(taskInnerText)) {
      this.invalidReportFrstChar(taskClarification);
      return false;
    }
    let lengthLimit = 5;
    if (!this.checkMinLength(taskInnerText, lengthLimit)) {
      this.invalidReportMinLength(taskClarification);
      return false;
    }
    lengthLimit = 40;
    if (!this.checkMaxLength(taskInnerText, lengthLimit)) {
      let outOfRange = taskInnerText.length - lengthLimit;
      this.invalidReportMaxLength(taskClarification, outOfRange);
      return false;
    }
    this.taskReportDefault(taskClarification);
    return true;
  }
  discriptionValidator() {
    let discriprionInnerText = this.thisForm.discription.value;
    let discriprionClarification = this.thisForm.querySelector(
      ".js-form-discriptionclarify"
    );

    if (!this.checkValidFrstChar(discriprionInnerText)) {
      this.invalidReportFrstChar(discriprionClarification);
      return false;
    }
    let lengthLimit = 5;
    if (!this.checkMinLength(discriprionInnerText, lengthLimit)) {
      this.invalidReportMinLength(discriprionClarification);
      return false;
    }
    lengthLimit = 250;
    if (!this.checkMaxLength(discriprionInnerText, lengthLimit)) {
      let outOfRange = discriprionInnerText.length - lengthLimit;
      this.invalidReportMaxLength(discriprionClarification, outOfRange);
      return false;
    }
    this.taskReportDefault(discriprionClarification);
    return true;
  }
}
