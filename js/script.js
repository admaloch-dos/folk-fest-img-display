let myCarousel = document.querySelector('#carouselExampleControls')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 20000,
  keyboard: true
})

$('.carousel-inner')
  .awesomeCursor('pause', {
    color: '#FFFFFF',
    size: 25
  });

let slideOrFade = "slider"
let qrHasImage = false
let timeout = null
// default time for speed of qr change
let qrTime = 800

//   change time of qr change based on slider or fade
const genQrSpeed = () => {
  let currQrChangeSpeed = qrTime
  if (slideOrFade === "fade") {
    qrTime = 200
  } else {
    qrTime = 800
  }
  return currQrChangeSpeed
}

const testScreenSize = () => {
  let qrsize = 200
  if (window.innerWidth > 786 && window.innerWidth < 997) {
    qrsize = 200
  }if (window.innerWidth > 997 && window.innerWidth < 1500) {
    qrsize = 250
  }

  if (window.innerWidth > 1500 && window.innerWidth < 2000) {
    qrsize = 275
  } if (window.innerWidth > 2000) {
    qrsize = 300
  }
  return qrsize
}

let qrsize = testScreenSize()


window.onresize = function () {

  setTimeout(function () {
    let prevSize = qrsize
    qrsize = testScreenSize()
    // window.location.reload(); //this function will play after 5000 milliseconds
    if (qrsize !== prevSize) {
      prevSize = qrsize
      carousel.next();
    }

  }, 1000);

}

