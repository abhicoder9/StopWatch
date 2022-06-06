    var tens = 0;
    var appendTens = document.getElementById("tens");
    var seconds = 0;
    var appendSeconds = document.getElementById("seconds");
    var interval;

function start() {
   interval =  setInterval(stopwatch,10);
}
function stop() { 
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    var tens = 0;
    var seconds = 0;
    appendTens.innerHTML = "0" + tens;
    appendSeconds.innerHTML = "0" + seconds;
}
function stopwatch() {
    tens++;
    if (tens <= 9) {
        appendTens.innerHTML = "0" + tens;
    }

    if (tens > 9) {
        appendTens.innerHTML = tens;
    }

    if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0"+ 0;
    }

    if (seconds > 9) {
        appendSeconds.innerHTML = seconds; 
    }
}