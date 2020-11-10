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



// Date and calulations of date and time
let displayCurrentDate = document.getElementById('currentDateText');
let countDownTimer = document.getElementById('timeUntilPlayText');

let currentDate = new Date;

var currentMonth = currentDate.getMonth();
var currentDayOfMonth = currentDate.getDate();
var currentHour = currentDate.getHours();
var currentMinute = currentDate.getMinutes();
var currentSecond = currentDate.getSeconds();
var currentMilliSecond = currentDate.getMilliseconds();
var parsedMilli;


let yearCheck = currentDate.getFullYear();
if (yearCheck > 2020)
{
  document.getElementById('pageTitle').innerHTML = '2020 is gone!'
}


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

    currentMilliSecond = currentDate.getMilliseconds();

    if (currentMonth == 10 && currentDayOfMonth == 10 && currentHour == 17 && currentMinute == 37 && currentSecond == 44 && currentMilliSecond > 0 && currentMilliSecond < 50)
    {
      masterTimer();
    }

    if (currentMonth == 10 && currentDayOfMonth == 10 && currentHour == 17 && currentMinute == 38 && currentSecond == 44 && currentMilliSecond > 900 && currentMilliSecond < 1000)
    {
      initVideo();
    }

    // if (currentMonth == 11 && currentDayOfMonth == 31 && currentHour == 23 && currentMinute == 57 && currentSecond == 44 && currentMilliSecond > 0 && currentMilliSecond < 50)
    // {
    //   masterTimer();
    // }

    // if (currentMonth == 11 && currentDayOfMonth == 31 && currentHour == 23 && currentMinute == 58 && currentSecond == 44 && currentMilliSecond > 850 && currentMilliSecond < 950)
    // {
    //   initVideo();
    // }
}, 25);

function masterTimer()
{
  var currentCountdown = 0;
  var currentCountdownValue = 61 - currentCountdown;
  var currentCountdownString = ' 61 seconds';
  var masterTimer = setInterval(function()
  {
    currentCountdown++;
    currentCountdownValue = 61 - currentCountdown;
    currentCountdownString = currentCountdownValue + ' seconds';
    document.getElementById('masterTimer').innerHTML = 'Time until video plays: ' + currentCountdownString;

    if (currentCountdownValue == 0)
    {
      document.getElementById('masterTimer').innerHTML = 'Initiating video now...';
    }
    if (currentCountdownValue < 0) {
      document.getElementById('masterTimer').style.display = 'none';
    }
  }, 1000);

  document.getElementById('masterTimer').innerHTML = 'Time until video plays: ' + currentCountdownString;

  return 'Master timer prematurely called by console';
}

function initVideo()
{
  player.playVideo();

  document.getElementById('body').style = 'background-color: black;';

  setTimeout(function()
  {
    document.getElementById('yaytext').innerHTML = '2020 is gone!';
    document.getElementById('pageTitle').innerHTML = '- 2020 is gone! -';

    initRGB();
  },74900) // 117 seconds until end of song

  return 'Video play prematurely called by console';
}

// OMEGA RGB background changer
function initRGB() 
{

  document.getElementById('body').className = 'bodyRGB';
  document.getElementById('body').style = '';

    document.getElementById('body').style.backgroundColor = 'red';
    document.getElementById('yaytext').style.color = 'rgb(0,200,0)';

      setTimeout(function()
      {
        document.getElementById('body').style.backgroundColor = 'rgb(0,200,0)';
        document.getElementById('yaytext').style.color = 'red';
      },500)

        setTimeout(function()
        {
          document.getElementById('body').style.backgroundColor = 'blue';
          document.getElementById('yaytext').style.color = 'orange';
        },1000)

          setTimeout(function()
          {
            initRGB();
          },1500)
return 'RGB prematurely called by console';
}

// Change iframe to smaller if on smaller screen

var windowWidth = window.innerWidth;

if (windowWidth < 985) {
  document.getElementById('video').width = '768';
  document.getElementById('video').height = '432';
}

// Settings

document.getElementById('settingsButton').addEventListener('click', function()
{
  document.getElementById('settingsContainer').style.display = 'block'
})

document.getElementById('closeSettings').addEventListener('click', function()
{
  document.getElementById('settingsContainer').style.display = 'none'
})

document.getElementById('defaultTheme').addEventListener('click', function()
{
  document.getElementById('infoContainer').style.backgroundColor = '#1E2656';
  document.getElementById('aboutContainer').style.backgroundColor = '#1E2656';
  document.getElementById('monthsCountdownCont').style.backgroundColor = '#8484A2';
  document.getElementById('daysCountdownCont').style.backgroundColor = '#8484A2';
  document.getElementById('hoursCountdownCont').style.backgroundColor = '#8484A2';
  document.getElementById('minutesCountdownCont').style.backgroundColor = '#8484A2';
  document.getElementById('secondsCountdownCont').style.backgroundColor = '#8484A2';
  document.getElementById('millisecondsCoundownCont').style.backgroundColor = '#8484A2';
  document.getElementById('defaultThemeCheck').style.display = 'block';
  document.getElementById('pinkThemeCheck').style.display = 'none';
  document.getElementById('defaultTheme').title = 'This theme is selected';
  document.getElementById('pinkTheme').title = 'Select theme';
})

document.getElementById('pinkTheme').addEventListener('click', function()
{
  document.getElementById('infoContainer').style.backgroundColor = '#c56baf';
  document.getElementById('aboutContainer').style.backgroundColor = '#c56baf';
  document.getElementById('monthsCountdownCont').style.backgroundColor = '#d195c2';
  document.getElementById('daysCountdownCont').style.backgroundColor = '#d195c2';
  document.getElementById('hoursCountdownCont').style.backgroundColor = '#d195c2';
  document.getElementById('minutesCountdownCont').style.backgroundColor = '#d195c2';
  document.getElementById('secondsCountdownCont').style.backgroundColor = '#d195c2';
  document.getElementById('millisecondsCoundownCont').style.backgroundColor = '#d195c2';
  document.getElementById('defaultThemeCheck').style.display = 'none';
  document.getElementById('pinkThemeCheck').style.display = 'block';
  document.getElementById('pinkTheme').title = 'This theme is selected';
  document.getElementById('defaultTheme').title = 'Select theme';
})