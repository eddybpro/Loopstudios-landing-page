const menuBtn = document.querySelector('.menu'),
closeBtn =  document.querySelector('.close'),
navLinksBox =  document.querySelector('.nav-links'),
navLinks = document.querySelectorAll('.nav-link');

function showHideNav(){
    menuBtn.classList.toggle('none');
    navLinksBox.classList.toggle('none');
    closeBtn.classList.toggle('none');
}


menuBtn.addEventListener('click', showHideNav)
closeBtn.addEventListener('click', showHideNav)
navLinks.forEach(link =>{
    link.addEventListener('click', showHideNav);
})