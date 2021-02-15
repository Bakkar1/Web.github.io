// Events - How To Write All Methods
document.querySelector('.events').firstElementChild.onclick = changeMe;

function changeMe(){
    'use strict';
    this.parentElement.style.color = 'red';
}
// Events - Onload, Onscroll, 
// Onresize fach kadir resize l window dyalk wala element
/*
    element.event = function(){};
*/
window.onload = function(){
    //alert('hello');
}

//Events - Onfocus, OnBlur, OnSubmit
/*
    input.onfocus = function(){
        fach tclick wdkhol 3la chi input
    }
    input.onblur = function(){
        fach dir lost focus
    }
    elem.onsubmit = function(){
        fach dir submit
    }
    elm.precentDefault(); imna3 liftirad
*/

//OnClick, OnDblClick, OnMousEnter , onmouseleave ,

// elm.oncontextmenu fach tclick blimen
window.oncontextmenu = function(e){
    //e.preventDefault(); 
    console.log("right click mouse");
}

// Events - OnKey [ Up, Down, Press ]
/*
    o
*/
var inputelm = document.getElementById('eventInput'),
    myNote = document.querySelector('.note');
// inputelm.onkeydown = function(){
//     myNote.textContent = "you pres a key";
// }
// inputelm.onkeyup = function(){
//     myNote.textContent = "you pres a key and leav de key";
// }

//
inputelm.onkeypress = function(){
    myNote.textContent += "you pres a key";
}