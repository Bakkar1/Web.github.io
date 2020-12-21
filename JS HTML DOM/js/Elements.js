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
