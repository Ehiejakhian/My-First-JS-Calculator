
//Calculation digits
let one = document.getElementById("td1")
let two = document.getElementById("td2")
let three = document.getElementById("td3")
let four = document.getElementById("td4")
let five = document.getElementById("td5")
let six = document.getElementById("td6")
let seven = document.getElementById("td7")
let eight = document.getElementById("td8")
let nine = document.getElementById("td9")
let zero = document.getElementById("td0")
let dot = document.getElementById("td.")




//Operators and inputs

let inputEl = document.getElementById("input-el")
let cancelAll = document.getElementById("cancel-all-el")
let deleteEl = document.getElementById("delete-el")

let addEl = document.getElementById("add-el")
let minusEl = document.getElementById("minus-el")
let multiplyEl = document.getElementById("multiply-el")
let divideEl = document.getElementById("divide-el")
let modulusEl = document.getElementById("modulus-el")
let carryEl = document.getElementById("carry-el")
let ansEl = document.getElementById("ans-el")

let equalEl = document.getElementById("equal-el")
let firstValue = 0
let secondValue = 0
let ans ="0"

let plus = false
let minus = false
let multiply = false
let divide = false
let modulus = false
let carryvar = false

///////////////
window.addEventListener('keydown', e => {
    console.log(e.key)
})

///////////////

function one1() {
    inputEl.value += 1
}
function two2() {
    inputEl.value += 2
}
function three3() {
    inputEl.value += 3
}
function four4() {
    inputEl.value += 4
}
function five5() {
    inputEl.value += 5
}
function six6() {
    inputEl.value += 6
}
function seven7() {
    inputEl.value += 7
}
function eight8() {
    inputEl.value += 8
}
function nine9() {
    inputEl.value += 9
}


///////////////

cancelAll.addEventListener("click", function cancelAll() {
    inputEl.value ="0"
    ansEl.textContent =""
})
deleteEl.addEventListener("click", function() {
    inputEl.value = inputEl.value.toString().slice(0,-1)
    ansEl.textContent =""
})

if (inputEl.value === "+") {
    addEl.addEventListener()
}

addEl.addEventListener("click", function() {
    firstValue = inputEl.value
    inputEl.value=""
    ansEl.textContent ="Answer: " + (firstValue)
    console.log(inputEl.value)
    plus = true
})

minusEl.addEventListener("click", function() {
    firstValue = inputEl.value
    inputEl.value=""
    ansEl.textContent = "Answer: " + (firstValue)
    minus = true
})

multiplyEl.addEventListener("click", function() {
    firstValue = inputEl.value
    inputEl.value=""
    ansEl.textContent = "Answer: " + (firstValue)
    multiply = true
})

divideEl.addEventListener("click", function() {
    firstValue = inputEl.value
    inputEl.value=""
    ansEl.textContent = "Answer: " + (firstValue)
    divide = true
})

modulusEl.addEventListener("click", function() {
    firstValue = inputEl.value
    inputEl.value=""
    ansEl.textContent = "Answer: " + (firstValue)
    modulus = true
})

carryEl.addEventListener("click", function() {
    firstValue = inputEl.value
    inputEl.value=""
    ansEl.textContent = "Answer: " + (firstValue)
    carryvar = true
})


equalEl.addEventListener("click", function() {
    secondValue = inputEl.value
    if (plus) {
        ans = Number(firstValue) + Number(secondValue)
        Number(ans)
        ansEl.textContent = "Answer: " + ans
        inputEl.value = ans
        plus = false
    } else if (minus) {
        ans = Number(firstValue) - Number(secondValue)
        Number(ans)
        ansEl.textContent = "Answer: " + ans
        inputEl.value = ans
        minus = false
    } else if (multiply) {
        ans = Number(firstValue) * Number(secondValue)
        Number(ans)
        ansEl.textContent = "Answer: " + ans
        inputEl.value = ans
        multiply = false
    } else if (divide) {
        ans = Number(firstValue) / Number(secondValue)
        Number(ans)
        ansEl.textContent = "Answer: " + ans
        inputEl.value = ans
        divide = false
    } else if (modulus) {
        ans = Number(firstValue) % Number(secondValue)
        Number(ans)
        ansEl.textContent = "Answer: " + ans
        inputEl.value = ans
        modulus = false
    } else if (carryvar) {
        ans = 1
        let base = Number(firstValue)
        let exponent = Number(secondValue)
        if (exponent === 0) {
            ans = 1
        } else {
            for(let i = 1; i <= exponent; i++) {
                ans *= base
            }
        }
        ansEl.textContent = "Answer: " + ans
        inputEl.value = ans
        carryvar = false
    } else {
        inputEl.value = inputEl.value
        ans = inputEl.value
        ansEl.textContent = "Answer: " + ans
    }
})

console.log("Heaven no be for everybody")
console.log()