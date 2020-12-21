// Numbers
//javascript fiha ghir number
// octal kaybda b zero || hexidecimel ...

/*
    tostring() : convert number to string
    toExponential() : ghayjib lik ra9m bl bl os math

        (800).toExponential();    =>  "8e+2"   =>   8 * (10²)   =>   800
    
    toFixed() b7al l math.round ghir lfar9 dakchi li katkteb hna ()
        (0) ghayrj3 lik matalan (99.55).toFixed(0) => 100 yla kant 99.45 =>99
        (1) 99.55.toFixed(1) => 99.6
        (99.6654).toFixed(2) => "99.67"

        (hna) hna katkteb ch7al mn ra9m bghit yab9a mn wara l coma , hwa ghayraja3 3la 7sab wach hadak ra9m fat nes
        wala la b7al math.round()

        parseInt("string") kayjbed lik number mn string bchart ykon number hwa lawal f string
*/
var number = 800,
    mystring = "80 years";


console.log(number.toExponential());
console.log(parseInt(mystring));


//Outro and Where to Continue
/*
    learn javascript HTML DOM : for designer
    java script Exemples &  tutorials : practice

    maraji3 : MDN ,  , https://javascript.info/ , advenced : https://jstherightway.org/
    
*/