export default function Controls({
  buttonStop,
  buttonSet,
  buttonPlay,
  buttonPause
}) {
  function Play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
  }
  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }
  function getMinutes() {
    let newMinutes = prompt('Quantos minutos?')
    if (!newMinutes) {
      return false
    }

    return newMinutes
  }
  function reset() {
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  return {
    reset,
    Play,
    getMinutes,
    pause
  }
}
