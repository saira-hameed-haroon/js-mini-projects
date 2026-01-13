const bgColorInput = document.querySelector(".bgColorInput");
const bgColorBtn = document.querySelector(".bgColorBtn");
const colorDisplay = document.querySelector(".colorDisplay");
const resetBtn = document.querySelector(".resetBtn");

bgColorBtn.addEventListener("click",()=>{
    document.body.style.backgroundColor = bgColorInput.value;
    colorDisplay.innerText = `Current Color is : ${bgColorInput.value}`;
})
resetBtn.addEventListener("click", ()=>{
    document.body.style.backgroundColor = "";
    colorDisplay.innerText="";
})