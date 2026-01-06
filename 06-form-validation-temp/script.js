const form = document.querySelector(".form");
const input = document.querySelector(".inp");
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(input.value == "")
    {
        msg.innerText = "Name is required";
    }
    else
    {
        msg.innerText = "Form Submitted";
    }
})