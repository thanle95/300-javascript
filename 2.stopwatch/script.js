window.onload = function(){
    var seconds = 00
    var tens = 00
    var spanTens = document.getElementById("tens")
    var spanSeconds = document.getElementById("seconds")
    var btnStart = document.getElementById("start")
    var btnStop = document.getElementById("stop")
    var btnReset = document.getElementById("reset")
    var intervalId = null;
    btnStart.onclick = function(){
        
        intervalId = intervalId || setInterval(startTimer, 10)
    }
    btnStop.onclick = function(){
        stopTimer()
    }
    btnReset.onclick = function(){
        stopTimer()
        seconds = 00
        tens = 00
        spanSeconds.innerHTML = "00"
        spanTens.innerHTML = '00'
    }
    function stopTimer(){
        clearInterval(intervalId)
        intervalId = null;
    }
    function startTimer(){
        tens++;
        
        if(tens == 100)
        {
            tens = 0
            seconds++
            if(seconds < 10)
            spanSeconds.innerHTML = "0" + seconds
            else spanSeconds.innerHTML = seconds
        } 
        spanTens.innerHTML = tens.toString().padStart(2,0)
    }
}

