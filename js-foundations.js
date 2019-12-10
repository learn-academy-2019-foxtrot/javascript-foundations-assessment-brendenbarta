// ASSESSMENT 2: JAVASCRIPT FOUNDATIONS
// Coding practical questions

// 1. Write a function that takes a number as an argument and decides if the number is evenly divisble by three or not. Use the test cases 15, 0, 385, -7. Expected output: "15 is divisible by three", "0 is divisible by three", "385 is not divisble by three", "-7 is not divisble by three".
var number = [15, 0, 385, -7]
var isDivisableByThree = function(number) {
if (isNaN (number)) {
return "Input was not a number.";
}
else if (number % 3 === 0) {
return 'is divisble by 3'

}
else {
return 'is not divisble by 3';

}
};
//or ?
function divisBy3(number){
    console.log(`${number} is ${number % 3 === 0 ? '' : 'not'} divisible by 3`)
}



// 2. Create an object called helloMe. Include your firstName, lastName and TWO OTHER properties of you. Add a method to your object that will return a sentence using the object properties to describe you.
const helloMe = {
    firstName: "Brenden",
    lastName: "Barta",
    age: 20,
    height: "5'9",
    describe(){ return(`${this.firstName} ${this.lastName} is a ${this.sign} years old and is ${this.height} .`)}
}

console.log(helloMe.describe())


// ------------------------------------- Consider the variable:

var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

// 3a. Write a function that returns every other item from the array as one string. Expected output: "streetlamp teeth nephew database"
var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]

console.log(randomNouns.join());

//or

function func() { 
  var randomNouns = [ 1, 2, 3, 4, 5, 6 ]; 
  document.write(randomNouns.join()); 
}  
  
func(); 


// 3b. Create a function that takes in the variable and returns the array with all the words capitalized. Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew", "Temperature", "Database"]
var randomNouns = ["streetlamp", "potato", "teeth", "conclusion", "nephew", "temperature", "database"]
function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase(randomNouns));


// 3c. STRETCH: Create a function that returns the length of each string from the randomNouns variable. Expected output: [10, 6, 5, 10, 6, 11, 8]

function length(randomNouns) {}

console.log(length.length);

//or?

function lengthFinder(array){
    return array.map(word => word.length)
}

console.log(lengthFinder(randomNouns))

//-i know this probably isnth right but i tried anyway.




// -------------------------------------- Consider the variables:
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"

// 4a. Write a function called alphabetSoup that takes one argument and returns a string with all the letters in alphabetical order. Use each of the varibales as test cases. Expected output: "aelnr" "aacdemy" "adeginos"
var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego" 
function AlphabetSoup(str) { 
  newArr = str.match(/[a-z]/g);
  console.log(newArr);
  return newArr.sort().join("");
}

 AlphabetSoup(testString1, testString2, testString3); 


// 4b. Write a function that takes in all three variables and returns a string with all the letters in alphabetical order. Expected output: "aaaacddeeegilmnnorsy"

var testString1 = "learn"
var testString2 = "academy"
var testString3 = "sandiego"
function alphabet_order(str)
  {
return str.split('').sort().join('');
  }
console.log(alphabet_order(testString1));
console.log(alphabet_order(testString2));
console.log(alphabet_order(testString3));

// ------------------------------------- Consider the variables:
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

// 5a. Write a function that takes the two variables and returns a combined string. Expected output: "9 ducks 1 elephants 8 pangolins 16 zebras 5 giraffes 1 penguins 42 llamas"
function Container(){
   this.variables = [];
}
Container.prototype.addVar = function(animals){
   this.variables.push(animals);
}
Container.prototype.toString = function(){
   var result = '';
   for(var i in this.variables)
       result += this.variables[i];
   return result;
}
var amounts = [9, 1, 8, 16, 5, 1, 42]
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

var container = new Container();
container.addVar(amounts);
container.addVar(animals);
container.toString();


// 5b. STRETCH: Create a function that combines the two variables and updates the animal to be singular if the animal's corresponding number is 1. Expected output: "9 ducks 1 elephant 8 pangolins 16 zebras 5 giraffes 1 penguin 42 llamas"
var animals = ["ducks", "elephants", "pangolins", "zebras", "giraffes", "penguins", "llamas"]

