import { ProxyState } from "../AppState.js";
import { imgsService } from "../Services/ImgsService.js"
import { loadState, saveState } from "../Utils/LocalStorage.js"
import { api } from "./AxiosService.js";

function _drawBgImg() {
  let imgs = ProxyState.imgs;
  let template = ''
  imgs.forEach(t => template += t.Template)
  document.getElementById("images").innerHTML = template
}
export default class ImgsController {
  constructor() {

    // ProxyState.on("imgs", _drawBgImgs)
    // ProxyState.on('imgs', saveState)
    // loadState()
    this.getImgs()

  }
  async getImgs() {
    try {
      debugger;
      await imgsService.getImgs()
    } catch (error) {
      console.error("Encountered error in Fetching Images", error)
    }
  }
}