/************************************************************************/
/**********************Chapter 6*****************************************/
/************************************************************************/
/************************************************************************/

// Question 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:

// let a = +prompt("Enter the number",10)
//  document.write("Result:<br>"+
//  "The value of  a is:  "+ a +"<br>...................................<br>"+
//  "<br><br>The value of ++a is: "+ ++a +"<br>Now the value of a is: "+a+
//  "<br><br>The value of a++ is: "+ a++ +"<br>Now the value of a is: "+a+
//  "<br><br>The value of --a is: "+ --a +"<br>Now the value of a is: "+a+
//  "<br><br>The value of a-- is: "+ a-- +"<br>Now the value of a is: "+a);

/************************************************************************/
 
//Question 2. What will be the output in variables a, b & result 
// after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;                   | 1 
// --a - --b;             | 1 - 0
// --a - --b + ++b;       | 1 - 0 + 1
// --a - --b + ++b + b--; | 1 - 0 + 1 + 1 = 3

// let a = 2, b = 1, result = --a - --b + ++b + b--;

// document.write(`
//  a is : ${a} <br>
//  b is : ${b} <br>
//  result is : ${result}`)

/************************************************************************/

//Question 3. Write a program that takes input a name from user & greet the user.

// let $user = prompt("Enter your name")
// document.write("Assalamu Alaekum " + $user + " Welcome")

/************************************************************************/

//Question 5. Write a program to take input a number from user & display it’s multiplication table on your browser.
// If user does not enter a new number, multiplication table of 5 should be displayed by default.

// let num = +prompt("Enter any number", 5)
// if (num==0){
//     num = 5}
// for(let i = 1; i <= 10; i++){
//     document.write(num + " x " + i + " = " + num * i + "<br>")
// }

/************************************************************************/

//Question 6. Take
// a) Take three subjects name from user and store them in 3
// different variables.
// b) Total marks for each subject is 100, store it in another
// variable.
// c) Take obtained marks for first subject from user and
// stored it in different variable.

// ALERTS | JAVASCRIPT

// d) Take obtained marks for remaining 2 subjects from user
// and store them in variables.
// e) Now calculate total marks and percentage and show the
// result in browser like this.(Hint: user table)

// let sub1= prompt("Enter the Subject 1","English"); 
// let sub2= prompt("Enter the Subject 2","Maths"); 
// let sub3= prompt("Enter the Subject 3","Urdu");

// let marksObt1= +prompt("Enter marks of "+sub1,54)
// let marksObt2= +prompt("Enter marks of "+sub2,54)
// let marksObt3= +prompt("Enter marks of "+sub3,48)
// const maxMarks = 100;
// let totalMarks = 300;
// let totalObt = marksObt1 + marksObt2 + marksObt3;
// let perc = totalObt/totalMarks*100;
// let perc1 = marksObt1/maxMarks*100;
// let perc2 = marksObt2/maxMarks*100;
// let perc3 = marksObt3/maxMarks*100;

// document.write(`<table border=1px , width=600px> 
//     <tr>
//     <th>Subjects</th>
//     <th>Total Marks</th>
//     <th>Obtained Marks</th>
//     <th>Percentage</th>
//     </tr>

//     <tr>
//     <td>${sub1}</td>
//     <td>${maxMarks}</td>
//     <td>${marksObt1}</td>
//     <td>${Math.round(perc1)}%</td>
//     </tr>

//     <tr>
//     <td>${sub2}</td>
//     <td>${maxMarks}</td>
//     <td>${marksObt2}</td>
//     <td>${Math.round(perc2)}%</td>
//     </tr>

//     <tr>
//     <td>${sub3}</td>
//     <td>${maxMarks}</td>
//     <td>${marksObt3}</td>
//     <td>${Math.round(perc3)}%</td>
//     </tr>

//     <tr>
//     <th>Total</th>
//     <th>${totalMarks}</th>
//     <th>${totalObt}</th>
//     <th>${Math.round(perc)}%</th>
//     </tr>

// </table>`)

/************************************************************************/

