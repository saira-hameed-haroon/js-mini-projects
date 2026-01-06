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