const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");
const add = document.querySelector(".add").addEventListener("click", ()=>{
    result.innerText = Number(num1.value) + Number(num2.value);
})
const sub = document.querySelector(".sub").addEventListener("click", ()=>{
    result.innerText = Number(num1.value) - Number(num2.value);
})
const mul = document.querySelector(".mul").addEventListener("click", ()=>{
    result.innerText = Number(num1.value) * Number(num2.value);
})
const div = document.querySelector(".div").addEventListener("click", ()=>{
    result.innerText = Number(num1.value) / Number(num2.value);
})