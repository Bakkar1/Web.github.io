//Regular Expression - Intro
/*
    syntax : /pattern/attributes 
    pattern tama kat7at l7aja 3lach bghit t9alab wala tbadal ...
    kankhdmo bih f : search / replace / split / test / match

    attributes list;
    {
        [ i ] => case insensitive
        [ g ] => global search
        [ m ] => multiline search
    }
*/
/*
console.log("==============Regular Expression===============");
var myString = "i lIke java script",
    result = myString.replace(/I/ig, "@"); // b g hna ghay9alab wybadal f string kolo

console.log(result);
*/

//========================
//Brackets hiya hadi []
/*
    brackets use : 
    [hna] hna n7t l charcter 3Lach bghit n9alab ...
    [..] character
    [^..] not chracter ay 7aja makdirch macth m3a hadak l chracter khdem 3liha 
    [a-h] range mn a l H fhad lmital
    [0-20] range 
    [^0-20] not range
    [A-g] == range[A-Z] and range [a-g] 
*/
/*
var mString = "elze web school",
    Result = mString.replace(/[a-h]/ig, "@");
    Result = mString.replace(/[^h]/ig, "@");
    Result = mString.replace(/[^a-h]/g, "@");
console.log(Result);
console.log("");
var mijnString = "ABCD efgh 0123456789",
    xresult = mijnString.replace(/[a-f0-5]/g, "A");
console.log(xresult);
*/

//=============================================
//Quantifiers
/*
    letter+: => ay kalma fiha letter wa7da mn hadak letter khdem 3lih 
    letter{number} => word containe number of letter
    letter{numbre, Number} word containe number or Number
    letter{numbre,} => word containe at least number 3ala la9al hadak number 
*/
var regString = "i love elzeero weeeb school",
    //regResult = regString.replace(/e+/gi, "@");//ay kalma fiha minimum e badl hadak e b @
    regResult = regString.replace(/e{2}/gi, "@")
console.log(regResult);