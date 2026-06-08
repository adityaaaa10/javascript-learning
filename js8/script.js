// console.log("1")

// setTimeout(() => {
//     console.log("2")

//     setTimeout(() => {
//         console.log("3")
//     }, 0);
// }, 3000);           //CallbackHell

const loadScript = (src,callback) =>{  //Callback is a function  used as argument in a function to call that function later
    let sc = document.createElement("script")
    sc.src = src
    sc.onlaod = callback("Script Loaded")
    document.head.append(sc)
}
//the script src will be loaded first after that it will show script is loaded
loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg) => {
    console.log(arg)   // arg = "Script loades"
})