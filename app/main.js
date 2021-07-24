import TodosController from "./Controllers/TodosController.js";
import ImgsController from "./Controllers/imgsController.js";
import QuotesController from "./Controllers/QuotesController.js";
class App {

  todosController = new TodosController();
  imgsController = new ImgsController();
  quotesController = new QuotesController();
}

window["app"] = new App();
