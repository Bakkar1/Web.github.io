// Window
/*
    window object is the browser window
    winsow is the default object of browser
    all global js objewts are members of winsow object
    window.print() b7al yla clickt 3la print
*/

//===================================================

//Window Methods - Alert, Prompt, Confirm
/*
    alert tanbih : alert("message")
    confirm kayraja3 lik boolean value : confirm("message");
    prompt kayraja3 lik text : prompt("text","deagult text")
*/

//alert('you have \n alert ');

/*
var antword =  confirm('are you agree');
if(antword){
 console.log('agree');
}
else{
    console.log('not agree');
}
*/

/*
var naam = prompt("what is your name ?","example osama");
if(naam != null)
{
    console.log('welkom ' + naam);
}
else{
    console.log('je had geen naam gegeven !');
}
*/


//+==================================================================
/*
    Window Methods - setTimeout
    setTimeout(function, milliseconds, param1,param1....) parameter is optional

    settimeout kat9der tkhali lcode ytsana ch7al bghit b milliseconds
    9bal maynafad l function
    katnafd l fun mara wa7ada

    clearTimeout(id or number of setTimeout);

*/
var timeout = setTimeout(function(){
    window.console.log("hello after 4 seconds");
},4000);

document.getElementById('clearTime').onclick = function(){
    clearTimeout(timeout);
    console.log('time out is cleared');
}

//+=================================================================
/*
    Methods - setInterval

    setInterval(function,millisecnds)
    ghadi tnafad l fun kola milliseconds

*/

var i = 20;
var myInter = setInterval(() => {
    console.log("ruming : " + i);
    i--;
    if(i< 0){
        console.log('done');
        clearInterval(myInter);
    }
}, (1000));

//+=================================================================
/*
    window.open(url, name or attribute, specification, history replace)

    window.open kayfta7 link new window
    kolchi lparameter optional

    name of window 
    attribute : "_blank" default value / "_self" 

    specification : "width=px,height=px,left=px,top=px,menubar=no,status=no" only number without px
    left,top... position
    menubar= yes or no (show or hide menu bar)
    status= yes or no (status bar)

    replace = true or false 
    replace new window in de history

    kaykhdmo biha sitit li fach katkliki 3la chi button katkhorj lik
    popup  new page fiha advertentie ....
*/

document.getElementById('open').onclick = function(){
    window.open("https://www.google.com", 
        "", 
        "width=400,height=400,left=400,top=400,menubar=no,status=no", 
        "");
}


//==================================================================
//scrollBy, scrollTo
/*
    scrollBy: kaydir scroll bdakchi li 3tito b px x and y
    kola mara klikit ghayzid x,y li 3ito
    scrollBy(x,y) only number

    scrollTo kaydir scroll li7datiyat x,y li 3tito
    scrollTo(x,y) only number
*/
let scrollby = document.getElementById('scrollBy');

scrollby.onclick = function(){
    window.scrollBy(0,400);
}
let scrollTo = document.getElementById('scrollTo');

scrollTo.onclick = function(){
    window.scrollTo(0,400);
}