import { ProxyState } from "../AppState.js"

export default class Quote {
  constructor({ _id, content, author }) {
    this.id = _id
    this.content = content
    this.author = author
  }

  get Template() {
    return `
        <div class="text-center m-5 question">
        <h3>${this.content}</h3>
        <div class="answer">
            <p>${this.author}</p>
        </div>
    </div>
  `
  }

}