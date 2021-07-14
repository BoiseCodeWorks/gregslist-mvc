import CarsController from "./Controllers/CarsController.js";

class App {
  // valuesController = new ValuesController()
  carsController = new CarsController()

}

window["app"] = new App();
