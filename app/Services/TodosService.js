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
}

export const todosService = new TodosService()