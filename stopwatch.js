var minutes = 00;
var seconds = 00;
var totalTenths = 0;
var startButton = document.querySelector('#start');

document.querySelector('#start').addEventListener('click', function () {
    setInterval(startTimer, 10)
});

function startTimer() {
    totalTenths++;
    var minutes = Math.floor(totalTenths / 6000);
    var seconds = Math.floor((totalTenths - minutes * 6000) / 100);
    var tenths = totalTenths - (minutes * 6000 + seconds * 100);

    if (tenths > 0) {
        document.querySelector('#tenths').innerHTML = tenths;
    }
    if (tenths > 9) {
        document.querySelector('#seconds').innerHTML = '0' + seconds;
    }
    if (seconds > 9) {
        document.querySelector('#seconds').innerHTML = seconds;
    }
    if (tenths > 0) {
        document.querySelector('#minutes').innerHTML = '0' + minutes;
    }
    if (minutes > 9) {
        document.querySelector('#minutes').innerHTML = minutes;
    }
}

function runningStartButton() {
    // var startButton = document.querySelector('#start');
    startButton.innerHTML = 'Pause';
}
document.querySelector('#start').addEventListener('click', runningStartButton);

function pauseTimer() {
    Interval = setInterval(startTimer, 10);
    if (startButton.innerHTML === 'Pause') {
        clearInterval(Interval);
    }
    else {
        runningStartButton();
    }
}
startButton.addEventListener('click', pauseTimer);

//    



// function toggleResets() {}
// if (startButton.innerText === 'Pause') {

// } else if (startButton.innerText === 'Resume') {

// }

// }