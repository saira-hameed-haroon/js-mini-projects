const timeInput = document.querySelector(".timeInput");
const startTimerBtn = document.querySelector(".startTimerBtn");
const timerDisplay = document.querySelector(".timerDisplay");

let time;
let timer;
startTimerBtn.addEventListener("click", ()=>{
    time = Number(timeInput.value);
    if(time <=0 || isNaN(time))
    {
        alert("Please enter a valid time");
        return;
    }
    timerDisplay.innerText = time;
    clearInterval(timer);
    
    timer = setInterval(()=>{
        time--;
        timerDisplay.innerText = time;
        if(time == 0)
            clearInterval(timer);
    },1000)
})