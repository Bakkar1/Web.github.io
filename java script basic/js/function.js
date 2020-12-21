//Function - Basic
function sayHi()
{
    console.log("hello javascript insind function ");
}
//bach dir colling lhadik lfunction kteb ghir smitha
sayHi();
function sayhello()
{
    "use strict";
    var name="osama";
    if (name === "oama")
    {
        alert("hello " + name + " !");   
    }
}
//================================
//Function - Return
// Function - With Parameters
function myAgeInDays(myAge ,infoName) {
    "use strict";
    /*var infoName = "osama",
            myAge = 32; */
    return myAge * 365;
}
var daysculc = myAgeInDays(24 ,"mk");
document.getElementById("inp").innerHTML = " your age in days =  " + daysculc + " days";

function sayhello(firstName ,lastName)
{
    "use strict";
    return "welkom " + firstName + " " + lastName + " hoe gaat het met u";
}
document.getElementById("funpr").innerHTML = sayhello("osama", "elzero");

//===================================
//Function - Advanced And Self Invoke
// haka kandir self incoke n7et l function west (hna)();
/*      (function saywelkom()
        {
            "use stict";
            alert("welcome to my website");
        })();
*/
function converUsdToEuro()
{
    "use stict";
    var amount = document.getElementById("dollar").value,
        result = amount * 0.75,
        message = document.getElementById("messeg") ; 
    //message.innerHTML = amount + " usd " + " = " + result + " euro" ;
    // isNaN : is not a number
    if ( amount === "" || isNaN(amount) )
    {
        message.innerHTML = "please enter a number"
    }
    else if (amount <= "0")
    {
        message.innerHTML = "please enter a number greater than 0"
    }
    else
    {
        message.innerHTML = amount + " usd " + " = " + result + " euro"
    }
}

//Switch, Case, Break
/*var season = prompt("wat is your favorit season ? :")
switch (season.toLowerCase())
{
    case "winter" :
        alert("winter is cold");
        break;
    case "summer" :
        alert("summer is hot");
        break;
    case "autumn" :
    case "spring" :
        alert("this season is very good");
        break;
    default:
        alert("you did not enter a season name");
        break;
}
*/
