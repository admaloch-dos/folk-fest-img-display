
const modalBtn = document.querySelector('#modal-btn')
modalBtn.addEventListener('click', () => {
    carousel.pause();
})

const modalClose = document.querySelector('#modal-close')
modalClose.addEventListener('click', () => {
    carousel.next();
    carousel.cycle();
})

const sliderSpeedInput = document.querySelectorAll('.slider-speed-input')
// // fast: 3000 medium 6000, slow 12000, extra slow 20000
// carousel speed is defined globally in script
sliderSpeedInput.forEach(btn => {
    btn.addEventListener('click', () => {

        if (btn.id === 'speed1') {
            carouselSpeed = 20000
        } else if (btn.id === 'speed2') {
            carouselSpeed = 12000
        } else if (btn.id === 'speed3') {
            carouselSpeed = 6000
        } else if (btn.id === 'speed4') {
            carouselSpeed = 3000
        } else {
            carouselSpeed = 6000
        }
        const options = carousel._config
        options.interval = carouselSpeed
    })
})

const sliderStyleInput = document.querySelectorAll('.slider-style-input')
// // fast: 3000 medium 6000, slow 12000, extra slow 20000
sliderStyleInput.forEach(btn => {
    btn.addEventListener('click', () => {
        myCarousel.classList.remove('carousel-fade')
        if (btn.id === 'style2') {
            myCarousel.classList.add('carousel-fade')
            slideOrFade = "fade"
        } else {
            myCarousel.classList.remove('carousel-fade')
            slideOrFade = "slider"
        }
    })
})