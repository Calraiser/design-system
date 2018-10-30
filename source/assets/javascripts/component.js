
const template = document.createElement('template')
template.innerHTML = `
<style>
  .kitten {
    background: gray;
    border-radius: 3px;
    padding: 6px;
  }
</style>
<img class='kitten' src='https://placekitten.com/200/300' />
`

class PlaceholderKitten extends HTMLElement {
  constructor() {
    super()
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))
  }
}

window.customElements.define('placeholder-kitten', PlaceholderKitten)
