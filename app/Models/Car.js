export default class Car {
  // OBJECT DESCONSCTRUCTION
  // using the {} you can pull only the properties you care about off the incoming object
  // the '=' allows setting default values incase that property was not provided
  constructor({ make, model, year, price, description, imgUrl, id }) {
    this.id = id
    this.make = make
    this.model = model
    this.year = year
    this.price = price
    this.description = description || "no car description"
    this.imgUrl = imgUrl || '//placehold.it/200x200'
  }
  // constructor(data) {
  //   this.make = data.make
  //   this.model = data.model
  //   this.year = data.year
  //   this.price = data.price
  //   this.description = data.description || "no description provided"
  //   this.imgUrl = data.imgUrl
  // }

  get Template() {
    return `
    <div class="col-md-3 col-sm-2 my-3">
      <div class="car bg-light shadow">
          <img src="${this.imgUrl}" class="w-100" alt="${this.make} ${this.model} car image">
          <div class="p-3">
              <div class="text-center">
                  <p><b>${this.year} - ${this.make} - ${this.model}</b></p>
              </div>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
              <button class="btn btn-info btn-block" onclick="app.carsController.bidCar('${this.id}')"> bid </button>
              <button class="btn btn-warning btn-block" onclick="app.carsController.deleteCar('${this.id}')"> delete </button>
          </div>
      </div>
    </div>
    `
  }

}