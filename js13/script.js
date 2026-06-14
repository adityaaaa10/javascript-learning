async function sleep(){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            resolve(45)
         }, 1000);
    })
}
function sum(a,b,c){
    return a+b+c
}
(async function main(){  //IIFE syntax
let a = await sleep()
console.log(a)
let b = await sleep()
console.log(b)

let [x,y,...rest] = [2,3,4,5,6,7]  //Destructuring
console.log(x,y,rest)

let obj = {
    c:2,
    d:3,
    e:5
}
let {c,d} = obj
console.log(c,d)

let arr =[1,5,4]
console.log(sum(...arr))
})()