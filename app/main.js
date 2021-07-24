import TodosController from "./Controllers/TodosController.js";
import ImgsController from "./Controllers/imgsController.js";

class App {

  todosController = new TodosController();
  imgsController = new ImgsController();
}

window["app"] = new App();
