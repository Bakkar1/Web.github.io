console.log("==========date===========");
//Date Intro

//ctrl + h => rename all object with the same name 
/*
    new date(); //print current date and time
    new date(millseconds); //print Millseconds from UTc 1 Jan 1970 00:00:00
            dakchi li ktebt bl millseconds ghayzido 3la l 00:00:00 wghayzid ch7al mn sa3a nta zayd wala na9s 3la GMT
    new date(dateString); /:string date add
    new date(year, month, day, hours, minutes, seconds, millseconds) // kandakhal data type integar
*/
/*
var thedate = new Date(),
    thedate = new Date(1000),
    thedate = new Date("septempber 18, 1995 06:00:00"),//dateString
    thedate = new Date(2017,4,10,08,30,50);
console.log(thedate);
*/

//==================================
//Date Format
/*
    full format     Date("septempber 18, 1995 06:00:00")
    long format     Date("septempber, 18, 1995, 06:00:00")
    short format    Date("12/25/2019 10:20:00"); month before day
    iso format      date("YYY-MM-DD hh-mm-ss TZD"); standar | TZD : +03:00 kat3tih ch7al mn sa3a bghit tzid 3la hadak lwa9t 
    
    js ignore comas
    js month insenistive
*/
/*
var date = new Date("12/25/2019 10:20:00");
console.log(date);
*/


//==================================
//Date Functions Part 1
/*
    getDate(); day of the month 1-31
    getDay(); day of the week 0-6
    getFullYear(); year of the date
    getHours(); 0-59
    getMinutes(); 0-59
    getSeconds(); 0-59
    getTime(); ghayjib lik lwa9t li daz mn 1970 l drok wala l date li khtarito bl milliseconds
    getTimezoneOffset(); ghayjib lik lfar9 bin local date w universial date bl minut
*/
var date = new Date("September 18 1995 08:00:00"), //811404000000
    dtest = date.getTime(),

    newDate = new Date(),
    Rsult = newDate.getTime() - dtest;
    milSInYear = 12 * 30 * 24 * 60 * 60 * 1000
    age = Math.round(Rsult / milSInYear),
console.log(age);

//==================================
//Date Functions Part 2
/*
    set hiya dir set lchi value

    fset yla fet range lfou9 yjib lik matalan f chehar ktebt 12 yjib lik chehar jay
    yla fet range lta7t yjib lik mataln fchehar chehar li 9bal whadchi kaytaba9 3la kolchi

    setDate(dat[req]); day of the month 1-31
    setFullYear(year[req], month[opt], day[opt]); mont[0-11]
    setMonth(mont[req], day[opt]); mont[0-11]
    setHours(hours[req], minut[opt], seconds[opt], millisec[opt]); hours[0-59]
    setMinutes(minut[req], seconds[opt], millisec[opt]); 0-59
    setSeconds(seconds[req], millisec[opt]); 0-59
    setMilliseconds(millisec[req]); 1000milis sec = 1 second || li ktebtha lwest() ghayzidha 3la date

    setUtcHour .. ymchi 3la taw9irT l3alami
*/
var myDate = new Date();

//myDate.setFullYear(2010, 10, 2);
//myDate.setHours(14,10,1);
myDate.setMilliseconds(600000);
myDate.setMonth(10, 1);
console.log(myDate);

//Date Functions Part 3
/*
    now(); ghayjib lik lwa9t li daz bl milliseconds mn 1970 l drok
    parse(stringDate) ; ghayjib lik lwa9t li daz bl milliseconds mn 1970 l date li 3tito lih
    toISOString()
    toDateString()
*/
var nowdate = Date.now(),
    myPDate = Date.parse("18 September 1995 10:00:00"),
    oneMili = 1000,
    mini = oneMili * 60,
    hour = mini * 60,
    day = hour * 24,
    month = day * 30,
    year = month * 12,
    dateOf = new Date();
console.log(Math.round(nowdate / month));
console.log(Math.round(myPDate / year));
console.log(dateOf.toTimeString());