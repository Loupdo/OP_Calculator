var num1=0
var num2=0
var operator= ""
var btns = []
var displayarray= []
const result=document.querySelector(".result")
const clrBtn=document.querySelector(".clear")
const addBtn=document.querySelector(".plus")
const substractBtn=document.querySelector(".minus")
const multiplyBtn=document.querySelector(".times")
const divideBtn=document.querySelector(".divided")
const equalBtn=document.querySelector(".equal")

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
    btns[0].addEventListener("click", ()=> {display(0)})
    btns[1].addEventListener("click", ()=> {display(1)})
    btns[2].addEventListener("click", ()=> {display(2)})
    btns[3].addEventListener("click", ()=> {display(3)})
    btns[4].addEventListener("click", ()=> {display(4)})
    btns[5].addEventListener("click", ()=> {display(5)})
    btns[6].addEventListener("click", ()=> {display(6)})
    btns[7].addEventListener("click", ()=> {display(7)})
    btns[8].addEventListener("click", ()=> {display(8)})
    btns[9].addEventListener("click", ()=> {display(9)})
    
    addBtn.addEventListener("click", ()=> {
        operator ="add";
        num1 = Number(displayarray.join(''))
        clear()
     })
     substractBtn.addEventListener("click", ()=> {
        operator ="subtract";
        num1 = Number(displayarray.join(''))
        clear()
     })
     multiplyBtn.addEventListener("click", ()=> {
        operator ="multiply";
        num1 = Number(displayarray.join(''))
        clear()
     })
    divideBtn.addEventListener("click", ()=> {
        operator ="divide";
        num1 = Number(displayarray.join(''))
        clear()
     })
     equalBtn.addEventListener("click", ()=> {
        num2 = Number(displayarray.join(''))
        clear()
        result.innerText=
        resultIT = operate(`${operator}`, num1, num2)
        result.innerText = resultIT
     })

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

const operate = (operation, number1, number2) => {
    console.log(`${operation} ${number1} ${number2}`)
   if (operation=== "add"){
    return add(number1, number2)
    } else if (operation=== "substract"){
    return substract(number1, number2)
    } else if (operation=== "multiply"){ 
    return multiply(number1, number2)
    } else {
    return divide(number1, number2)   
    }
}

clrBtn.addEventListener("click", ()=>{clear()})

