//Global variables to access throughout js document

var minutes = 00;
var seconds = 00;
var totalTenths = 0;
var startButton = document.querySelector('#start');
var interval;
var colorInterval;
var timeoutInterval;


//Listens to the startButton and on double-click, button text changes to start and timer resets to 00.
document.querySelector('#start').addEventListener('dblclick', function (e) {
    var startButton = e.target;
    interval = setInterval(startTimer, 10)
    if (startButton.innerHTML === 'Resume') {
        console.log('hello');
        clearInterval(interval);
        document.querySelector('#tenths').innerHTML = '00';
        document.querySelector('#seconds').innerHTML = '00';
        document.querySelector('#minutes').innerHTML = '00';
        document.querySelector('#start').innerHTML = 'Start';
    }
});

//listens to the startButton and on click changes behavior of timer based on what the button text is.
document.querySelector('#start').addEventListener('click', function (e) {
    var startButton = e.target;
// If statements for button text, starting/stopping timer, starting/stopping color changes.
    if (startButton.innerHTML === 'Start') {
        startButton.innerHTML = 'Pause';
        interval = setInterval(startTimer, 10)
        colorInterval = setInterval(colorTimer, 1000);
    }
    else if (startButton.innerHTML === 'Pause') {
        startButton.innerHTML = 'Resume';
        clearInterval(interval);
        clearInterval(colorInterval);
        timeoutInterval = setInterval(timeout, 15000)
    }
    else if (startButton.innerHTML === 'Resume') {
        startButton.innerHTML = 'Pause';
        interval = setInterval(startTimer, 10)
        colorInterval = setInterval(colorTimer, 1000);
    }
   
});

//Randomizes colors
function changeColor() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    document.querySelector('#tenths').style.color = `rgb(${red}, ${green}, ${blue})`
    document.querySelector('#seconds').style.color = `rgb(${red}, ${green}, ${blue})`
    document.querySelector('#minutes').style.color = `rgb(${red}, ${green}, ${blue})`
}

// function for changing colors 
function colorTimer() {
    changeColor()
}

// Begins the timer and cycles through tenths, seconds, and minutes according to milliseconds
function startTimer() {
    totalTenths++;
    var minutes = Math.floor(totalTenths / 6000);
    var seconds = Math.floor((totalTenths - minutes * 6000) / 100);
    var tenths = totalTenths - (minutes * 6000 + seconds * 100);

// If statements setting the parameters for when tenths/seconds/minutes roll over
   if (tenths > 0) {
       document.getElementById('tenths').innerHTML = '0' + tenths;
   }
   if (tenths > 9) {
       document.getElementById('tenths').innerHTML = tenths;
   }
   if (tenths > 9) {
       document.getElementById('seconds').innerHTML = '0' + seconds;
   }
   if (seconds > 9) {
       document.getElementById('seconds').innerHTML = seconds;
   }
   if (tenths > 0) {
       document.getElementById('minutes').innerHTML = '0' + minutes;
       }
   if (minutes > 9) {
       document.getElementById('minutes').innerHTML = minutes;
   }
}

// Function that sets the 15-second timeout. Resets timer and also button text.
function timeout() {
        clearInterval(interval);
        document.querySelector('#tenths').innerHTML = '00';
        document.querySelector('#seconds').innerHTML = '00';
        document.querySelector('#minutes').innerHTML = '00';
        document.querySelector('#start').innerHTML = 'Start';
    }