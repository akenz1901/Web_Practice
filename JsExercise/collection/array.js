let miko = () => {
let x = [1, 2, 3, 4, 5]
let y = []
for(let i = 0; i<x.length; i++){
    y.push(x[i] * 2)
}
return y
};

let jb = () => {
    let x = [1, 2, 3, 4, 5]
    let y = []
    for(let i = 0; i<x.length; i++){
        if(x[i]%2==0){
            y[i] = true
        }
        else
        y[i] = false
    }
    return y
};

let manipulation = () =>{
    let person = {}
    let personArray = ["name", "age", "gender", "height", "wight"]
    let value = ["Michael", 79, "Male", 56.1, 175.7]
    let name
    for(let i = 0; i < personArray.length; i++){
        name = personArray[i]
        person[i] = {name:value[i]}
}
    return person
};

    const peter = [1, 2, 3]
    const[one, two, three] = peter
    console.log(one)
    console.log(two)
    console.log(three)

    const obj = {username:"lole", age:78, color:"black"}
    const{username, gender} = obj

    console.log(username)
    console.log(gender)
    //for object you extract base on key
    
// console.log(manipulation())

// console.log(miko())
// console.log(jb())
