console.log('testing')
var a; //Declare variable named a.
a = 10; //Assign the integer value of 10 to variable a.
b = 11; //Create variable b and assign a value to it. No previous declaration statement.
var c = 12; //Declare variable c and assign it the value of 12 in one statement.
console.log(a); //Print the content of variable a
console.log(b); //Print the content of variable b
console.log(c); //Print the content of variable c

//MUTABILITY OF VARIABLES
a = 13; //Reassign a new value of type number to a.
console.log(a); //Prints out 13.
a = "Another value which is a string"; //Reassign a new value of type string to a.
console.log(a); //Prints out Another value which is a string.
a = true; //Reassign a new value of type boolean - i.e. true or false.
console.log(a); //Prints out true. 

//PRIMITIVE VALUE TYPES
var d;
console.log(d); //This will print out the value undefined.
a = null;
console.log(a); //This will print out the value null.

//ARITHMETIC OPERATIONS
a = 10; //Assign variable a the value of 10
b = 20; //Assign variable b the value of 20
c = a + b; //Add value in a and b and put the result in variable c.
console.log(c); //This should print out 30
console.log(b - a); //Subtract a value from b value; displays 10 in console.
console.log(b/a); //Divide b value by a value; displays 2 in console.
console.log(a*b); //Multiply a value by b value; displays 200 in console.
console.log(b%a); //Divide b value by a value and return remainder; displays 0 in console.
console.log(a**2); //a value raised to power 2; displays 100 in console.
a++; //Increment a value.
console.log(a); //Displays 11 in console.
b--; //Increment b value.
console.log(b); //Displays 19 in console. 

//STRING OPERATIONS
firstName = "Therese";
lastName = "Mbama";
fullName = firstName + " " + lastName; //Concatenate firstName, whitespace and lastName
console.log(fullName); //This should output the full name Therese Mbama.

//COMPARISON OPERATORS
a = 10;
a < 11; //Returns true
console.log(a < 11); //Displays true in console
var test = a > 20; //Declares a variable named test and gives it the value of false.
console.log(test); //Displays false in console
a >= 10; //Returns true
a <= 20; //Returns true
a == 10; //Returns true
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10" 

//LOGICAL OPERATIONS
a = 1;
b = 2;
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3.
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true.
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true.
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false.
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true.

//TERNARY(CONDITIONAL) OPERATIONS
var age = 17;
var adult = (age > 20)? "Yes" : "No";
console.log(adult); //This should display the string "No" 

//BITWISE OPERATIONS
5 << 1; //Equivalent of 5 * 2
5 <<2; //Equivalent of 5 * 4
5 <<3; //Equivalent of 5 * 8
40 >> 1; //Equivalent of 40 / 2
40 >>2; //Equivalent of 40 / 4
40 >>3; //Equivalent of 40 / 8

//TYPE OF OPERATOR
typeof "Pius Onobhayedo"; //Returns the value "string"
typeof false; //Returns the value "boolean"
typeof (10 + 10); //Returns the value "number"
typeof 33; //Returns the value "number"

//IF/ELSE STATEMENT
var minimumVotingAge = 18;
var age = 17;
if (age < minimumVotingAge){
console.log("Not eligible to vote");
}else{
console.log("Eligible to vote");
} 

//SWITCH STATEMENTS
var dayOfTheWeekCount = 1;
switch (dayOfTheWeekCount){
case 1:
console.log("Sunday");
break;
case 2:
console.log("Monday");
break;
case 3:
console.log("Tuesday");
break;
case 4:
console.log("Wednesday");
break;
case 5:
console.log("Thursday");
break;
case 6:
console.log("Friday");
break;
case 7:
console.log("Saturday");
break;
default:
console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist")
} //The switch statement prints out Sunday

//FOR LOOP
//(BREAK)
for (var c = 1; c < 11; c++){
    if(c == 7) break;
    console.log(c);
    } 
//(CONTINUE)
for (var c = 1; c < 11; c++){
    if(c == 7) continue;
    console.log(c);
    } 

//WHILE LOOP
var n = 0;
while(n != 5){
n = Math.random(); //generate a random number between 0 and 1 exclusive of 1.
n = n * 10;//multiply the number generated by 10
n = Math.floor(n); //round down
console.log(n); //print the final number
}

//DO...WHILE LOOP
var x = 0;
do{
 x+= 1;
 console.log(x)
}while(x < 10)

//PASSING BY VALUE
function square(number){
    number = number**2;
    return number;
}
var number = 20; //Declare variable that holds number to be squared
var numberSquared = square(number); //Pass number (by value) to the square() function
console.log(numberSquared); //The function returns 400
console.log(number); //The value of number variable outside the function remains 20

//ARRAY LITERAL
//Declare a variable named vehicles and assign an array literal that contains three elements
var vehicles = ["car","lorry","trailer"];
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ]

//OBJECT LITERAL
var myObject = {
    name: {
    firstName : "Therese",
    surname: "Mbama"
    },
    expertise: "Software design and development",
    languages: ["Python","JavaScript","Java","C++"],
    isRetired: false,
    favouriteCombination: 3 + 3
} 
//ACCESSING OBJECT PROPERTIES
console.log(myObject.name); //Prints out { firstName: 'Therese', surname: 'Mbama' }.
console.log(myObject['name']); //Also prints out { firstName: 'Therese', surname: 'Mbama' }.
console.log(myObject.expertise); //Prints out Software design and development
console.log(myObject['expertise']); //Also prints out Software design and development
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ]
console.log(myObject.isRetired); //Prints out false
console.log(myObject['isRetired']); //Also prints out false
console.log(myObject.favouriteCombination); //Prints out 6
console.log(myObject['favouriteCombination']); //Also prints out 6
//ADDING NEW PROPERTIES TO AN EXISTING OBJECT
myObject.newProperty = "another property added"; //Add a new property named newProperty
207
console.log(myObject); //Prints out the string, another property added

//DELETING PROPERTIES IN AN OBJECT
var phones = {
    make: 'Samsung',
    model: 'S7',
    cost: 500
}
console.log('make' in phones); //Prints out true
delete phones.make; //Delete property phones.make
console.log('make' in phones); //Prints out false

//OOP
function Person(firstName, lastName, height, weight){
    //Below are properties
    this.firstName = firstName;
    this.lastName = lastName;
    this.height = height;
    this.weight = weight;
    //Below is a method
    this.getFullName = function(){ return this.firstName + " " + this.lastName}
}
//INSTANTIATING THE OBJECT
var person1 = new Person("Therese", "Mbama",1.72, 80);
var person2 = new Person("Mary", "Joseph", 1.7, 70)
console.log (person1.firstName); //Prints out Therese
console.log (person1.getFullName()); //Prints out Therese Mbama
console.log (person2.firstName); //Prints out Mary
console.log (person2.getFullName()); //Prints out Mary Joseph
