//Revise all this from JS pdf

document.body.firstElementChild
document.body.firstElementChild.childNodes
document.body.firstElementChild.children //only html elements
document.body.firstElementChild.children[2].previousElementSibling //it means box2
document.body.firstElementChild.children[2].nextElementSibling //it means box4
document.body.firstElementChild.children[2].parentElement //container



// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "red"

// document.getElementById("red").style.backgroundColor ="red"

// console.log(document.querySelectorAll(".box"))

// document.querySelectorAll(".box").forEach(e =>{
//    e.style.backgroundColor = "red"
// })

let colors=["red","green","Blue","Brown","black","grey","orange","purple"]
let box = document.querySelectorAll(".box")
let size = colors.length

box.forEach(element => {
    let random=Math.floor(Math.random()*size)
    element.style.color=colors[random]
})
box.forEach(element => {
    let random=Math.floor(Math.random()*size)
    element.style.backgroundColor=colors[random]
})