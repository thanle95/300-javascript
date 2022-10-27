window.onload =  function (){
    var spanClock = document.getElementById("clock")
    function padStart(s){
        return s.toString().padStart(2,0)
    }
    function startTimer(){
        const date = new Date()
        var h = date.getHours()
        const m = date.getMinutes()
        const s = date.getSeconds();
        var session = "AM"
        if(h == 0)
            h = 12
        else if(h > 12)
            {
                h-= 12
                session = "PM"
            }

        spanClock.innerHTML = `${padStart(h)}:${padStart(m)}:${padStart(s)} ${session}`
        setTimeout(startTimer, 1000)
    }
    startTimer()
    // setInterval(startTimer, 1000)
   

}

var greeting = "hey hi";
const times = 4;

if (times > 3) {
    var greeting = "say Hello instead"; 
    var hello = "say Hello";
    let world = 'world'
}

console.log(greeting);
console.log(hello);
console.log(world);

