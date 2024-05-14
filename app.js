var Hours = 0;
var Minutes = 0;
var Seconds = 0;
//
var getHours = document.getElementById("hours");
var getMinutes = document.getElementById("minutes");
var getSeconds = document.getElementById("seconds");

//
var getDay = document.getElementById("day")
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
//
var getDate = document.getElementById("date")
var getMonth = document.getElementById("month")
var getYear = document.getElementById("year")


function upDateClock() {
  var now = new Date()


  Seconds = now.getSeconds()
  getSeconds.innerHTML = Seconds
  Minutes = now.getMinutes()
  getMinutes.innerHTML = Minutes
  Hours = now.getHours()
  getHours.innerHTML = Hours
  //

  getDay.innerHTML = days[now.getDay()]
  getDate.innerHTML = now.getDate()
  getMonth.innerHTML = now.getMonth() + 1

  getYear.innerHTML = now.getFullYear()
  //  
}

upDateClock()

setInterval(upDateClock, 1000)


