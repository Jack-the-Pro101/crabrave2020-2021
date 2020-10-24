// Date and calulations of date and time
let displayCurrentDate = document.getElementById('currentDateText');
let countDownTimer = document.getElementById('timeUntilPlayText');

var currentDate = new Date;

var currentMonth = currentDate.getMonth();
var currentDayOfMonth = currentDate.getDate();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
var currentSecond = currentDate.getSeconds();
var currentMilliSecond = currentDate.getMilliseconds();


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
    document.getElementById('millisecondsCoundown').innerHTML = currentMilliSecond;

    if (currentMonth == 9 && currentDayOfMonth == 23 && currentHour == 21 && currentMinute == 13 && currentSecond == 44 && currentMilliSecond > 700 && currentMilliSecond < 800)
    {
      initVideo();
    }
}, 50);

// let recheckDate = setInterval(function()
// { 
//     currentDate = new Date;
//     displayCurrentDate.innerHTML = currentDate;

//     if (currentMonth == 11 && currentDayOfMonth == 31 && currentHour == 23 && currentMinute == 58 && currentSecond == 44 && currentMilliSecond == 700)
//     {
//       initVideo();
//     }
// }, 100);
















function initVideo()
{
  player.playVideo();
}



// OMEGA RGB background changer
function initRGB() {
    document.getElementById('body').style = 'animation: rgbBg 1.5s infinite';

    setTimeout(function()
    {
        document.getElementById('body').style = 'background-color:black;color:white;';
    }, 192000)
}

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