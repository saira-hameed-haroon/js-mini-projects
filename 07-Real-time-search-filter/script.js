const search = document.querySelector(".search");
const item = document.querySelectorAll(".item");

search.addEventListener("input", ()=>{
    const value = search.value.toLowerCase();
    item.forEach((item) =>{
        item.style.display = item.innerText.toLowerCase().includes(value) ? "block" : "none";
    })
})