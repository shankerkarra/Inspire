import { imgsService } from "../Services/ImgsService.js"

export default class ImgsController {
  constructor() {

    this.getImgs()

  }
  async getImgs() {
    try {
      const res = await imgsService.getImgs()
    } catch (error) {
      console.error("Encountered error in Fetching Images", error)
    }

  }
}