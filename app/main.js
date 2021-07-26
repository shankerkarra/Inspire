import TodosController from "./Controllers/TodosController.js";
import ImgsController from "./Controllers/ImgsController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeathersController from "./Controllers/WeathersController.js";
class App {

  todosController = new TodosController();
  quotesController = new QuotesController();
  weathersController = new WeathersController();
  imgsController = new ImgsController();

}

window["app"] = new App();
