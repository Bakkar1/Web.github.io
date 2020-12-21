//Loop - For
/*
console.log("--------------loop----------------")

var friends= ["ahmed", "osam", "salwa"]
for(var i = 0; i < friends.length; i++)
{
    console.log(friends[i].toString());
}
*/

//===================================================================
//Loop - For In
/*
console.log("--------------forInloop----------------")

var myCar = 
{
    colour : "white",
    type: "sedan",
    price: "50.000",
    model: "2015",
    merk: "BMW"
}; //hada object
*/

//console.log(myCar.colour);
/*
    For In syntax
    for (variable in object)
    {
        statement
    }
*/
/*
for (var i in myCar) {
    if( myCar.hasOwnProperty(i))
    {
        console.log(i + " : " + myCar[i]);
    }
}
*/

//=======================================================================
//For Advanced
/*
function generatTears(start, end)
{
    document.write("<select>");
    for (var year = start; year <= end; year++)
    {
        document.write("<option value='" + year + "'>" + year + "</option>");
    }
    document.write("</select>");
}
generatTears(1900, 2010);
generatTears(2020, 2030); //haka t9der dir select khora bla matbadal ta 7Aja
*/

//=======================================================================
//Loop - While , Do While
/*
var eerst = 0;
while(eerst <= 10)
{
    console.log(eerst);
    eerst++;
}

function generatYears(start, end)
{
    document.write("<select>");
    var year = start;
    while(year <= end)
    {
        document.write("<option value='" + year + "'>" + year + "</option>");
        year++;
    }
    document.write("</select>");
}
generatYears(1900, 2010);
*/
/*
var eerst = 0;
do{
    console.log(eerst);
    eerst++;
} while(eerst <= 10)
*/

//======================================================================================
//Loop - Control break, continue, lable
/*
Mainloop: //hada lable
for (var i = 1; i <= 10; i++)
{
    if( i === 4)
    {
        continue; // yla t7a9a9 chart ghadi y7ayd 4 mn loop wykamal 3adi
    }
    console.log(i);
}
*/