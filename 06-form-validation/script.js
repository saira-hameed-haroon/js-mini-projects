const form = document.querySelector(".form");
const nameInput = document.querySelector(".nameInput");
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e)=>{
    e.preventDefault();

    if(nameInput.value == "")
    {
        msg.innerText = "Name is required";
    }
    else
    {
        msg.innerText = "Form Submitted";
    }
})