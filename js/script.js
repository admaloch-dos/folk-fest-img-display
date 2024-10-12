
let filteredImgArr = currImgArr.filter(img => img)
// console.log(filteredImgArr)

// carousel controls
let myCarousel = document.querySelector('#carouselExampleControls')
let carousel = new bootstrap.Carousel(myCarousel, {
  interval: 6000,
  keyboard: true
})

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}

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

// determine if desktop or not
var hasTouchScreen = false;

if ("maxTouchPoints" in navigator) {
  hasTouchScreen = navigator.maxTouchPoints > 0;
} else if ("msMaxTouchPoints" in navigator) {
  hasTouchScreen = navigator.msMaxTouchPoints > 0;
} else {
  var mQ = window.matchMedia && matchMedia("(pointer:coarse)");
  if (mQ && mQ.media === "(pointer:coarse)") {
    hasTouchScreen = !!mQ.matches;
  } else if ('orientation' in window) {
    hasTouchScreen = true; // deprecated, but good fallback
  } else {
    // Only as a last resort, fall back to user agent sniffing
    var UA = navigator.userAgent;
    hasTouchScreen = (
      /\b(BlackBerry|webOS|iPhone|IEMobile)\b/i.test(UA) ||
      /\b(Android|Windows Phone|iPad|iPod)\b/i.test(UA)
    );
  }
}



let portrait = window.matchMedia("(orientation: portrait)");

// determine if qr functions should run
//qr code doesn't run on smaller screen sizes
let qrGenIsActive = true;
const doesQrShow = () => {
  if (window.innerWidth < 768) {
    qrGenIsActive = false
  } else {
    qrGenIsActive = true
  }
}
doesQrShow()



const testScreenSize = () => {
  let updatedQr = 200
  if (hasTouchScreen) {
    portrait.addEventListener("change", function (e) {
      if (e.matches) {
        // portrait
        updatedQr = 200
      } else {
        // landscape
        updatedQr = 150
      }
      $('.qr-settings').hide();
      qrHasImage = false
    })
  } else {

    $('.qr-settings').show();
    if (window.innerWidth > 768 && window.innerWidth < 997) {
      updatedQr = 150
    } if (window.innerWidth > 997 && window.innerWidth < 1500) {
      updatedQr = 190
    } if (window.innerWidth > 1500 && window.innerWidth < 2000) {
      updatedQr = 205
    } if (window.innerWidth > 2000) {
      updatedQr = 230
    }
  }
  return updatedQr
}
// initial qr on page load
let qrsize = testScreenSize()

setTimeout(() => {
  const imgQrTrigger = document.querySelector('#qr2')

imgQrTrigger.click()
}, 500);
