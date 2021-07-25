import { ProxyState } from "../AppState.js";
import { weathersService } from "../Services/WeathersService.js"


function _drawActiveWeather() {
  // let activeWeather = ProxyState.activeWeather;
  // let template = "Weather :" + res.data.name + "\n" + "Temp :" + res.data.main.temp + "\n" + "Desc :" + res.data.weather[0].description

  // document.getElementById("weather").innerHTML = template
  return
}
export default class WeathersController {
  constructor() {

    ProxyState.on('activeWeather', _drawActiveWeather)
    this.getWeather()

  }
  async getWeather() {
    try {
      const res = await weathersService.getWeather()
    } catch (error) {
      console.error("Encountered error in Fetching Weather", error)
    }
  }
}