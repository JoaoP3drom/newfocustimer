import * as el from './elements.js'
import * as actions from './actions.js'
import state from './state.js'

export function registerControls() {

  el.modes.addEventListener('click', (element) => {
    let action = element.target.dataset.mode
    let button = element.target
    
    if(typeof actions[action] != 'function') {
      return
    }
    actions[action]()

    state.button.classList.remove('secondary')
    state.button = button

    button.classList.add('secondary')
    if(state.mode != action) {
      document.documentElement.classList.remove(state.mode)  
    }
    state.mode = action
  })

  el.controls.addEventListener('click', (element) => {
    let action = element.target.dataset.action
    actions[action]()
})
}