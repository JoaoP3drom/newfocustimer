import * as timer from "./timer.js"
import state from "./state.js"
import * as sounds from './sounds.js'

export function rain() {
  document.documentElement.classList.add('rain')
  state.musicOn = document.documentElement.classList.toggle('music-on')
  if(state.musicOn) {
    sounds.rain.play()
    return
  }
  sounds.rain.pause()
}

export function florest() {
  document.documentElement.classList.add('florest')
  state.musicOn = document.documentElement.classList.toggle('music-on')
  if(state.musicOn) {
    sounds.florest.play()
    return
  }
  sounds.florest.pause()
}

export function coffe() {
  document.documentElement.classList.add('coffe')
  state.musicOn = document.documentElement.classList.toggle('music-on')
  if(state.musicOn) {
    sounds.coffe.play()
    return
  }
  sounds.coffe.pause()
}

export function fire() {
  document.documentElement.classList.add('fire')
  state.musicOn = document.documentElement.classList.toggle('music-on')
  if(state.musicOn) {
    sounds.fire.play()
    return
  }
  sounds.fire.pause()
}


export function play() {
  document.documentElement.classList.add('running')
  state.isRunning = true
  timer.countdown()
}

export function pause() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
}

export function reset() {
  state.isRunning = false
  document.documentElement.classList.remove('running')
  timer.updateDisplay()
}

export function plus() {
  if(state.minutes == 90) {
    return
  }
  state.minutes += 5
  timer.updateDisplay()
}

export function minus() {
  if(state.minutes == 0) {
    return
  }
  state.minutes -= 5
  timer.updateDisplay()
}
