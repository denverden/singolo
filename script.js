window.onload = function() {
    const MENU = document.querySelector('.menu');    

    MENU.addEventListener('click', (event) => {
        MENU.querySelectorAll('.menu__link').forEach(element => element.classList.remove('menu__link--active'));
        event.target.classList.add('menu__link--active');
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