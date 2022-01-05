const daysDisplay = document.getElementById('days_count_id')
const hoursDisplay = document.getElementById('hours_count_id')
const minutesDisplay = document.getElementById('minutes_count_id')
const secondsDisplay = document.getElementById('seconds_count_id')

let newYears = '1 Jan 2023'

function countdown() {
  const newYearsDate = new Date(newYears)
  const currentDate = new Date()

  const totalSeconds = (newYearsDate - currentDate) / 1000

  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  daysDisplay.innerHTML = days
  hoursDisplay.innerHTML = formatTime(hours)
  minutesDisplay.innerHTML = formatTime(mins)
  secondsDisplay.innerHTML = formatTime(seconds)
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time
  // if time<0 then return the the string `0${time}`, if not, return time
}

countdown()
setInterval(countdown, 1000)

document.getElementById('input_date').addEventListener('change', function () {
  let input = this.value
  console.log(input) // 2015-11-13
  newYears = this.value
  // var dateEntered = new Date(input)
  // console.log(dateEntered) // Fri Nov 13 2015 00:00:00 GMT+0000 (GMT Standard Time)
})

console.log(new Date())
