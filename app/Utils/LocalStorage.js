import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";

export function saveState() {
  localStorage.setItem('Skinspire', JSON.stringify({
    todos: ProxyState.todos
  }))

}

export function loadState() {
  let data = JSON.parse(localStorage.getItem('Skinspire'))
  if (data != null) {
    ProxyState.todos = data.todos.map(t => new Todo(t))
  }

}