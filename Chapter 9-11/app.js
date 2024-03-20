/************************************************************************/
/******************* Chapter 9 - 11 *************************************/
/************************************************************************/
/************************************************************************/


// Question 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

// let city = prompt("Enter the city").toLowerCase();

// if(city == "karachi"){
//     alert("Welcome to the city of lights")
// }
// else{
//     alert("Welcome to " +city)
// }

/************************************************************************/

// Question 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

// let gender = prompt("Enter the gender").toLowerCase();

// if(gender == "male"){
//     alert("Good Morning Sir")
// }

// else if(gender == "female"){
//     alert("Good Morning Ma’am")
// }
// else{
//     alert("Please enter a valid gender")
// }

/************************************************************************/

// Question 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

// let color = prompt("Enter the color of road traffic signal").toLowerCase();

// if(color == "red"){
//     alert("You Must Stop! traffic signal is red")
// }

// else if(color == "green"){
//     alert("You Must GO! traffic signal is green")
// }

// else if(color == "yellow"){
//     alert("Ready to Go! traffic signal is yellow")
// }

// else{
//     alert("Traffic Signals dont have " +color+ " light")
// }

/************************************************************************/


//Question 4. Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”

// let fuel = +prompt("Enter the remaining fuel in your car")

// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")
// }
// else{
//     alert("You have " +fuel+ " litres of fuel")
// }

/************************************************************************/

//Question 5. Run this script, & check whether alert message would be
//displayed or not. Record the outputs.
//a. Displayed 
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }

// //b. Not 
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }

// //c. 2 and 4
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }


// //d. Displayed
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// //e.true
//  if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }


// //f.  displayed
// if("car" < "cat"){
// alert("car is smaller than cat");
// }

//Question 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// document.write("<h1>Mark Sheet</h1>")
// let marks_obt = +prompt("Enter the marks obtained");
// let total_marks = +prompt("Enter the total marks");

// let percentage = marks_obt/total_marks*100

// if(percentage >= 80){
//     grade="A-one"
//     remarks="Excellent"
// }

// else if(percentage >= 70){
//     grade="A"
//     remarks="Good"
// }

// else if(percentage >= 60){
//     grade="B"
//     remarks="Need Improvement!"
// }

// else if (percentage < 60){
//     grade="Fail"
//     remarks="Sorry!"
// }


// document.write(`<h2>Total Marks : ${total_marks} </h2>
//                    <h2> Marks Obtained : ${marks_obt} </h2>
//                    <h2> Percentage : ${percentage}% </h2>
//                    <h2> Remarks : ${remarks} </h2>`)

/************************************************************************/


//Question 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

//var secretNumber = Math.floor(Math.random() * 10) + 1;
// const secretNumber = 7 ;
// let guess = +prompt("Enter your guess");

// if (guess == secretNumber) {
//     alert("Bingo! Correct answer");
// }

// else if (guess == secretNumber + 1 ) {
//     alert("Close enough to the correct answer");
// }

// else {
//     alert("Please enter a valid guess");
// }

/************************************************************************/

//Question 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

//  let num = 12;
//  if (num % 3 === 0) {
//      alert("The number is divisible by 3");
//  }

//  else {
//      alert("The number is not divisible by 3");
//  }

/************************************************************************/

 //Question 9. Write a program to check whether the given number is Even or Odd

//Even Odd
// let num = +prompt("Enter any number")
// if(num%2 == 0){
//  alert("'"+num+"'"+" is an even number")
// }
// else{   
//  alert("'"+num+"'"+" is an odd number")
// }

/************************************************************************/

//Question 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// let temp = +prompt("Enter the temperature")

// if(temp > 40){
//     alert("It is too hot outside")
// }

// else if(temp > 30){
//     alert("The Weather today is Normal")
// }

// else if(temp > 20){
//     alert("Today's Weather is cool")
// }

// else if(temp > 10){
//     alert("OMG! Today's weather is so Cool")
// }

// else if(temp < 10){
//     alert("OMG! It's freezing outside")
// }

// else{
//     alert("Please enter a valid temperature")
// }

// /************************************************************************/

//Question 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// let num1 = +prompt("Enter the first number")

// let num2 = +prompt("Enter the second number")

// let operation = prompt("Enter the operation (+, -, *, /, %)")

// if(operation == "+"){
//     let result = num1 + num2
//     alert(result)
// }

// else if(operation == "-"){
//     let result = num1 - num2
//     alert(result)
// }

// else if(operation == "*"){
//     let result = num1 * num2
//     alert(result)
// }


// else if(operation == "/"){
//     let result = num1 / num2
//     alert(result)
// }


// else if(operation == "%"){
//     let result = num1 % num2
//     alert(result)
// }

// else{
//     alert("Please enter a valid operation")
// }

/************************************************************************/
