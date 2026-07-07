let a = prompt("Enter first number")
let b = prompt("Enter second number")
if(isNaN(a) || isNaN(b)){
    throw SyntaxError("sorry this is not allowed")
}
let sum = parseInt(a) + parseInt(b)


try {
    console.log("sum is ", sum * x)
} catch (error) {
    console.log("error aagya")
}
finally{
    console.log("files are closed")
}