window.onload = function() {
    const MENU = document.querySelector('.menu');
    const BUTTON_PROJECT = document.querySelector('.portfolio-projects');

    MENU.addEventListener('click', (event) => {
        if(event.target.className == 'menu__link') {
            MENU.querySelectorAll('.menu__link').forEach(element => element.classList.remove('menu__link--active'));
            event.target.classList.add('menu__link--active');
        }
    });

    BUTTON_PROJECT.addEventListener('click', (event) => {
        BUTTON_PROJECT.querySelectorAll('.btn-project').forEach(element => element.classList.remove('btn-project--active'));
        if(event.target.className !== 'portfolio-projects') event.target.classList.add('btn-project--active');
    });

    document.querySelector(".iphone-horizontal").addEventListener("click", displayPhoneHorizontal);
    document.querySelector(".iphone-vertical").addEventListener("click", displayPhoneVertical);

    function displayPhoneHorizontal() {
        document.querySelector(".iphone-horizontal__screen").classList.toggle("iphone-horizontal__screen--no-active");
    }
    
    function displayPhoneVertical() {
        document.querySelector(".iphone-vertical__screen").classList.toggle("iphone-vertical__screen--no-active");
    }
}