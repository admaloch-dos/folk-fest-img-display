const testScreenSize = () => {
  let size = 250
  if (window.innerWidth > 2250) {
    size = 300
  } else {
    size = 250
  }
  return size
}

function makeQR(value) {
  var version = 10;
  qrcode.qrcode.stringToBytes = qrcode.qrcode.stringToBytesFuncs['UTF-8']
  var qr = qrcode.qrcode(version, 'H');
  qr.addData(value);
  try {
    qr.make();
  } catch (err) {
    console.log('Version is low:', version)
    console.log('Error:', err)
  }
  document.getElementById('qr').innerHTML = qr.createImgTag(3);
}

function makeQArt(value, imagePath) {
  var version = 10;
  const qrSize = testScreenSize()
  new QArt({
    value: value,
    imagePath: imagePath,
    filter: 'color',
    version: version,
    size: qrSize,
    fillType: 'scale_to_fit'
  }).make(document.getElementById('combine'));
}

// carouselspeed defined globally in script
const genQrSpeed = () => {
  let qrTime = 800
  if (slideOrFade === "fade") {
    qrTime = 200
  } else {
    qrTime = 800
  }
  return qrTime
}



const updateQr = (item) => {
  let qrTime = genQrSpeed()

  $("#combine").fadeOut(qrTime);
  const id = item.id;
  const qrValue = `https://www.floridamemory.com/items/show/${id}`
  const qrImagePath = item.children[1].src;
  const mobileInfoLink = document.querySelector('#mobile-info-link')
  mobileInfoLink.href = qrValue
  setTimeout(() => {
    makeQR(qrValue);
    makeQArt(qrValue, qrImagePath)

  }, qrTime);
  $("#combine").fadeIn(800);
}

// function runs on carousel slide change to update qr code to new image
$('#carouselExampleControls').on('slide.bs.carousel', function onSlide(ev) {
  const currItem = ev.relatedTarget

  updateQr(currItem)
  console.log('slide or fade', slideOrFade)
  console.log('carousel speed', carouselSpeed)

});

// set qr code on page load for initial image
const initialItem = document.querySelector('.active')

updateQr(initialItem)



// fast and fade = 200
