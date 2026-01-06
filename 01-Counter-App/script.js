let count = 0;
const displaybtn = document.querySelector(".display");
const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
const resBtn = document.querySelector(".reset");

decBtn.addEventListener("click",()=>{
    count--;
    displaybtn.innerText=count;
});
incBtn.addEventListener("click",()=>{
    count++;
    displaybtn.innerText=count;
});
resBtn.addEventListener("click",()=>{
    count=0;
    displaybtn.innerText=count;
});