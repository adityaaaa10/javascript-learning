let a = prompt("Enter your 1st number")
let b = prompt("Enter your 2nd number")
let c = prompt("Enter Operation")

let obj={
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
    
}

let d = Math.random()

if (d>0.1){
    alert(`Your Answer is ${eval( `${a} ${c} ${b} `)}`)
}
else{
    c = obj[c]
    alert(`Your Answer is ${eval( `${a} ${c} ${b} `)}`)
}