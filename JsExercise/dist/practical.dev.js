"use strict";

var Custom = function Custom(anArray, aFuction) {
  var newArray = [];

  for (var i = 0; i < anArray.length; i++) {
    var decision = aFuction(anArray[i]);
    if (decision) newArray.push(anArray[i]);
  }

  return newArray;
};

var myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(Custom(myArray, function (x) {
  return x % 2 === 0;
}));