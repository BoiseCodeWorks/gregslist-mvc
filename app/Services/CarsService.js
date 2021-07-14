import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"


class CarsService {
  createCar(rawCar) {
    debugger
    ProxyState.cars = [...ProxyState.cars, new Car(rawCar)]
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()