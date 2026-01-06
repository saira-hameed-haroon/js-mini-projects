// USER INPUT COLOR

const input = document.querySelector(".inp");
const btn = document.querySelector(".btn");
const display = document.querySelector(".display");
const reset = document.querySelector(".reset");

btn.addEventListener("click",()=>{
    document.body.style.backgroundColor = input.value;
    display.innerText = `Current Color is : ${input.value}`;
})
reset.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "";
    display.innerText="";
})



//              ------------------RANDOM COLOR SELECTION-------------------

// const btn = document.querySelector(".btn");
// const reset = document.querySelector(".reset");

// btn.addEventListener("click", ()=>{
//     const color = ["seagreen","teal","black","yellow","magenta"];
//     const rand = Math.floor(Math.random()*color.length);
//     document.body.style.backgroundColor = color[rand];
// })
// reset.addEventListener("click", ()=>{
//     document.body.style.backgroundColor = "";
// })