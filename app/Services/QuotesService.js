import { ProxyState } from "../AppState.js";
import Quote from "../Models/Quote.js";
import { api } from "./AxiosService.js";

class QuotesService {

  constructor() {
    //console.log("Msg at Quotes constructor")
  }

  async getQuote() {
    try {
      debugger;
      const res = await api.get('quotes/')
      console.log(res.data)
      ProxyState.activeQuote = new Quote(res.data)
    } catch (error) {
      console.error("Encountered error in Fetching Quotes", error)
    }
  }
}

export const quotesService = new QuotesService()