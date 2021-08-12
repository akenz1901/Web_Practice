const Custom = (anArray, aFuction) => {
    let newArray = [];

    for(let i = 0; i<anArray.length; i++){
        let decision = aFuction(anArray[i]);
        if(decision)newArray.push(anArray[i])
    }
    return newArray
}

let myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Custom(myArray, (x)=> x % 2 === 0))