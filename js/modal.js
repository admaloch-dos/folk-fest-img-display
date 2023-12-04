$(document).ready(function () {
    if ($(window).width() > 349) {
        setTimeout(() => {
            $("#settingsModal").modal("show");
        }, 500);
    }



});


var myModal = document.getElementById('settingsModal')
myModal.addEventListener('shown.bs.modal', function () {

    pauseSong();
})


const modalBtn = document.querySelector('#modal-btn')
modalBtn.addEventListener('click', () => {
    carousel.pause();
})

const modalClose = document.querySelector('#modal-close')
modalClose.addEventListener('click', () => {
    carousel.next();
    carousel.cycle();
})

// menu input for slider speed
let carouselSpeed = 6000
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
        console.log(carouselSpeed)
    })
})

// slider style change on input from fade to slider
const sliderStyleInput = document.querySelectorAll('.slider-style-input')
// // fast: 3000 medium 6000, slow 12000, extra slow 20000
sliderStyleInput.forEach(btn => {

    btn.addEventListener('click', () => {
        let myCarousel = document.querySelector('#carouselExampleControls')
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

// default is normal qr code with image adds image
const sliderQrInput = document.querySelectorAll('.slider-qr-input')
sliderQrInput.forEach(btn => {
    btn.addEventListener('click', () => {


        if (btn.id === 'qr1') {
            document.querySelector('#qr-code').classList.remove('d-none')
            document.querySelector('#img-qr').classList.add('d-none')
            qrHasImage = false

        } else {
            document.querySelector('#qr-code').classList.add('d-none')
            document.querySelector('#img-qr').classList.remove('d-none')
            qrHasImage = true

        }
    })
})


$("#qr-checkbox").on("change", function () {
    if ($(this).is(':checked')) {
        $("#qr-container").removeClass("hide-qr");
        $(".qr-settings label").removeClass("disabled");
        qrGenIsActive = true
    } else {
        $("#qr-container").addClass("hide-qr");
        $(".qr-settings label").addClass("disabled");
        qrGenIsActive = false
    }
});

$("#music-checkbox").on("change", function () {
    if ($(this).is(':checked')) {
        $("#toggle-music, #music-container").removeClass("hide-music");
    } else {
        $("#toggle-music, #music-container").addClass("hide-music");
        pauseSong()
    }
});