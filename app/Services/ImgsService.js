import { api } from "./AxiosService.js";


class ImgsService {

  constructor() {
    //console.log("Msg at Image constructor")
  }

  async getImgs() {
    try {
      const res = await api.get('images/')
      // document.body.style.backgroundImage = "url('" + res.data.largeImgUrl + "')";
      // document.body.style.backgroundRepeat = no - repeat;
    } catch (error) {
      console.error("Encountered error in Fetching Image", error)
    }
  }

}

export const imgsService = new ImgsService()