import { ProxyState } from "../AppState.js"

export default class Weather {
  constructor(data) {
    this.desciption = data.weather[0].description
    this.temp = data.main.temp
    this.name = data.name
  }
  get Template() {
    //   return `
    //      <p>"Weathers: " + ${this.name}</p> +" \n"
    //       p>"Temp's: " + ${this.temp}</p>  +" \n"
    //       p>"Desc's: " + ${this.description}</p>
    //  `
  }
  // <div class="weather"></div>
}
