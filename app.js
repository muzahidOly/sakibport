
const menu=document.querySelector('#mobile-menu');

const menuLink=document.querySelector('.navbar__menu');

const mobileMenu=()=>{

    menu.classList.toggle('is-active');
    menuLink.classList.toggle('active');

 
}

menu.addEventListener('click',mobileMenu);

function contactNumber()
{
    
    alert('Call me at 313-265-6601');
}
function myalert() {
    alert("No Value Set!");
    
}