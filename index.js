const scrollToTop = document.getElementById('scrollUp');

function scrolling() {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
};

scrollToTop.addEventListener('click', scrolling);

const menu = document.querySelector('#navButton');
const ul = document.querySelector('nav ul');
const nav = document.querySelector('nav');

function menuScroll() {
    ul.classList.toggle('show');
}

menu.addEventListener('click', menuScroll);

const navLink = document.querySelectorAll('.navigate')
navLink.forEach((link) => 
    link.addEventListener('click', () => {
        ul.classList.remove('show');
    })
);