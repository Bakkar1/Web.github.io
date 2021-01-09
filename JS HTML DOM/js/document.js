/*
    Document - InputEncoding, LastModified, URL

    InputEncoding : kaykhalik ta3raf no3 tarmiz fsaf7a

    LastModified : kayraja3 lik imta tra akhir ta3dil f saf7a
    
    url : katjib lik link dyal saf7a fach nta
*/
console.log("=============Document===========");
console.log("inputEncoding");
console.log(document.inputEncoding);

console.log("lastmodified");
console.log(document.lastModified);

console.log("url");
console.log(document.URL);

/*
    Create [ Element, Text, Comment ]
*/

//create the main element
var myElement = document.createElement('div');

myElement.classList.add('creatElm');
//append to body
document.body.appendChild(myElement);

//creat text nod
var myText = document.createTextNode('heloo from java script dom');
//create comment
var myComment = document.createComment('this is comment created width js dom');
//add comment to my element
myElement.appendChild(myComment);
//add the text to my element
myElement.appendChild(myText);

//oefenen

var myUl = document.createElement('ul'),
    i;


for(i = 0;i <= 20 ;i++){
    var myli = document.createElement('li');
    var rnd = Math.floor(Math.random() * 10);
    myli.textContent = rnd.toString();
    myUl.appendChild(myli);
}

document.body.appendChild(myUl);


//Create Attribute
var myAtt = document.createElement('div'),
    //create the attribute
    myAttribute = document.createAttribute('class');

//set de attribute value
myAttribute.value = 'my-attribute';

//add this attribute to element
myAtt.setAttributeNode(myAttribute);

document.body.appendChild(myAtt);
