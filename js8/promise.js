console.log("work has statred")

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
         setTimeout(() => {
            console.log("Work is done")
            resolve("The end")
        }, 3000);
    }
    else {
        reject("Work has stopped")
    }

})
let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
         setTimeout(() => {
            console.log("Work is done 2")
            resolve("The end 2")
        }, 3000);
    }
    else {
        reject("Work has stopped 2")
    }

})


let p3 = Promise.all([prom1,prom2])
p3.then((a) => {
    console.log(a)
}).catch((err)=>{
    console.log(err)
}).finally(() =>{
    console.log("\n press to restart")
})
