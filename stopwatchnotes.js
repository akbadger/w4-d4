var startButton = document.querySelector('#start');
var timeDisplay = document.querySelector('#timeDisplay');
var tenths = 0;
var seconds = 0;
var minutes = 0;


makeStartButtonClickable();

function makeStartButtonClickable() {
    startButton.addEventListener('click', startWatch);
}

function startWatch() {
    //     Clicking when the button says "Start" should...
    if (startButton.innerText.trim() === "Start") {
        
        setInterval(updateTimer, 100);

        // Change button to say "Pause"
        changeButtonToSayPause();
    }
}
function updateTimer() {
    // Start counting up, every 10th of a second
    startCountingUpEveryTenth();

    // Update the #timer inner HTML to follow this format: Minutes:Seconds:Tenths (00:00:00)
    updateTimerDisplay();

    // Change the color of the timer text each second
    changeColorofTimerEachSecond();
}

function startCountingUpEveryTenth() {
    tenths++;

    if (tenths === 9) {
        seconds++
        tenths = 0;
    }

    if (seconds === 59) {
        minutes++;
        seconds = 0;
    }
}

function updateTimerDisplay() {
    timeDisplay.innerHTML = `${minutes}:${seconds}:${tenths}`;
}

function changeColorofTimerEachSecond() {
    var red = _randomNumber(255);
    var green = _randomNumber(255);
    var blue = _randomNumber(255);
    
    timeDisplay.style.color = `rgb(${red}, ${green}, ${blue})`;
}

function changeButtonToSayPause() {
    startButton.innerText = 'Pause';
}

// Helper functions go at the bottom of file //
function _randomNumber(max) {
    return Math.round(Math.random() * max);
}