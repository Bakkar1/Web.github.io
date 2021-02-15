//Elements - Get, Set Element Content

/*
    not standard 
        {
            inner.text;
            outer.text;
        }
    standar
        {
            innerHTML; ghayjib lik inner html bkamla dakchi li fih span...
            outerHTML;
            textContent; **** ghayjib lik ghir text li fl element
        }
    get html content;
    element.innerHTML;
    get text content;
    element.Textcontent;

    set html content
    element.innerHTML = "xxxxxxxxxxx";
    set text content
    element.Textcontent = "xxxxxxxxxxx";
*/
console.log("===============get set==================");

var myEl = document.getElementById('getset');

console.log("innerHTML : " + myEl.innerHTML);
console.log("textcontent : " + myEl.textContent);

myEl.textContent = "thi is a new text";
console.log("innerHTML : " + myEl.innerHTML);

//=====================================================================================
//Elements - Get, Set Attribute Value
/*
    set attribute
        {
            element.id = "xx";
            element.className = "xxxx";
            element.Attribute = "xxx";
        }
    get attribute
        {
            element.attribute;
        }

*/

var myElement = document.getElementById('atrDirect');

myElement.className = "class-js";

//=====================================================================================
//Elements - GetAttribute, SetAttribute
/*
        element.getAttribute('Attribute name');
        element.setAttribute('Attribute name', 'attribute value');
*/

console.log(myElement.getAttribute('id'));

myElement.setAttribute('class', "hello");
console.log(myElement.getAttribute('className'));

//=====================================================================================
//Elements - HasAttribute, RemoveAttribute
/*
    HasAttribute kaychof ghir wach hadak l elemnt lih hadik attributemachi wach fiha chi value wala la
    RemoveAttribute kay7ayad l attribute bli fih kolo
*/
var myImage = document.getElementById('myImg');
if (myImage.hasAttribute('src')) {
    if (myImage.getAttribute('src') === "") {
        myImage.setAttribute("src", "http://www.placehold.it/100/000");
    }
    else{
        myImage.removeAttribute('src');
    }
}
else {
    myImage.setAttribute('src', "http://www.placehold.it/100/F00")
}

//=====================================================================================
//Elements - ClassList [ Item, Contains, Length ]
/*
    not sup in IE 9
    Contains ya7tawi traj3 boolien
    Items homa l items li kaynin west l class kan3yt 3lih bl index 
*/
var clsDiv = document.getElementById('main');
console.log("classlit = " + clsDiv.classList.length);

if (clsDiv.classList.contains("main")){
    console.log("yes this div contains class calld main");
}
console.log("class talt = " + clsDiv.classList.item(2));

//=====================================================================================
//Elements - ClassList [ Add, Remove, Toggle ]
/*
    toggle yla kayn hadak l class fl element y7aydo yla makynch yzido
*/
var myDiv = document.getElementById('clsDiv'),
    myButton = document.querySelector('button');

myButton.onclick = function() {
    myDiv.classList.remove(...this.classList);
    myDiv.classList.add('green');
    myDiv.classList.toggle('size');
}

//=====================================================================================
//Elements - Children - ChildNodes
console.log("==========================Children - ChildNodes==============================");
/*

*/
var myChild = document.getElementById('childNd');

console.log("childElementCount = " + myChild.childElementCount); // only elements
console.log(myChild.children);
console.log("children = " + myChild.children.length); // only elements

console.log(myChild.children[0].textContent);

console.log("childNodes = " + myChild.childNodes.length); //childNodes kayjib lik kolchi elements comment ....
    //childNodes kay7sb 7ta space l bin tag

//==========
/*
    Elements - Children - First & Last Child [ Element ] :
    firstChild : first node child
    firstElementChild : first element child
*/
console.log("child nodes"); 
console.log("firstChild = " + myChild.firstChild.textContent); 
console.log("firstElementChilds = " + myChild.firstElementChild.outerHTML); 

console.log("lastChild = " + myChild.lastChild.textContent); 
console.log("lastElementChild = " + myChild.lastElementChild.outerHTML); 

//==================
/*
    Elements - Children - Append Child : 
    Append hiya tzid elemnt wala text child l parent
*/

var myAppendpr =  document.getElementById('Append'),
    myNewMain = document.createElement('div'),
    myNewtxt = document.createTextNode("hello i'm append child")
myNewMain.appendChild(myNewtxt);
myAppendpr.appendChild(myNewMain);

//===============================
/*
    Elements - Children - Insert Before
*/
var myMain =  document.getElementById('insertB'),
    myBNewMain = document.createElement('div'),
    myBNewtxt = document.createTextNode("hello i'm append child 2 insertBefore"),
    myBNewMain2 = document.createTextNode("hello i'm insertBefore");
myBNewMain.appendChild(myBNewtxt);
myMain.insertBefore(myBNewMain, myMain.firstElementChild);
myMain.insertBefore(myBNewMain2, myMain.children[1]);

//===============================
/*
    Elements - Children - Remove Child
    element.removeChild()
*/

//+====================================
/*
    nodeName
    tagName
    nodeValue  

    nodeType : yla element ghayrj3 lik 1
            yla Attribute ghayrj3 lik 2
            yla kan text ghayrj3 lik 3
            yla comment ghayrj3 lik 8

*/
var nodeNVT = document.querySelector('.nodeNVT');
console.log("node type name value")
console.log(nodeNVT.childNodes[1].nodeName);

console.log(nodeNVT.childNodes[0].nodeValue);

console.log(nodeNVT.childNodes[3].nodeValue); //had ghayraj3 lik node wlakin rah westo node khorin hadakchi 3lach ghay3tik 0
console.log(nodeNVT.childNodes[3].childNodes[0].nodeValue);

console.log(nodeNVT.childNodes[3].nodeType);

/*
    Elements - Clone Node / naskh
*/

var origindiv = document.querySelector('.cloneor'),
    newdiv = document.querySelector('.clonenew'),
    cloneCopy = origindiv.firstElementChild.cloneNode(true);
// default false kayakhdod element parent wl atribuet wmakayakhodch childeren wchelderenNode
//true katkhalih yakhod kolchi
newdiv.appendChild(cloneCopy);


//Elements - Parent Element
/*
    parentElement = parentNode
*/
var myParentElement = document.getElementById('parentElement'),
    myparentelButton = myParentElement.firstElementChild;


myparentelButton.onclick = function(){
    this.parentElement.style.display = "none";
}

//=============================
/*
    Next, Previous Sibling 
    sibling : cha9i9
*/
var mainSibling = document.querySelector('.sibling');

console.log(mainSibling.childNodes[1].nextSibling);
console.log(mainSibling.childNodes[1].nextElementSibling);

console.log(mainSibling.childNodes[3].previousSibling);
console.log(mainSibling.childNodes[3].previousElementSibling);

//=============================================
/*
    Focus 
    input.focus(); add focus
    onfocus = function

    input.blur(); remove focus
    Blur
    onblur = function..
*/

var myForme = document.getElementById('focus');
myForme.onfocus = function(){
    this.style.backgroundColor = "red";
}
myForme.onblur = function(){
    this.style.backgroundColor = "white";
}
//=============================================
//Click

var clickEl = document.querySelector('.click');

clickEl.firstElementChild.onclick = function(){
    clickEl.style.display = 'none';
}
/*
    click kaydir click bo7do

    seTimeout katnafad l functie mn ba3d XXXXmili second
*/
window.addEventListener("load",function(){
    setTimeout(function(){
        clickEl.firstElementChild.click();
    }, 2000);
}); 

// Add Event Listenerµ
/*
    elm.addEventListener('event',function(){});

    kaykhalik t9der dir nafs l event 3la wa7d l3onsor bzaaf lmarat

    elm.removeEventListener('event',function name);
*/

//+=====================
// Contains
var myContain = document.querySelector('.elmCon');
    myContainChild = myContain.firstElementChild.firstElementChild.firstElementChild;
if(myContain.contains(myContainChild)){
    console.log("elmCon is contain mycontainChild");
}

//=================
//Client [ Height, Width ]
/*
    client height : viewable area px
                    include padding
                    no border
                    no margin
                    no scroll
                    
    client width : viewable area px
                    include padding
                    no border
                    no margin
                    no scroll
*/

console.log(document.querySelector('.client').clientHeight);
console.log(document.querySelector('.client').clientWidth);

//=====================================================
//Scroll [ Height, Width ]
/*
    scroll height/width : 
        all area px
        include invisible area
        include padding
        no scroll
        no border
        no margin
*/

var myScroll = document.getElementById('scroll');

console.log("scroll height width");
console.log(myScroll.scrollHeight);
console.log(myScroll.scrollWidth);


//Offset [ Height, Width ]
var myOffset = document.querySelector('.offset');

/*
    offsetHeight / offsetWidth: viewable area px
                    include padding
                    include border
                    include scroll
                    no margin
*/
console.log("offset height width");
console.log(myOffset.offsetHeight);
console.log(myOffset.offsetWidth);


//====================================================
// Scroll [ Top, Left ]
var myScrollTopLeft = document.getElementById('scrollTopLeft');

myScrollTopLeft.style.display = "none";//7ayad hadi bach yban lik div

myScrollTopLeft.onclick = function(){
    'use strict';
    document.documentElement.scrollTop += 100;
    //document.documentElement.scrollLeft += 100;
    console.log(document.documentElement.scrollTop );
    if(document.documentElement.scrollTop >= 1000){
        this.classList.add('active');
    }
}

console.log(myOffset)

/*
    Client [ Top, Left ] : katjib lik width dyal border bl px 
    includ scroll
*/
console.log("client top left : border width in px");
console.log(myScrollTopLeft.clientTop);
console.log(myScrollTopLeft.clientLeft);

/*
    Style
    kat9der tbadal f style dyal element b js

    element.Style.Property = value
*/

myScrollTopLeft.style.backgroundColor = "#0F9";
myScrollTopLeft.style.padding = "10px";

