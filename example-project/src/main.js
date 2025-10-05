import './style.css'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h1>Contribute !</h1>
  </div>
`

setupCounter(document.querySelector('#counter'))
