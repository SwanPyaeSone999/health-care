const navToggle = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('.nav__menu');
const navclose = document.querySelector('.close');
const togglebar  = document.querySelector('.fa-bars');
togglebar.addEventListener('click', ()=>{
    togglebar.classList.toggle('fa-times');
    navMenu.classList.toggle('show-menu');
    
})


// navclose.addEventListener('click', ()=>{
//     navMenu.classList.remove('show-menu');
// })
