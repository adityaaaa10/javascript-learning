//var and objects

console.log("Hello World");

let a = 5;
let b = "aditya";
let c = true;
let d = undefined;
let e = null;

console.log(a, b, c, d, e)
console.log(typeof a, typeof b, typeof c, typeof d, typeof e)


let o = {
    "name": "aditya",
    "job code": 305
}

console.log(o);
o.salary = "1200 crore";
console.log(o);


let age = 2;
let grace = 5;

console.log(age ** grace)


let i = 3;
let y = 5;

let w = i > y ? (i - y) : (y - i)
console.log(w)

let p=1;

for (let i = 0; i < 10 ; i++) {
    console.log(p + i);
    
}

let obj = {
    "name": "adi",
    "job code": 305,
    "location":"mumbai"
}

for (const key in obj) {        //forin
      const element = obj[key];
      console.log(key,element)
    
}

for (const c of "adi") {     //forof
    console.log(c)
}

//Function


function nice(name){
    console.log("my name is "+name)
}

nice("Aditya")

function sum(q,t){
   return q+t
}

Result = sum(3,5)

console.log(Result)

const func1 = (x) =>{
console.log("this is number "+x)
}

func1(23)
    

 
const func2 = (x) =>{
    console.log("My Roll No is "+x)
}

func2(34)