//Create Simple Canvas
var myCanvas = document.getElementById('myCan'),
    myContext = myCanvas.getContext('2d'); //hna b7al katgolih jib li law7a 3lach ghanarsam

myContext.fillStyle = '#080'; // fillstyle hiya 3amr style

// fillRect(x, y, width, height) || fillRect hiya rsam mostatil

myContext.fillRect(10, 10, 100, 50);

myContext.fillStyle = '#F00';
myContext.fillRect(15, 15, 100, 50);

myContext.strokeStyle = '#FF0';
myContext.strokeRect(100, 100, 100, 50); // kaydir lik mostatil walakin khawi mn lwest ghir border li kayn