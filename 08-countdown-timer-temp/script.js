const timeInput = document.querySelector(".timeInput");
const display = document.querySelector(".time");
const start = document.querySelector(".start");

let time;
let timer;
start.addEventListener("click", ()=>{
    time = Number(timeInput.value);
    if(time <=0 || isNaN(time))
    {
        alert("Please enter a valid time");
        return;
    }
    display.innerText = time;
    clearInterval(timer);
    
    timer = setInterval(()=>{
        time--;
        display.innerText = time;
        if(time == 0)
            clearInterval(timer);
    },1000)
})