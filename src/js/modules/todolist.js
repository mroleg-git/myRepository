export { flogtodo } from "./todo.js";
import { user } from "./todo.js";
export class man {
  lastname = "";
  constructor() {
    this.lastname = "userlastname";
  }

  getInfo() {
    let person = new user();
    return this.lastname + " _ " + person.getUserName();
  }
}
