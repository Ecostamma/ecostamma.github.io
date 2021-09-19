var navbar = document.querySelector('#navbar');
window.onscroll = () => {
    console.log(window.scrollY);
    if (window.scrollY > 1) navbar.classList.add('nav-scrolled');
    else navbar.classList.remove('nav-scrolled');
};