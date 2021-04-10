
// Window
/*
    window object is the browser window
    window is the default object of browser
    all global js objects are members of window object
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
// var timeout = setTimeout(function(){
//     window.console.log("hello after 4 seconds");
// },4000);

// document.getElementById('clearTime').onclick = function(){
//     clearTimeout(timeout);
//     console.log('time out is cleared');
// }

//+=================================================================
/*
    Methods - setInterval

    setInterval(function,millisecnds)
    ghadi tnafad l fun kola milliseconds

*/

// var i = 20;
// var myInter = setInterval(() => {
//     console.log("ruming : " + i);
//     i--;
//     if(i< 0){
//         console.log('done');
//         clearInterval(myInter);
//     }
// }, (1000));

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
// var mynewwin;
// document.getElementById('open').onclick = function(){
//     mynewwin = window.open("https://www.google.com", 
//         "", 
//         "width=400,height=400,left=400,top=400,menubar=no,status=no", 
//         "");
// }



//==================================================================
//scrollBy, scrollTo
/*
    scrollBy: kaydir scroll bdakchi li 3tito b px x and y
    kola mara klikit ghayzid x,y li 3ito
    scrollBy(x,y) only number

    scrollTo kaydir scroll li7datiyat x,y li 3tito
    scrollTo(x,y) only number
*/
// let scrollby = document.getElementById('scrollBy');

// scrollby.onclick = function(){
//     window.scrollBy(0,400);
// }
// let scrollTo = document.getElementById('scrollTo');

// scrollTo.onclick = function(){
//     window.scrollTo(0,400);
// }

//===============================================================
//Stop, Close, Focus
/*
    window.stop(); stop kaydir stop l loding
    window.colse(); kadir close lchi window
    window.focus(); kaydir focus 3la chi window nta takhtarha
*/

//fta7 lawal open link new window
// document.getElementById('close').onclick = function(){
//     mynewwin.close();
// }
// document.getElementById('focus').onclick = function(){
//     mynewwin.focus();
// }

//===============================================================
//Window Properties - innerHeight, innerWidth

// console.log("window inner width " + window.innerWidth);
// console.log("window inner height " + window.innerHeight);
// console.log("window inner outer width " + window.outerWidth);
// console.log("window inner outer height " + window.outerHeight);

//===============================================================
//Window Properties - pageXOffset, pageYOffset
/*
    kaykhalik ta3raf ch7al bach t7rak scroll
    
    lihom alias
    window.scrollY b7alha b7al pageYOffset
    window.scrollX b7alha b7al pageXOffset

*/

// window.onscroll = function(){
//     console.log("scroll Y move  px :" + window.pageYOffset);
// }


/*
    ====================================================================
    Window Location Properties - Href

    kayjib lik link dyal window li lfo9

    get : window.location.href
    set : window.location.href = "url"
    
    href kay9bal :

    window.location.href = "https://www/....." absolute url
    window.location.href = "page.html" page
    window.location.href = "#idInPage"
    window.location.href = 'mailto:test@elzero.com'; mail

    y9der yfta7 protocl[ftp,mail,file,...]
*/

// console.log("location van window " + window.location.href);

// document.getElementById('locat').onclick = function(){
//     // location.href = "https://www.google.com";
//     //window.location.href = 'test.html';
//     location.href = "#testLocation";
// }

//+==============================================================
/*
    Location Properties - Host, Hash

    location.host : kayjib lik fin dayr host l web site local...
    
    get: location.host
    set : location.host = "url/href..."

    location.hash kayjib lik l hash li hwa matalan #example
    get: location.hash 
    set : location.hash = "#test"
*/
// console.log("location host " + location.host);
// console.log("location hash " + location.hash);


//==================================================================
// Location Properties - Protocol, Search, Pathname


/*
    kolhom t9der dir lihom get w set

    protocol : http = hypertext transfer protocol
        https : hypertext transfer protocol secuerd
        file 
        mailto
        ftp : file transfer protocol : kadir biha upload l file f site

    get location.protocol
    set location.protocol = "";

    get location.search 
    katjib lik lquery string li f url bach kat9alab li mn ba3d ?

    set location.search = ""

    location.pathname kayjib lik only path name

*/

// console.log("protocol " + location.protocol);
// window.onload = function()
// { 
//     console.log(location.search);
//     console.log("path " + location.pathname);
// };

//==================================================================

// Location Methods - Reload, Replace, Assign
/*
    assign : kat7awlak 3la link 
    location.assign("url")

    location.replace('url') kay7awlak 3la link wkaydir lih replace fl history fblsat huidige link page

    location.reload(false); kaydir reload mn l cach

    location.reload(true) kaydir reload mn server

*/

// ====================================================================
// History Methods - Back, Forward, Go

/*
    console.log(history.length);
    history.length : kay7sab number links li fl history

    history.forward(); next link ghadi ymschi lgodam b7al ula drit click 3la sahm limen lfou9
    
    history.back(); previes link ghadi yarj3 l link li 9bal huidige page b7al yla dirt click 3la sham liser lfou9


    history.go(); kat9bal url wala number negatief wala positief

    history.go(0); huidige page

    history.go(1); next page
    history.go(-1); preb page
*/

// history.go(2);





