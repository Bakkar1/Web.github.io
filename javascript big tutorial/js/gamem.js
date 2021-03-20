// Create The Game Markup

document.querySelector('.control-buttons span').onclick = function(){
    var name = window.prompt("enter your nam","ex: jan");
    if(name != "" && name != null && name != "ex: jan"){
        document.querySelector('.info-container .name span').textContent = name;
    }
    else{
        document.querySelector('.info-container .name span').textContent = "Unkown";
    }
    this.parentElement.remove();
}

let duration = 1000,
    blocksContainer = document.querySelector('.memory-game-blocks'),
    blocks = Array.from(blocksContainer.children),
    orderRange = [...Array(blocks.length).keys()]; //keys kayjib lik index

/*
    my way
    let myarray = Array.from(Array(blocks.length).keys());
    console.log(myarray);
    //my way
    blocks.forEach(blockItem =>{
        let order = Math.floor(Math.random() * myarray.length);
        console.log(order);
        blockItem.style.order = order;
        //remove the item with order index from de array
        myarray = myarray.filter(item => item !== myarray[order])
    });
        
    andere mnaier
    orderRange = Array.from(Array(blocks.length).keys())

*/

// shuffle function katbadal blays dyal array member random
function shuffle(array){
    //settingd vars
    let current = array.length,
        temp,
        randomIndex;
    while(current > 0){
        //get random number
        randomIndex = Math.floor(Math.random() * current);

        //decrease length by one
        current--;

        //save current elemetn in stash
        temp = array[current];
        //current element = random element
        array[current] = array[randomIndex];
        //random element = get element from stash
        array[randomIndex] = temp;
    }
    //return array;
}
shuffle(orderRange);

blocks.forEach((block,index) =>{ //index of block
    //add order css propertu to game block
    block.style.order = orderRange[index];
    
    //add click event
    block.addEventListener('click',function(){
        //trigger the flip block function
        flipBlock(block);
    });
});

function stopClicking(){
    
    blocksContainer.classList.add('no-Clicking');

    setTimeout(function(){
        //remove class no clicking after the duration
        blocksContainer.classList.remove('no-Clicking');
    }, duration);
}


//Create The Flip Block Function
function flipBlock(selectedBlock){
    //add class is fliped
    selectedBlock.classList.add('is-flipped');

    //collect aal flipped cards
    // fliter ghaydir filter wyraja3 lik ghir block li fihom class smito is-flipped
    let allFlippedBlocks = blocks.filter(flippedBlock => flippedBlock.classList.contains('is-flipped'));

    //if theres two selected blocks
    if(allFlippedBlocks.length === 2){
        //stop clicking funtion
        stopClicking();
        //check matched block function
        checkFun(allFlippedBlocks);
    }
}

//check matched block
function checkFun(filpedds){
    let triesElement = document.querySelector('.tries span');
    if(filpedds[0].dataset.technology ==
    filpedds[1].dataset.technology){
        filpedds.forEach(flip => {
            flip.classList.add('has-matched');
        })

        //document.getElementById('success').play();
    }
    else{
        triesElement.textContent = parseInt(triesElement.textContent)+ 1;
        //document.getElementById('fail').play();
    }
    setTimeout(function(){ 
        filpedds.forEach(flip => {
            flip.classList.remove('is-flipped');
        })
    }, duration);
    
}