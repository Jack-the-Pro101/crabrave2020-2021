// Date and calulations of date and time
let displayCurrentDate = document.getElementById('currentDateText');
let countDownTimer = document.getElementById('timeUntilPlayText');

let currentDate = new Date;

let recheckDate = setInterval(function()
{ 
    currentDate = new Date;
    displayCurrentDate.innerHTML = currentDate;
}, 100);


// OMEGA RGB background changer
function initRGB() {
    document.getElementById('body').style = 'animation: rgbBg 1.5s infinite'
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
  
console.log('Crab Rave video has been succesfully initilized')
  
}

// Inject YouTube API script
var tag = document.createElement('script');
tag.src = "//www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


//player.pauseVideo();