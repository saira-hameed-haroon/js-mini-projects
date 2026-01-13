const passwordInput = document.querySelector(".passwordInput");
const passwordToggleBtn = document.querySelector(".passwordToggleBtn");

passwordToggleBtn.addEventListener("click", ()=>{
    if(passwordInput.type == "password")
    {
        passwordInput.type = "text";
        passwordToggleBtn.innerText = "Hide";
    }
    else{
        passwordInput.type = "password";
        passwordToggleBtn.innerText = "Show";
    }
})