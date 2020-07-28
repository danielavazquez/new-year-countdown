//*1 bring in all the DOM elements
//*2 create newYearTime global variable with new and Date object JS constructor
//*3 create currentYear global variable and use getFullYear method, add to newYearTime variable to make year dynamic
//*4 create updateCountdown function and global variables that take into account time that has passed
//*5 create setInterval function and pass in updateCountdown and run it every x milliseconds you specify
//*6 get d,h,m,s variables in the DOM
//*7 bring in DOM element year show spinner.gif before countdown or page refreshes using setTimeout() for 1 sec remove the gif and countdown is display none


const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1}  00:00:00`);


//7 Set background year on overlay
year.innerText = currentYear + 1;


//4 Update countdown time
function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24); //sec, minutes, hours, days
  const h = Math.floor(diff / 1000 / 60 / 60) % 24; //account for days that have passed
  const m = Math.floor(diff / 1000 / 60) % 60; //account for minutes that have passed
  const s = Math.floor(diff / 1000) % 60; //account for seconds that have passed

  //6 Add values to DOM
  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;

}

//7 Show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);

//5 Run every second (milliseconds)
setInterval(updateCountdown, 1000);
