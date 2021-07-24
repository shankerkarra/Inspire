import { ProxyState } from "../AppState.js";
import Todo from "../Models/Todo.js";
import { api } from "./AxiosService.js";


class TodosService {

  constructor() {
    console.log("SERVICE WORKING")
  }

  async getTodos() {
    try {
      const res = await api.get('shankerkarra/todos/')
      //   const res = await api.get('shankerkarra/todos')
      console.log(res.data);
      ProxyState.todos = res.data.map(t => new Todo(t))
    } catch (error) {
      console.error("Encountered error in Fetching Todo", error)
    }
  }
  async addTodo(e) {
    try {
      //  const res = await api.post('shankerkarra/todos', e)
      const res = await api.post('shankerkarra/todos/', e)
      console.log(res.data);
      ProxyState.todos = [...ProxyState.todos, new Todo(res.data)]
    } catch (error) {
      console.error("Observed issue in writing to Sandbox", error)
    }
  }

  async toggleCheckbox(elem, checked) {
    try {

      await api.put('shankerkarra/todos/' + elem, { completed: checked })
        .then(response => { console.log(response.data); })

      let chngTask = ProxyState.todos.find(t => t.id == elem)
      if (chngTask.completed === checked) {
        chngTask.completed = false;
      }
      else {
        chngTask.completed = checked;
      }
      ProxyState.todos = ProxyState.todos

    } catch (error) {
      console.error("Observed issue in updating to Sandbox", error)
    }
    // ProxyState.todos = ProxyState.todos
  }

  async delTodo(id) {
    try {
      await api.delete('shankerkarra/todos/' + id)
        .then(response => { console.log(response.data); })
      ProxyState.todos = ProxyState.todos.filter(t => t.id != id)
    } catch (error) {
      console.error("Observed issue in deleting to Sandbox", error)
    }
    ProxyState.todos = ProxyState.todos
  }

  cntTodo() {
    let totalcount = ProxyState.todos.filter(t => t.id)
    if (totalcount.length == undefined) {
      totalcount = 0;
    }
    else {
      totalcount = totalcount.length
    }
    let chkcount = ProxyState.todos.filter(t => t.completed === true)
    if (chkcount.length == undefined) {
      chkcount = 0;
    }
    else {
      chkcount = chkcount.length
    }
    console.log(chkcount + "/" + totalcount)
    if (totalcount != 0) {
      document.getElementById("Todocount").innerHTML = chkcount + "/" + totalcount
    }
    else {
      document.getElementById("Todocount").innerHTML = ''
    }
  }
}

export const todosService = new TodosService()