
//aad default local storage class on body
document.body.classList.add(localStorage.getItem('pageColor') || 'red'); // jib lawla yla malgito jib tani

var el = document.querySelectorAll('.color-switcher li'),//ghayjib lik ga3 'li' li kaynin f color-switcher
    classesList = [];

//loop elment
for (var i = 0; i < el.length; i++)
{
    // get classes list
    classesList.push(el[i].getAttribute('data-color'));

    el[i].addEventListener("click", 
    function(){
        //remove aal old classes
        document.body.classList.remove('red', 'green', 'purple', 'black'); //classList homa l classes li 3la l body
        // wala haka (...classesList) ga3 l classeslist

        //add current class from 'li' data attribute
        document.body.classList.add(this.getAttribute('data-color')); //this hwa el 3lach clickit

        //add date to local storag bach dima yb9a nafs l colorwakha tkhorj wtarj3 wala dir refresch
        localStorage.setItem('pageColor', this.getAttribute('data-color')); //this hwa el[i]
        // 'pageColor' hiya smiya li 3tit l hadak item
    },
    false);
}

//Capitalize Words Function

function Capitalizefunn(string){
    var oldArry = string.split(" "),
        newArray = [];
    for(var x = 0; x < oldArry.length; x++)
    {
        newArray.push(oldArry[x].charAt(0).toUpperCase() + oldArry[x].slice(1))
    }
    return newArray.join(" ");
}
var myString = document.getElementById("mystring");

myString.innerHTML = Capitalizefunn(myString.textContent.toString());

//console.log(Capitalizefunn('hel djgf hdgd'));

//======================================================================================
//Calculate Textarea Characters With On-Input Event
var myArea = document.querySelector('textarea'),
    maxlenght = myArea.getAttribute('maxlength'),
    mySpan = document.getElementById("count");
console.log(maxlenght);
// oninput 7san mn ga3 lokhrin onkeydown............
mySpan.textContent = maxlenght;
myArea.oninput = function(){
    mySpan.textContent = maxlenght - this.value.length;
    if(count.textContent == 0){
        count.classList.add('zero');
    }
    else{
        count.classList.add('safe');
    }
}

//=======================================================
//Hide Placeholder On Input Focus
var myInput = document.getElementById('myInput');

myInput.onfocus = function() {
    //store placeholder att in backup attr
    this.setAttribute('data-reso', this.getAttribute('placeholder'));
    //empty placeholder attr
    myInput.setAttribute("placeholder", "");
}

//onblur hiya fach n7ayd l focus
myInput.onblur = function() {
    //get placeholder from back up attr
    this.setAttribute('placeholder', this.getAttribute('data-reso'));
    myInput.setAttribute("data-reso", "");
}

/* other way
myInput.onfocus = function() {
    myInput.setAttribute("placeholder", "");
}

//onblur hiya fach n7ayd l focus
myInput.onblur = function() {
    this.setAttribute('placeholder', "name");
}
*/

//===================================================================================================
/*
    Make Type Writer Effects On Text 
*/
var myArt = document.getElementById('writeEf'),
    myType = myArt.children[0],
    myButton = myArt.children[1],
    i = 0,
    myText = "hello from elzero web school this is Type Writer Effects On Text";

myButton.onclick = function(){
    'use strict';
    var typeWrite = setInterval(function(){
        //myButton.setAttribute('disabled', "disabled");
        myButton.disabled = true;
        myType.setAttribute('class', "myEf");
        myType.textContent += myText[i];
        i++;
        if (i > myText.length -1)
        {
            clearInterval(typeWrite);
        };
    }, 200);
}
// setInterval katkhli lfunction t3awd bl ml second hna 3tit 200ms
// t3awd 7ta dir liha clearInterval(varibale);

var mybt = document.getElementById('mybt'),
    yText = "hello from elzero web school this is Type Writer Effects On Text";
mybt.onclick = function(){
    "use strickt";
    var mytxt = [];
    while(i < yText.length -1){
        mytxt.push(yText[i]);
        mybt.textContent = mytxt.toString().replace(/,/ig, "");
        i++;
    }
    //console.log(mytxt.toString().replace(/,/ig, ""));
}

//=====================================================================================
/*
    Show / Hide Password On Input Field
*/

var myForm = document.getElementById('hide'),
    myPas = myForm.children[0],
    myBut = document.getElementById('myBut');

myBut.onclick = function (){
    'use strickt';
    if(myPas.getAttribute("type") == "password"){
        myPas.setAttribute('type', 'text');
        this.classList.remove(...this.classList);
        this.classList.add('far', 'fa-eye-slash');
    }
    else{
        myPas.setAttribute('type', 'password');
        this.classList.remove(...this.classList);
        this.classList.add('far', 'fa-eye');
    }
};
/*
var myForm = document.getElementById('hide'),
    myPas = myForm.children[0],
    myBut = document.getElementById('myBut');

myBut.onclick = function (){
    'use strickt';
    if(myPas.getAttribute("type") == "password"){
        myPas.setAttribute('type', 'text');
        this.setAttribute('class', 'far fa-eye')
    }
    else{
        myPas.setAttribute('type', 'password');
        this.setAttribute('class', 'far fa-eye-slash')
    }
};
*/


//========================================
/* Scroll To Top Button */
var myGoButton = document.getElementById('goUp');

window.onscroll = function(){
    'use strick';
    if (window.pageYOffset >= 600){
        myGoButton.style.display = ('block');
    }
    else{
        myGoButton.style.display = ('none');
    }
};

myGoButton.onclick = function(){
    window.scrollTo(0, 0);
};

//+===========================================
//Edit Text Live On Input
var textLive = document.querySelector('.textLive'),
    myTitle = textLive.children[0];
    myContent = textLive.children[1],
    liveDiv = document.querySelector('.liveDiv'),
    myTitleLive = liveDiv.children[0];
    myContentLive = liveDiv.children[1];
/*
myTitle.onkeyup = function(){
    myTitleLive.textContent = this.value;
}

myContent.onkeyup = function(){
    myContentLive.textContent = this.value;
}
*/

function onLive(originInPut,liveOutPut){
    originInPut.onkeyup = function(){
        liveOutPut.textContent = this.value;
    }
}

onLive(myTitle,myTitleLive);
onLive(myContent,myContentLive);

//==========================================================
/*Disable Right Click On page*/
/*
document.addEventListener('contextmenu',function(e){
    e.preventDefault(); //madirch default : defualt dyalo howa ybayan l contextmenu
});
*/

//==========================================================
/**
    Create Simple Dynamic Clock

 */

function showTime(){
    var now = new Date(),
        hours = now.getHours(),
        minutes = now.getMinutes(),
        seconds = now.getSeconds(),
        clock = document.querySelector('.clock');

    if(hours < 10){
        hours = '0' + hours;
    }
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(seconds < 10){
        seconds = '0' + seconds;
    }

    clock.textContent = hours + ':' + minutes + ':' + seconds;
}

window.onload = function(){
    setInterval(showTime,500);
}

// Calculate Textarea Characters Like Twitter
// my way
var myformTwittter = document.querySelector('.txtatwitter'),
    txtarTwit = myformTwittter.firstElementChild,
    twitSpan = myformTwittter.lastElementChild.firstElementChild,
    twitPtxt = myformTwittter.lastElementChild.firstChild;

txtarTwit.onkeydown = function(){
    twitSpan.textContent = 50 - this.value.length;
    if(twitSpan.textContent < 0){
        twitSpan.style.color = '#F00';
    }
    else{
        twitSpan.style.color = '#000';
    }
}

//==================================================
//Show Random Image Every X Second
var imageEveryX = document.getElementById('imageEveryX');

//my way
var backColor = ["#F00","#00F","#000","#DDD"];

function reapetRnd(elm,reapetE){
    setInterval(function(){
        var rnd = Math.floor(Math.random() * reapetE.length);
        elm.style.backgroundColor = reapetE[rnd];
    }, 500);
}
function reapetClasic(elm,reapetE){
    var i = 0;
    setInterval(function(){
        elm.style.backgroundColor = reapetE[i];
        i++;
        if(i == reapetE.length){
            i = 0;
        }
    }, 1000);
}

// reapetRnd(imageEveryX,backColor);
reapetClasic(imageEveryX,backColor);

//================================
//Check If Url Hash Contains String
/*
    hash hwa lklam li mn ba3d #
    http://127.0.0.1:5500/examplesJs.html#image
    hash = image
*/


if(window.location.hash){
    console.log("goed er is hach")
    //method 1
    // index(0) = #
    if(window.location.hash.indexOf("osama") === 1){
        console.log("hash osama is fond");
    }

    //method 2
    var hash = window.location.hash.substring(1);
    if(hash == "mk"){
        console.log("hash mk is fond");
    }
}
else{
    console.log("niet goed er is geen hach")
}

//================================================
//Redirect to url
var myRedirect = document.querySelector('.redirect');
function redirectMe(url){
    if(url !== null){
        window.location = url;
    }
}


//Generate Random Serial Number
function generateSerial(){
    var chars = "1234567890azertyuiopqsdfghjklmwxcvbnAZERTYUIOPQSDFGHJKLMWXCVBN",
        serialLenght = 20,
        randomSerial = '',
        i;
    for(i = 0 ; i < serialLenght; i++){
        var rnd = Math.floor(Math.random() * chars.length -1);
        // randomSerial += chars[rnd];
        randomSerial += chars.substring(rnd,rnd + 1);
    }
    document.getElementById('serial').textContent = randomSerial.toString();
}
