import { ProxyState } from "../AppState.js"

export default class Weather {
  constructor(data) {
    this.desciption = data.weather[0].description
    this.temp = data.main.temp
    this.name = data.name
  }
  get Template() {
    return `
        <div class="weather">
        <p>${this.name}</p>
        p>${this.temp}</p>
        p>${this.description}</p>
     </div>
  `
  }
}