const $minutesInput = document.querySelectorAll("#minutesInput");
const $secondsInput = document.querySelectorAll("#secondsInput");
const $toggleTimerBtn = document.querySelectorAll("#toggleTimerBtn");
const $settingsBtn = document.querySelectorAll("#settingsBtn");

let interval = null;

const stopTimer = () => {


};

const startTimer = () => {
    let minutes = parseInt($minutesInput.value);
    let seconds = parseInt($secondsInput.value);
    let totalSeconds = parseInt(minutes * 60 + seconds);

    
};

const toggleTimer = () => {

    
}
$toggleTimerBtn.addEventListener('click', toggleTimer)