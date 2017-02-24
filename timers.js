// console.log('first line');

// // runs this code last in the stack
// setTimeout(futureCode, 0);

// // runs code 5 seconds (1000 milliseconds === 1 second) from now
// setTimeout(futureCode, 5000);


// function futureCode() {
//     console.log('Hello from the future.');
// }

// console.log('last line');

var restoreStartButtonTimeout;
var toggleLoadingInterval;

document.querySelector('#start').addEventListener('click', handleStartButton);
document.querySelector('#cancel').addEventListener('click', handleCancelButton);

function handleStartButton(e) {
    runningStartButton();
    restoreStartButtonTimeout = setTimeout(restoreStartButton, 3000);
}

function restoreStartButton() {
    var startButton = document.querySelector('#start');
    startButton.innerHTML = 'Start';
    startButton.disabled = false;
    startButton.classList.remove('btn-danger');
}

function handleCancelButton(e) {
    var cancelButton = e.target;
    restoreStartButton();
    clearTimeout(restoreStartButtonTimeout);
    clearInterval(toggleLoadingInterval);
}

toggleLoadingInterval = setInterval(toggleLoading, 1000);

//clearTimeout will remove things from the cue as long as you call them by variable

setInterval(toggleLoading, 1000);

function toggleLoading() {
    var startButton = document.querySelector('#start');

    if (startButton.innerText === 'Start') {
        runningStartButton();
    }
    else {
        restoreStartButton();
    }
}

function runningStartButton() {
    var startButton = document.querySelector('#start');

    startButton.innerHTML = '<span class="glyphicon glyphicon-refresh"></span> Running...';
    startButton.disabled = true;
    startButton.classList.add('btn-danger');
}
// var seconds = 0;
// //you can count backwards too...
// // var seconds = 30;
// setInterval(startTimer, 1000);

// function startTimer() {
//     seconds ++; //(if counting down, use seconds --;)
//     document.querySelector('#time').innerHTML = seconds;

//     //to logout of a page after a certain amount of time
//     // if (second === 0) {
//     //     window.location.href = 'https://google.com';
//     // }
// }
