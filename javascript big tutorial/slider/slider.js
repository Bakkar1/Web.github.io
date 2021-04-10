// slider
//get slider items

var sliderItems = Array.from(document.querySelectorAll('.slider-container img'));
//current stroage from local storage
var currentSlideStorage = window.localStorage.getItem('currentSlideStorage');
//get number of slides
var slidesCount = sliderItems.length;

// initial current index
var currentSlide;

//slide number  element
var slideNumberElement = document.querySelector('.slide-number');
//previous and next buttons
var nextButton = document.querySelector('.next'),
    prevButton = document.querySelector('.prev');

window.onload = function(){
    if(currentSlideStorage != null)
    {
        currentSlide = currentSlideStorage;
        cheker();
    }
    else{
        currentSlide = 1;
        dasibleButton(prevButton);
        sliderItems[currentSlide-1].classList.add('active');
        slideNumberElement.textContent = "Slide  # " + (currentSlide) + ' of ' + slidesCount;
        myelmetli[currentSlide -1].classList.add('active');
    }   
}

//handle click on previous and next buttons
//next slide function
nextButton.onclick = function(){
    currentSlide++;
    cheker();
}
//prev slide function
prevButton.onclick = function(){
    currentSlide--;
    cheker();
}

//create the main ul element
var paginationElement = document.createElement('ul');
//set id on ul
paginationElement.setAttribute('id','pagination-ul');

//Create list items based on array lenght
for(var i = 1; i <= slidesCount; i++){
    //create li
    var paginationItem = document.createElement('li');
    paginationItem.setAttribute('data-index',i);
    //set item content
    var textItem = document.createTextNode(i);
    paginationItem.appendChild(textItem);
    //append item to the parent
    paginationElement.appendChild(paginationItem);
}

//append ul to the page
var indecators = document.querySelector('.indecators');
indecators.appendChild(paginationElement);

//list items
var myelmetli = document.querySelectorAll('.indecators ul li');

myelmetli.forEach(element => 
    element.onclick = function(){
        currentSlide = parseInt(this.getAttribute('data-index'));
        cheker();
    }
);

//create the chker funtion
function cheker(){
    if(currentSlide <= sliderItems.length && currentSlide >0){
        removeAllActive();
        addActiveToCurrentElement();
        
        slideNumberElement.textContent = "Slide  # " + (currentSlide) + ' of ' + slidesCount;
        window.localStorage.setItem('currentSlideStorage',currentSlide);

        if(currentSlide == sliderItems.length){
            dasibleButton(nextButton);
        }
        else{
            enableButton(nextButton);
        }

        if(currentSlide == 1){
            dasibleButton(prevButton);
        }
        else{
            enableButton(prevButton);
        }
    }
}
function removeAllActive(){
    for(var i = 0; i < slidesCount; i++){
        sliderItems[i].classList.remove('active');
        myelmetli[i].classList.remove('active');
    }
}
function addActiveToCurrentElement(){
    sliderItems[currentSlide - 1].classList.add('active');
    myelmetli[currentSlide -1].classList.add('active');
}
function dasibleButton(button){
    button.style.backgroundColor = 'gray';
    button.style.pointerEvents = 'none';
}
function enableButton(button){
    button.style.backgroundColor = '#009688';
    button.style.pointerEvents = 'all';
}