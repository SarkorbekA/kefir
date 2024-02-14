console.log('Welcome');
console.log('Developed by Sarkor');



// const burgerOpen = document.querySelector('.nav__open');
// const burgerClose = document.querySelector('.nav__exit-btn');
// const burgerMenu = document.querySelector('.header-content');
// const body = document.querySelector('body');
// const filter = document.querySelector('.filter');

// burgerOpen.addEventListener('click', () =>{
//     burgerMenu.classList.add('active')
//     body.classList.add('active')
//     filter.classList.add('active')
// })

// burgerClose.addEventListener('click', () =>{
//     burgerMenu.classList.remove('active')
//     body.classList.remove('active')
//     filter.classList.remove('active')
// })

// filter.addEventListener('click', () =>{
//     burgerMenu.classList.remove('active')
//     body.classList.remove('active')
//     filter.classList.remove('active')
// })


const langBtn = document.querySelector('.header__lang-title');
const langList = document.querySelector('.header__lang-list');

langBtn.addEventListener('click', () => {
    langList.classList.toggle('active');
})