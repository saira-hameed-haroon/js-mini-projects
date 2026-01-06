let time = 10;
const display = document.querySelector(".time");
const start = document.querySelector(".start");

start.addEventListener("click", ()=>{
    const timer = setInterval(()=>{
        time--;
        display.innerText = time;
        if(time == 0)
            clearInterval(timer);
    },1000)
})