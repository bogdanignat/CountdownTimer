const daysDisplay = document.getElementById('days_count_id')
const hoursDisplay = document.getElementById('hours_count_id')
const minutesDisplay = document.getElementById('minutes_count_id')
const secondsDisplay = document.getElementById('seconds_count_id')

let theDate = '1 Jan 2023'
const newYearsDate = new Date(theDate)
const currentDate = new Date()
console.log(newYearsDate)
console.log(currentDate)

function countdown() {
  // get the curent date and the date that we def
  const newYearsDate = new Date(theDate)
  const currentDate = new Date()

  //the diference, in seconds
  const totalSeconds = (newYearsDate - currentDate) / 1000

  //round it up and get the min, hours and days from totalSeconds
  const days = Math.floor(totalSeconds / 3600 / 24)
  const hours = Math.floor(totalSeconds / 3600) % 24
  const mins = Math.floor(totalSeconds / 60) % 60
  const seconds = Math.floor(totalSeconds) % 60

  // modify the html
  daysDisplay.innerHTML = days
  hoursDisplay.innerHTML = formatTime(hours)
  minutesDisplay.innerHTML = formatTime(mins)
  secondsDisplay.innerHTML = formatTime(seconds)
}

//add a '0' in front of the seconds, when < 10
function formatTime(time) {
  return time < 10 ? `0${time}` : time
  // if time<10 then return `0${time}`, if not, return time
}

//call the function
countdown()
//call the function every second
setInterval(countdown, 1000)

//modify the date for the end of countdown
const inputDate = document.getElementById('input_date')
inputDate.addEventListener('change', function () {
  //get the date from input and = with theDate
  theDate = this.value
  console.log(theDate)
})
