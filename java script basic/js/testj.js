//document.write("<p>hello from external test2 js file</p>");
//JavaScript Syntax
//comment
/*a */
///some varibel
var x = 10 
    ,y = 20
    ,z = 100
    ,firstName = "ahmed"
    ,firstNaMe = "jesson";
document.getElementById("test").innerHTML = "hello javascript from js file " + x + " " + firstName;
//l7orof f js 7asasa b7al c#
if (x == 30)
{
    console.log("not correct");
}
else
{
    console.log("correct")
}

//Variables
/*
    start with letters , underscore _ , $
*/
var mainPrice = 500
    ,discountOne = 100
    ,discountTwo = 180
    ,discountThree = 230;
document.getElementById("price").innerHTML = mainPrice;
document.getElementById("product1").innerHTML = mainPrice - discountTwo;
document.getElementById("product2").innerHTML = mainPrice - discountOne;
document.getElementById("product3").innerHTML = mainPrice - discountThree;

/* Data Type*/
/*boolean : true false */

/*array : ["facebook" ,"youtube" ,"gmail"] */
var array1 = ["facebook" ,"youtube" ,"gmail"];
document.getElementById("art1").innerHTML = array1[2];
/*object : {firstName : "osama" ,lastName = "elzero"} */
var myInfo = {firstName : "osama", lastName : "elzero"};
document.getElementById("art2").innerHTML = myInfo.firstName;
/* 
    string : "osama" wla 'osama'
    number : 23 4 656 ...
    undefined : var x ;
    Null
    NaN : not a number
    Symbol
 */
var x ;

//=======================================================
//Concatenation hiya tajma3 2 string +
var myAge = 7 + 1 + " the mal = " + 1 +2 +(5+2);
var myName = "elzero",
    myage = 32;
document.getElementById("s1").innerHTML = 
    "my name is : " + myName + "<br>" +
    "my age is : " + myage;
//========================================================

//Output
var x = firstname = "osama",
    lastname = "elzero";
//alert(firstname + " " + lastname);

// document.write("hello java"); //ghir dyal test

//document.getElementById("art2").innerHTML = myInfo.firstName;

//console.log("hello from console main js ");

//========================================================
//JavaScript Operators
/*
    +
    *
    /
    %
 */
var a = 10,
    b = 0,
    r = a / b;
document.getElementById("op").innerHTML = r;

//=========================================================
//If, Else If, Else Conditions
var ticket = 100;
if (ticket <= 100)
{
    console.log("the ticket is cheap");
}
else if (ticket > 100 && ticket < 300)
{
    console.log("the ticket value is middel")
}
else
{
    console.log("the ticket is not cheap");
}
//var YourAge = prompt("hoe oud ben je : "); //hadi ghatl3 l user bach ykteb fiha chi 7aja  

//========================================
//Conditional
/*
    > 
    >= 
    < 
    <= 
    == comparison operator value
    === identical operator : kay9arn l value w data type
*/

//Logical Operators
/*
    || or 
    && and
    != not equal value
    !== not equal value and not equal data type
 */
