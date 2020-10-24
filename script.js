// Date and calulations of date and time
let displayCurrentDate = document.getElementById('currentDateText');
let countDownTimer = document.getElementById('timeUntilPlayText');

let currentDate = new Date;

let currentMonth = currentDate.getMonth();
let currentDayOfMonth = currentDate.getDate();
let currentHour = currentDate.getHours();
let currentMinute = currentDate.getMinutes();
let currentSecond = currentDate.getSeconds();
let currentMilliSecond = currentDate.getMilliseconds();
let parsedMilli;


let recheckDate = setInterval(function()
{ 
    currentDate = new Date;
    displayCurrentDate.innerHTML = currentDate;

    currentMonth = currentDate.getMonth();
    currentDayOfMonth = currentDate.getDate();
    currentHour = currentDate.getHours();
    currentMinute = currentDate.getMinutes();
    currentSecond = currentDate.getSeconds();
    currentMilliSecond = currentDate.getMilliseconds();

    document.getElementById('monthsCountdown').innerHTML = currentMonth + 1;
    document.getElementById('daysCountdown').innerHTML = currentDayOfMonth;
    document.getElementById('hoursCountdown').innerHTML = currentHour;
    document.getElementById('minutesCountdown').innerHTML = currentMinute;
    document.getElementById('secondsCountdown').innerHTML = currentSecond;

    currentMilliSecond = currentMilliSecond / 10;
    parsedMilli = parseInt(currentMilliSecond)
    document.getElementById('millisecondsCoundown').innerHTML = parsedMilli;

    if (currentMonth == 9 && currentDayOfMonth == 24 && currentHour == 10 && currentMinute == 58 && currentSecond == 44 && currentMilliSecond > 500 && currentMilliSecond < 600)
    {
      initVideo();
    }
    // if (currentMonth == 11 && currentDayOfMonth == 31 && currentHour == 23 && currentMinute == 58 && currentSecond == 44 && currentMilliSecond > 600 && currentMilliSecond < 700)
    // {
    //   initVideo();
    // }
}, 50);

function initVideo()
{
  player.playVideo();
  document.getElementById('body').style = 'transition-duration: 5000ms; background-color: black';

  setTimeout(function()
  {
    initRGB();
  },75000)
}

// OMEGA RGB background changer
function initRGB() 
{
  document.getElementById('body').style = '';

    document.getElementById('body').style.backgroundColor = 'red';

      setTimeout(function()
      {
        document.getElementById('body').style.backgroundColor = 'green';
      },500)

        setTimeout(function()
        {
          document.getElementById('body').style.backgroundColor = 'blue';
        },1000)

          setTimeout(function()
          {
            initRGB();
          },1500)
}

// Change iframe to smaller if on smaller screen

var windowWidth = window.innerWidth;

if (windowWidth < 985) {
  document.getElementById('video').width = '768';
  document.getElementById('video').height = '432';
}

// https://developers.google.com/youtube/iframe_api_reference 

// global variable for the player
var player;

// this function gets called when API is ready to use
function onYouTubePlayerAPIReady() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  
console.log('Crab Rave video has been succesfully initilized');
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);