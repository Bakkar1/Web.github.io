const fetchPosition = (position) => {
    const latitude = position.coords.latitude,
        longitude = position.coords.longitude;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=33624e6315c04a2f8e479a7c78b86339`)
    .then(response => response.json())
    .then(getResult);
}
function getResult(response){
    //console.log(response);
    console.log(response.results[0].components);
    console.log(response.results[0].components.country)
    console.log(response.results[0].components.postcode)
    console.log(response.results[0].components.town)
}

function locationNotReceived(positionError){
    if(!navigator.onLine)
    {
        console.log("not conected")
    }
    else{
        console.log(positionError);
    }
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(fetchPosition,locationNotReceived,{timeout:5});
}


// ====================================================================
//les
//Window Navigator Properties


//    navigator : katjib bij informatie dyal lborowser


// console.log("appCodeName   " + navigator.appCodeName);
// console.log("appName  " + navigator.appName);
// console.log("appVersion  " + navigator.appVersion);
// console.log("platform   " + navigator.platform);
// console.log("cookieEnabled  " + navigator.cookieEnabled);
//console.log("language  " + navigator.language);
// console.log("onLine  " + navigator.onLine);
// console.log("product  " + navigator.product);
// console.log("geolocation " + navigator.geolocation );

/*
if(navigator.geolocation){
    function onPositionReceived(position){
        console.log(position);
    }
    function locationNotReceived(positionError){
        console.log(positionError);
    }
    //lborwsr ghadi ytlab acces l position

    //navigator.geolocation.getCurrentPosition(onPositionReceived,locationNotReceived,{timeout:1});
    
    
    let watchID = navigator.geolocation.watchPosition(onPositionReceived,locationNotReceived);
    //lfar9 bin current wl watch hwa bl watch t9der ta3raf l user ch7al mn mara badal position dyalo wt9dr tjib kola position b unique id
    console.log("id of watch : " + watchID);
    
    
    window.setTimeout(function(){
        //clear watch
        navigator.geolocation.clearWatch(watchID);
        console.log("watch gelerd");
    },1000);
}


    navigator.geolocation.getCurrentPosition(fun1,fun2,{timeout:sec});
    fun1: ghadi traja3 lik l position yla l9atha 
    fun2: ghadi dir handle l error yla mal9ach l position
    {timeout:sec} ch7al mn second ytsana 3ad y3ti error bli l position matl9atch


*/