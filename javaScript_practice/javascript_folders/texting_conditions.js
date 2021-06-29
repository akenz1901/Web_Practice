// document.getElementById("degree")



// var product = {name: "Apple", category: "Fruits", price: 1.99, 
// nutrient: {carbs: 0.95, fats: 0.3, protein: 0.2
//     }
// }
// console.log(product.category);

// var foodsCategories = { 
//     Apple:{ 
//         category: 'Fruits', 
//         price: 1.99, 
//         nutrient:{
//             carbs: 0.12, 
//             fats: 0.2, 
//             protein: 20.0}},

//     Orange:{ category: 'Fruits',
//       price: 0.99,
//       nutrient:{
//           carbs: 2.34,
//           fats: 0.9,
//           protein: 0.2
//       }},
//     Coffee:{
//         category: 'Fruits',
//       price: 0.99,
//       nutrient:{
//           carbs: 5.34,
//           fats: 0.4,
//           protein: 0.10
//     }}
// }
// console.log(foodsCategories.Apple);
// console.log(foodsCategories.Coffee);
// console.log(foodsCategories.Orange);

// function cal() {
//     let area = 10;
//     let celsius = 1.4
//     let angle = 40;
//     return area * celsius + angle;
// }
// alert(cal());

// function calculateTotal(price, quatity) {
//     var subtotal = price * quatity;
//     var totalCalculator = calculateTax(subtotal);
//     return subtotal * totalCalculator;    
// }

// function caltulateTax(subTotal) {
//     var taxRate = 0.05;
//     var tax = subtotal * taxtRate;
//     return tax;
// }

// console.log(calculateTotal(35, 4))

// function sumDoubleNumbers(firstNumber, secondNumber){
//     var sum = firstNumber + secondNumber;
//     if(firstNumber == 50){
//         return true;
//     }
//     else if(secondNumber == 50){
//         return true;
//     }
//     else if(sum == 50){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// let take = parseInt(prompt("Enter Number: "))
// let secondTake = parseInt(prompt("Enter Number: "));

// console.log(sumDoubleNumbers(take, secondTake));

function detectNegative(firstNumber, secondNumber){

    var itSNegative = firstNumber < 0 || secondNumber < 0;

    if(itSNegative){
        console.log("Oops we got Negative");
        return true;
    }
    else
        console.log("Great No Negative");
        return false;
}

let take = parseInt(prompt("Enter Number: "))
let secondTake = parseInt(prompt("Enter Number: "));

console.log(detectNegative(take, secondTake));

function calculateAngleOfScalene(base, height){
        var area = base * height / 2;
        return area;
}