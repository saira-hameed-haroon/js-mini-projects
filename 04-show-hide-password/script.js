const pass = document.querySelector(".inp");
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    if(pass.type == "password")
    {
        pass.type = "text";
        btn.innerText = "Hide";
    }
    else{
        pass.type = "password";
        btn.innerText = "Show";
    }
})