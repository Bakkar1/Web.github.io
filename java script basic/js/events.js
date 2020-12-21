//onload, onclick, ondblclick : on duble click
function changeMeclick()
    {
        document.getElementById("p1").innerHTML = "you have one time click"; 
    } 
function changeMedubleclick()
{
    document.getElementById("p1").innerHTML = "heyou have two time clickllo"; 
} 
/*Events Part 2 - onkeydown, onkeypress, onkeyup
    onkeydown : ghir tclicki tkhdem l event 
    onkeypress : dir click tkhdem l event 
    onkeyup : 7ta dir click wt7ayd 3ad tkhdem l event
*/
var myInput = document.getElementById("input1"),
    myDiv = document.getElementById("div1"),
    sum = 3.75;

// Element.event = function() { //code }
myInput.onkeyup = function ()
{
    "use strict";
    myDiv.innerHTML = myInput.value * sum;
}


//Events Part 3 - onmouseover, onmouseout, onchange
var mySec = document.getElementById("sec1");
mySec.onmouseover = 
function () 
{
    mySec.innerHTML = "you hoverd on me !";
}
mySec.onmouseout = 
function () 
{
    mySec.innerHTML = "you have gone !";
};

//onchange : ghir yatra chi change fhad l7ala 3la l input ya7sab
var onInput = document.getElementById("oninput"),
    onSec = document.getElementById("onsec"),
    myCurrency = document.getElementById("currency");

myCurrency.onchange = function ()
{
    if(onInput.value <= 0 || isNaN(onInput.value) || onInput.value > 1000000)
    {
        onSec.innerHTML = "please enter a correct number"
    }
    else
    {
        onSec.innerHTML = " wodrt " + (onInput.value * myCurrency.value) + " Hongarian Pound ";
    }
}
