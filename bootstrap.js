import P5 from 'p5'
import * as sketch from './sketch'

function main() {
  new P5(p5 => {
    // make functions context-bound to p5
    for (const field in p5)
      if (typeof p5[field] === 'function')
        p5[field] = p5[field].bind(p5)

    // make p5 functions publicly available
    for (const field in p5)
      window[field] = p5[field]

    // assign exported elements to the p5 instance
    for (const field in sketch)
      if (typeof p5[field] === typeof sketch[field] || typeof p5[field] === 'undefined')
        p5[field] = () => sketch[field](p5)
  })
}

window.addEventListener('load', main, { once: true })
