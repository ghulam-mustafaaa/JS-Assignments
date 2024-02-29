//*************************************************//
//**************** Chapter 2 ***********************//
//*************************************************//
 
//Question 1. Declare a variable called age & assign to it your age. Show your age in an alert box.

    let age = 23;
    alert("I am "+age+" years old");

//Question 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You have visited this site N times”.

    let N; 
    N= 14;
    alert("You have visited this site "+N+" times");

//Question 3. Declare a variable called birthYear & assign to it your birth year. 
// Show the following message in your browser:

    let birthYear = 1999;
    document.write("<h1>My birth year is "+birthYear+
                    "<br> Data type of my declared variable is " + typeof(birthYear)+ "</h1>");


//Question 4. A visitor visits an online clothing store www.xyzClothing.com. 
// Write a script to store in variables the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to order
// Show the following message in your browser: 
// “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”.
    
    // let Visitor_Name = "John Doe";
    // let Product_Title = "T-shirt(s)";
    // let Quantity = 5;
//Using prompt() :
    let Visitor_Name = prompt("Visitor's name: ");
    let Product_Title = prompt("Product's title: ");
    let Quantity = +prompt("Quantity: ");
    
    document.write("<h1>"+Visitor_Name+" ordered "+Quantity+" "+Product_Title+ 
                        " on XYZ Clothing store </h1>");
    
//**************************************************************************************************//
//***********************************The End********************************************************//
//**************************************************************************************************//