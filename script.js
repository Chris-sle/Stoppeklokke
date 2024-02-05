let timerInterval;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let displayElement = document.getElementById('timer')

function startTimer() {
    clearInterval (timerInterval);
    timerInterval = setInterval(() => {
        milliseconds += 10;
        if (milliseconds >= 1000) {
            milliseconds = 0;
            seconds++;
        }
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
        }
        displayElement.innerHTML = formatTime(minutes) + ':' + formatTime(seconds) + ':' + formatTime(milliseconds / 10);
    }, 10);
} 

function stopTimer() {
    clearInterval(timerInterval);
} 

function resetTimer() {
    clearInterval(timerInterval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    displayElement.innerHTML = '00:00:00';
}

function formatTime(time)  {
    return time < 10 ? '0' + time : time;
}
