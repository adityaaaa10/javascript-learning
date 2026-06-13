// let rabbit ={
//     jumps: true
// }
// let animal ={
//     eats: true
// }

// rabbit.__proto__ = animal

class animal{
    constructor(name){
        this.name = name
        console.log("Object is created")
    }
    eats(){
        console.log("Eating right now")
    }
    jumps(){
        console.log("jumping right now")
    }
}
let a = new animal("rabbit")
console.log(a)

class tiger extends animal{
    constructor(name){
        super(name)
        this.name = name
        console.log("Object is created and he is a tiger")
    }
     eats(){
        super.eats()
        console.log("Eating right now and roaring") //method override
    }
roars(){
    console.loh("Roaring")
}
}
let b = new tiger("shera")
console.log(b)

