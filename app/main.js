import TodosController from "./Controllers/TodosController.js";
import ImgsController from "./Controllers/imgsController.js";
import QuotesController from "./Controllers/QuotesController.js";
import WeathersController from "./Controllers/weathersController.js";
class App {

  todosController = new TodosController();
  quotesController = new QuotesController();
  weathersController = new WeathersController();
  imgsController = new ImgsController();

}

window["app"] = new App();
