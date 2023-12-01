




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

if (hasTouchScreen) {
  console.log('this is a touch screen')
} else {
  console.log('this is a desktop')
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
  console.log('qrgenisactive is', qrGenIsActive)
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
      updatedQr = 175
    } if (window.innerWidth > 997 && window.innerWidth < 1500) {
      updatedQr = 250
    } if (window.innerWidth > 1500 && window.innerWidth < 2000) {
      updatedQr = 275
    } if (window.innerWidth > 2000) {
      updatedQr = 300
    }
  }
  return updatedQr
}
// initial qr on page load
let qrsize = testScreenSize()
console.log('qrsize is', qrsize)
window.onresize = function () {

  setTimeout(function () {
    doesQrShow()
    let prevSize = qrsize
    qrsize = testScreenSize()
    console.log('prevsize is', prevSize)

    // window.location.reload(); //this function will play after 5000 milliseconds
    if (qrsize !== prevSize) {
      console.log('screen change occured that isnt prev size... should change')
      prevSize = qrsize
      carousel.next();
    }
  }, 1300);
}

