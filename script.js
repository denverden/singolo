window.onload = function() {
    const MENU = document.querySelector('.menu');
    const BUTTON_PORTFOLIO = document.querySelector('.portfolio-buttons');
    const BUTTON_PROJECT = document.querySelector('.portfolio-projects');
    const PHONE_BUTTON = document.querySelectorAll(".iphone-vertical__button");

    MENU.addEventListener('click', (event) => {
        if(event.target.className == 'menu__link') {
            MENU.querySelectorAll('.menu__link').forEach(element => element.classList.remove('menu__link--active'));
            event.target.classList.add('menu__link--active');
        }
    });

    BUTTON_PORTFOLIO.addEventListener('click', (event) => {
        if(event.target.className !== 'btn btn-portfolio btn-portfolio--active') { 
            BUTTON_PORTFOLIO.querySelectorAll('.btn-portfolio').forEach(element => element.classList.remove('btn-portfolio--active'));
            if(event.target.className !== 'portfolio-buttons') {
                event.target.classList.add('btn-portfolio--active');
                BUTTON_PROJECT.querySelectorAll('.btn-project').forEach(element => element.style.order = Math.floor(Math.random() * 11));    
            }
        }
    });

    BUTTON_PROJECT.addEventListener('click', (event) => {
        BUTTON_PROJECT.querySelectorAll('.btn-project').forEach(element => element.classList.remove('btn-project--active'));
        if(event.target.className !== 'portfolio-projects') event.target.classList.add('btn-project--active');
    });

    PHONE_BUTTON.forEach(element =>
        element.addEventListener('click', (event) => {
            event.target.parentElement.querySelector('.iphone-vertical__screen').classList.toggle("iphone-vertical__screen--no-active");
            event.target.parentElement.querySelector('.iphone-vertical__camera').classList.toggle("iphone-vertical__camera--no-active");
        }));

    document.querySelector(".iphone-horizontal__button").addEventListener("click", (event) => {
        event.target.parentElement.querySelector('.iphone-horizontal__screen').classList.toggle("iphone-horizontal__screen--no-active");
        event.target.parentElement.querySelector('.iphone-horizontal__camera').classList.toggle("iphone-horizontal__camera--no-active");
    });
}