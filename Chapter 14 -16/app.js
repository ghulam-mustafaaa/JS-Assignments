/********************************************************************************************/
/********************************************************************************************/
/************************** Chapter 14 - 16 *************************************************/
/********************************************************************************************/
/********************************************************************************************/

// Declare an empty array using JS literal notation to store student names in future.

let StdName = [];

// 2. Declare an empty array using JS object notation to store student names in future.

let StdNames = new Array();

// 3. Declare and initialize a strings array.

let stdName = ["a","b","c","d"];
let stdNam = new Array("e1","e2");

// 4. Declare and initialize a numbers array.

let stdNum = [1,2,3,4];
let stdNums = new Array(5,6);

// 5. Declare and initialize a boolean array.

let stdBool = [true,false,true,false];

// 6. Declare and initialize a mixed array.

let stdMix = ["a","b",1,2,true,false];

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

let education = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil","PhD"];
document.write("Qualifications:<br><br>")
for(i in education) {
    document.write(education[i] + "<br>");
}

// 8. Write a program to store 3 student names in an array. Take another array to store score of these
 // three students. Assume that total marks are 500 for each student, display the scores & percentages of students
 // like:

let students = ["a","b","c"];

let marks = [320,230,480];

let total = 500;

for(i in students) {
    document.write("Score of " + students[i] + " is " + marks[i] + ". Percentage: " + (marks[i]/total)*100 + "%" + "<br>");
}

// 9. Initialize an array with color names. Display the array elements in your browser.
 // a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array.
 // Display the updated array in your browser.
 // b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the
 // updated array in your browser.
 // c. Add two more color to the beginning of the array. Display the updated array in your browser.
 // d. Delete the first color in the array. Display the updated array in your browser.
 // e. Delete the last color in the array. Display the updated array in your browser.
 // f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired
 // position/index. . Display the updated array in your browser.
 // g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
 // remove the same number of color(s) from user-defined position/index. Display the updated array in your
 // browser.

let colors = ["red","green","blue"];

document.write(colors + "<br><br>");

let color = prompt("What color do you want to add to the beginning?");

colors.unshift(color);

document.write(colors + "<br><br>");

let color1 = prompt("What color do you want to add to the end?");

colors.push(color1);

document.write(colors + "<br><br>");

let color2 = prompt("What color do you want to add to the beginning?");

colors.unshift(color2);

document.write(colors + "<br><br>");

colors.shift();

document.write(colors + "<br><br>");

colors.pop();

document.write(colors + "<br><br>");

let index = +prompt("At which index do you want to add a color?");

let color3 = prompt("What color do you want to add?");

colors.splice(index,0,color3);

document.write(colors + "<br><br>");

let index1 = +prompt("At which index do you want to delete color(s)?");

let color4 = +prompt("How many colors do you want to delete?");

colors.splice(index1,color4);

document.write(colors + "<br><br>");

// 10. Write a program to store student scores in an array & sort the array in ascending order using Array’s sort
 // method.

let scores = [320,230,480,120];

document.write("Scores of Students: " + scores + "<br><br>");

scores.sort();

document.write("Ordered Scores of Students: " + scores + "<br><br>");

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities
 // array.

let cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

let selectedCities = cities.slice(2,4);

document.write("Cities List: " + cities + "<br><br>");

document.write("Selected Cities List: " + selectedCities + "<br><br>");

// 12. Write a program to create a single string from the below mentioned array:

let arr = ["This","is","my","cat"];

document.write("Array: " + arr + "<br><br>");

let str = arr.join(" ");

document.write("String: " + str + "<br><br>");

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in

 // which they were stored. (FIFO-First In First Out)
 // (LIFO-Last In First Out)

let arr1 = ["keyboard","mouse","printer","monitor"];

document.write("Devices: " + arr1 + "<br><br>");

document.write("Out: " + arr1.shift() + "<br>");


// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse
 // order. (Last In First Out)
 // (First In First Out)

let arr2 = ["keyboard","mouse","printer","monitor"];

document.write("Devices: " + arr2 + "<br><br>");

document.write("Out: " + arr2.pop() + "<br>");

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.
 // Display the following dropdown/select menu in your browser using document.write() method:

let manufacturers = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

document.write("<select>");

for(i in manufacturers) {
    document.write("<option>" + manufacturers[i] + "</option>");
}

document.write("</select>");

/********************************************************************************************/

/********************************************************************************************/

/********************************************************************************************/










