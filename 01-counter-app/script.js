let count = 0;
const displaybtn = document.querySelector(".display");
const decrementButton = document.querySelector(".decrementBtn");
const incrementButton = document.querySelector(".incrementBtn");
const resetButton = document.querySelector(".reset");

decrementButton.addEventListener("click",()=>{
    count--;
    displaybtn.innerText=count;
});
incrementButton.addEventListener("click",()=>{
    count++;
    displaybtn.innerText=count;
});
resetButton.addEventListener("click",()=>{
    count=0;
    displaybtn.innerText=count;
});