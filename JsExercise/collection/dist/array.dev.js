"use strict";

var miko = function miko() {
  var x = [1, 2, 3, 4, 5];
  var y = [];

  for (var i = 0; i < x.length; i++) {
    y.push(x[i] * 2);
  }

  return y;
};

var jb = function jb() {
  var x = [1, 2, 3, 4, 5];
  var y = [];

  for (var i = 0; i < x.length; i++) {
    if (x[i] % 2 == 0) {
      y[i] = true;
    } else y[i] = false;
  }

  return y;
};

var manipulation = function manipulation() {
  var person = {};
  var personArray = ["name", "age", "gender", "height", "wight"];
  var value = ["Michael", 79, "Male", 56.1, 175.7];
  var name;

  for (var i = 0; i < personArray.length; i++) {
    name = personArray[i];
    person[i] = {
      name: value[i]
    };
  }

  return person;
};

var peter = [1, 2, 3];
var one = peter[0],
    two = peter[1],
    three = peter[2];
console.log(one);
console.log(two);
console.log(three);
var obj = {
  username: "lole",
  age: 78,
  color: "black"
};
var username = obj.username,
    gender = obj.gender;
console.log(username);
console.log(gender); //for object you extract base on key
// console.log(manipulation())
// console.log(miko())
// console.log(jb())