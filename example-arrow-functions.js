var names = ['james','Henry','mark','austin'];
//
// // Using regular javascript loop
// names.forEach(function(name){
//   console.log("foreach", name);
// });
//
// // Using arrow functions
// names.forEach((name) => {
//   console.log("arrow function", name);
// });
//
// names.forEach((name) => console.log('straight', name));
// // names.forEach(() => {
// //
// // })

var returnMe = (name) => name + '!';

console.log(returnMe("james"));

var person = {
  name: "james",
  greet: function(){
    names.forEach((person) => {
      console.log(this.name + " says hi to " + person);
    })
  }
}

person.greet()

var funcOne = (a, b) => a+b

var funcTwo = function(a,b){
  return a - b
}

// var funcThree = (first, second) => {
//   (third, fourth) => (first+second)/(third/4);
// }


console.log("func one", funcOne(4,8));
console.log("func two", funcOne(6,8));
console.log("func three", funcThree(20, 15));
