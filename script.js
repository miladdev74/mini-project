const targetDate = new Date('2026-03-10T05:11:33') // set your date

function updateCountdown(){
    const currentTime = new Date();
    const diffrence = targetDate - currentTime;

    const days = Math.floor(diffrence / (1000 * 60 * 60 *24));
    const hours = Math.floor((diffrence % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes =Math.floor((diffrence % (1000 * 60 *60)) / (1000 * 60));
    const seconds = Math.floor(( diffrence % (1000 * 60)) / 1000);

    document.getElementById("days").innerText= days;
    document.getElementById("hours").innerText= hours;
    document.getElementById("minutes").innerText= minutes;
    document.getElementById("seconds").innerText= seconds;

    if( diffrence <0 ){
        clearInterval(interval);
        document.getElementById("timer").innerText = "The event has started!"
    }
}
 const interval = setInterval(updateCountdown, 1000);
