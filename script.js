let dd = document.querySelector("#day");
let mm = document.querySelector("#month");
let yyyy = document.querySelector("#year");
let hh = document.querySelector("#hour");
let min = document.querySelector("#min");
let ss = document.querySelector("#sec");

let myEvent = document.querySelector("#name");
let eventName = document.querySelector("#eventName")
function showEvent(){
    eventName.innerHTML = myEvent.value.toUpperCase();
}
showEvent();

function eventCountdown () {
    let eventDate = new Date (yyyy.value , mm.value-1, dd.value, hh.value, min.value, ss.value);
    const now = new Date();
    const diff = eventDate-now;

    let show = document.querySelector("#show");
    function Run() {
    show.innerHTML = eventDate;
    };
    Run();

    const msInSecond = 1000;
    const msInMinute = 60*1000;
    const msInHour = 60*60*1000;
    const msInDay = 24*60*60*1000;

    const displayDay = Math.floor (diff/msInDay);
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor ((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor ((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor ((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = displaySecond;

    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;

        clearInterval(timerID);
        eventHere ();
        
    }
}
let timerID = setInterval(eventCountdown, 1000);


function eventHere() {
    const heading = document.querySelector(".head");
    heading.textContent = "-HERE WE ARE-"
}

const buttonStop = document.querySelector("#myButtonStop");
    buttonStop.addEventListener ("click", function(){
    document.querySelector("#myAudio").pause();
    })

const button = document.querySelector("#myButton");
    button.addEventListener ("click", function(){
    document.querySelector("#myAudio").play();
    })
    
