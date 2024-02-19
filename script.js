let timerInterval;
let isTimerRunning = false;
let minutes = 25;
let seconds = 0;

function startStopTimer() {
    if (!isTimerRunning) {
        startTimer();
        isTimerRunning = true;
        document.getElementById("startStopButton").textContent = "STOP";
    } else {
        stopTimer();
        isTimerRunning = false;
        document.getElementById("startStopButton").textContent = "START";
    }
}

function startTimer() {
    timerInterval = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timerInterval);
        alert("Time's up!");
        isTimerRunning = false;
        document.getElementById("startStopButton").textContent = "START";
        return;
    }

    if (seconds === 0) {
        minutes--;
        seconds = 59;
    } else {
        seconds--;
    }

    updateDisplay();
}

function updateDisplay() {
    const timerDisplay = document.getElementById("timer");
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function setTimer(mins, secs, backgroundClass) {
    minutes = mins;
    seconds = secs;
    updateDisplay();
    stopTimer(); // Stop the timer if it's running when setting new time
    isTimerRunning = false;
    document.getElementById("startStopButton").textContent = "START"; // Ensure the button text is set to "START" when timer is reset
    document.body.className = backgroundClass; // Set the background class
}