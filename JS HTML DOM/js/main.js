// Find Elements By [ ID, Class, Tag ]
/*
    tari9a 1: document.getElementById("test") kayrja3 lik wa7d l elment
    tari9a 2: getElementsByTagName("tagName"); kayraj3 lik opject of array mn ga3 elements li 3andk f l page not compatible width IE 8
    document.getElementsByClassName("className"); kayraja3 lik collection dyal elemnts li 3andhom nafs class name

    document.querySelectorAll(''); //kat9der t7adad lmasar dayal element li bghit tjib 
        //darori T3ayat bl index * || not compatible width IE 8
*/

const links = 'links';
/*
var myid = document.getElementById("test");
myid.innerHTML = "changed by ajavascript";

var myElements = document.getElementsByTagName("li");
console.log(myElements.length);
for(var i = 0; i < myElements.length; i++)
{
    myElements[i].innerHTML = "li index of " + i.toString();
}

var elements = document.getElementsByClassName("test3");
console.log(elements);

var Elements = document.querySelectorAll('ul li.test3');
Elements[0].innerHTML = "change by js queary";
*/

//=====================================================================
//Find Elements By Objects Part 1
/*
    document.title ghayjib li title dyal page
    document.images yjib lik tswar li fl page
    document.body
    document.links hwa l link wfih href
    document.anchors kaykon ghir tag dyal link bla href wkykon ghir name
*/
/*
var myDiv = document.getElementById('show');

myDiv.innerHTML = document.title;

var myImages = document.getElementById('img');

//myImages.innerHTML = document.images.length;
//myImages.innerHTML = document.images[2].src;

for(var i = 0; i < document.images.length; i++)
    {
        document.write('<br>' + document.images[i].src + '<br>');
    };

var myForms = document.getElementById("frm");

myForms.innerText = document.forms.length;

myForms.innerText = document.forms[0].x2.value;
*/
/*
var mylink = document.getElementById('links');
//mylink.innerText = document.links.length;
mylink.innerText = document.anchors.length;
*/
//===========================================================================
