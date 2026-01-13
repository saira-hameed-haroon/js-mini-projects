const num1 = document.querySelector(".num1");
const num2 = document.querySelector(".num2");
const result = document.querySelector(".result");
const clearBtn = document.querySelector(".clearBtn");

const addBtn = document.querySelector(".addBtn").addEventListener("click", ()=>{
    result.innerText = `Addition of two numbers is : ${Number(num1.value) + Number(num2.value)}`;
})
const subtractBtn = document.querySelector(".subtractBtn").addEventListener("click", ()=>{
    result.innerText = `Subtraction of two numbers is : ${Number(num1.value) - Number(num2.value)}`;
})
const multiplyBtn = document.querySelector(".multiplyBtn").addEventListener("click", ()=>{
    result.innerText = `Multiplication of two numbers is : ${Number(num1.value) * Number(num2.value)}`;
})
const divideBtn = document.querySelector(".divideBtn").addEventListener("click", ()=>{
    result.innerText = `Division of two numbers is : ${Number(num1.value) / Number(num2.value)}`;
})
clearBtn.addEventListener("click", ()=>{
    result.innerText = "";
})