const form = document.querySelector(".form");
const input = document.querySelector(".inp");
const msg = document.querySelector(".msg");

form.addEventListener("submit", (e)=>{

// by default :
// form reloads the page
// data is sent to server
// js message disappears
// but we dont want reload
// preventDefault() stops the default form behavior

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