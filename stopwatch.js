var minutes = 00;
var seconds = 00;
var totalTenths = 0;
var startButton = document.querySelector('#start');
var interval;
var colorInterval;
var timeoutInterval;

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

document.querySelector('#start').addEventListener('click', function (e) {
    var startButton = e.target;

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

function changeColor() {
    var red = Math.round(Math.random() * 255);
    var green = Math.round(Math.random() * 255);
    var blue = Math.round(Math.random() * 255);
    document.querySelector('#seconds').style.color = `rgb(${red}, ${green}, ${blue})`
}
function colorTimer() {
    changeColor()
}

function startTimer() {
    totalTenths++;
    var minutes = Math.floor(totalTenths / 6000);
    var seconds = Math.floor((totalTenths - minutes * 6000) / 100);
    var tenths = totalTenths - (minutes * 6000 + seconds * 100);

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
function timeout() {
        clearInterval(interval);
        document.querySelector('#tenths').innerHTML = '00';
        document.querySelector('#seconds').innerHTML = '00';
        document.querySelector('#minutes').innerHTML = '00';
        document.querySelector('#start').innerHTML = 'Start';
    }

