//letters

const letters = 'abcdefghijklmnopqrstuvwxyz';

//get array from letters

let lettersArray = Array.from(letters);

//select letttes container

let lettersContainer = document.querySelector('.letters');

//generate letters
lettersArray.forEach(letter =>{
    //create span
    let span = document.createElement('span');
    //create letter text node
    let letterText = document.createTextNode(letter);
    //append the lettertext to span
    span.appendChild(letterText);

    span.className = 'letter-box';

    //append span to letters containers
    lettersContainer.appendChild(span);
    
})
