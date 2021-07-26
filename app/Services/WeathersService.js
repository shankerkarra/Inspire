import { ProxyState } from "../AppState.js";
import Weather from "../Models/Weather.js";
import { api } from "./AxiosService.js";

class WeathersService {

  constructor() {
    //console.log("Msg at Weather constructor")
  }

  async getWeather() {
    // debugger;
    try {
      const res = await api.get('weather/')
      console.log(res.data)
      ProxyState.activeWeather = new Weather(res.data)
      document.getElementById("weathercity").innerHTML = res.data.name
      document.getElementById("weatherdesc").innerHTML = res.data.weather[0].description
      document.getElementById("weathertemp").innerHTML = res.data.main.temp
      document.getElementById("weathertemptype").innerHTML = 'F'

    } catch (error) {
      console.error("Encountered error in Fetching Weather", error)
    }
  }
}

export const weathersService = new WeathersService()