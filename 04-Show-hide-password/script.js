const pass = document.querySelector(".inp");
const btn = document.querySelector(".btn");

btn.addEventListener("click", ()=>{
    if(pass.type == "password")
    {
        pass.type = "text";

        // it changes button text from "Show" to "hide"
        btn.innerText = "Hide";
    }
    else{
        pass.type = "password";
        //  it changes button text from "hide" to "show"
        btn.innerText = "Show";
    }
})
