//Strings Methods - Convert To String
console.log("string");
var myVar = "i lovd \"java script\"";
console.log(myVar);
console.log(typeof(myVar));
console.log("the number of character in myVar is = " + myVar.length)

var myNumber = 100;
console.log(typeof(myNumber));
var myNewNumber = myNumber.toString();
console.log(typeof(myNewNumber));

var mySecondNumber = String(myNumber);
console.log(typeof(mySecondNumber));

//======================================
//Strings Methods - Locate A String
// syntax : indexof(value, start position); default start = 0
//syntax : lastIndexof(value, start position); default start = akhir index f string || ghadi ybda mn start wyarja3 lour
// syntax : search = "value"; 
console.log("----------Locate A String--------");
var myString = "i'm in loce width java script & width ...",
    myWord = myString.indexOf("width");
    MyWord = myString.lastIndexOf("width");
console.log("index of in width = " + myWord);
console.log("the last index of width is = " + MyWord);
console.log(myString.search("in"));

//====================================================================================
//Strings Methods - Split A String
/* 
    start is altijd verplicht
    Split(separator, limit) 
    separetor hiya l7aja li bghit tfsl biha fl array mn string
    limit ch7al mn object bghito yraja3 
    ghadi yraja3 lik array

    slice(start, end)

    substr(start, lenght) start index, lenght ch7ak mn 7arf bghit tjib
    substr yjib lik tarf mn string

    substring( start, end) yla l end kber mn start kaydir lihom switch ama slice ghayrj2 lik y3tik empty string
*/
/*
console.log("-----------Split A String------------");
var myMainString = "i learn java script and js on", //hna
    mySplited = myMainString.split(" ", 3); // hna space hiya li ghayfswl biha yla ktebt chi 7arf ghadi yfsl biha wy7aydo
console.log(mySplited);
var mySlice = myMainString.slice(8, 19);
console.log(mySlice);
var mySubstr = myMainString.substr(2, 5);
console.log(mySubstr);
var mySubstring = myMainString.substring(10, 12);
console.log(mySubstring);
*/

//Find And Replace
/*
    chartAt(index); kayjib lik charachter mn string
    charCodeAt(index); yjib lik uniCode html dyal character mn l index dyalo
    replace(value, new value);
 */
/*
console.log("=====================Find And Replace======================")
var MyNwString = " have a nice day elzero web scholl and you are nice",
    myChar = MyNwString.charAt(MyNwString.length - 1),
    myCharCodeAt = MyNwString.charCodeAt(MyNwString.length - 1),
    newValue = MyNwString.replace("nice", "very goed"); //dar replace l nice w7at blastha very goed
    regValue = MyNwString.replace(/nice/g, "very goed"); //using reg Exp || g kat3ni global

console.log("find and reaplce");
console.log("character of latste index : " + myChar);
console.log("uni code html of latste character : " + myCharCodeAt);
console.log("new value : " + newValue);
console.log("new value using reg exp : " + regValue);
*/

//===========================================================================================================
// Concatenating
/*
    string.fromCharCode(num1, num2 ...);
    concat(string, string, string ...)
*/
/*
var myMassage = String.fromCharCode(77, 39, 66, 65, 82, 75);
console.log("using unicode = " + myMassage);
var myMassage1 = "BAKKAR",
    all = myMassage.concat(" " + myMassage1);

console.log();
console.log(all);
*/

//===========================================================================================
//Convert Letters
/*
    string.toUpperCase();
    string.toLowerCase();

var myString = "i love js",
    newString = myString.toUpperCase();
console.log(newString);
*/

//===============================================================================================
//Strings Methods - All Reference
// Reference :  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
/*
var myName = "               i am elzero     ",
    newName = myName.trim(); //trim kat7ayd lmasaft mn lawl wlakhar dyal string
console.log(myName);
console.log(newName);

var myString1 = "google";
console.log("go to google : " + myString1.link("http://www.google.com"));
*/

//===============================================================================================
//Chain : silsila
/*
var myNumber = 120,
    myString3 = myNumber.toString().replace(2, 3).split("");

console.log(myString3);
*/

//==============================================================================================
//Strings Methods - Practice moraja3a
//lastindexof kay9alab mn lakhar lel lawl wlakin l index kayb9a hwa hwa
var mString = "i \"love\" java script";
console.log(mString)
