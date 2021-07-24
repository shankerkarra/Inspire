import { ProxyState } from "../AppState.js";
import { api } from "./AxiosService.js";


class ImgsService {

  constructor() {
    console.log("SERVICE WORKING")
  }

  async getImgs() {
    try {
      debugger;
      const res = await api.get('images/')
      //   const res = await api.get('shankerkarra/todos')
      console.log(res.data);
      //   ProxyState.imgs = res.data.map(I => new Img(I))
    } catch (error) {
      console.error("Encountered error in Fetching Image", error)
    }
  }


}

export const imgsService = new ImgsService()