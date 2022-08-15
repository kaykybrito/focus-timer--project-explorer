import {
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  buttonStop
} from './elements.js'

export default function ({ controls, sound, timer }) {
  buttonPlay.addEventListener('click', function () {
    controls.Play()
    timer.countDown()
    sound.pressButton()
  })
  buttonPause.addEventListener('click', function () {
    controls.pause()
    timer.hold()
    sound.pressButton()
  })

  buttonStop.addEventListener('click', function () {
    timer.reset()
    controls.reset()
    sound.pressButton()
  })

  buttonSoundOn.addEventListener('click', function () {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
    sound.BgAudioPause()
  })
  buttonSoundOff.addEventListener('click', function () {
    buttonSoundOn.classList.remove('hide')
    buttonSoundOff.classList.add('hide')

    sound.bgAudioBg()
  })

  buttonSet.addEventListener('click', function () {
    let newMinutes = controls.getMinutes()
    if (!newMinutes) {
      timer.reset()
      return
    }

    timer.updateDisplay(newMinutes, 0)
    timer.updadeMinutes(newMinutes)
  })
}
