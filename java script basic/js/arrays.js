//Array Intro
/*first way 7san matkhdemch biha wkhdem b lway 2
    constractur way
*/
var friends = new Array();
friends[0] = "hassan";
friends[1] = "elzero";
friends[2] = "med";
friends[3] = "john";
//console.log(friends);
var class_member = new Array("micel", "mark", "emilie", "astried");
//console.log(class_member);

//second way
//literal way best way
var Friends = [];
Friends[0] = "hassan";
Friends[1] = "elzero";
Friends[2] = "med";

var Class_Member = 
                [
                    "mijk",
                    "ali",
                    "ierek"
                ];
console.log(Class_Member[0]);
//Array Check
if ( Array.isArray(Class_Member))
{
    console.log("Class-Memeber is an Array")
}
else
{
    console.log("Class-Memeber is not an Array")
}
//or
if( Friends.constructor === Array)
{
    console.log("Friends is an Array")
}
else
{
    console.log("Friends is not an Array")
}

//Array [ Get - Set ] Length

console.log( " Friends array = " + Friends.length); // get length : 3raft toul l array
console.log(Friends);

Friends.length = 2 ; //set lenght to 2
console.log( " Friends array after change = " + Friends.length); 
console.log(Friends);

console.log("==========ToString==========");
//Array Methods - Convert To String

//var Customers = ["meikel", "hanan", "aya", "ayman", "mery"];
/*
console.log(Customers); //array
Customers = Customers.toString(); //convert
console.log(Customers);//string
var myDate = new Date(),
    myLocaledate = myDate.toLocaleString(); //y3tik locale b7al hna locale date
console.log(myDate); //international
console.log(myLocaledate); //local

console.log(Customers);
Customers = Customers.join("/ "); // join => convert to string || "hna kat7et ramz wala lkalma li bghit ykon bin smiyat" 
console.log(Customers);
*/
console.log("=========add items==========");
//Array Methods - Add Items

var Customers = ["meikel", "hanan", "aya", "ayman", "mery"];
console.log(Customers.toString());
/*
//Customers[5] = "mark"; // haka Zedt index fra9m 5

// first way by using lenght
Customers[Customers.length()] = "ali";
/*
    cusomers index hwa => 4 Yla dert  Customers.length() ghay3tik 5 ya3ni dima kayna blasa khawya
    hadakchi 3lach yla bghit tzid chi wa7d zido bl  Customers.length() 7it hwa ghayzido f akhir blasa
    blama matb9a t7seb ch7al mn index kayn fl array

console.log(Customers.join(" / "));
*/
/*
// second way by using puch  : ya3ni zid lel array
Customers.push("nada");
console.log(Customers.toLocaleString());
// third way by using unschift  : ya3ni zid lel array walakin Y7et hadak customer hwa lawl fl array
Customers.unshift("yousef");
console.log(Customers.toString());

console.log("using splice");
// four way by using splice kay3ni las9
// arrayName.splice(indxe li ghadi ybda mno, 3adad l3anasir li bghit t7ayadha mn l array, ietmes)

Customers.splice(2, 2, "astrid", "any");
console.log(Customers.toString());
*/

//================================================
//Array Remove Items
/*
console.log("=========remove items==========");
var employee = ["micel", "astried", "mark", "lucy", "eva", "shaham"];

console.log(employee.toString());
employee.pop(); // remove the last ietm in the array
console.log(employee.toString() + "  => using pop");
employee.shift(); //remove first ietm in the array
console.log(employee.toString() + "  => using shift");
//=
// Array Sort
console.log("========= sort ==========");
employee.push("zahra", "badr", "samir", "andy")
console.log(employee.join(" / "));

employee.sort(); //haka ghadi yratabhom mn A tot Z
console.log(employee.join(" / "));

employee.reverse(); // ghadi yratabhom bl 3aks n Z l A
console.log(employee.join(" / "));
*/

//========================================================
//Array Combine And Slice
console.log("---------Combine And Slice-------");
// slice kat3ni chari7a | hna ghadi nhzo tarf mn had l array
var basearray = ["meikel", "hanan", "aya", "ayman", "mery", "zahra", "badr", "samir", "andy"];
console.log(basearray.toString());
// array.slice(start number, end number) index ! wend number maghdich yhezo
var mySlicedArray = basearray.slice(2, 4);
// yla khdemt b slice(-x,-y) ghaybda mn lakhr dyal array walakin awal index -1
console.log("slicearray = " + mySlicedArray.toString());

//Combine wala concat ya3ni yajma3 jouj array f array wa7da
var tewedeArray = ["sana", "astrid", "manal"];
console.log("tewedeArray = " + tewedeArray.toString());

var concatarray = tewedeArray.concat(mySlicedArray);

console.log("concat array = " + concatarray.toString());

//========================================================
//Array Search

var Users = ["meikel", "hanan", "aya", "ayman", "mery", "zahra", "badr", "samir", "andy", "maya"];
// bl indexOf katjib index dyal user li smito aya (smit l index, index mnach ghadi ybda Y7seb)
//lastIndexOf b7al index of lfar9 hwa ghaybda y9alab mn lakhar dyal array walakin inex kayb9a hwa hwa n 0
var indexuser = Users.indexOf("andy", 6);
console.log(indexuser);
console.log(Users[indexuser]);

document.getElementById("all").innerHTML = "users : " + Users.join(" / ");
document.getElementById("special").innerHTML = "special user : " +  "<span style='color:#F00'>" + Users[indexuser] + "</span>";