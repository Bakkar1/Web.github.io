//Scope Part 1
var myName = "osama"; //global scope
console.log(myName); 
function myNameFun()
{
    "use strict";
    // var myName = "ahmed"; //local scope
    myName = "elzero"; //global scope
}
console.log(myName);// hna ghaytb3 osama mn global
myNameFun();
console.log(myName);// hna ghayba3 elzero 7it myNameFun khedmet wdart override 3la myName global

////Scope Part 2
var x = 1; //global any where 
function testparent()
{
    "use strict";
    var x = 5; //global in pranet function
    function testchild() //local in parent function
    {
        var calc = x + 2; //local in child function 
        console.log(calc);
    }
    return testchild();
}
testparent();
console.log(x + 2);