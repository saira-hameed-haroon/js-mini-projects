const searchInput = document.querySelector(".searchInput");
const items = document.querySelectorAll(".item");

searchInput.addEventListener("input", ()=>{
    const value = searchInput.value.toLowerCase();
    items.forEach((item) =>{
        item.style.display = item.innerText.toLowerCase().includes(value) ? "block" : "none";
    })
})