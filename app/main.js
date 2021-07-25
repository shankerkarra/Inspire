import TodosController from "./Controllers/TodosController.js";
import ImgsController from "./Controllers/imgsController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeathersController from "./Controllers/weathersController.js";
class App {

  todosController = new TodosController();
  imgsController = new ImgsController();
  quotesController = new QuotesController();
  weathersController = new WeathersController();
}

window["app"] = new App();
