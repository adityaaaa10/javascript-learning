let arr=[1,3,5,7,8,9]

arr[0]=34

console.log(arr)
console.log(arr.length)

let b = [1,2,3,4]
console.log(b.toString())
console.log(b.join(" and "))

// pop - (opp in index)shift
// push - (opp in index)unshift
// concat - adds array
// splice - removes the index element which entered like 1,4 so will remove elements from index 1 to 4
// can also add by writing the no in ()
//slice - creates new array from the index entered to end or the range entered

let a = [1,2,3,4,5,7]

for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}

a.forEach((value,index,array)=>{ //foreach
    console.log(value,index,array)
})

for (const element of a) {  //forof
    console.log(element)
}

let newarr = a.map((e)=>{  //map
  return e**2
})

console.log(newarr)

const seven = (e)=>{
    if(e>7){
        return true
    }
    return false
}

console.log(newarr.filter(seven))  //filter

const r = (a,b)=>{
    return a*b
}

console.log(a.reduce(r))


