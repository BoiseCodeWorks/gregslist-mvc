import { ProxyState } from "../AppState.js"
import { carsService } from "../Services/CarsService.js"

function _draw() {
  let template = ''
  ProxyState.cars.forEach(car => {
    template += car.Template
  })
  document.getElementById('cars').innerHTML = template
}

export default class CarsController {
  constructor() {
    // When 'cars' changes in the State run the _draw method
    ProxyState.on('cars', _draw)
    ProxyState.on('cars', () => { console.log('new car') })

    // This only runs when the app first loads because data is already in the state
    _draw()
  }

  createCar() {
    event.preventDefault()
    let form = event.target
    let rawCar = {
      make: form.make.value,
      model: form.model.value,
      year: form.year.value,
      price: form.price.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    }
    carsService.createCar(rawCar)
    form.reset()
  }
}