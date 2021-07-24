import { ProxyState } from "../AppState.js"

export default class Todo {
  constructor({ _id, completed, user, description }) {
    this.id = _id
    this.completed = completed
    this.user = user
    this.description = description
  }

  get Template() {
    return `
        <div class="custom-control custom-checkbox" style="width:15rem;" >
          <input type="checkbox" class="custom-control-input"
          id=${this.id} style.textDecoration = 'none' value=""${this.completed ? 'checked' : ""} onchange="app.todosController.handleChange(event)">
          <label class="custom-control-label col-10" for=${this.id}>${this.description}</label> <i class="fa fa-trash action text-warning" title="delete Todo" onclick="app.todosController.delTodo('${this.id}')"></i>
    </div>
  `
  }

}