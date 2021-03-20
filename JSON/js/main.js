let product= {
    "name" : "pc",
    "price" : 3500
}

//console.log(product.name);

// acces json data
let myJson = {
    "username" : "elzero",
    "country": "egypt",
    "skills": [
                ["html","pugjs","haml"],
                ["css","sass","less"],
                ["js","babel"]
            ],
    "addresesses" : {
        "Egypt": "malaz",
        "usa": "caligornia",
        "germany": [
            "one",
            "two",
            "thre"
        ]
    },
    "Age": 37,
    "working" : false,
    "identity": null,
    "skillsProgress": [
        {"html": "60%", "Pugjs": "50%"},
        {"css": "60%", "sass" : "60%"}
    ]
}

// first way .

// console.log(myJson.username);

//tweede way

// console.log(myJson['username']);

//[2]ghayjib lik litem li wst skilss
//[1]ghayjiblik l item li wst l item li wst skills
// console.log(myJson.skills[1][0]);

// //object binnen array
// console.log(myJson.skillsProgress[0].html);

// console.log(myJson.addresesses.germany[1]);

//+===============================================================
//Parse And Stringify With JavaScript
/*
    b JSON.parse(jsonObject) kat7awal json object l js object
    json kayrja3 lik dima string

*/
//json.stringify khdemt biha 7it kaytla3 li erorr wakkha myJsonObject hwa json object

// let myJsonOject = JSON.stringify({
//     "username" : "osama",
//     "age" : 36
// });

// let myJsObject = JSON.parse(myJsonOject);

// console.log(myJsonOject);
// console.log(typeof(myJsonOject));


// console.log(myJsObject);
// console.log(typeof(myJsObject));

//===================================
/*
    b JSON.stringify(jsObject) kat7awal js object l json object
*/

// let myJsObject = {
//     username: "osama",
//     age: 36
// }

// let myJsonOject = JSON.stringify(myJsObject);

// console.log("\n js");

// console.log(myJsObject);
// console.log(typeof(myJsObject));

// console.log("\n json");

// console.log(myJsonOject);
// console.log(typeof(myJsonOject));





//=====================================================================

//decode en encode json on js
/*
    JSON.stringify() kat7awal js object l json object
 //
let myJsonObject = `{
    "username" : "osama",
    "age" : 36
}`;

let myJs = JSON.parse(myJsonObject);

document.getElementById('name').textContent = "name is " + myJs.username;
document.getElementById('age').textContent = "age is " + myJs.age;

*/

//=====================================================================