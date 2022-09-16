const btnNext = document.querySelector('.btn-next');
const btnPrev = document.querySelector('.btn-prev');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot')

let index = 0;

// Функция выбора активного слайда
function activeSlides(n) {
    for(slide of slides) {
        slide.classList.remove('active')
    };
    slides[n].classList.add('active');
};

// Функция выбора активной точки
function activeDot(n) {
    for(dot of dots) {
        dot.classList.remove('active')
    };
    dots[n].classList.add('active');
};

// Проверка на последний слайд, при клике вперед
function nextSlides() {
    if (index === slides.length - 1) {
        index = 0;
        activeSlides(index)
        activeDot(index)
    } else {
        index++
        activeSlides(index)
        activeDot(index)
    }
};

// Проверка на первый слайд, при клике назад
function prevSlides() {
    if (index === 0) {
        index = slides.length - 1;
        activeSlides(index)
        activeDot(index)
    } else {
        index--
        activeSlides(index)
        activeDot(index)
    }
};

dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
        index = indexDot
    })
})

// Обработчики событий клика, по кнопкам
btnNext.addEventListener('click', nextSlides);
btnPrev.addEventListener('click', prevSlides);