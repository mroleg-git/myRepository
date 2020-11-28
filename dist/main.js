/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../gitHabToDo/myRepository/src/js/modules/todo.js":
/*!*******************************************************!*\
  !*** /gitHabToDo/myRepository/src/js/modules/todo.js ***!
  \*******************************************************/
/*! exports provided: flogtodo, user */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flogtodo", function() { return flogtodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "user", function() { return user; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function flogtodo() {
  console.log("hello from todo");
}
var user = /*#__PURE__*/function () {
  function user() {
    _classCallCheck(this, user);

    _defineProperty(this, "userName", void 0);

    this.userName = "username";
  }

  _createClass(user, [{
    key: "getUserName",
    value: function getUserName() {
      return this.userName;
    }
  }]);

  return user;
}(); // class ToDo {
//   el = null;
//   constructor(todo) {
//     this.task = todo.task;
//     this.discription = todo.discription;
//     this.importance = todo.importance;
//     this.id = todo.id;
//   }
//   ToDoHtml() {
//     return `<li class="todo__item" data-todoid="${this.id}">
//       <button class="todo__button todo__button--delete js-deletetodo-btn" data-deleteid="${this.id}">delete</button>
//       <button class="todo__button todo__button--edit js-edittodo-btn">edit</button>
//       <button class="todo__button todo__button--add js-addtodo-btn">add</button>
//       <span class="todo__text">${this.task}</span>
//     </li>`;
//   }
//   getEl() {
//     return this.el;
//   }
// }

/***/ }),

/***/ "../../gitHabToDo/myRepository/src/js/modules/todolist.js":
/*!***********************************************************!*\
  !*** /gitHabToDo/myRepository/src/js/modules/todolist.js ***!
  \***********************************************************/
/*! exports provided: flogtodo, man */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "man", function() { return man; });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "../../gitHabToDo/myRepository/src/js/modules/todo.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flogtodo", function() { return _todo_js__WEBPACK_IMPORTED_MODULE_0__["flogtodo"]; });

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var man = /*#__PURE__*/function () {
  function man() {
    _classCallCheck(this, man);

    _defineProperty(this, "lastname", "");

    this.lastname = "userlastname";
  }

  _createClass(man, [{
    key: "getInfo",
    value: function getInfo() {
      var person = new _todo_js__WEBPACK_IMPORTED_MODULE_0__["user"]();
      return this.lastname + " _ " + person.getUserName();
    }
  }]);

  return man;
}();

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gitHabToDo_myRepository_src_js_modules_todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! /gitHabToDo/myRepository/src/js/modules/todolist.js */ "../../gitHabToDo/myRepository/src/js/modules/todolist.js");
console.log("index");

Object(_gitHabToDo_myRepository_src_js_modules_todolist_js__WEBPACK_IMPORTED_MODULE_0__["flogtodo"])();
var persone = new _gitHabToDo_myRepository_src_js_modules_todolist_js__WEBPACK_IMPORTED_MODULE_0__["man"]();
console.log(persone.getInfo()); // window.onload = function () {
//   toDoList = new ToDoList();
//   toDoList.init();
// };
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

/***/ })

/******/ });
//# sourceMappingURL=main.js.map