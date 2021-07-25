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
      let template = "" + res.data.name + "\n" + "" + res.data.main.temp + "\n" + res.data.weather[0].description
      document.getElementById("weather").innerHTML = template

    } catch (error) {
      console.error("Encountered error in Fetching Weather", error)
    }
  }
}

export const weathersService = new WeathersService()