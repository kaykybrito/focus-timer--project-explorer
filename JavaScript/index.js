// DOM
// Document Object Model

// refatoração: mudar um código para deixá-lo mais entendível
// deixar o código mais performático
// SEM ALTERAR suas funcionalidadesconst buttonPlay = document.querySelector('.play')

import Controls from './controls.js'
import Timer from './timer.js'
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay
} from './elements.js'

import sounds from './sounds.js'
import Event from './events.js'

// Event-driven
// programação imperativa
// callback
const controls = Controls({
  buttonStop,
  buttonSet,
  buttonPlay,
  buttonPause
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset
})

const sound = sounds()

Event({ controls, sound, timer })
