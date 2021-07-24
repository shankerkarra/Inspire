import { ProxyState } from "../AppState.js";
import { todosService } from "../Services/TodosService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"



function _drawAll() {
  let todos = ProxyState.todos;
  let template = ''
  todos.forEach(t => template += t.Template)
  document.getElementById("myTodos").innerHTML = template
}
export default class TodosController {
  constructor() {

    ProxyState.on("todos", _drawAll)
    ProxyState.on('todos', saveState)
    loadState()
    this.getTodos()

  }
  async getTodos() {
    try {
      await todosService.getTodos()
    } catch (error) {
      console.error("Failed to get Shanker's Todo's from sandbox", error)
    }
  }

  async addTodo(param) {
    try {
      event.preventDefault()
      let form = event.target
      let Todos = {
        description: form.todo.value,
        completed: false
      }
      await todosService.addTodo(Todos)
      form.reset()
    } catch (error) {
      console.error("Observed issue in writing to Sandbox", error)
    }
  }

  handleChange(e) {

    const { checked } = e.target;
    todosService.toggleCheckbox(e.target.id, checked);
  }

  delTodo(id) {
    var result = confirm("Press a button!");
    if (result == true) {
      todosService.delTodo(id)
    }
  }
}