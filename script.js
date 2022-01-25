const svgStar = document.querySelectorAll('.promoted__slider__item__aside');

svgStar.forEach(element => {
    element.addEventListener('click', (e) => {
        element.classList.add('animate');
        setTimeout(() => {
            element.classList.remove('animate');
        }, 700);
    })
});