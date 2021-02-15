//creat checkbox
var checkBoxs = document.querySelector('.chekboxs');

for(var i = 1; i <= 10;i++){
    var checkboxP = document.createElement('div'),
    checkbox = document.createElement('input');

    checkbox.setAttribute('id','idof' + i);
    checkbox.setAttribute('type','checkbox');

    label = document.createElement('label');
    label.setAttribute('for', 'idof' + i);
    var text = document.createTextNode("Checkbox " + i);
    label.appendChild(text);

    checkboxP.appendChild(checkbox);
    checkboxP.appendChild(label);

    checkBoxs.appendChild(checkboxP);
}

//change website color theme with css
var switchColorUl = document.createElement('ul')
    ,randomColors = ['#b71540','#0c2461','#3c6382', '#069992', '#e58e26'];

switchColorUl.classList.add('switch-color');

for(var i = 0; i < randomColors.length;i++){
    var switchLi = document.createElement('li');

    switchLi.style.backgroundColor = randomColors[i];
    switchLi.setAttribute('data-color',randomColors[i]);
    switchColorUl.appendChild(switchLi);
}
document.body.appendChild(switchColorUl);
var switchColorCss = document.querySelectorAll('.switch-color li');
switchColorCss[0].classList.add('active');

switchColorCss.forEach(elm => elm.onclick = function(){
    document.documentElement.style.setProperty('--main-color',this.getAttribute('data-color'))
    handelActiveClass(elm);
})

function handelActiveClass(el){
    switchColorCss.forEach(e =>{e.classList.remove('active')});
    el.classList.add('active');
}