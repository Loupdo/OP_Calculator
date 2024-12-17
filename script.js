const num1=3
const num2=2
const operator= ""
var btns = []
var displayarray= []
const result=document.querySelector(".result")
const clrBtn=document.querySelector(".clear")

const display =(num) => {
    displayarray.push(num)
    result.innerText=displayarray.join('')
}

const clear = ()=>{
    result.innerText=""
    displayarray=[]
}



for (i=0;i<=9;i++){
    btns[i] = document.querySelector(`.btn${i}`)
}
    btns[0].addEventListener("click", ()=> {display(0); console.log(0)})
    btns[1].addEventListener("click", ()=> {display(1)})
    btns[2].addEventListener("click", ()=> {display(2)})
    btns[3].addEventListener("click", ()=> {display(3)})
    btns[4].addEventListener("click", ()=> {display(4)})
    btns[5].addEventListener("click", ()=> {display(5)})
    btns[6].addEventListener("click", ()=> {display(6)})
    btns[7].addEventListener("click", ()=> {display(7)})
    btns[8].addEventListener("click", ()=> {display(8)})
    btns[9].addEventListener("click", ()=> {display(9)})
 console.log(btns)

const add = (number1, number2) => {
    return number1+number2
}
const substract = (number1, number2) => {
    return number1-number2
}

const multiply = (number1, number2) => {
    return number1*number2
}

const divide = (number1, number2) => {
    return number1/number2
}

const operate = (funct, number1, number2) => {
    return funct(number1,number2)
}

clrBtn.addEventListener("click", ()=>{clear()})