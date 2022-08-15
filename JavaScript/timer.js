import sounds from './sounds.js'

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)

  function updateDisplay(newMinutes, seconds) {
    newMinutes = newMinutes === undefined ? minutes : newMinutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(newMinutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }
  function reset() {
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
  }
  function countDown() {
    timerTimeOut = setTimeout(() => {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, 0)

      if (isFinished) {
        resetControls()
        updateDisplay()
        sounds().timerEnd()
        return
      }

      if (seconds <= 0) {
        seconds = 60
        --minutes
        // minutesDisplay.textContent = String(minutes - 1).padStart(2, '0')
      }
      //secondsDisplay.textContent = String(seconds - 1).padStart(2, '0')
      updateDisplay(minutes, String(seconds - 1))

      countDown()
    }, 1000) //Recurção - quando uma função chama ela mesma!
  }
  function hold() {
    clearTimeout(timerTimeOut)
  }
  function updadeMinutes(newMinutes) {
    minutes = newMinutes
  }

  return {
    countDown,
    reset,
    updateDisplay,
    updadeMinutes,
    hold
  }
}
