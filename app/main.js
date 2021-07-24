import TodosController from "./Controllers/TodosController.js";
import ImgsController from "./Controllers/imgsController.js";

class App {
  imgsController = new ImgsController();
  todosController = new TodosController();

}

window["app"] = new App();
