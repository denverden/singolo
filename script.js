window.onload = function() {
    const MENU = document.querySelector('.menu');
    const BUTTON_PORTFOLIO = document.querySelector('.portfolio-buttons');
    const BUTTON_PROJECT = document.querySelector('.portfolio-projects');
    const PHONE_BUTTON = document.querySelectorAll(".iphone-vertical__button");
    const BTN_MENU = document.querySelector('.btn-menu');

    onScroll();

    BTN_MENU.addEventListener('click', (event) => {
        document.querySelector('.btn-menu').classList.toggle('btn-menu--open');
        document.querySelector('.menu').classList.toggle('menu--open');
        document.querySelector('.logo').classList.toggle('logo--open');
    });

    MENU.addEventListener('click', (event) => {
        if(event.target.className == 'menu__link') {
            MENU.querySelectorAll('.menu__link').forEach(element => element.classList.remove('menu__link--active'));
            event.target.classList.add('menu__link--active');
            document.querySelector('.btn-menu').classList.remove('btn-menu--open');
            document.querySelector('.menu').classList.remove('menu--open');
            document.querySelector('.logo').classList.remove('logo--open');
        }
    });

    BUTTON_PORTFOLIO.addEventListener('click', (event) => {
        if(event.target.className !== 'btn btn-portfolio btn-portfolio--active') { 
            BUTTON_PORTFOLIO.querySelectorAll('.btn-portfolio').forEach(element => element.classList.remove('btn-portfolio--active'));
            if(event.target.className !== 'portfolio-buttons') {
                event.target.classList.add('btn-portfolio--active');
                pictureArray = [...BUTTON_PROJECT.querySelectorAll('.btn-project')].sort(() => Math.random() - 0.5);
                pictureArray.forEach(element => BUTTON_PROJECT.append(element));
            }
        }
    });

    BUTTON_PROJECT.addEventListener('click', (event) => {
        BUTTON_PROJECT.querySelectorAll('.btn-project').forEach(element => element.classList.remove('btn-project--active'));
        if(event.target.className !== 'portfolio-projects') event.target.classList.add('btn-project--active');
    });

    PHONE_BUTTON.forEach(element =>
        element.addEventListener('click', (event) => {
            event.target.parentElement.querySelector('.iphone-vertical__screen').classList.toggle('iphone-vertical__screen--no-active');
            event.target.parentElement.querySelector('.iphone-vertical__camera').classList.toggle('iphone-vertical__camera--no-active');
        }));

    document.querySelector('.iphone-horizontal__button').addEventListener('click', (event) => {
        event.target.parentElement.querySelector('.iphone-horizontal__screen').classList.toggle('iphone-horizontal__screen--no-active');
        event.target.parentElement.querySelector('.iphone-horizontal__camera').classList.toggle('iphone-horizontal__camera--no-active');
    });

    document.querySelector('.feedback-form').addEventListener('submit', (event) => {
        event.preventDefault();
        if(document.querySelector('.feedback-form').checkValidity()) {
            document.querySelector('.substrate').classList.add('substrate--show');
            let subject = document.querySelector('.feedback-form').subject.value ? '<b>Subject:</b> ' + document.querySelector('.feedback-form').subject.value : 'Without subject';
            let description = document.querySelector('.feedback-form').descr.value ? '<br><b>Description:</b> ' + document.querySelector('.feedback-form').descr.value : '<br>Without description';
            document.querySelector('.modal__descrip').innerHTML = subject + description;
            document.querySelector('.modal').classList.add('modal--show');
        }
    });

    document.querySelector('.modal__button').addEventListener('click', (event) => {
        document.querySelector('.substrate').classList.remove('substrate--show');
        document.querySelector('.feedback-form').reset();
        event.target.parentElement.classList.remove('modal--show');
    });

    let counter = 1;
    document.querySelector('.slider__overflow').append(document.querySelector('.slider__slide:first-child').cloneNode(true));
    document.querySelector('.slider__overflow').prepend(document.querySelector('.slider__slide:nth-last-child(2)').cloneNode(true));
    const SLIDE_ITEMS = document.querySelectorAll('.slider__slide');

    document.querySelector('.slider__button_left').addEventListener('click', (event) => {
        if (counter >= 1) counter--;
        SLIDE_ITEMS.forEach(element => {
            element.style.transition = 'transform 0.5s';
            element.style.transform = `translateX(${-1*counter*100}%)`;
        });
    });

    document.querySelector('.slider__button_right').addEventListener('click', (event) => {
        if (counter < SLIDE_ITEMS.length - 1) counter++;
        SLIDE_ITEMS.forEach(element => {
            element.style.transition = 'transform 0.5s';
            element.style.transform = `translateX(${-1*counter*100}%)`;
        });
    });

    SLIDE_ITEMS.forEach(element =>
        element.addEventListener('transitionend', () => {
        if(counter == SLIDE_ITEMS.length - 1) counter = 1;
        if(counter == 0) counter = SLIDE_ITEMS.length - 2;
        SLIDE_ITEMS.forEach(element => element.style.transition = 'none');
        SLIDE_ITEMS.forEach(element => element.style.transform = `translateX(${-1*counter*100}%)`);
    }));

    document.addEventListener('scroll', onScroll);

    function onScroll(event) {
        const cursorPos = window.scrollY;
        const ANCHOR = document.querySelectorAll('.anchor');
        const scrollHeight = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );

        ANCHOR.forEach((el) => {
            if(el.offsetTop <= cursorPos + 95) {
                MENU.querySelectorAll('.menu__link').forEach((a) => {
                    a.classList.remove('menu__link--active');
                    if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
                        a.classList.add('menu__link--active');
                    }
                });
            } 
        });
        if((scrollHeight === (cursorPos + window.innerHeight + 95))) {
            MENU.querySelectorAll('.menu__link').forEach((element, idx, arr) => {
                if(idx !== arr.length - 1) element.classList.remove('menu__link--active');
                    else element.classList.add('menu__link--active');
            });
        }
    }
}