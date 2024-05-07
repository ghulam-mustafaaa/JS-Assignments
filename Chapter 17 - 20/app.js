/*******************************************************************************************************/ 
/*******************************************************************************************************/ 
/********************************* Chapter 17 -20 ******************************************************/ 
/*******************************************************************************************************/ 
/*******************************************************************************************************/ 

// 1. Declare and initialize an empty multidimensional array. (Array of arrays)
document.write("<h1>Q1</h1> <br/>")
let arr = [[],[]]
console.log(arr);

// 2. Declare and initialize a multidimensional array representing the following matrix:

// 0 1 2 3
// 1 0 1 2
// 2 1 0 1

document.write("<h1>Q2</h1> <br>")
let arr2 = [[0, 1, 2, 3],[1, 0, 1, 2],[2, 1, 0, 1]];
document.write("matrix <br>" + arr2[0] +"<br>"+arr2[1]+"<br>"+arr2[2]);
console.log("matrix \n" + arr2[0] +"\n"+arr2[1]+"\n"+arr2[2]);

// 3. Write a program to print numeric counting from 1 to 10.
document.write("<h1>Q3</h1> <br>")

for(let i = 1; i <= 10; i++){
    document.write(i + "</br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
document.write("<h1>Q4</h1> <br>")

let num = +prompt("Enter a number for table");
let len = +prompt("Enter length of table");
for(let i = 1; i <= len; i++){
    document.write(num + " x " + i + " = " + num * i + "</br>");
}


// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]
document.write("<h1>Q5</h1> <br>")

let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(let i = 0; i < fruits.length; i++){
    document.write(fruits[i] + " | ");
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("<h1>Q6</h1> <br>")


document.write("<h4>a. Counting</h4> <br>")

for(let i = 0; i <= 15; i++){
    document.write(i + "</br>");
}

document.write("<h4>b.Reverse Counting</h4> <br>")

for(let i = 10; i >= 1 ; i--){
    document.write(i + "</br>");
}

document.write("<h4>c. Even</h4> <br>")

for(let i = 0; i <=20 ; i++){
    i%2==0? document.write(i + ","):document.write("");   
}

document.write("<h4>d. Odd</h4> <br>")

for(let i = 1; i <=20 ; i++){
    i%2!=0? document.write(i + ","):document.write("");   
}

document.write("<h4>e. Series</h4> <br>")

for(let i = 0; i <=20 ; i++){
    i%2==0? document.write(i + "k"+", "):document.write("");   
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
document.write("<h1>Q7</h1> <br>")

let arry = ["cake", "apple pie", "cookie", "chips", "patties"];

let search = prompt("Enter a item").toLowerCase();

for(let i = 0; i < arry.length; i++){
    arry[i] == search
        ? document.write(search + " is found" + "<br>")
        : document.write("")        
}




// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].
document.write("<h1>Q8</h1> <br>")

let arr3 = [24, 53, 78, 91, 12];

let max = arr3[0];

for(let i = 0; i < arr3.length; i++){
    arr3[i] > max? max = arr3[i] : max = max;
}

document.write("The largest number is " + max);



// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]
document.write("<h1>Q9</h1> <br>")

let arr4 = [24, 53, 78, 91, 12];

let min = arr4[0];

for(let i = 0; i < arr4.length; i++){
    arr4[i] < min? min = arr4[i] : min = min;
}

document.write("The smallest number is " + min);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
document.write("<h1>Q10</h1> <br>")

for(let i = 1; i <= 100; i++){
    // i%5==0? document.write(i + "</br>") : document.write("");
    document.write(`${i*5} | `);
}



/*******************************************************************************************************/
/*******************************************************************************************************/
/*******************************************************************************************************/

