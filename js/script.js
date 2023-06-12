
var myCarousel = document.querySelector('#carouselExampleControls')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 20000,
    keyboard: true
})


$('.carousel-inner')
    .awesomeCursor('pause', {
        color: '#FFFFFF',
        size: 25
    });

    let carouselSpeed = 6000
    let slideOrFade = "slider"
    let timeout = null



