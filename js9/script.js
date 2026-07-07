// async function getData(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve(4500)
//         }, 3000);
//     })
// }

async function getData(){
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json()
    return data
      
}
async function main(){
console.log("aditya")
console.log("Do Something")

console.log("Load Data")

let data = await getData()

console.log(data)

console.log("Loading data done")
console.log("task 2 starts")
}

main()

// data.then((a)=>{
//     console.log(data)

//     console.log("process data")
    
//     console.log("task 2")
// })