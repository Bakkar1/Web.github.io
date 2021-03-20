// handel asaide Height
let aside = document.querySelector('aside'),
    upperBar = document.querySelector('.upper-bar').offsetHeight,
    navbar = document.querySelector('.navbar').offsetHeight;

aside.style.height = window.innerHeight - (upperBar + navbar) + "px";