const mainImg = document.querySelector(".mainImg");
const thumbs = document.querySelectorAll(".thumb");
const resetBtn = document.querySelector(".resetBtn");
const defaultImg = mainImg.src;

thumbs.forEach((img)=>{
    img.addEventListener("click", ()=>{
        mainImg.src = img.src;
    })
})
resetBtn.addEventListener("click",()=>{
    mainImg.src = defaultImg;
})