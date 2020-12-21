

var mijnImages = document.querySelectorAll('.our-works .image img');

mijnImages.forEach(img => {
    img.onclick = function(){
        var containerImg = document.createElement('div');
        containerImg.classList.add('container-img');
        var mySpan = document.createElement('span');
        mySpan.textContent = "remove";
        containerImg.appendChild(mySpan);
        var myImg = document.createElement('img');
        myImg.src = this.getAttribute('src');
        containerImg.appendChild(myImg);
        document.body.appendChild(containerImg);
        //
        var mySpanr = document.querySelector('.container-img span');
        mySpanr.addEventListener('click',function(){
            document.body.removeChild(containerImg);
        });
    }
})
