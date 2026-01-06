let count = 0;
//          --------- 3 METHODS TO DO IT ---------
const displaybtn = document.querySelector(".display");
const decBtn = document.querySelector(".dec");
const incBtn = document.querySelector(".inc");
const resBtn = document.querySelector(".reset");

// const displaybtn = document.getElementById("display");
// const decBtn = document.getElementById("dec");
// const incBtn = document.getElementById("inc");
// const resBtn = document.getElementById("reset");

// we use[0] bcx it returns a collection
// const displaybtn = document.getElementsByClassName("display")[0];
// const decBtn = document.getElementsByClassName("dec")[0];
// const incBtn = document.getElementsByClassName("inc")[0];
// const resBtn = document.getElementsByClassName("reset")[0];

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