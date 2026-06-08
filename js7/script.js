let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "<b> I was Clciked!!</b> Enjoy your Content"
})
let btn1 = document.getElementById("btn1")

btn1.addEventListener("dblclick", ()=>{
    alert(`I was clicked`)
})
//To check all possible events search browser events mdn(Mouse,kwyboard)
