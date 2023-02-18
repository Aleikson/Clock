
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    let seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    let mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    let hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

    let period = "AM";

    if (hours > 12) {
        hours-= 12;
        period = "PM";
    }

    if (hours === 0) {
        hours = 12;
        period = "AM";
    }

    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;    
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("digital-clock").innerText = hours + " : " + mins + " : " + seconds + " " + period;

}
setInterval(setDate, 1000);