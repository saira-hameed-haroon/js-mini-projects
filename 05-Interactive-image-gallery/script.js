const main = document.querySelector(".main");
const thumb = document.querySelectorAll(".thumb");
const reset = document.querySelector(".reset");
const defaultImg = main.src;

thumb.forEach((img)=>{
    img.addEventListener("click", ()=>{
        main.src = img.src;
    })
})
reset.addEventListener("click",()=>{
    main.src = defaultImg;
})