import { ProxyState } from "../AppState.js";
import { quotesService } from "../Services/QuotesService.js"


function _drawActiveQuote() {

  document.getElementById('quoteMsg').innerText = ProxyState.activeQuote.content
  document.getElementById('quoteAuthor').innerText = ProxyState.activeQuote.author
  return

}
export default class QuotesController {
  constructor() {

    ProxyState.on('activeQuote', _drawActiveQuote)
    this.getQuote()

  }
  async getQuote() {
    try {
      const res = await quotesService.getQuote()
    } catch (error) {
      console.error("Encountered error in Fetching Images", error)
    }
  }
}