console.log('Welcome');
console.log('Developed by Sarkor');



const burgerOpen = document.querySelector('.nav__open');
const burgerClose = document.querySelector('.nav__exit-btn');
const burgerMenu = document.querySelector('.header__right');
const body = document.querySelector('body');
const filter = document.querySelector('.filter');

burgerOpen.addEventListener('click', () => {
    burgerMenu.classList.add('active')
    body.classList.add('active')
    filter.classList.add('active')
})

burgerClose.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})

filter.addEventListener('click', () => {
    burgerMenu.classList.remove('active')
    body.classList.remove('active')
    filter.classList.remove('active')
})


const navList = document.querySelectorAll('.nav__list-phone');

for (let i = 0; i < navList.length; i++) {
    const el = navList[i];
    el.addEventListener('click', () => {
        burgerMenu.classList.remove('active')
        body.classList.remove('active')
        filter.classList.remove('active')
    })
}

const langBtn = document.querySelector('.header__lang-title');
const langList = document.querySelector('.header__lang-list');

langBtn.addEventListener('click', () => {
    langList.classList.toggle('active');
})


const langFooterBtn = document.querySelector('.footer__lang-title');
const langFooterList = document.querySelector('.footer__lang-list');

langFooterBtn.addEventListener('click', () => {
    langFooterList.classList.toggle('active');
})


var options = {
    rootMargin: '120px',
    threshold: [0, .25, .50, .75, 1]
}

var optionsTwo = {
    rootMargin: '10px',
    threshold: [0, .25, .50, .75, 1]
}

var callback = function (entries, observer) {
    entries.forEach((el, index) => {
        if (el.isIntersecting && el.intersectionRatio > .53) {
            setTimeout(() => {
                el.target.classList.add('reveal-after');
            }, index * 100);
        } else {
            el.target.classList.remove('reveal-after');
        }
    })
};

var callbackTwo = function (entries, observer) {
    entries.forEach((el, index) => {
        if (el.isIntersecting && el.intersectionRatio > .5) {
            setTimeout(() => {
                el.target.classList.add('reveal-after');
            }, index * 100);
        } else {
            el.target.classList.remove('reveal-after');
        }
    })
};

var observer = new IntersectionObserver(callback, options);
var observerSecond = new IntersectionObserver(callbackTwo, options);

document.querySelectorAll('.card').forEach(el => {
    observer.observe(el);
})

document.querySelectorAll('.reveal-left').forEach(el => {
    observerSecond.observe(el);
})

document.querySelectorAll('.reveal-right').forEach(el => {
    observerSecond.observe(el);
})



var swiperCategory = new Swiper(".mySwiper3", {
    slidesPerView: 2,
    mousewheel: true,
    loop: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    breakpoints: {
        769: {
            slidesPerView: 4,
        },
        481: {
            slidesPerView: 3,
        }
    },
});