/************************************************************************/
/************************************************************************/
/*************** Chapter 12 - 13 ****************************************/
/************************************************************************/
/************************************************************************/ 

//Question 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// let char = prompt("Enter the character").charCodeAt(0) //here we used charCodeAt() method to retrieve ASCII of the entered char


// if(char >= 65 && char <= 90){
//     alert("The character is an uppercase letter")
// }

// else if(char >= 97 && char <= 122){
//     alert("The character is a lowercase letter")
// }

// else if(char >= 48 && char <= 57){
//     alert("The character is a number")
// }

// else{
//     alert("Please enter a valid character")
// }
 /************************************************************************/

//Question 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

// let num1 = +prompt("Enter the first number")

// let num2 = +prompt("Enter the second number")

// if(num1 > num2){
//     alert(`${num1} is larger`)
// }

// else if(num2 > num1){
 
//     alert(`${num2} is larger`)
// }

// else if(num1 == num2){
//     alert(`${num1} and ${num2} are equall`)
// }

/************************************************************************/

//Question 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

//  let num = +prompt("Enter the number")
 
//  if(num > 0){
//      alert(`${num} is positive`)
//  }
 
//  else if(num < 0){
//      alert(`${num} is negative`)
//  }
 
//  else if(num == 0){
//      alert(`${num} is zero`)
//  }
 
//  else{
//      alert("Please enter a valid number")
//  }
 
 /************************************************************************/

//Question 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

//  let char = prompt("Enter the string character")

//  if(char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U"){
//      alert(`${char} is a vowel`)
//      //console.log(char == "a" || char == "A" || char == "e" || char == "E" || char == "i" || char == "I" || char == "o" || char == "O" || char == "u" || char == "U")
//  }

//  else{
//      alert(`${char} is not a vowel`)
//  }
 
 /************************************************************************/

 //Question 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

//  let password = "2525"
//  let userPassword = prompt("Please enter your password")
 
//  if(userPassword == password){
//      alert("Correct! The password you entered matches the original password")
//  }
 
//  else{
//      alert("Incorrect password")
//  }
 
 /************************************************************************/

// 6. This if/else statement does not work. Try to fix it:
//  var greeting;
//  var hour = 13;
//  if (hour < 18) {
//  greeting = "Good day";
//  console.log(greeting)
//  } //closing bracket was missing
//  else { //opening bracket was missing
//  greeting = "Good evening";
//  console.log(greeting)
//  }
 /************************************************************************/

 //Question 7. Write a program that takes time as input from user in 24 hours clock format 
//  like: 1900 = 7pm. Implement the following case using if, else & else if statements

//  let time = +prompt("Enter the time in 24 hour format")

//  if( time >= 0000 && time < 1200){
//      alert("Good morning")
//  }
 
//  else if(time >= 1200 && time < 1700){
//      alert("Good afternoon")
//  }
 
//  else if(time >= 1700 && time < 2100){
//      alert("Good evening")
//  }
 
//  else if(time >= 2100 && time <= 2359){
//      alert("Good night")
//  }
 
//  else{
//      alert("Please enter a valid time")
//  }

/************************************************************************/
/************************************************************************/

//practice project :
//Convert 24 hours to 12 hour clock

// let time_in_24 = +prompt("Eneter the time in 24 hour clock format")
// let time_in_12 = time_in_24 % 12
// time_in_12 = time_in_12 == 0? 12 : time_in_12
// let period = time_in_24 < 12 || time_in_24 >23 ? "am" : "pm"
// alert(`24 hour Clock to 12 hour Clock
//       ${time_in_24} is ${time_in_12} ${period}`)

/************************************************************************/
/************************************************************************/
/************************************************************************/
